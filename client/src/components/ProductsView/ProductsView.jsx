import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsView.module.css";

const ProductsView = ({ products }) => {
  //Cual es la responsabilidad de este componente?
  //Mostrar los productos

  return (
    <div className={styles.container}>
      {products &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          );
        })}
    </div>
  );
};

export default ProductsView;
