import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = (req, res) => {};

export const updateUser = (req, res) => {};

export const deleteUser = (req, res) => {};
