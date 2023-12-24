"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let queryString = req.query.search;
    let list = pet_1.Pet.getFromName(queryString);
    if (!queryString) {
        res.redirect('/');
        return;
    }
    ;
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObeject)(''),
        list,
        queryString
    });
};
exports.search = search;
