var unitController = {
    install(app, dbo, mongodb, UTIL) {
        app.get('/unit', function (req, res) {
            UTIL.findObj(dbo, "unit", {}, function(data) {
                res.end(JSON.stringify(data));
            });
        });
        
        app.post('/unit', function (req, res, next) {
            var body = req.body;

            var name = body.name;
            var unit = body.unit;

            var obj = {
                time: Date.now(),
                name: name,
                unit: unit
            }
            UTIL.insertObj(dbo, "unit", [obj], function(data) {
                res.send(JSON.stringify(data));
            });
        });

        app.post('/unit-update', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var name = body.name;
            var unit = body.unit;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};
            var newObj = {
                    time: Date.now(),
                    name: name,
                    unit: unit
            }
            UTIL.updateObj(dbo, "unit", obj, newObj, function(data) {
                res.send(JSON.stringify(data));
            });
        });

        app.post('/unit-remove', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};
            UTIL.deleteObj(dbo, "unit", obj, function(data) {
                res.send(JSON.stringify(data));
            });
        });     
    }
}

module.exports = { unitController };