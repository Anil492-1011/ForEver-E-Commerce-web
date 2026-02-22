import Order from "../Model/OrderSchemaModel.js";

const getAllOrders = async (req, res)=>{
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

const addOrder = async (req, res) => {
  try {
    const {
      cartData,
      total,
      deliveryInfo,
      paymentMethod
    } = req.body;

    // ✅ Validation
    if (
      !cartData ||
      cartData.length === 0 ||
      !total ||
      !deliveryInfo ||
      !paymentMethod
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const newOrder = await Order.create({
      items: cartData,
      amount: total,
      address: deliveryInfo,
      paymentMethod,
      payment: false, // default (COD / pending)
      status: "Pending",
      date: new Date()
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: newOrder
    });

  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating order"
    });
  }
};


export {addOrder , getAllOrders}