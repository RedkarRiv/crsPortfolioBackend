const { ContactData } = require("../models");

const contactController = {};

contactController.newContact = async (req, res) => {
  try {
   
    return res.json({
      success: true,
      message: "Usuarios importados correctamente",
      data: allUsers,
    });
  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Error al importar usuarios",
      error: error.message,
    });
  }
};

module.exports = contactController;
