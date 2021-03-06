// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Multer ****************
const date = Date.now();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/uploads')
    },
    filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  }) 
  var upload = multer({ storage: storage })
  
// *************** ROUTES *****************	

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', upload.single('image') ,productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id',productsController.edit); 
router.put('/edit/:id', upload.single('image'), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
