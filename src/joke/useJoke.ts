import axios from "axios";
import { useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";

export const useJoke = () => {
  const abortControllerRef = useRef<AbortController | null>(null);
  const { category } = useParams();

  const fetcher = useCallback(
    async (url: string) => {
      if (abortControllerRef.current) {
        abortControllerRef.current?.abort();
      }

      const abortController = new AbortController();
      abortControllerRef.current = abortController;
      return await axios
        .get(url, { signal: abortController.signal, params: { category } })
        .then((response) => response.data.value);
    },
    [category]
  );
  const { data, isValidating } = useSWR(
    "https://api.chucknorris.io/jokes/random",
    fetcher,
    {
      suspense: true,
    }
  );

  const { mutate } = useSWRConfig();

  const readNewJoke = () => mutate("https://api.chucknorris.io/jokes/random");

  // const readNewJoke = useCallback(async () => {
  //   if (abortControllerRef.current) {
  //     abortControllerRef.current?.abort();
  //   }

  //   const abortController = new AbortController();
  //   abortControllerRef.current = abortController;
  //   try {
  //     setIsLoading(true);
  //     const response: JokeResponse = await axios.get(
  //       `https://api.chucknorris.io/jokes/random`,
  //       { signal: abortController.signal, params: { category } }
  //     );
  //     setJoke(response.data.value);
  //     setIsLoading(false);
  //   } catch {
  //     setJoke(null);
  //   }
  // }, [category]);

  // useEffect(() => {
  //   readNewJoke();
  // }, [readNewJoke]);

  return { joke: data, isLoading: isValidating, readNewJoke };
};
