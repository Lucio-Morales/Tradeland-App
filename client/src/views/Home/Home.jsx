import ProductsView from "../../components/ProductsView/ProductsView";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions";
import { useEffect } from "react";

// const url = "http://localhost:3001/product/all";
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

//Funcion del componente
//Renderizar los componentes mas relevantes (NavBar, ProductsViews, Menu)
//
