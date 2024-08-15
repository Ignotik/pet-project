import { FC } from "react";
import { sandInfo } from "../../../utils/consts/consts";
import { Contacts } from "../../../utils/consts/pages";
import {
  SecondHeader,
  QuestionForm,
  Footer,
  DeliveryForm,
  SandBanner,
  SandDelivery,
  Advantages,
} from "../../../utils/consts/components";
import delivery from "../../../assets/images/image 21.png";

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
