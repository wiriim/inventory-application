const db = require('../db/queries');

async function getHomePage(req, res){
    const categories = await db.getAllCategories();
    res.render('homePage', { categories });
}

async function createCategory(req, res){
    await db.createCategory(req.body.category);
    res.redirect('/');
}

async function deleteCategory(req, res){
    await db.deleteCategory(req.params.id);
    res.redirect('/');
}

async function editCategory(req, res){
    await db.editCategory(req.body.type, req.body.id);
    res.redirect('/');
}

module.exports = { getHomePage, createCategory, deleteCategory, editCategory };