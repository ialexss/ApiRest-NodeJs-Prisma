import productsService from "../services/products.service.js"

const getAllProducts = async (req, res) => {
    const products = await productsService.getAllProducts()

    res.status(200).json(products)
}

const getOneProduct =  async (req, res) => {

    const productFound = await productsService.getOneProduct(req.params.id)

    if(!productFound)
        return res.status(404).json({error: "Product not found"})

    return  res.status(200).json(productFound)

}

const createNewProduct =  async (req, res)=>{
    const newProduct = await productsService.createNewProduct(req.body)

    res.status(200).json(newProduct)
}

const deleteProduct =  async (req, res) => {
    const productDeleted = await productsService.deleteProduct(req.params.id)

    if(!productDeleted)
        return res.status(404).json({error: "Product not found"})

    return res.status(200).json(productDeleted)
}

const updateProduct =  async (req,res) =>{
    const productUpdate = await productsService.updateProduct(req.params.id,req.body)

    return res.status(200).json(productUpdate)
}

export default{
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
};