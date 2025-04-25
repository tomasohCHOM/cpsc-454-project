import React from "react";

export default function SignupPage() {
  return (
    <main>
      <h1 className="font-bold text-xl md:text-3xl text-center">Sign Up</h1>
      <form className="mt-4 flex gap-4 flex-col max-w-[27rem] mx-auto">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            name="loginEmail"
            placeholder="hello@example.com"
            className="p-2 rounded-md bg-slate-200 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            name="loginPassword"
            placeholder="Password (at least 8 characters)"
            className="p-2 rounded-md bg-slate-200 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Confirm Password*</label>
          <input
            type="password"
            name="loginPassword"
            placeholder="Confirm your password"
            className="p-2 rounded-md bg-slate-200 outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-500 text-white p-2 cursor-pointer rounded-md hover:bg-sky-400 transition"
        >
          Sign Up
        </button>
        <span>
          Already have an account?{" "}
          <a href="/login" className="text-slate-800 max-w-max">
            Log In!
          </a>
        </span>
      </form>
    </main>
  );
}
