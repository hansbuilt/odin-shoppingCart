import styles from "./ProductCategoryPage.module.css";
import ProductCard from "../components/ProductCard";

function ProductCategoryPage({ categoryName, productIds }) {
  // const productIds = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className={styles.header}>
        <span>
          Home {">"} {categoryName}
        </span>
        <h2>{categoryName}</h2>
      </div>
      <div className={styles.container}>
        {productIds.map((item) => (
          <ProductCard
            key={crypto.randomUUID()}
            itemID={item}
            category={categoryName}
          ></ProductCard>
        ))}
      </div>
    </>
  );
}

export default ProductCategoryPage;
