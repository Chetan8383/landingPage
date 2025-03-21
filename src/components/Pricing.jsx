import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Pricing = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        <div className="rounded-2xl border border-emerald-600 p-6 ring-1 shadow-xs ring-emerald-600 sm:order-last sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Pro
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                30${" "}
              </strong>

              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
            <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> 20 users included </span>
            </li>

            <li className="flex items-center gap-1">
              <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> 5GB of storage </span>
            </li>

            <li className="flex items-center gap-1">
              <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> Email support </span>
            </li>

            <li className="flex items-center gap-1">
              <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> Help center access </span>
            </li>

            <li className="flex items-center gap-1">
              <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> Phone support </span>
            </li>

            <li className="flex items-center gap-1">
              <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> Community access </span>
            </li>
          </ul>

          <a
            href="#"
            className="mt-8 block rounded-full border border-emerald-600 bg-emerald-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-emerald-700 hover:ring-1 hover:ring-emerald-700 focus:ring-3 focus:outline-hidden"
          >
            Get Started
          </a>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 shadow-xs sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Starter
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {" "}
                20${" "}
              </strong>

              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-1">
              <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> 10 users included </span>
            </li>

            <li className="flex items-center gap-1">
              <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> 2GB of storage </span>
            </li>

            <li className="flex items-center gap-1">
              <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> Email support </span>
            </li>

            <li className="flex items-center gap-1">
              <IoCheckmarkOutline className="text-emerald-700" />

              <span className="text-gray-700"> Help center access </span>
            </li>
          </ul>

          <a
            href="#"
            className="mt-8 block rounded-full border border-emerald-600 bg-white px-12 py-3 text-center text-sm font-medium text-emerald-600 hover:ring-1 hover:ring-emerald-600 focus:ring-3 focus:outline-hidden"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
