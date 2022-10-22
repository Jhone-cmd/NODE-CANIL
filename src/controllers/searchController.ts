import { Request, Response } from "express";

import { Pet } from '../models/pet';
import { createMenuObeject } from '../helpers/createMenuObject'

 export const search = (req: Request, res: Response) => {
    let queryString: string = req.query.search as string;
    
    let list = Pet.getFromName(queryString);

    if(!queryString){
        res.redirect('/')
        return    
    };
   
    res.render('pages/page', {
        menu: createMenuObeject(''),
        list,
        queryString
    });
}