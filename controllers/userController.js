const { User } = require("../models");


const userController = {};

userController.getMyUser = async (req, res) => {
  try {
    const userId = req.userId;
    const oneUser = await User.findOne({
      where: {
        id: userId,
      },
      attributes: { exclude: ["password", "roleId"] },
    });
    return res.json({
      success: true,
      message: "Perfil importado correctamente",
      data: oneUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al importar el perfil",
      error: error.message,
    });
  }
};

module.exports = userController;
