const mongoose = require('mongoose');
const debug = require('debug')("app:database");

const dbhost = process.env.DBHOST || 'localhost';
const dbport = process.env.DBPORT || '27017';
const dbname = process.env.DBNAME || 'inforaneo';

const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;


const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:zIdE3WLEaKuvfvZG@cluster0.boftz2p.mongodb.net/inforaneo?retryWrites=true&w=majority");
        console.log("Connected to database starting");
    } catch (error) {
        console.error(error);
        console.log("Can't connect to database")
        process.exit(1);
    }
}

const disconnect = async () => {
    try {
        await mongoose.disconnect();
        debug('Disconnected successfully from database!');
    } catch (error) {
        process.exit(1);
    }
}

module.exports = { connect, disconnect }
