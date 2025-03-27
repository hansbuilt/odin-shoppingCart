import styles from "./ProductCard.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        })
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [itemID]);

  return { productData, error, loading };
}

function ProductCard({ itemID, category }) {
  const { productData, error, loading } = useProductData({ itemID });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <Link to={`/product/${itemID}`} state={{ category }}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={productData.image} alt={productData.name} />
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.itemName}>{productData.name}</h3>
          <span className={styles.itemPrice}>
            ${productData.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
