import express from 'express'
import {login ,register} from '../Controllers/Controllers.js'
import {Checkuser} from '../Middlewares/CheckUser.js'
export const router=express.Router()

router.post('/',Checkuser)
router.post("/register",register);
router.post("/login",login);

