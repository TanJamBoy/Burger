const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
        connection.query("select * from burgers", (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(burgerName ,cb) {
        connection.query("insert into burgers(burger_name, devoured) value(?, false)", [burgerName], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(id, cb) {
        connection.query("update burgers set devoured = true where id = ?", [id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;