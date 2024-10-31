const dbPool = require('../config/database');

const getAllCategory = () => {
    const SQLQuery = 'SELECT * FROM categories';

    return dbPool.execute(SQLQuery);
}

const createNewCategory = (body) => {
    const SQLQuery = `  INSERT INTO categories (name, created_at, updated_at) 
                        VALUES ('${body.name}', now(), now())`;

    return dbPool.execute(SQLQuery);
}

const updateCategory = (body, idCategory) => {
    const SQLQuery = `  UPDATE categories 
                        SET name = '${body.name}', updated_at = now()
                        WHERE id = ${idCategory}`;
    return dbPool.execute(SQLQuery);
}

const deleteCategory = (idCategory) => {
    const SQLQuery = `  DELETE FROM categories 
                        WHERE id = ${idCategory}`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllCategory,
    createNewCategory,
    updateCategory,
    deleteCategory,
}