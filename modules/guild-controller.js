var guildController = {
    install(app, dbo, mongodb, UTIL) {
        app.get('/guild', function (req, res) {
            UTIL.findObj(dbo, "guild", {}, function(data) {
                res.end(JSON.stringify(data));
            });
        });

        app.post('/guild', function (req, res, next) {
            var body = req.body;

            var obj = {
                time: Date.now(),
                name: body.name,
                address: body.address,
                phone: body.phone,
                towns: body.towns,
                username: body.username,
                password: body.password
            }
            UTIL.insertObj(dbo, "guild", [obj], function(data) {
                res.send(JSON.stringify(data));
            });
        });

        app.post('/guild-update', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};

            var newObj = {
                time: Date.now(),
                name: body.name,
                address: body.address,
                phone: body.phone,
                towns: body.towns,
                username: body.username,
                password: body.password
            }
            UTIL.updateObj(dbo, "guild", obj, newObj, function(data) {
                res.send(JSON.stringify(data));
            });
        });

        app.post('/guild-remove', function (req, res, next) {
            var body = req.body;
            var _id  = body._id;
            var o_id = new mongodb.ObjectId(_id);
            var obj = {'_id': o_id};
            UTIL.deleteObj(dbo, "guild", obj, function(data) {
                res.send(JSON.stringify(data));
            });
        });   
    }
}

module.exports = { guildController };