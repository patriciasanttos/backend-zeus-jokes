import User from "../database/schema/User.js";

const fetchService = async () => {
  const user = await User.create({
    email: "teste33344444@gmail.com",
    password: "123",
  });

  return user;
};

const createService = async (body) => {
  console.log("createService", body);

  const user = await User.create(body);
  return user;
};

const authService = async (body) => {
  console.log("authService", body);

  if (!body.email) {
    return { error: true, message: "Dados faltantes", statusCode: 400 };
  }

  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });

  if (user == null) {
    return { error: true, message: "Dados inválidos", statusCode: 400 };
  }

  return { user, message: "Login bem sucedido" };
};

export { fetchService, createService, authService };
