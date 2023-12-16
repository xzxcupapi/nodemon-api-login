import Form from "../models/FormModel.js";

export const getForm = async (req, res) => {
  try {
    const response = await Form.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getFormById = async (req, res) => {
  try {
    const response = await Form.findOne({
      attributes: ["uuid", "namalengkap", "email", "tentang", "pesan"],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createForm = async (req, res) => {
  const { namalengkap, email, tentang, pesan } = req.body;
  try {
    await Form.create({
      namalengkap: namalengkap,
      email: email,
      tentang: tentang,
      pesan: pesan,
    });
    res.status(201).json({ msg: "Send Success" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
