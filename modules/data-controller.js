var dataController = {
    install(app, config) {
        app.get('/data/:name', function (req, res) {
            var name = req.params.name;
            const names = ["menu", "guild", "town", "user", "product", "unit"];
            if (names.includes(name)) {
                res.end(JSON.stringify(config.data[name]));
            }else {
                res.end(JSON.stringify({error: true}));
            }
        });     
    }
}

module.exports = { dataController };