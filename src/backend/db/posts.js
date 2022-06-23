import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          bio: "Aish bewafa hai tu",
          bookmarks: [],
          createdAt: "2022-06-23T12:12:24+05:30",
          firstName: "salman",
          followers: [],
          following: [],
          id: "1",
          lastName: "khan",
          link: "bhaijan.com",
          password: "salman123",
          updatedAt: "2022-06-23T12:12:24+05:30",
          userId: "salman123",
          username: "salman@mail.com",
          _id: "84cca138-45dc-4ea4-be3e-32e0b26b4161",
        },
      ],
      dislikedBy: [],
    },
    username: "salman@mail.com",
    userId: "salman123",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "test@mail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "test@mail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "What does dummy text means Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever",
    likes: {
      likeCount: 2,
      likedBy: [
      {
        bio: "Aish bewafa hai tu",
        bookmarks: [],
        createdAt: "2022-06-23T12:12:24+05:30",
        firstName: "salman",
        followers: [],
        following: [],
        id: "1",
        lastName: "khan",
        link: "bhaijan.com",
        password: "salman123",
        updatedAt: "2022-06-23T12:12:24+05:30",
        userId: "salman123",
        username: "salman@mail.com",
        _id: "84cca138-45dc-4ea4-be3e-32e0b26b4161",
      },
      {
        bio: "king of bollywood",
        bookmarks: [],
        createdAt: "2022-06-23T12:12:24+05:30",
        firstName: "sharukh",
        followers: [],
        following: [],
        id: "2",
        lastName: "khan",
        link: "kinkkhan.com",
        password: "sharukh123",
        updatedAt: "2022-06-23T12:12:24+05:30",
        userId: "sharukh123",
        username: "sharukh@mail.com",
        _id: "84cca138-45dc-4ea4-be3e-32e0b26b4161",
      },
    ],
      dislikedBy: [],
    },
    username: "test@mail.com",
    userId: "test123",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "test@mail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "test@mail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2021-03-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "all of the typefaces listed in the Google Fonts directory are open source, meaning that you can not only use them for any web page, commercial or non-commercial, but, unlike with Typekit, you can also download them onto your computer and even tweak them yourself!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "test@mail.com",
    userId: "test123",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "test@mail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "salman@mail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-02-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "A favicon, also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is a file containing one or more small icons, associated with a particular website or web page.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "test@mail.com",
    userId: "test123",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "salman@mail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sharukh@mail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-06-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Kamala is a superhero fan with an imagination, particularly when it comes to Captain Marvel; Kamala feels like she doesn't fit in at school and sometimes even at home, that is until she gets superpowers like the heroes she's looked up to.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "test@mail.com",
    userId: "test123",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "salman@mail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sharukh@mail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-03-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sharukh@mail.com",
    userId: "sharukh123",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "salman@mail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sharukh@mail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "test@mail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-04-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
];
