import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "You Should to Login" });
  }
  const user = await user.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Not Exist" });
  req.userId = user.id;
  req.role = user.role;
  next();
};
