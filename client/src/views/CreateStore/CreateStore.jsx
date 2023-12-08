import styles from "./CreateStore.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CreateStore = () => {
  const { id } = useParams();
  console.log(id);

  const [storeData, setStoreData] = useState({
    userId: id,
    name: "",
    category: "",
    phone: "",
  });

  const handleStoreData = (event) => {
    setStoreData({
      ...storeData,
      [event.target.name]: event.target.value,
    });
  };
  console.log(storeData);
  const handleCreateStore = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/store/create",
        storeData
      );
    } catch (error) {
      console.error("Error en la petición:", error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleCreateStore}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={storeData.name}
          onChange={handleStoreData}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={storeData.category}
          onChange={handleStoreData}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={storeData.phone}
          onChange={handleStoreData}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateStore;
