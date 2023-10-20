const { User } = require("../models");

const userController = {};
const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{4,}$/;
const bcrypt = require("bcrypt");



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

userController.updateUser = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.json({
        success: true,
        message: "El usuario no existe",
      });
    }

    const newFirstName = req.body.firstName;
    const newLastName = req.body.lastName;
    const newEmail = req.body.email;
    const newPassword = req.body.password;
    const updateData = {};

    if (newFirstName) {
      updateData.firstName = newFirstName;
    }

    if (newLastName) {
      updateData.lastName = newLastName;
    }

    if (newEmail) {
      if (!checkEmail.test(newEmail)) {
        return res.status(400).json({
          success: false,
          message: "El correo no es valido",
        });
      }
      updateData.email = newEmail;
    }
    if (newPassword) {
      if (!regex.test(req.body.password)) {
        return res.json({
          success: true,
          message:
            "La contraseña debe tener una mayuscula, una minuscula y un número. Su longitud nunca puede ser inferior a 4.",
        });
      }
      const newCryptPassword = bcrypt.hashSync(newPassword, 10);
      updateData.password = newCryptPassword;
    }

    const result = await User.update(
      updateData,

      {
        where: {
          id: userId,
        },
      }
    );

    return res.json({
      success: true,
      message: "Datos del usuario actualizados",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se ha podido actualizar los datos del usuario",
      error: error.message,
    });
  }
};

module.exports = userController;
