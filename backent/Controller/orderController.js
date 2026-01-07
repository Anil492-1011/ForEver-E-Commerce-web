import Order from "../Model/OrderSchemaModel.js";

// const Myorder= async (res, req)=>{

    
// }

const getAllOrders = async (res, req)=>{
   try {
    console.log("Fetching All order Products...");
    const getAll = await Order.find();

    return res.status(200).json({
      message: " Orders fetched successfully",
      success: true,
      data: getAll,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error when fetching orders",
      success: false,
    });
  }

}

const createProduct = async (req, res)=>{
   try{
       
   
    const {items, amount, address, status, payment , paymentMethod, date} = req.body;
     console.log(items, amount, address, status, payment , paymentMethod, date);

    if(!items || !amount || !address || !payment || !paymentMethod || !data){
        return res.status(400).json({
            success: false,
            message: 'required All fields'
        })
    }
    
    const NewOrder = await Order.create({
          items, amount, address, status, payment , paymentMethod, date
    })

   return res.status(200).json({
        success: true,
        message: "NewOder Created Successfully",
        data:NewOrder
    })
}catch(error){
    console.error("error when creating a New Order",error);
    return res.status(500).json({
        success: false,
        message: "issue when creating a New Order"
    })

}
}

export { createOrder, createProduct}