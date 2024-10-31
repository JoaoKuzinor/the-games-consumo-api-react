import styles from "@/components/CreateContent/CreateContent.module.css";

const CreateContent = () => {
  return (
    <>
      <div className={styles.createContent}>
        <div className={`title`}>      
          {/* title entre `` para puxar do css global */}
          <h2>Cadastrar novo jogo</h2>
        </div>
        <form id={styles.createForm} className={styles.formPrimary}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Insira o título do jogo"
            class="inputPrimary"
          />
          <input
            type="text"
            name="platform"
            id="platform"
            placeholder="Insira a plataforma do jogo"
            class="inputPrimary"
          />
          <input
            type="number"
            name="year"
            id="year"
            placeholder="Insira o ano do jogo"
            class="inputPrimary"
          />
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Insira o preço do jogo"
            class="inputPrimary"
          />
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
