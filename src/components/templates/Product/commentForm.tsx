"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";

function CommentForm() {
  const { id } = useParams();

  const router = useRouter();

  const [commentText, setCommentText] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const setCommentScore = (data: number) => {
    setScore(data);
    Swal.fire({
      icon: "success",
      title: `${data} امتیاز شما با موفقیت ثبت شد`,
      showConfirmButton: true,
      confirmButtonText: "متوجه شدم",
    });
  };

  const sentComment = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const resUser = await fetch("/api/auth/me");
    const user = await resUser.json();

    //validation

    if (commentText.trim().length < 1) {
      return Swal.fire({
        icon: "error",
        title: "لطفا جای خالی هارا پر کنید",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    } else if (!user) {
      return Swal.fire({
        icon: "error",
        title: "اشکال از سمت سرور",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      }).then(async (Result) => {
        const resLogout = await fetch("/api/auth/signout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        if (resLogout.status === 201) {
          router.push("/login");
        }
      });
    }

    let newComment = {
      text: commentText,
      username: user.firstName,
      auther: user._id,
      product: id,
      score,
    };

    const res = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: "کامنت شما با موفقیت ثبت شد",
        showConfirmButton: true,
        confirmButtonText: "متوجه شدم",
      }).then((result) => {
        setScore(0), setCommentText("");
        router.refresh;
      });
    } else if (res.status === 422) {
      Swal.fire({
        icon: "warning",
        title: "لطفا جا های خالی را پر کنید",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "اشکال از سمت سرور",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    }
  };
  return (
    <div className="w-full md:w-[30%]">
      <h3 className="text-2xl text-center">فرم ارسال نظر</h3>
      <form action="" className="flex flex-col">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full outline-none mt-5 h-36"
          name=""
          id=""
          placeholder="متن نظر شما"
        ></textarea>
        <div className="flex rate">
          <div className="flex">
            <FaStar onClick={() => setCommentScore(5)} />
            <FaStar onClick={() => setCommentScore(4)} />
            <FaStar onClick={() => setCommentScore(3)} />
            <FaStar onClick={() => setCommentScore(2)} />
            <FaStar onClick={() => setCommentScore(1)} />
          </div>
        </div>
        <button
          onClick={(e) => sentComment(e)}
          className="text-center text-white mt-3 py-3 px-9 bg-primryCream2 rounded-xl"
        >
          ارسال نظر
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
