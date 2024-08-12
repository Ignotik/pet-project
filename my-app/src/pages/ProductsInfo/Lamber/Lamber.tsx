import { FC } from "react";
import Advantages from "../../../components/layout/Advantages/Advantages";
import { sandInfo } from "../../../utils/consts/consts";
import SecondHeader from "../../../components/layout/Header/SecondHeader";
import Contacts from "../../Contacts/Contacts";
import QuestionForm from "../../../components/layout/QuestionForm/QuestionForm";
import Footer from "../../../components/layout/Footer/Footer";
import DeliveryForm from "../../../components/layout/DeliveryForm/DeliveryForm";
import delivery from "../../../assets/images/image 54.png";
import LumberDelivery from "./LumberDelivery/LumberDelivery";

const Lamber: FC = () => {
  return (
    <>
      <SecondHeader color="red" colorText="white" />
      <Advantages color="red" imageInfo={sandInfo} />
      <LumberDelivery />
      <DeliveryForm
        img={delivery}
        color="red"
        text="Адрес доставки"
        title="ОСТАВЬТЕ ЗАЯВКУ НА ДОСТАВКУ ПИЛОМАТЕРИАЛОВ НАСЕЛЕНИЮ"
      />
      <DeliveryForm
        img={delivery}
        color="red"
        text="Станция назначения"
        title="ОСТАВЬТЕ ЗАЯВКУ НА ОПТОВУЮ ПОСТАВКУ Ж/Д ИЛИ АВТОТРАСПОРТОМ"
      />
      <QuestionForm width="full" color="red" />
      <Contacts />
      <Footer color="red" />
    </>
  );
};

export default Lamber;
