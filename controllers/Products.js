import Product from "../models/ProductModels.js";
import path from "path";
import { writeFile } from "fs/promises";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll({
      attributes: [
        "uuid",
        "namepemilik",
        "nomerhp",
        "namaproperti",
        "tipeproperti",
        "alamat",
        "foto",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        attributes: [
          "uuid",
          "namepemilik",
          "nomerhp",
          "namaproperti",
          "tipeproperti",
          "alamat",
          "foto",
        ],
        tipeproperti: req.params.tipeproperti,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    if (!req.files || !req.files.file)
      return res.status(400).json({ msg: "No File Upload" });

    const {
      namepemilik,
      email,
      nomerhp,
      namaproperti,
      tipeproperti,
      alamat,
      jumlahkamar,
      userId,
    } = req.body;

    const file = req.files.file;
    const ext = path.extname(file.originalname);
    const fileName = file.md5 + ext;

    // Menyimpan file ke direktori uploads/products
    const filePath = path.join(
      __dirname,
      "..",
      "uploads",
      "products",
      fileName
    );
    await writeFile(filePath, file.data);
    const product = await createProductInDatabase({
      namepemilik,
      email,
      nomerhp,
      namaproperti,
      tipeproperti,
      alamat,
      jumlahkamar,
      foto: fileName,
      userId,
    });

    return res
      .status(201)
      .json({ msg: "Product Created Successfully", product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const updateProduct = (req, res) => {};

export const deleteProduct = (req, res) => {};
