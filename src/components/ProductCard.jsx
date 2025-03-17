import styles from "./ProductCard.module.css";
import { useState, useEffect } from "react";

function useImageURL({ itemID }) {
  const [imageURL, setImageURL] = useState(null);
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
      .then((response) => setImageURL(response.image))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [itemID]);

  return { imageURL, error, loading };
}

function Image({ itemID }) {
  //set product state i think

  const { imageURL, error, loading } = useImageURL({ itemID });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {/* <h1>An image</h1> */}
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
}

function ProductCard({ itemID }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image itemID={itemID}></Image>
      </div>
    </div>
  );
}

export default ProductCard;
