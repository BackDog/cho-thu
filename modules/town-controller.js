var townController = {
    install(app, dbo, mongodb, UTIL) {
        app.get('/town', function (req, res) {
            UTIL.findObj(dbo, "town", {}, function(data) {
                res.end(JSON.stringify(data));
            });
        });

        app.get('/town/:id', function (req, res) {
            var id_guild = req.params.id;
            var obj = {id_guild: id_guild};
            console.log(obj);
            UTIL.findObj(dbo, "town", obj, function(data) {
                res.end(JSON.stringify(data));
            });
        });

        app.post('/town', function (req, res, next) {
            var body = req.body;

            var obj = {
                time: Date.now(),
                id_guild: body.id_guild,
                name: body.name,
                number: body.number
            }
            UTIL.insertObj(dbo, "town", [obj], function(data) {
                res.send(JSON.stringify(data));
            });
        });

        app.post('/town-update', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};

            var newObj = {
                time: Date.now(),
                name: body.name,
                number: body.number
            }
            UTIL.updateObj(dbo, "town", obj, newObj, function(data) {
                res.send(JSON.stringify(data));
            });
        });

        app.post('/town-remove', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};
            UTIL.deleteObj(dbo, "town", obj, function(data) {
                res.send(JSON.stringify(data));
            });
        });   
    }
}

module.exports = { townController };