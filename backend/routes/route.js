var express=require('express');
var router=express.Router();

var category=require('../controller/categoryController');

router.get('/categories',category.getCategories);
router.post('/addCategory',category.addCategory);

module.exports=router;