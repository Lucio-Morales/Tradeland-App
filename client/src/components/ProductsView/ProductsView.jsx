import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsView.module.css";

const ProductsView = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.length &&
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

//Funcion del componente
//1. Renderizar componente ProductCard pasandole props.
