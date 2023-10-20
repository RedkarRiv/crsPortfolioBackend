const { User, Role } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminController = {};

adminController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      attributes: { exclude: ["password"] },
      include: [
        {
          attributes: { exclude: ["id"] },
          model: Role,
        },
      ],
    });
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

module.exports = adminController;
