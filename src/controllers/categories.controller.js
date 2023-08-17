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

    const { body } = req;

    if (!body.name) 
    {
        const errorMessage = "Campos inválidos en la solicitud.";
        res.status(400).send(errorMessage); 
        return; 
    }

    const newCategory = {
        name: body.name
    }

    const createdCategory = await categoriesService.createNewCategory(newCategory)

    res.status(201).json(createdCategory)
}

const deleteCategory=  async (req, res) => {

    const { id } = req.params;

    if(!id)
        return

    const categoryDeleted = await categoriesService.deleteCategory(id)

    if(!categoryDeleted)
        return res.status(404).json({error: "category not found"})

    return res.status(204).json(categoryDeleted)
}

const updateCategory =  async (req,res) =>{

    const { body, params: { id } } = req;

    if(!id)
        return

    const categoryUpdate = await categoriesService.updateCategory(id,body)

    if(!categoryUpdate)
        return res.status(404).json({error: "category not found"})

    return res.status(200).json(categoryUpdate)
}

export default{
    getAllCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
};