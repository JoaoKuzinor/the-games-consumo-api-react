import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/components/CreateContent/CreateContent.module.css";

const CreateContent = () => {

  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title && platform && year && price !== "") {
      const game = {
        title,
        platform,
        year,
        price,
      };

      try {
        const response = await axios.post("http://localhost:4000/game", game);
        if (response.status === 201) {
          router.push("/")
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Por favor, preencha todos campos.");
    }
  };

  return (
    <>
      <div className={styles.createContent}>
        <div className={`title`}>
          {/* title entre `` para puxar do css global */}
          <h2>Cadastrar novo jogo</h2>
        </div>

        <form onSubmit={handleSubmit} id={styles.createForm} className={styles.formPrimary}>
          <input
            type="text"
            name="title"
            placeholder="Insira o título do jogo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.inputField}
          />
          <br />
          <input
            type="text"
            name="platform"
            placeholder="Insira a plataforma do jogo"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className={styles.inputField}
          />
          <br />
          <input
            type="number"
            name="year"
            placeholder="Insira o ano do jogo"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={styles.inputField}
          />
          <br />
          <input
            type="number"
            name="price"
            placeholder="Insira o preço do jogo"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={styles.inputField}
          />
          <br />
          <br />
          <input
           type="submit"
           value="Cadastrar" 
           id="createBtn"
           class="btnPrimary"
           />
        </form>
      </div>
    </>
  );
};
export default CreateContent;
