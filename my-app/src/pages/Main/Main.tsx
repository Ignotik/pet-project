import React from "react";
import Banner from "./Banner/Banner";
import LinkToCatalog from "./LinkToCatalog/LinkToCatalog";
import QuestionForm from "../../components/layout/QuestionForm/QuestionForm";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import Advantages from "../../components/layout/Advantages/Advantages";
import { imageInfo } from "../../utils/consts/consts"; // Assuming imageInfo is correctly imported

const Main: React.FC = () => {
  return (
    <>
      <Banner />
      <LinkToCatalog />
      <Advantages color="green" imageInfo={imageInfo} />
      <About />
      <QuestionForm width="full" color="green" />
      <Contacts />
    </>
  );
};

export default Main;
