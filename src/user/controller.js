import { fetchService, createService, authService } from "./service.js";

const userFetchController = async (request, response) => {
  const user = await fetchService();
  return response.status(200).send({ batata: true, user: user });
};

const userCreateController = async (request, response) => {
  const user = await createService(request.body);
  return response.status(200).send({ working: true, user: user });
};

const userAuthController = async (request, response) => {
  const serviceResponse = await authService(request.body);

  if (serviceResponse?.error) {
    return response
      .status(serviceResponse.statusCode)
      .send({ error: true, message: serviceResponse.message });
  }

  return response.status(200).send({ working: true, user: serviceResponse });
};

export { userAuthController, userCreateController, userFetchController };
