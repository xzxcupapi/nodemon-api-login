import Product from "../models/ProductModels.js";
import path from "path";
import fs from "fs";

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
    return res.status(422).json({ msg: "Image must be less 5mb" });

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
      res.status(201).json({ msg: "Iklan Properti Created Succesfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "No Product Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = Product.foto;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLocaleLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less 5mb" });

    const filepath = `./uploads/images/${product.foto}`;
    fs.unlinkSync(filepath);

    file.mv(`./uploads/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const namaproperti = req.body.title;
  const {
    namepemilik,
    email,
    nomerhp,
    tipeproperti,
    alamat,
    jumlahkamar,
    userId,
  } = req.body;

  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Product.update(
      {
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
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Update Iklan Properti Succes" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "No Product Found" });
  try {
    const filepath = `./uploads/images/${product.foto}`;
    fs.unlinkSync(filepath);
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Iklan Properti Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
