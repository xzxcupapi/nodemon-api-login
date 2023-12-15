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
  if (req.file === null)
    return res.status(400).json({ msg: " No File Uploaded" });
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
  const fileSize = file.data.lenth;
  const ext = path.extname(file.originalname);
  const fileName = file.md5 + ext;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (allowedType.includes(ext.toLocaleLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 2000000)
    return res.status(422).json({ msg: "Images must be less 2mb" });

  file.mv(`./uploads/products/${fileName}`, async (err) => {
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
