import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/components/HomeContent/HomeContent.module.css"

const HomeContent = () => {
  // Estado que irá conter a lista de jogos
  const [games, setGames] = useState([]);
  // Estado loading
  const [loading, setLoading] = useState(true);
  // useRouter (redirecionamento de rota)
  const router = useRouter();

  // Efeito colateral - será chamado quando o componente for renderizado
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        setGames(response.data.games);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGames();
  }, []);

  // Delete
  const deleteGame = async (gameId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/game/${gameId}`
      );
      if (response.status === 204) {
        alert("Jogo deletado com sucesso!");
        setGames(games.filter((game) => game._id !== gameId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Edit
  const handleEdit = (game) => {
    router.push({
      pathname: "/edit",
      query: { id: game._id }, // Envia para a rota "/edit" o "id" do jogo
    });
  };


  return (
    <>
      {/* Componente de carregamento */}
      <Loading loading={loading} />

      {/* Lista de Jogos */}
      <div className={styles.homeContent}>
        <div className={styles.listGamesCard}>
          <h2 className={styles.title}>Lista de Jogos</h2>

          <div className={styles.games}>
            {games.map((game) => (
              <div key={game._id}>
                <h3>{game.title}</h3>
                <ul>
                  <li>Plataforma: {game.platform}</li>
                  <li>Ano: {game.year}</li>
                  <li>
                    Preço:{" "}
                    {game.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </li>
                </ul>

                {/* Botões de ação */}
                <div>
                  <button
                    className={styles.btnDel}
                    onClick={() => {
                      const confirmed = window.confirm("Deseja mesmo excluir o jogo?");
                      if (confirmed) {
                        deleteGame(game._id);
                      }
                    }}
                  >
                    Deletar
                  </button>
                  {/* Botão de editar */}
                  <button 
                  className={styles.btnEdit}
                  onClick={() => handleEdit(game)}>Editar</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão para cadastrar novo jogo */}
        <Link href="/create">
          <button className={'btnPrimary'}>
            Cadastrar novo jogo
          </button>
        </Link>
      </div>
    </>
  );
}

export default HomeContent


