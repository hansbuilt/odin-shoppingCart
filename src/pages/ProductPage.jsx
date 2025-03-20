import styles from "./ProductPage.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useProductData({ itemID }) {
  const [productData, setProductData] = useState({
    image: null,
    name: "",
    price: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${itemID}`;
    fetch(url, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) =>
        setProductData({
          image: response.image,
          name: response.title,
          price: response.price,
          description: response.description,
        })
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [itemID]);

  return { productData, error, loading };
}

function ProductPage({ categoryName }) {
  const { itemID } = useParams();

  const { productData, error, loading } = useProductData({ itemID });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>
          Home {">"} {categoryName}
        </span>
        <h2>{categoryName}</h2>
      </div>
      <div className={styles.productDetails}>
        <div className={styles.leftContainer}>
          <img src={productData.image} alt={productData.name} />
        </div>
        <div className={styles.rightContainer}>
          <h3 className={styles.itemName}>{productData.name}</h3>
          <span>{`SKU ${itemID}`}</span>
          <p>{productData.description}</p>
          <span className={styles.itemPrice}>
            ${productData.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
