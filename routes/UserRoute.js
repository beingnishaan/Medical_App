const router=require('express').Router();
const UserController=require("../controllers/UserController");
const verifysiginin=require('../middlewares/verifysignin');
const UserAuth = require('../middlewares/userAuth')


// User login 
router.get('/login', UserController.login)
router.post('/signin', UserController.signin)

// Admin And User Register
router.get('/register', UserController.register)
router.post('/signup',[verifysiginin.checkDuplicateEntries], UserController.CreateRegister)
router.get("/confirmation/:email/:token", UserController.conformation);

// All User Pages
router.get('/', UserController.home);
router.get('/about', UserController.about);
router.get('/doctor',UserController.userAuth, UserController.doctor);
router.get('/blog', UserController.blog);
router.get('/blog-single', UserController.blog_details)
router.get('/department', UserController.department);
router.get('/appointment',UserController.userAuth, UserController.Appointment);
router.get('/contact', UserController.contact);
router.post('/createContact' , UserController.createContact)

//Category
router.get('/Dentist', UserController.Dentist)
router.get('/Cardiology', UserController.Cardiology)
router.get('/Gastrology', UserController.Gastrology)
router.get('/Arthrology', UserController.Arthrology)
router.get('/Neurology', UserController.Neurology)

// User Logout
router.get('/logout', UserController.logout)




module.exports=router;
