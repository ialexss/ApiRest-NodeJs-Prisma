import categoriesService from "../services/categories.service.js"

const getAllCategories = async (req, res) => {
    try {

        const categories = await categoriesService.getAllCategories();
        res.status(200).json(categories);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching categories." });
    }
};

const getOneCategory = async (req, res) => {

    try {
        const categoriesFound = await categoriesService.getOneCategory(req.params.id);

        if (!categoriesFound)
            return res.status(404).json({ error: "Category not found." });

        return res.status(200).json(categoriesFound);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the category." });
    }

}

const createNewCategory = async (req, res) => {

    const { body } = req;

    if (!body.name) {
        const errorMessage = "Invalid fields in the request.";
        res.status(400).send(errorMessage);
        return;
    }
    const newCategory = {
        name: body.name,
    };

    try {

        const createdCategory = await categoriesService.createNewCategory(newCategory);
        res.status(201).json(createdCategory);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the category." });
    }
}

const deleteCategory = async (req, res) => {

    const { id } = req.params;

    if (!id) return;

    try {

        const categoryDeleted = await categoriesService.deleteCategory(id);

        if (!categoryDeleted)
            return res.status(404).json({ error: "Category not found." });

        return res.status(204).json(categoryDeleted);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the category." });
    }
}

const updateCategory = async (req, res) => {

    const { body, params: { id } } = req;

    if (!id) return;

    try {

        const categoryUpdate = await categoriesService.updateCategory(id, body);

        if (!categoryUpdate)
            return res.status(404).json({ error: "Category not found." });

        return res.status(200).json(categoryUpdate);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the category." });
    }
}

export default {
    getAllCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
};