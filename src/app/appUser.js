const express = require('express');
const userRoutes = require('../routes/userRoutes');

class AppUser {
    constructor(){
        this.server = express();
        this.middleware();
        this.userRoutes();
    }
    middleware(){
        this.server.use(express.json());
    }
    userRoutes(){
        this.server.use(userRoutes);
    }
}

module.exports = new AppUser().server;