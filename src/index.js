import express from "express"

import productsRoutes from "./routes/products.routes.js"
import categoriesRoutes from "./routes/categories.routes.js"


const app = express()
const PORT = process.env.PORT || 3000 ; 


app.use(express.json())


app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);



app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})
