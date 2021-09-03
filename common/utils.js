// HÀM XỬ LÝ
var UTIL = {
    checkCollectionExist(dbo, collName, callback) {
        dbo.listCollections({name: collName}).next(function(err, collinfo) {
            callback(collinfo);
        });
    },
    createCollection(dbo, collName, callback) {
        dbo.createCollection(collName, function(err, res) {
            if (err) throw err;
            log("Collection created!");
            callback(res);
        });
    },
    insertObj(dbo, collName, array, callback) {
        dbo.collection(collName).insertMany(array, function(err, res) {
            if (err) throw err;
            log(res.insertedCount + " document(s) inserted");
            callback({data : res.insertedCount});
        });
    },
    deleteObj(dbo, collName, obj, callback) {
        dbo.collection(collName).deleteOne(obj, function(err, res) {
            if (err) throw err;
            log(res);
            callback(res);
        });
    },
    updateObj(dbo, collName, obj, newObj, callback) {
        var newvalues = { $set: newObj };
        dbo.collection(collName).updateMany(obj, newvalues, function(err, res) {
            if (err) throw err;
            // log(res.result.nModified + " document(s) updated");
            callback(res);
        });
    },
    findObj(dbo, collName, obj, callback) {
        dbo.collection(collName).find(obj).toArray(function(err, result) {
            // after find .limit(5)
            if (err) throw err;
            callback(result);
        });
    },
    generateCodeActive() {
        var length = 32,
            charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            result = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            result += charset.charAt(Math.floor(Math.random() * n));
        }
        return result;
    }

}

function log(message) {
    console.log(message);
}

module.exports = { UTIL };