import React, { FC, useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../../redux/store/store";
import { useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";
import styles from "./Products.module.scss";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { BsCart2 } from "react-icons/bs";
import { addItem } from "../../../redux/slices/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  type: string;
  img: string;
  count: number;
}

const Products: FC = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(
    (state: RootState) => state.product.products as Product[]
  );
  const totalPages = useSelector(
    (state: RootState) => state.product.totalPages
  );
  const sortType = useSelector((state: RootState) => state.filter.sortType);
  const sortList = useSelector((state: RootState) => state.filter.sortList);
  const priceFrom = useSelector((state: RootState) => state.filter.priceFrom);
  const priceTo = useSelector((state: RootState) => state.filter.priceTo);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        await dispatch(
          fetchProducts({
            sortType,
            page: currentPage,
            sortList,
            priceTo,
            priceFrom,
          })
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsData();
  }, [currentPage, sortType, sortList, dispatch, priceTo, priceFrom]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={styles.container}>
      <ul>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : products.map((item) => (
              <li key={item.id}>
                <article className={styles.card}>
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className={styles.button}
                  >
                    <p>
                      {item.price} <span>руб/т</span>
                    </p>
                    <BsCart2 className={styles.button__cart} />
                  </button>
                </article>
              </li>
            ))}
      </ul>
      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              className={currentPage === pageNumber ? styles.active : ""}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
