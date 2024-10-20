import { FC } from "react";
import { sandInfo } from "../../utils/consts/consts";
import { Contacts } from "../../utils/consts/pages";
import {
  QuestionForm,
  Footer,
  DeliveryForm,
  LumberDelivery,
  Advantages,
} from "../../utils/consts/components";
import delivery from "../../assets/images/image 54.png";
import Header from "../../components/layout/Header/Header";

const Lamber: FC = () => {
  return (
    <>
      <Header color="red" colorText="white" />
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
