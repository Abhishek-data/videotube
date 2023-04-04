import React from "react";
import Comments from "./Comments";

const comments = [
  {
    id: 1,
    name: "Abhishek",
    message: "I love react",
    replies: [
      {
        id: 2,
        name: "Sonu",
        message: "This is epic ",
        replies: [
          {
            id: 3,
            name: "Abhishek",
            message: "I love react",
            replies: [
              {
                id: 4,
                name: "Sonu",
                message: "This is epic ",
                replies: [
                  {
                    id: 5,
                    name: "Abhishek",
                    message: "I love react",
                    replies: [
                      {
                        id: 6,
                        name: "Sonu",
                        message: "This is epic ",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Abhishek",
    message: "I love react",
    replies: [{ id: 8, name: "Sonu", message: "This is epic ", replies: [] }],
  },
  {
    id: 9,
    name: "Abhishek",
    message: "I love react",
    replies: [{ id: 10, name: "Sonu", message: "This is epic ", replies: [{
        id: 11,
        name: "Abhishek",
        message: "I love react",
        replies: [
          {
            id: 12,
            name: "Sonu",
            message: "This is epic ",
            replies: [],
          },
        ],
      }] }],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comments data={comment}/>
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div className="ml-12 p-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentContainer;
