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

module.exports = { 
    getCategoryById, getAllCategories, createCategory, deleteCategory,
    getAllItems, createItem, deleteItem
 }