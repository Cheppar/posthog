import React from "react";
import Header from "./_components/home/Header";
// import Footer from "./_components/header/Footer";
// import TopWrapper from "./_components/TopWrapper";

function Provider({ children }) {
  return (
    <div>
      <Header/>

      <div className="mt-18">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Provider;
