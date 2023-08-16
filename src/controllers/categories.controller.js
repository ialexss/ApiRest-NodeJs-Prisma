import categoriesService from "../services/categories.service.js"

const getAllCategories = async (req, res)=>{
    const categories = await categoriesService.getAllCategories()

    res.status(200).json(categories)
}

const getOneCategory =  async (req, res) => {

    const categoriesFound = await categoriesService.getOneCategory(req.params.id)

    if(!categoriesFound)
        return res.status(404).json({error: "category not found"})

    return  res.status(200).json(categoriesFound)

}

const createNewCategory =  async (req, res)=>{
    const newCategory = await categoriesService.createNewCategory(req.body)

    res.status(200).json(newCategory)
}

const deleteCategory=  async (req, res) => {
    const categoryDeleted = await categoriesService.deleteCategory(req.params.id)

    if(!categoryDeleted)
        return res.status(404).json({error: "category not found"})

    return res.status(200).json(categoryDeleted)
}

const updateCategory =  async (req,res) =>{
    const categoryUpdate = await categoriesService.updateCategory(req.params.id,req.body)

    return res.status(200).json(categoryUpdate)
}

export default{
    getAllCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
};