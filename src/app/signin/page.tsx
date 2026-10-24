"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    // console.log(user)
    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
    //   console.log(data);
      toast.success("Signed In Successfully");
      redirect("/");
    }
    if (error) {
      toast.error("Invalid email or password");
      console.log(error);
    }
  };
  const handleGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
  const handleGithubSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github, account.accountLinking.trustedProviders",
  });
};
  return (
    <div className="flex justify-center my-10">
      <form onSubmit={onSubmit} className="border-2 rounded-2xl">
        <div className="text-center my-2">
          <h2 className="text-2xl font-bold">সাইন ইন</h2>
          <p className="text-gray-700 font-bold">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">ইমেইল</label>
          <input
          name="email"
           type="email" className="input w-md" placeholder="Email" />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />

          <button
            type="submit"
            className="btn bg-green-800 text-white w-md mt-4"
          >
            সাইন ইন
          </button>
          <div className="divider">অথবা</div>
          <div className="flex justify-center gap-3 ">
            <button onClick={handleGithubSignIn} className="btn">GitHub দিয়ে চালিয়ে যান</button>
            <button onClick={handleGoogleSignIn} className="btn">Google দিয়ে চালিয়ে যান</button>
          </div>
          <p className="text-sm font-bold my-2 text-center">
            অ্যাকাউন্ট নেই?{" "}
            <Link className="text-green-700" href={"/signup"}>
              সাইন আপ করুন
            </Link>
          </p>
        </fieldset>
        <Link href={"/"}>
          {" "}
          <h2 className="text-green-500 my-5 text-center">
            ← হোম পেজে ফিরে যান
          </h2>
        </Link>
      </form>
    </div>
  );
};

export default SignInPage;
