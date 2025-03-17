import styles from "./Category1Page.module.css";
import ProductCard from "../components/ProductCard";

function Category1Page() {
  return (
    <>
      <div className={styles.header}>
        <span>Home {">"} Cameras</span>
        <h2>Cameras</h2>
      </div>
      <div className={styles.container}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </>
  );
}

export default Category1Page;
