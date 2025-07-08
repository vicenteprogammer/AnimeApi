import { Router } from "express";
import {base} from '../database/base.js'
const animerouter = Router();

animerouter.get('/naruto', (req, res)=>{
    res.json(base.filter((p) => p.anime === 'naruto'))
    console.log(req)
})

animerouter.get('/dbz', (req, res)=>{
    res.json(base.filter((p) => p.anime === 'dbz'))
    console.log(req)
})

animerouter.get('/naruto/:nome', (req, res)=>{
    const {nome} = req.params;
    res.json(base.filter((name)=> name.nome === nome))
})

animerouter.get('/dbz/:nome', (req, res)=>{
    const {nome} = req.params;
    res.json(base.filter((name)=> name.nome === nome))
})

export default animerouter;