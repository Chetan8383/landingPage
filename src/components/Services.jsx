import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

const Services = () => {
  return (
    <div>
      <section className="p-10 grid md:grid-cols-3 gap-10 ">
        {["Web Design", "SEO Optimization", "Digital Marketing"].map(
          (service, index) => (
            <div
              key={index}
              className="p-5 rounded-4xl text-start hover:scale-95 duration-200 bg-amber-100"
            >
              <img
                className="rounded-2xl mb-3"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h2 className="text-2xl font-semibold mb-2 text-zinc-800">
                {service}
              </h2>
              <p className="mb-3 text-gray-600">
                Providing top-notch {service.toLowerCase()} services to grow
                your business.
              </p>
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-900 p-3 rounded-full text-white duration-200 cursor-pointer text-xs font-semibold flex gap-x-3 items-center">
                READ MORE <CiCircleChevRight className="text-2xl" />
              </button>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Services;
