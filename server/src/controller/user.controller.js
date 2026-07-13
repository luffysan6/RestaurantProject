export const saveUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (name == "" || name.length == 0) {
    return res.json({
      success: "false",
      message: "User is Required to have a name !",
    });
  }
  if (email == "" || email.length == 0) {
    return res.json({
      success: "false",
      message: "User is Required to have a Email !",
    });
  }

  if (!email.includes("@")) {
    return res.json({
      success: "false",
      message: "Kindly Provide a Valid Email !",
    });
  }

  if (password == "" || password.length == 0) {
    return res.json({
      success: "false",
      message: "User is Required to have a Password !",
    });
  }

  

  res.json({
    name,
    email,
    password,
  });
};
