import { FC } from "react";
import {
  Banner,
  LinkToCatalog,
  QuestionForm,
  Advantages,
} from "../../utils/consts/components";
import { Contacts, About } from "../../utils/consts/pages";
import { imageInfo } from "../../utils/consts/consts"; // Assuming imageInfo is correctly imported

const Main: FC = () => {
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
