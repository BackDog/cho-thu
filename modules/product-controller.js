var productController = {
    install(app, dbo, mongodb, UTIL) {
        app.get('/product', function (req, res) {
            UTIL.findObj(dbo, "product", {}, function(data) {
                res.end(JSON.stringify(data));
            });
        })
        app.post('/product', function (req, res, next) {
            var body = req.body;

            var obj = {
                time: Date.now(),
                name: body.name,
                image: body.image,
                price: body.price,
                min_number: body.min_number,
                max_number: body.max_number,
                unit: body.unit
            }
            UTIL.insertObj(dbo, "product", [obj], function(data) {
                res.send(JSON.stringify(data));
            });
        });
        app.post('/product-update', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};

            var newObj = {
                time: Date.now(),
                name: body.name,
                image: body.image,
                price: body.price,
                min_number: body.min_number,
                max_number: body.max_number,
                unit: body.unit
            }
            UTIL.updateObj(dbo, "product", obj, newObj, function(data) {
                res.send(JSON.stringify(data));
            });
        });
        app.post('/product-remove', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};
            UTIL.deleteObj(dbo, "product", obj, function(data) {
                res.send(JSON.stringify(data));
            });
        });   
    }
}

module.exports = { productController };