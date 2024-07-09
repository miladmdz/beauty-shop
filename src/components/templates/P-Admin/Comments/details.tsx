"use client";
import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import { CommentType } from "@/components/Type/Comment.type";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

type DetailsProps = {
  comments: CommentType[];
};

function Details({ comments }: DetailsProps) {
  const router = useRouter();

  const acceptComment = async (id: string) => {
    const res = await fetch("/api/comment/accept", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: "کامنت با موفقیت تایید شد",
        showConfirmButton: true,
        confirmButtonText: "فهمیدم",
      }).then((result) => {
        router.refresh();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "اشکال از سمت سرور",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    }
  };

  const rejectComment = async (id: string) => {
    const res = await fetch("/api/comment/reject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: "کامنت با موفقیت رد شد",
        showConfirmButton: true,
        confirmButtonText: "فهمیدم",
      }).then((result) => {
        router.refresh();
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "اشکال از سمت سرور",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    }
  };

  const deleteComment = async (id: string) => {
    Swal.fire({
      icon: "question",
      title: "ایا از حذف کامنت اطمینان دارید",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch("/api/comment/delete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "کامنت با موفقیت حذف شد",
            showConfirmButton: true,
            confirmButtonText: "فهمیدم",
          }).then((result) => {
            router.refresh();
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "اشکال از سمت سرور",
            showConfirmButton: true,
            confirmButtonText: "تلاش مجدد",
          });
        }
      }
    });
  };

  const banUser = (auther: {}) => {
    Swal.fire({
      icon: "question",
      title: "ایا از بن کاربر اطمینان دارید",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch("/api/user/ban", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: (auther as { email: string }).email,
            phone: (auther as { phone: number }).phone,
          }),
        });
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "کاربر با موفقیت بن شد",
            showConfirmButton: true,
            confirmButtonText: "فهمیدم",
          }).then((result) => {
            router.refresh();
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "اشکال از سمت سرور",
            showConfirmButton: true,
            confirmButtonText: "تلاش مجدد",
          });
        }
      }
    });
  };

  const showUserInfo = (data: {}) => {
    console.log(data);
  };

  const showCommentInfo = (text: string) => {
    console.log(text);
  };

  const showProductInfo = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <PageTitle title="لیست کامنت ها" />
      {/* users */}
      <div>
        <table className="w-full flex flex-col">
          <thead className="w-full">
            <tr className="w-full flex items-center justify-between font-bold child:w-full child:flex child:justify-center">
              <th>شناسه</th>
              <th>نام کاربر</th>
              <th>مشخصات کاربر</th>
              <th>مشخصات محصول</th>
              <th>متن کامنت</th>
              <th>رد / تایید</th>
              <th>حذف کامنت</th>
              <th>بن کاربر</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {comments.length > 0 &&
              comments.map((comment, index) => (
                <tr
                  key={comment._id}
                  className="w-full flex font-bold items-center justify-between py-5 child:w-full child:flex child:justify-center"
                >
                  <td>{index + 1}</td>
                  <td className="line-clamp-1 w-[100px] text-sm">
                    {comment.username}
                  </td>
                  <td>
                    <button
                      onClick={() => showUserInfo(comment.auther)}
                      className="w-full bg-black text-white rounded-md"
                    >
                      بیشتر ...
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => showProductInfo(comment.product)}
                      className="w-full bg-black text-white rounded-md"
                    >
                      مشاهده
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => showCommentInfo(comment.text)}
                      className="w-full bg-black text-white rounded-md"
                    >
                      مشاهده
                    </button>
                  </td>
                  <td>
                    {!comment.isAccept && (
                      <button
                        onClick={() => acceptComment(comment._id)}
                        className="w-full bg-primryCream text-white rounded-md"
                      >
                        تایید
                      </button>
                    )}
                    {comment.isAccept && (
                      <button
                        onClick={() => rejectComment(comment._id)}
                        className="w-full bg-black text-white rounded-md"
                      >
                        رد
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => deleteComment(comment._id)}
                      className="w-full bg-primryCream text-white rounded-md"
                    >
                      حذف
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => banUser(comment.auther)}
                      className="w-full bg-primryCream text-white rounded-md"
                    >
                      بن
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
