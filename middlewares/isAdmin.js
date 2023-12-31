const isAdmin = (req, res, next) => {
  try {
    if (req.roleId !== 2) {
      return res.status(501).json({
        success: true,
        message: "No tienes permisos para realizar esta acción",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      massage: "No se ha podido realizar la acción",
      error: error.message,
      data: req.roleId,
    });
  }
};

module.exports = isAdmin;
