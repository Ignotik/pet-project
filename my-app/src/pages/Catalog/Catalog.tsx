import { FC } from "react";
import { CatalogBanner, Filters } from "../../utils/consts/components";
import Products from "./Products/Products";

const Catalog: FC = () => {
  return (
    <>
      <CatalogBanner />
      <Filters />
      <Products />
    </>
  );
};

export default Catalog;
