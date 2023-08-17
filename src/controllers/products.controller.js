import productsService from "../services/products.service.js"

const getAllProducts = async (req, res) => {
    try {

        const products = await productsService.getAllProducts();
        res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the products." });
    }
}

const getOneProduct =  async (req, res) => {

    try {

        const productFound = await productsService.getOneProduct(req.params.id);

        if (!productFound)
          return res.status(404).json({ error: "Product not found" });

        return res.status(200).json(productFound);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the product." });
    }

}

const createNewProduct =  async (req, res)=>{

    const { body } = req;

    if (
        !body.name ||
        !body.price || typeof body.price !== 'number' ||
        !body.categoryId ||
        !body.stock || typeof body.stock !== 'number'
    ) {
        const errorMessage = "Campos inválidos en la solicitud.";
        res.status(400).send(errorMessage); 
        return; 
    }

    const newProduct = {
        name: body.name,
        price: body.price,
        categoryId: body.categoryId,
        stock: body.stock
    }

    try {

        const createdProduct = await productsService.createNewProduct(newProduct);
        res.status(201).json(createdProduct);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the product." });
    }
}

const deleteProduct =  async (req, res) => {

    const { id } = req.params;

    if(!id)
        return

    try {
        const productDeleted = await productsService.deleteProduct(id);

        if (!productDeleted)
            return res.status(404).json({ error: "Product not found" });

        return res.status(204).json(productDeleted);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the product." });
    }
}

const updateProduct =  async (req,res) =>{

    const { body, params: { id } } = req;

    if(!id)
        return

    try {
        const productUpdate = await productsService.updateProduct(id, body);

        if (!productUpdate)
            return res.status(404).json({ error: "Product not found" });

        return res.status(200).json(productUpdate);

    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the product." });
    }
}

export default{
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
};