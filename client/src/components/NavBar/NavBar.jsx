import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../../redux/actions";

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    //Cuando se monta el componente NavBar se realiza una peticion al servidor
    //para obtener todas las categorias cargadas en la base de datos
    const searchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/category/all");
        const data = await response.json();
        setAllCategories(data);
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

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.buttons}>
        <button className={styles.button}>HOME</button>
        <button className={styles.button}>PRODUCTS</button>
        <div
          className={styles.categoryButton}
          onMouseOver={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          CATEGORIES
          {showCategories && (
            <div className={styles.categoryMenu}>
              <ul>
                {allCategories.map((category) => (
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
          <button className={styles.button}>REGISTER</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
