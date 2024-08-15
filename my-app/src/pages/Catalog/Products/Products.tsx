import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  fetchProducts,
  fetchTotalCount,
  limitPerPage,
} from "../../../redux/slices/ProductsSlice";
import { RootState, useAppDispatch } from "../../../redux/store/store";
import styles from "./Products.module.scss";

interface Product {
  id: number;
  title: string;
  price: number;
  type: string;
  img: string;
}

const Products: FC = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(
    (state: RootState) => state.products.items as Product[]
  );
  const totalCount = useSelector(
    (state: RootState) => state.products.totalCount
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTotalCount());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch, page]);

  useEffect(() => {
    console.log("Total Count:", totalCount);
    console.log("Total Pages:", Math.ceil(totalCount / limitPerPage));
  }, [totalCount]);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const totalPages = Math.ceil(totalCount / limitPerPage);

  return (
    <div className={styles.container}>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <section className={styles.card}>
              <img src={product.img} alt={product.title} />
              <p>{product.title}</p>
              <button>
                {product.price} <span>руб/т</span>
              </button>
            </section>
          </li>
        ))}
      </ul>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={page === index + 1 ? styles.selected : ""}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
