import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "test",
    lastName: "me",
    username: "test@mail.com",
    password: "test123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

// {
//   "username":"test@mail.com",
//   "password":"test",
//   "name":"test"
// }
