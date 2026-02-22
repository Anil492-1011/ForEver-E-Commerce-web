import ContactMessage from "../Model/ContactMessageModel.js";

const isValidEmail = (email = "") => /\S+@\S+\.\S+/.test(email);

const createContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    const createdMessage = await ContactMessage.create({
      name,
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: createdMessage,
    });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while sending message",
    });
  }
};

const getAllContactMessages = async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 0;

    const query = ContactMessage.find().sort({ createdAt: -1 });
    if (limit > 0) {
      query.limit(limit);
    }

    const messages = await query;

    return res.status(200).json({
      success: true,
      message: "Messages fetched successfully",
      data: messages,
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching messages",
    });
  }
};

export { createContactMessage, getAllContactMessages };
