import React from "react";
import LoaderMe from "../components/loaderMe/LoaderMe";
import Contact from "../components/contact/Contact";
import MoreInfo from "../components/moreInfoMe/MoreInfo";

const Me = () => {
  return (
    <section>
      <LoaderMe />
      <MoreInfo />
      <Contact />
    </section>
  );
};

export default Me;
