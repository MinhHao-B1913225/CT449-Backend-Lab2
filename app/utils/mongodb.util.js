const { Mongoclient } = require("mongodb");

class MongoDB {
    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoDB.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;

