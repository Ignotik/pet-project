import { FC } from "react";
import SecondHeader from "../../../components/layout/Header/SecondHeader";
import Footer from "../../../components/layout/Footer/Footer";
import SandBanner from "./SandBanner/SandBanner";
import { sandInfo } from "../../../utils/consts/consts";
import Advantages from "../../../components/layout/Advantages/Advantages";
import DeliveryForm from "../../../components/layout/DeliveryForm/DeliveryForm";
import Contacts from "../../Contacts/Contacts";
import QuestionForm from "../../../components/layout/QuestionForm/QuestionForm";
import delivery from "../../../assets/images/image 21.png";
import SandDelivery from "./SandDelivery/SandDelivery";

const Sand: FC = () => {
  return (
    <>
      <SecondHeader color="orange" colorText="white" />;
      <SandBanner />
      <Advantages color="orange" imageInfo={sandInfo} />
      <SandDelivery />
      <DeliveryForm
        img={delivery}
        color="orange"
        text="Адрес доставки"
        title="ОСТАВЬТЕ ЗАЯВКУ НА ДОСТАВКУ ПЕСКА, ЩЕБНЯ ИЛИ ЦЕМЕНТА НАСЕЛЕНИЮ"
      />
      <DeliveryForm
        img={delivery}
        color="orange"
        text="Станция назначения"
        title="ОСТАВЬТЕ ЗАЯВКУ НА ОПТОВУЮ ПОСТАВКУ Ж/Д ИЛИ АВТОТРАСПОРТОМ"
      />
      <QuestionForm width="full" color="orange" />
      <Contacts />
      <Footer color="orange" />;
    </>
  );
};

export default Sand;
