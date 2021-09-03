var userController = {
    install(app, dbo, mongodb, UTIL) {
        app.get('/user', function (req, res) {
            UTIL.findObj(dbo, "user", {}, function(data) {
                res.end(JSON.stringify(data));
            });
        });

        app.post('/user', function (req, res, next) {
            var body = req.body;

            var obj = {
                time: Date.now(),
                name: body.name,
                address: body.address,
                phone: body.phone,
                id_town: body.id_town,
                id_guild: body.id_guild,
                password: body.password
            }
            UTIL.insertObj(dbo, "user", [obj], function(data) {
                res.send(JSON.stringify(data));
            });
        });

        app.post('/user-update', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};

            var newObj = {
                time: Date.now(),
                name: body.name,
                address: body.address,
                phone: body.phone,
                id_town: body.id_town,
                id_guild: body.id_guild,
                password: body.password
            }
            UTIL.updateObj(dbo, "user", obj, newObj, function(data) {
                res.send(JSON.stringify(data));
            });
        });

        app.post('/user-remove', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};
            UTIL.deleteObj(dbo, "user", obj, function(data) {
                res.send(JSON.stringify(data));
            });
        });

        // CLIENT
        app.get('/user-guild', function (req, res) {
            UTIL.findObj(dbo, "user", {}, function(data) {
                res.end(JSON.stringify(data));
            });
        });   
    }
}

module.exports = { userController };