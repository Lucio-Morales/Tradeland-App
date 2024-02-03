import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, getProductsByCategory } from "../../redux/actions";
// import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  // const { loginWithRedirect } = useAuth0();
  const [categories, setCategories] = useState({
    allCategories: [],
    showCategories: false,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    //Cuando se monta el componente NavBar se realiza una peticion al servidor
    //para obtener todas las categorias cargadas en la base de datos
    const searchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/category/all");
        const data = await response.json();
        setCategories((prevCategories) => ({
          ...prevCategories,
          allCategories: data,
        }));
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };
    searchCategories();
  }, []);

  const handleCategoryClick = (selectedCategory) => {
    //Esta funcion recibe el id de la categoria seleccionada
    //y despacha una action pasandole ese id
    dispatch(getProductsByCategory(selectedCategory));
  };

  const handleGetProducts = () => {
    dispatch(getAllProducts());
  };
  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleGetProducts}>
          HOME
        </button>
        <div
          className={styles.categoryButton}
          onMouseOver={() =>
            setCategories((prevCategories) => ({
              ...prevCategories,
              showCategories: true,
            }))
          }
          onMouseLeave={() =>
            setCategories((prevCategories) => ({
              ...prevCategories,
              showCategories: false,
            }))
          }
        >
          CATEGORIES
          {categories.showCategories && (
            <div className={styles.categoryMenu}>
              <ul>
                {categories?.allCategories.map((category) => (
                  <li
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Link to="/register">
          <button className={styles.button}>LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
