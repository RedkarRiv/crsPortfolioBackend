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
          model: Role,
          attributes: ["roleName"],
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

adminController.getOneUser = async (req, res) => {
  try {
    const userId = req.body.id;
    const oneUser = await User.findOne({
      where: {
        id: userId,
      },
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Role,
          attributes: ["roleName"],
        },
      ],
    });
    return res.json({
      success: true,
      message: "Usuario importado correctamente",
      data: oneUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al importar usuario",
      error: error.message,
    });
  }
};

module.exports = adminController;
