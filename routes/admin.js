const express = require("express");
const router = express.Router();

const auth = require("../middleware/adminauth")
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}))

const adminController = require("../controller/adminController")

// -------- Get home page -------//

router.get('/',auth.isLogout,adminController.loadLogin);
router.post('/login',adminController.verifyLogin);
router.get('/home',auth.isLogin,adminController.loadDashboard,adminController.adminDashboard);
router.get('/users',auth.isLogin,adminController.adminDashboard);

// router.get('/products',auth.isLogin,adminController.adminProducts);
router.get('/logout',auth.isLogin,adminController.logOut);
router.get('/new-user',auth.isLogin,adminController.newUserLoad)
router.get('/blockUser',adminController.blockUser);
router.get('/unblockUser',adminController.unblockUser);
router.post("/new-user",adminController.addUser);
router.get('/edit-user',auth.isLogin,adminController.editUserLoad);
router.post('/edit-user',adminController.updateUser);
router.get('/delete-user',auth.isLogin,adminController.deleteUser)

router.get("*",function(req,res){
    res.redirect("/admin")
})
module.exports = router;