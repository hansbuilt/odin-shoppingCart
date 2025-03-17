import styles from "./ProductCard.module.css";
import { useState, useEffect } from "react";

const useImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response.image))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

const Image = () => {
  const { imageURL, error, loading } = useImageURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {/* <h1>An image</h1> */}
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};

function ProductCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image></Image>
      </div>
    </div>
  );
}

export default ProductCard;
