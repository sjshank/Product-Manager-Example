var Product = require("../models/product");

exports.saveProduct = function (req, res) {

  var product = new Product(req.body);
  product.save(function (err, product) {
    if (err) {
      res.json({
        result: false,
        msg: "Error Occured"
      });
    } else {
      res.json({
        result: true,
        msg: "Product saved successfully"
      });
    }
  });
}


exports.getProductList = function (req, res) {

  Product.find({})
    .select('id pName pWeight pQuantity pColor')
    .exec()
    .then(function (list) {
      if (!list) {
        res.json({
          result: false,
          msg: "List is empty"
        });
      } else {
        res.json({
          result: true,
          list: list
        });
      }
    })
    .catch(function (e) {
      res.json({
        result: false,
        msg: "Error occurred !"
      });
    });
}


exports.deleteProduct = function (req, res) {

}
