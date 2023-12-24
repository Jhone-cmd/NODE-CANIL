"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObeject = void 0;
const createMenuObeject = (activeMenu) => {
    let returnObejct = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') {
        returnObejct[activeMenu] = true;
    }
    ;
    return returnObejct;
};
exports.createMenuObeject = createMenuObeject;
