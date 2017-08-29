var Product = require('../models/product');
var mongoose = require('mongoose');


mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
    imagePath:'http://static.tvtropes.org/pmwiki/pub/images/gothic.jpg',
    title:'Gothic Video Game',
    description:'Awesome Game!!!',
    price:10
    }),
    new Product({
        imagePath:'http://stat.homeshop18.com/homeshop18/images/productImages/608/samsung-galaxy-j7-dual-sim-mobile-phone-medium_3ed5d6f3fb406a21a06f3b1a17e63516.jpg',
        title:'Samsung Galaxy J7 Dual SIM Mobile Phone',
        description:'Awesome Phone!!!',
        price:150
    }),
    new Product({
        imagePath:'http://sonyglobal.scene7.com/is/image/gwtprod/cbc9c29f296a33b9818d52a26738814b?fmt=pjpeg&wid=330&hei=330&bgcolor=F1F5F9&bgc=F1F5F9' ,
        title:'Sony headphones',
        description:'Awesome Head Phone!!!',
        price:30
    })
];

var done = 0;
for(var i = 0; i < products.length; ++i){
    products[i].save(function (err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}