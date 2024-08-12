import { FC } from "react";
import Advantages from "../../../components/layout/Advantages/Advantages";
import { coalInfo } from "../../../utils/consts/consts";
import CoalDelivery from "./CoalDelivery/CoalDelivery";
import CoalBanner from "./CoalBanner/CoalBanner";
import SecondHeader from "../../../components/layout/Header/SecondHeader";
import Contacts from "../../Contacts/Contacts";
import QuestionForm from "../../../components/layout/QuestionForm/QuestionForm";
import Footer from "../../../components/layout/Footer/Footer";
import DeliveryForm from "../../../components/layout/DeliveryForm/DeliveryForm";
import delivery from "../../../assets/images/image 44.png";

const Coal: FC = () => {
  return (
    <>
      <SecondHeader color="black" colorText="white" />
      <CoalBanner />
      <Advantages color="black" imageInfo={coalInfo} />
      <CoalDelivery />
      <DeliveryForm
        img={delivery}
        color="black"
        text="Адрес доставки"
        title="ОСТАВЬТЕ ЗАЯВКУ НА ДОСТАВКУ УГЛЯ НАСЕЛЕНИЮ"
      />
      <DeliveryForm
        img={delivery}
        color="black"
        text="Станция назначения"
        title="ОСТАВЬТЕ ЗАЯВКУ НА ОПТОВУЮ ПОСТАВКУ Ж/Д ИЛИ АВТОТРАСПОРТОМ"
      />
      <QuestionForm width="full" color="orange" />
      <Contacts />
      <Footer color="black" />
    </>
  );
};

export default Coal;
