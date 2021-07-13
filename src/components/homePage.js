import React from "react";
import { FooterSmall } from "./footer.js";
const Home = (props) => {
  return (
    <main>
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            backgroundImage:
              "url(" +
              require("./../assets/img/register_bg_2.png").default +
              ")",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <h1 className="container mx-auto text-red-800 text-center text-6xl">
                Welcome to Home
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Home };
