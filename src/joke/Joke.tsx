import { useJoke } from "./useJoke";

export const Joke = () => {
  const { joke, readNewJoke } = useJoke();

  return (
    <>
      <div>{joke}</div>
      <button onClick={readNewJoke}>Get new JOKE!</button>
    </>
  );
};
