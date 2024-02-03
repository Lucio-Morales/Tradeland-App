import styles from "./ProductCard.module.css";

const ProductCard = ({ name, category, price }) => {
  return (
    <div className={styles.productCardContainer}>
      <h3 className={styles.productName}>{name}</h3>
      <h5 className={styles.productCategory}>{category}</h5>
      <h5 className={styles.productPrice}>{price}</h5>
    </div>
  );
};

export default ProductCard;

//Funcion del componente:
//1.Renderizar las propiedades del producto.
