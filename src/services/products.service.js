import { prisma } from "../db/db.js";

const getAllProducts = async () => {
    try {

        const products = await prisma.product.findMany({
            include:{
                category:true
            }
        })
        return products
        
    } catch (error) {
          throw error;
    }
}

const getOneProduct =  async (id) => {
    try {
        const productFound = await prisma.product.findFirst({
            where: { 
                id: parseInt(id)
            },
            include:{
                category:true
            }
        })  
        return productFound
        
    } catch (error) {
        throw error;
    }
}

const createNewProduct =  async (data)=>{
    try {

        const newProduct = await prisma.product.create({
            data: data,
        });
        return newProduct;

    } catch (error) {
        throw error;
    }
}

const deleteProduct =  async (id) => {
    try {

        const productDeleted = await prisma.product.delete({
            where: { 
                id: parseInt(id)
            }
        })  
        return productDeleted
        
    } catch (error) {
        throw error;
    }
}

const updateProduct =  async (id,data) =>{
  try {

    const productUpdate = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: data,
    });
    return productUpdate;

  } catch (error) {
    throw error;
  }
}

export default{
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
};