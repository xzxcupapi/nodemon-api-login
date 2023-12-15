import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Not Exist" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) res.status(400).json({ msg: "Wrong Password" });
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, name, email, role });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "You Should to Login" });
  }
  const user = await Users.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not Found" });
  res.status(200).json(user);
};

export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Can't Logout" });
    res.status(200).json({ msg: "You Have Log Out" });
  });
};
