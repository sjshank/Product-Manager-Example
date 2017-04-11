
var express = require("express");
var router = express.Router();
var productController = require("../controllers/product.controller");

router.route('/save')
        .post(function(req, res){
            productController.saveProduct(req, res);
        });


router.route('/list')
        .get(function(req, res){
            productController.getProductList(req, res);
        });


router.route('/delete/:id')
        .delete(function(req, res){
            
            productController.deleteProduct(req, res);
        })


module.exports = router;