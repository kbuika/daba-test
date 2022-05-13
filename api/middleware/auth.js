const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split("")[1] || "";

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.verifiedUser = verified;
    console.log("Successful verification!!", verified);
    next();
  } catch (e) {
    console.log("Failure to verify!!", e);
    next();
  }
};

module.exports = {authenticate};
