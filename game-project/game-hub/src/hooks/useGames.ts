import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface GamesRes {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesRes>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return { games, error};
};

export default useGames;
