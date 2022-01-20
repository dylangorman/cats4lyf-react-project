import { name, commerce } from "faker";

export const addFakeData = (data) => {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    element["name"] = name.firstName();
    element["price"] = commerce.price();
  }

  return data;
};
