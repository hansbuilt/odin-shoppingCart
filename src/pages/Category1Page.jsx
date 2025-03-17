import styles from "./Category1Page.module.css";
import ProductCard from "../components/ProductCard";

function Category1Page() {
  const productIds = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className={styles.header}>
        <span>Home {">"} Cameras</span>
        <h2>Cameras</h2>
      </div>
      <div className={styles.container}>
        {productIds.map((item) => (
          <ProductCard key={crypto.randomUUID()} itemID={item}></ProductCard>
        ))}
      </div>
    </>
  );
}

export default Category1Page;
