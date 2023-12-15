import Product from "../models/ProductModels.js";
import path from "path";
import fs from "fs";

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

export const createProduct = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Upload" });
};

export const updateProduct = (req, res) => {};

export const deleteProduct = (req, res) => {};
