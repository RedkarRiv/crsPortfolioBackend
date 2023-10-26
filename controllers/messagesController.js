const { ContactData } = require("../models");

const requestLimitPerHour = 2; // Número máximo de solicitudes por hora
const requests = {}; // Objeto para realizar un seguimiento de las solicitudes

const messageController = {};

messageController.newContact = async (req, res) => {
  try {
    const contactName = req.body.name;
    const contactEmail = req.body.email;
    const contactMessage = req.body.message;
    const clientIP = req.clientIp; // Obtiene la IP del cliente

    // Verifica si el cliente ha realizado solicitudes en la última hora
    if (!requests[clientIP]) {
      requests[clientIP] = [];
    }

    const currentTime = new Date();
    const filteredRequests = requests[clientIP].filter((time) => {
      return currentTime - time <= 3600000; // Elimina solicitudes anteriores a una hora
    });

    console.log("Esto es el client IP:", clientIP);
    console.log("Esto son las solicitudes previas:", requests[clientIP]);
    console.log("Esto son las solicitudes filtradas:", filteredRequests);

    // Verifica si el límite de solicitudes por hora se ha alcanzado
    if (filteredRequests.length >= requestLimitPerHour) {
      return res.status(429).json({
        success: false,
        message: "Demasiadas solicitudes en la última hora.",
      });
    }

    // Registra la nueva solicitud
    requests[clientIP] = [...filteredRequests, currentTime];


    const newMessage = await ContactData.create({
      name: contactName,
      email: contactEmail,
      message: contactMessage,
    });

    return res.json({
      success: true,
      message: "Mensaje enviado correctamente",
      data: newMessage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al enviar el mensaje",
      error: error.message,
    });
  }
};

module.exports = messageController;
