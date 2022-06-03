import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    email: "guest@gmail.com",
    password: "Guest1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bhavya",
    lastName: "Joshi",
    email: "bhavya.joshi1299@gmail.com",
    password: "hi1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
