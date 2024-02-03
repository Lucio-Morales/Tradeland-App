import ProductsView from "../../components/ProductsView/ProductsView";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import { useEffect } from "react";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!products.length) {
      dispatch(getAllProducts());
    }
  }, []);

  return (
    <div>
      <ProductsView products={products} />
    </div>
  );
};

export default Home;

//Funcion del componente:
//1.Despachar action que busca todos los productos.
//2.Renderizar componente ProductsView pasandole los products.
