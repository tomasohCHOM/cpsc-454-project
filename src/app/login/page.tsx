import React from "react";

export default function LoginPage() {
  return (
    <main>
      <h1 className="font-bold text-xl md:text-3xl text-center">Log In</h1>
      <form className="mt-4 flex gap-4 flex-col max-w-[27rem] mx-auto">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="loginEmail"
            placeholder="hello@example.com"
            className="p-2 rounded-md bg-slate-200 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="loginPassword"
            placeholder="********"
            className="p-2 rounded-md bg-slate-200 outline-none"
          />
        </div>
        <a href="/" className="text-slate-800 max-w-max">
          Forgot your password?
        </a>
        <button
          type="submit"
          className="bg-sky-500 text-white p-2 cursor-pointer rounded-md hover:bg-sky-400 transition"
        >
          Log In
        </button>
        <span>
          Don't have an account?{" "}
          <a href="/signup" className="text-slate-800 max-w-max">
            Sign Up!
          </a>
        </span>
      </form>
    </main>
  );
}
