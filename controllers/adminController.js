const { User, Role } = require("../models");

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

adminController.activateUser = async (req, res) => {
  try {
    const userId = req.body.id;
    const userCheck = await User.findByPk(userId);

    if (!userCheck) {
      return res.json({
        success: true,
        message: "El usuario no existe",
      });
    }

    if (userCheck.userStatus == true) {
      return res.json({
        success: true,
        message: "El usuario ya esta activo",
      });
    }

    const activateUser = await User.update(
      { userStatus: true },
      {
        where: {
          id: userId,
        },
      }
    );
    return res.json({
      success: true,
      message: "El usuario ha sido activado",
      data: activateUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El usuario no ha podido ser activado",
      error: error.message,
    });
  }
};

adminController.inactivateUser = async (req, res) => {
  try {
    const userId = req.body.id;
    const userCheck = await User.findByPk(userId);

    if (!userCheck) {
      return res.json({
        success: true,
        message: "El usuario no existe",
      });
    }

    if (userCheck.userStatus == false) {
      return res.json({
        success: true,
        message: "El usuario ya esta inactivo",
      });
    }

    const inactivateUser = await User.update(
      { userStatus: false },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.json({
      success: true,
      message: "El usuario ha sido desactivado",
      data: inactivateUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El usuario no ha podido ser desactivado",
      error: error.message,
    });
  }
};

module.exports = adminController;
