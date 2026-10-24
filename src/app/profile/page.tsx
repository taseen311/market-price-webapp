"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };
  const handleUpdateForm = () =>{
    setShow(!show)
  }
  return (
    <div className="my-10 flex flex-col justify-center items-center gap-10">
      <div className="card p-5 bg-gray-300 w-fit flex flex-col items-center">
        <Link href={"/profile"}>
          <Image
            className="rounded-full h-15 w-15"
            src={user?.image as string}
            alt="user pic"
            height={80}
            width={50}
          />
        </Link>
        <h2 className="bg-white my-4 p-2 rounded-2xl">
          Your name: {user?.name}
        </h2>
        <h2 className="bg-white my-4 p-2 rounded-2xl">
          Your name: {user?.email}
        </h2>
      </div>

      <button onClick={handleUpdateForm} className="btn">Edit Profile</button>

      {show && <form
        onSubmit={handleUpdateProfile}
        className="border-2 rounded-2xl w-fit"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input w-md"
            placeholder="যেমন: রহিম উদ্দিন"
          />

          <label className="label">ছবি</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="https://abc.cba"
          />

          <button
            type="submit"
            className="btn bg-green-800 text-white w-md mt-4"
          >
            Update Profile
          </button>
        </fieldset>
      </form>}
    </div>
  );
};

export default ProfilePage;
