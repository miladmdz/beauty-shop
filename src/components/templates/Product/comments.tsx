"use client";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import CommentForm from "./commentForm";
import { CommentType } from "@/components/Type/Comment.type";

type CommentsProps = {
  comments?: CommentType[];
};

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="flex h-fit flex-col-reverse md:flex-row mb-5 md:mb-0 justify-between">
      {/* comments */}
      <div className="h-52 md:h-72 mt-5 md:mt-0 overflow-y-auto">
        {/* comment */}
        {comments &&
          comments?.filter((comment) => comment.isAccept).length > 0 && (
            <div>
              {/* info */}
              {comments
                ?.filter((comment) => comment.isAccept)
                .map((comment) => (
                  <div key={comment._id}>
                    <div className="flex">
                      <div>
                        <img
                          className="w-12 h-12"
                          src="../images/etc/user.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-lg text-primryCream font-bold">
                          {comment.username}
                        </h3>
                        <div className="flex items-center gap-x-2">
                          <div className="flex items-center gap-x-2">
                            <SlCalender />
                            {new Date(comment.createdAt).toLocaleDateString(
                              "fa-IR"
                            )}
                          </div>
                          -
                          <div className="flex items-center gap-x-2">
                            <CiClock2 />
                            {new Date(comment.createdAt).getHours()}:
                            {new Date(comment.createdAt).getMinutes()}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* text */}
                    <div className="mt-3">
                      <h3 className="font-semibold">{comment.text}</h3>
                    </div>
                  </div>
                ))}
            </div>
          )}
      </div>

      {comments?.filter((comment) => comment.isAccept).length === 0 && (
        <div className="text-2xl text-primryCream2 font-bold">
          نظری برای این محصول وجود ندارد
        </div>
      )}
      {/* create comment */}
      <CommentForm />
    </div>
  );
};

export default Comments;
