import Product from "../models/ProductModels.js";
import path from "path";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    res.status(500)({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  if (req.file === null)
    return res.status(400).json({ msg: " No File Uploaded" });
  const {
    namepemilik,
    email,
    nomerhp,
    tipeproperti,
    alamat,
    jumlahkamar,
    userId,
  } = req.body;
  const namaproperti = req.body.title;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less 2mb" });

  file.mv(`./uploads/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Product.create({
        namepemilik: namepemilik,
        email: email,
        nomerhp: nomerhp,
        namaproperti: namaproperti,
        tipeproperti: tipeproperti,
        alamat: alamat,
        jumlahkamar: jumlahkamar,
        foto: fileName,
        url: url,
        userId: userId,
      });
      res.status(201).json({ msg: "Product Created Succesfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateProduct = (req, res) => {};

export const deleteProduct = (req, res) => {};
