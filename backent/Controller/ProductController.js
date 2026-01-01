import cloudinary from "../Config/cloudinary.js";
import Product from "../Model/ProductModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      date,
      bestseller,
    } = req.body; 
    
    
    // ✅ validation
    if (!name || !description || !price || !category || !subCategory || !sizes) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const image1 = req.files.images && req.files.images[0];
    const image2 = req.files.images && req.files.images[1];
    const image3 = req.files.images && req.files.images[2];
    const image4 = req.files.images && req.files.images[3];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imageUrl = await Promise.all(
      images.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

   
    const newProduct = await Product.create({
      name,
      description,
      price,
      category,
      subCategory,
      sizes: sizes.replace(/"/g, '').split(',').map(s => s.trim()),
      image: imageUrl,
      date: date || Date.now(),
      bestseller: bestseller || false
    });

    res.status(200).json({
        success: true,
        message: "Product added successfully",
        product: newProduct
    });
  } catch (error) {
    console.error("Add product error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "error when a app a product",
    });
  }
};



const listProducts = async (req, res) => {
      const {limit}= req.query;
  try {
    console.log("Fetching Latest Products...");
    const products = await Product.find().limit(limit);

    return res.status(200).json({
      message: "Products fetched successfully",
      success: true,
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error when fetching products",
      success: false,
    });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Product deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error when deleting product",
      success: false,
    });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Product fetched successfully",
      success: true,
      product: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error when fetching single product",
      success: false,
    });
  }
};
const getAllProducts = async (req, res) => {
      
  try {
    console.log("Fetching All Products...");
    const products = await Product.find();

    return res.status(200).json({
      message: "Products fetched successfully",
      success: true,
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error when fetching products",
      success: false,
    });
  }
};


export { addProduct, listProducts, removeProduct, singleProduct , getAllProducts};
