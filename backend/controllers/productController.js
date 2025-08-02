import Product from "../models/Product.js";


// Add Product : /api/product/add
export const addProduct = async (req , res ) => {
    try {
         // Parse product data from JSON string
        const productData = JSON.parse(req.body.productData);

        // Add image filename from multer
        if (req.file) {
            productData.image = req.file.filename; // or use `productData.image = '/products/' + req.file.filename` if you want to serve it publicly
        }

        await Product.create(productData);

    res.json({ success: true, message: "Product Added" });

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: `${error.message} Hello` })
    }
}
// Get Product : /api/product/list
export const productList = async (req , res ) => {
        try {
            const products = await Product.find({})
            res.json({ success: true, products })
        } catch (error) {
            console.log(error.message)
            return res.json({ success: false, message: error.message })
        }
}
// Get Single Product : /api/product/id
export const productById = async (req , res ) => {
        try {
            const {id} = req.body;
            const product = await Product.findById(id)
            res.json({ success: true, product })
        } catch (error) {
            console.log(error.message)
        return res.json({ success: false, message: error.message })
        }
}
// Change Product inStock : /api/product/stock
export const changeStock = async (req , res ) => {
        try {
            const {id, inStock } = req.body;
            await Product.findByIdAndUpdate(id, {inStock})
            res.json({ success: true, message: "Stock Updated" })
        } catch (error) {
            console.log(error.message)
        return res.json({ success: false, message: error.message })
        }
}
