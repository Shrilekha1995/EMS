var category = require('../model/category');

exports.getCategories = (req, res, next) => {

    category.find(function (err, category) {
        if (err)
            throw err;

        res.json(category);
    })
}


exports.addCategory=(req,res,next)=>{
    let newCategory=new category({
        categoryId:req.body.categoryId,
        categoryName:req.body.categoryName,
        created_At:new Date,
        updated_At:new Date

    });

    newCategory.save((err,item)=>{
        if(err)
        res.json(err);
        res.send("category added successfully");
    })
}