const db = require('../db/queries');

async function getItemsPage(req, res){
    const categoryId = req.params.categoryId
    const items = await db.getAllItems(categoryId);
    const categories = await db.getCategoryById(categoryId);
    res.render('itemsPage', { items, category: categories[0].type, categoryId});
}

async function createItem(req, res){
    await db.createItem(req.body.name, req.body.category);
    res.redirect('/items/'+req.body.category);
}

async function deleteItem(req, res){
    const items = await db.getItemById(req.params.id);
    const categories = await db.getCategoryById(items[0].category);
    await db.deleteItem(req.params.id);
    res.redirect('/items/' + categories[0].id);
}

async function editItem(req, res){
    const items = await db.getItemById(req.body.id);
    const categories = await db.getCategoryById(items[0].category);
    await db.editItem(req.body.name, req.body.id);
    res.redirect('/items/' + categories[0].id);
}

module.exports = { getItemsPage, createItem, deleteItem, editItem };