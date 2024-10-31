const ProductsModel = require('../models/products')

const getFilterDataProducts = async (req, res) => {
    const {body} = req;
    console.log("body : ");
    console.log(body.filter);
    const fromDate = body.filter.from;
    const toDate = body.filter.to;
    const minRating = body.filter.min_rating; // "minRating": 4
    console.log("minRating : ", minRating);
    try {
        if (fromDate !== null && fromDate !== undefined && toDate !== null && toDate !== undefined) {
            const [data] = await ProductsModel.getFilterDataProduct(fromDate, toDate);
            return res.json({
                message: 'GET all data products.',
                data: data
            })
        } else if (minRating !== null && minRating !== undefined) {
            const [data] = await ProductsModel.getFilterDataProductByRating(minRating);
            return res.json({
                message: 'GET all data products.',
                data: data
            })
        } 
        // console.log(data);
    } catch (error) {
        // console.log(error);
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}

const getFilterDataProductsForCheckStocks = async (req, res) => {
    const {body} = req;
    console.log("body : ");
    console.log(body.filter);
    const minStock = body.filter.min_stock; // "minRating": 4
    
    try {
        const [data] = await ProductsModel.getFilterDataProductForCheckStock(minStock);
        return res.json({
            message: 'GET all data products for checking stocks.',
            data: data
        })
        // console.log(data);
    } catch (error) {
        // console.log(error);
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}

const getProductsSortedBySales = async (req, res) => {
    const {body} = req;
    console.log("body : ");
    console.log(body.filter);
    const sortOrder = body.filter.sort_order; // "minRating": 4
    
    try {
        const [data] = await ProductsModel.getProductSortedBySales(sortOrder);
        return res.json({
            message: 'GET all data products sort by sales.',
            data: data
        })
        // console.log(data);
    } catch (error) {
        // console.log(error);
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}


module.exports = {
    getFilterDataProducts,
    getFilterDataProductsForCheckStocks,
    getProductsSortedBySales,
}