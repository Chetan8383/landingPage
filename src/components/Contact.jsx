import React from "react";
import { CiMail } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";

const Contact = () => {
  const onSumbitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Contact Us
        </h1>

        <form
          onClick={onSumbitHandler}
          className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Full Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-1 border-violet-200 p-4 pe-12 text-sm shadow-xs"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-1 border-violet-200 p-4 pe-12 text-sm shadow-xs"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <CiMail />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <textarea
                type="password"
                className="w-full rounded-lg border-1 border-violet-200 p-4 pe-12 text-sm shadow-xs h-40"
                placeholder="Message"
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-emerald-600 hover:bg-emerald-900 px-5 py-3 text-sm font-medium text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
