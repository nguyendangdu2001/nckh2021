import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "@components/Footer";
import Header from "@components/Header";

import { ScrollToTop } from "@components/ScrollToTop";
import GetRoutes from "./config/Route/GetRoutes";
import { LazyMotion } from "framer-motion";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";

import axios from "axios";
import Nav from "@components/Nav";

const loadFeatures = () =>
  import("./config/framer-motion").then((res) => res.default);
function App() {
  return (
    <div className="dark:bg-[#121212] bg-white transition-colors w-full h-full py-3">
      <LazyMotion features={loadFeatures} strict>
        <div style={{ position: "absolute" }} id="back-to-top-anchor" />

        <ToastContainer />
        <div className="flex w-full h-full">
          <Nav />
          <div className="w-full h-full">
            <GetRoutes />
          </div>
        </div>

        <ScrollToTop />
        <ReactQueryDevtools initialIsOpen />
      </LazyMotion>
    </div>
  );
}

export default App;
