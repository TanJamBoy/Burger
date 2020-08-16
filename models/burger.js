const orm = require("../config/orm.js");

const burger = {
    getAll: function(cb) {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    create: function(burgerName, cb) {
        orm.insertOne(burgerName, (res) => {
            cb(res);
        });
    },
    devour: function(burgerId, cb) {
        orm.updateOne(burgerId, (res) => {
            cb(res);
        });
    },
};

module.exports = burger;