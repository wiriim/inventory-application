const db = require('../db/queries');

async function getItemsPage(req, res){
    const categoryId = req.params.categoryId
    const items = await db.getAllItems(categoryId);
    const category = await db.getCategoryById(categoryId);
    res.render('itemsPage', { items, category: category[0].type, categoryId});
}

async function createItem(req, res){
    await db.createItem(req.body.name, req.body.category);
    res.redirect('/items/'+req.body.category);
}

async function deleteItem(req, res){
    await db.deleteItem(req.params.id);
    res.redirect('/');
}

module.exports = { getItemsPage, createItem, deleteItem };