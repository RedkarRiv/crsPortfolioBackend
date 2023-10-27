const { User, Role, Order, Product, OrderStatus } = require("../models");

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

adminController.updateUser = async (req, res) => {
  try {
    const userId = req.body.id;
    const newFirstName = req.body.firstName;
    const newLastName = req.body.lastName;
    const newEmail = req.body.email;
    const newPassword = req.body.password;
    const updateData = {};

    const user = await User.findByPk(userId);
    if (!user) {
      return res.json({
        success: true,
        message: "El usuario no existe",
      });
    }

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

adminController.getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.findAll({
      include: [
        {
          model: User,
          attributes: ["firstName", "email"],
        },
        {
          model: Product,
          attributes: ["productName", "productPrice"],
        },
        {
          model: OrderStatus,
          attributes: ["orderStatusName"],
        },
      ],
    });

//FORMAT ORDER DATA
    const groupedOrders = {};

    allOrders.forEach((order) => {
      if (!groupedOrders[order.orderId]) {
        groupedOrders[order.orderId] = {
          Order: order.orderId,
          Buyer: order.User, 
          Status: order.OrderStatus.orderStatusName,
          Products: [],
          Created: order.createdAt,
          Updated: order.updatedAt,
        };
      }
// PRODUCTS ARRAY PUSH FOR NEW
      groupedOrders[order.orderId].Products.push({
        productId: order.Product.id,
        productName: order.Product.productName,
        productPrice: order.Product.productPrice,
        productQuantity: order.Product.productQuantity,
      });
    });

    const allOrdersFiltered = Object.values(groupedOrders);

    return res.json({
      success: true,
      message: "Pedidos importados correctamente",
      data: allOrdersFiltered,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al importar pedidos",
      error: error.message,
    });
  }
};

module.exports = adminController;
