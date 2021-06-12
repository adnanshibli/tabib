import express from 'express';
import * as userController from '../controllers/userContollers';
import validate from '../handellers/vallidation';
import {seveUser} from '../middlewares/vallidator';
import isLoggedIn from '../middlewares/auth';
import * as doctorController from '../controllers/doctorController'; 
const router = express.Router();

router.get('/', (req,res)=>{

    res.json({message:" اهلا بالعالم"});

})

// User routes
router.post('/account/signup',validate(seveUser),userController.register);
router.post('./account/signin',userController.login);
router.get('/account/me', isLoggedIn ,userController.me);
router.get('/account/profile', isLoggedIn,userController.getProfile);

// doctor router 

router.get('/doctors', doctorController.index);

export default router;