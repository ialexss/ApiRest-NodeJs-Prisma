import { prisma } from "../db/db.js";

const getAllCategories = async ()=>{
    const categories = await prisma.category.findMany({
        include:{
            products:true
        }
    })
    return categories
}

const getOneCategory =  async (id) => {
    const categoryFound = await prisma.category.findFirst({
        where: { 
            id: parseInt(id)
        },
        include:{
            products:true
        }
    }) 

    return categoryFound
}

const createNewCategory =  async (data)=>{
    const newCategory = await prisma.category.create({
        data: data
    })
    
    return newCategory
}

const deleteCategory =  async (id) => {
    const categoryDeleted = await prisma.category.delete({
        where: { 
            id: parseInt(id)
        }
    }) 

    return categoryDeleted
}

const updateCategory =  async (id,data) =>{
    const categoryUpdate = await prisma.category.update({
        where:{
            id: parseInt(id)
        },
        data: data
    })

    return categoryUpdate
}

export default{
    getAllCategories,
    getOneCategory,
    createNewCategory,
    deleteCategory,
    updateCategory
};