import express from "express"

import productsRoutes from "./routes/products.js"
import cateogoriesRoutes from "./routes/categories.js"


const app = express()

app.use(express.json())

app.use("/api", productsRoutes);
app.use("/api", cateogoriesRoutes);

app.listen(3000)
console.log("server on port", 3000)