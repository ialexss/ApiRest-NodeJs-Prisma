import { prisma } from "../db/db.js";

const getAllProducts = async () => {
    const products = await prisma.product.findMany({
        include:{
            category:true
        }
    })

    return products
}

const getOneProduct =  async (id) => {
    const productFound = await prisma.product.findFirst({
        where: { 
            id: parseInt(id)
        },
        include:{
            category:true
        }
    }) 

    return productFound
}

const createNewProduct =  async (data)=>{
    const newProduct = await prisma.product.create({
        data: data
    })
    
    return newProduct
}

const deleteProduct =  async (id) => {
    const productDeleted = await prisma.product.delete({
        where: { 
            id: parseInt(id)
        }
    }) 

    return productDeleted
}

const updateProduct =  async (id,data) =>{
    const productUpdate = await prisma.product.update({
        where:{
            id: parseInt(id)
        },
        data: data
    })

    return productUpdate
}

export default{
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
};