import { Router } from "express";
import {base} from '../database/base.js'
const animerouter = Router();

animerouter.get('/naruto', (req, res)=>{
    res.json(base.filter((p) => p.anime === 'Naruto'))
    console.log(req)
})

animerouter.get('/dbz', (req, res)=>{
    res.json(base.filter((p) => p.anime === 'Dragon Ball'))
    console.log(req)
})

export default animerouter;