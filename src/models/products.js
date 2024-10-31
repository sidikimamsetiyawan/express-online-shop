const dbPool = require('../config/database');

const getFilterDataProduct = (fromDate, toDate) => {
    const SQLQuery =    `SELECT *
                        FROM products
                        WHERE created_at >= '${fromDate}' AND created_at <= '${toDate}'`;
    console.log("SQLQuery : ", SQLQuery);
    return dbPool.execute(SQLQuery);
}

const getFilterDataProductByRating = (minRating) => {
    const SQLQuery =    `SELECT p.id, p.name, p.price, p.created_at, p.updated_at, 
                            IFNULL(AVG(r.rating), 0) AS average_rating
                        FROM products p
                        LEFT JOIN reviews r ON p.id = r.product_id
                        GROUP BY p.id
                        HAVING average_rating >= ${minRating}`;
    console.log("SQLQuery : ", SQLQuery);
    return dbPool.execute(SQLQuery);
}

const getFilterDataProductForCheckStock = (minStock) => {
    const SQLQuery =    `SELECT p.id, p.name, p.price, p.category_id, p.created_at, p.updated_at
                        FROM products p
                        JOIN (
                            SELECT category_id
                            FROM products
                            GROUP BY category_id
                            HAVING COUNT(*) > ${minStock}
                        ) pc ON p.category_id = pc.category_id;`;
    console.log("SQLQuery : ", SQLQuery);
    return dbPool.execute(SQLQuery);
}

const getProductSortedBySales = (sortOrder) => {
    const SQLQuery =    `SELECT p.id, p.name, p.price, p.category_id, p.created_at, p.updated_at, 
                            IFNULL(SUM(o.quantity), 0) AS total_quantity_sold
                        FROM products p
                        LEFT JOIN orders o ON p.id = o.product_id
                        GROUP BY p.id
                        ORDER BY total_quantity_sold ${sortOrder};`;
    console.log("SQLQuery : ", SQLQuery);
    return dbPool.execute(SQLQuery);
}


module.exports = {
    getFilterDataProduct,
    getFilterDataProductByRating,
    getFilterDataProductForCheckStock,
    getProductSortedBySales,
}