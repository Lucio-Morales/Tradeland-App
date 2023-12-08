const { Seller, Buyer } = require("../../db");

const accessLogin = async (email, password) => {
  const seller = await Seller.findOne({
    where: {
      email: email,
      password: password,
    },
  });
  if (seller) {
    return { access: true, userType: seller.type };
  } else {
    const buyer = await Buyer.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    if (buyer) {
      return { access: true, userType: buyer.type };
    }
  }

  return { access: false, msg: "Los datos ingresados son incorrectos." };
};

module.exports = { accessLogin };
