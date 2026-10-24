'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";


const SignUpPage = () => {
    const onSubmit = async(e: React.SubmitEvent<HTMLElement>) =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {name:string, email: string, image:string, password:string}

        // console.log(user)
        const {data, error} = await authClient.signUp.email({
            ...user,
            callbackURL: '/'
        })

        if(data){
            // console.log(data)
            toast.success("User Created!")
            redirect("/")
        }
        if(error){
            // console.log(error)
            toast.error('Email already used!')
        }
    }
      const handleGoogleSignIn = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
    };
      const handleGithubSignIn = async () => {
      const data = await authClient.signIn.social({
        provider: "github",
      });
    };
  return (
    <div className="flex justify-center my-10 bg-white">
      <form onSubmit={onSubmit} className="border-2 rounded-2xl">
        <div className="text-center my-2">
          <h2 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h2>
          <p className="text-gray-700 font-bold">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">নাম</label>
          <input
            type="text"
            name="name"
            className="input w-md"
            placeholder="যেমন: রহিম উদ্দিন"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="you@example.com"
          />

          <label className="label">ছবি</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="https://abc.cba"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />

          <button type="submit" className="btn bg-green-800 text-white w-md mt-4">
            অ্যাকাউন্ট তৈরি করুন
          </button>
          <div className="divider">অথবা</div>
          <div className="flex justify-center gap-3 ">
            <button onClick={handleGithubSignIn} className="btn">GitHub দিয়ে চালিয়ে যান</button>
            <button onClick={handleGoogleSignIn} className="btn">Google দিয়ে চালিয়ে যান</button>
          </div>
          <p className="text-sm font-bold my-2 text-center">
            অ্যাকাউন্ট আছে?
            <Link className="text-green-700" href={"/signin"}>
              সাইন ইন করুন
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

export default SignUpPage;
