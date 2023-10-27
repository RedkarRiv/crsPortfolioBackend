const { ContactData } = require("../models");

const requestLimitPerHour = 10;
const requests = {};

const messageController = {};

messageController.newContact = async (req, res) => {
  try {
    const contactName = req.body.name;
    const contactEmail = req.body.email;
    const contactMessage = req.body.message;
    const clientIP = req.clientIp;
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!requests[clientIP]) {
      requests[clientIP] = [];
    }

    const currentTime = new Date();

    const filteredRequests = requests[clientIP].filter((time) => {
      return currentTime - time <= 3600000;
    });

    console.log("Esto es el client IP:", clientIP);
    console.log("Esto son las solicitudes previas:", requests[clientIP]);
    console.log("Esto son las solicitudes filtradas:", filteredRequests);

    if (filteredRequests.length >= requestLimitPerHour) {
      return res.status(429).json({
        success: false,
        message: "Demasiadas solicitudes en la última hora.",
      });
    }

    requests[clientIP] = [...filteredRequests, currentTime];

    if (!checkEmail.test(req.body.email)) {
      return res.status(400).json({
        success: false,
        message: "El correo no es valido",
      });
    }

    if (!req.body.message) {
      return res.status(400).json({
        success: false,
        message: "No puedes enviar un mensaje en blanco",
      });
    }

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
