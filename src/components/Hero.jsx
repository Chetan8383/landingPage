import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="relative h-screen flex flex-col sm:grid sm:grid-cols-2 sm:items-center bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center text-white flex items-center justify-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl ">
              Welcome To Our Services
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <div class="flex h-[40px] text-[14px] text-white/60">
                <input
                  class="input w-[200px] bg-white text-black px-3 py-1 rounded-l-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
                  name="text"
                  type="text"
                  placeholder="Enter your work email"
                />
                <button class="text-black px-3 py-1 bg-emerald-500 rounded-r-lg border-y border-r border-r-white/10 border-y-white/10 hover:bg-emerald-800/40 transition-all duration-150 easy-in-out">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <video
          src="src\assets\hero-video.mp4"
          autoPlay
          loop
          muted
          className="rounded-4xl p-4 "
        ></video>
      </section>
    </div>
  );
};

export default Hero;
