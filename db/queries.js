const pool = require('./pool');

async function getCategoryById(id){
    const {rows} = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
    return rows;
}

async function getAllCategories(){
    const { rows } = await pool.query('SELECT * FROM categories');
    return rows;
}

async function createCategory(type){
    await pool.query('INSERT INTO categories(type) VALUES($1)', [type]);
}

async function deleteCategory(id){
    await pool.query('DELETE FROM categories WHERE id = $1', [id]);
}

async function editCategory(type, id){
    await pool.query('UPDATE categories SET type = $1 WHERE id = $2', [type, id]);
}

async function getItemById(id){
    const {rows} = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    return rows;
}

async function getAllItems(categoryId){
    const { rows } = await pool.query('SELECT * FROM items WHERE category = $1', [categoryId]);
    return rows;
}

async function createItem(name, category){
    await pool.query('INSERT INTO items(name, category) VALUES($1, $2)', [name, category]);
}

async function deleteItem(id){
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
}

async function editItem(name, id){
    await pool.query('UPDATE items SET name = $1 WHERE id = $2', [name, id]);
}

module.exports = { 
    getCategoryById, getAllCategories, createCategory, deleteCategory, editCategory,
    getItemById, getAllItems, createItem, deleteItem, editItem
 }