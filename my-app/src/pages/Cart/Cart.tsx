import { FC } from "react";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import CartBanner from "../../components/Banners/CartBanner/CartBanner";
import CartForm from "../../components/UI/Forms/CartForm/CartForm";
import CartProducts from "./CartProducts/CartProducts";
import CartEmpty from "../../components/CartEmpty/CartEmpty";

const Cart: FC = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <>
      <CartBanner />
      <CartProducts items={items} totalPrice={totalPrice} />
      <CartForm />
    </>
  );
};

export default Cart;
