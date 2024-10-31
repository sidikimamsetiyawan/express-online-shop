const CategoriesModel = require('../models/categories')

const getAllCategories = async (req, res) => {
    // Pemangillan model bersifat asynchronous
    try {
        const [data] = await CategoriesModel.getAllCategory();
        
        return res.json({
            message: 'GET all data categories.',
            data: data
        })
    } catch (error) {
        
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}

const createNewCategories = async (req, res) => {
    const {body} = req;

    try {
        await CategoriesModel.createNewCategory(body);

        res.status(201).json({
            message: 'CREATE new data categories success.',
            data: body
        })
    } catch (error) {
        
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}

const updateCategories = async (req, res) => {
    const {body} = req;
    const {idCategory} = req.params;
    
    try {
        await CategoriesModel.updateCategory(body, idCategory);

        res.status(201).json({
            message: 'UPDATE data categories success.',
            data: {
                id: idCategory,
                ...body
            }
        })
    } catch (error) {
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}

const deleteCategories = async (req, res) => {
    const {idCategory} = req.params;
    
    try {
        await CategoriesModel.deleteCategory(idCategory);

        res.status(201).json({
            message: 'DELETE data categories success.',
            data: null
        })
    } catch (error) {
        
        res.status(500).send(
            {
                message: 'Something went wrong.',
                error: error
            });
    }
    
}

module.exports = {
    getAllCategories,
    createNewCategories,
    updateCategories,
    deleteCategories,
}