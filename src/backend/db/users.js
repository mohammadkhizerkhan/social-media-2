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
    userId:"Adarsh123",
    password: "adarshBalika123",
    bio: "i am adarsh balika",
    link:"adarshabalika.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "test",
    lastName: "me",
    username: "test@mail.com",
    userId:"test123",
    password: "test123",
    link:"testme.com",
    bio: "this is testing bio",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "sharukh",
    lastName: "khan",
    username: "sharukh@mail.com",
    userId:"sharukh123",
    password: "sharukh123",
    bio: "king of bollywood",
    link:"kingKhan.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "salman",
    lastName: "khan",
    username: "salman@mail.com",
    userId:"salman123",
    password: "salman123",
    bio: "Aish bewafa hai tu",
    link:"bhaijan.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

// {
//   "username":"test@mail.com",
//   "password":"test",
//   "name":"test"
// }
