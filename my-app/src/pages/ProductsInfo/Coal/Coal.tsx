import { FC } from "react";
import { coalInfo } from "../../../utils/consts/consts";
import { Contacts } from "../../../utils/consts/pages";
import {
  SecondHeader,
  QuestionForm,
  Footer,
  DeliveryForm,
  Advantages,
  CoalDelivery,
  CoalBanner,
} from "../../../utils/consts/components";
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
