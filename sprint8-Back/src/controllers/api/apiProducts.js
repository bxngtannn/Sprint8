const sequelize = require("sequelize");
const Op = sequelize.Op;
const db = require("../../database/models");
const Producto = db.Producto;

module.exports = {
  productList: (req, res) => {
    Producto.findAll()
    .then((productos) => {
      return res.status(200).json({
        total:productos.length,
        data:productos,
        status:"OK"
      })
    });
  },

  detail: (req, res) => {
    Producto.findByPk(req.params.id)
          .then((producto) => {
            return res.status(200).json({
              data:producto,
              status:"OK"
            });
          })
          .catch((e) => {
            console.log("ocurrio un error",e)
          });
  },

  filtrar: (req, res) => {
    Producto.findAll({
      where: { subCategoria_id: req.params.id },
      include: ["subcategoria"],
    })
      .then((productos) => {
        console.log(productos)
        return res.status(200).json({
          total:productos.length,
          data:productos,
          status:"OK"
        });
      })
      .catch((e) => {
        console.log("ocurrio un error",e)
      });
  },

  filtroTitulo: (req, res) => {
    Producto.findAll({
      where: {
        titulo: { [Op.like]: "%" + req.body.search + "%" },
      },
    })
      .then((productos) => {
        return res.status(200).json({
          data:productos,
          status:"OK"
        });
      })
      .catch((e) => {
        res.send(e);
      });
  },
};

