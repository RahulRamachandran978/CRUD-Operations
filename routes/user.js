const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth")
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}));

const userController = require('../controller/userController')


router.get('/signup',auth.isLogout,userController.loadRegister)
router.post('/signup',userController.insertUser);

router.get('/',auth.isLogout,userController.loginLoad)
router.get('/login',auth.isLogout,userController.loginLoad)
router.post('/login',userController.verifyLogin)

router.get('/password',(req,res,next)=>{
    res.render('user/password',{titile:"Forgot-Password"})
});

router.get('/home',auth.isLogin,userController.loadHome);
router.get('/logout',auth.isLogin,userController.userLogout)

module.exports = router;