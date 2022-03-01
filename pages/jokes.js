import React from "react";
import JokesList from "../components/JokesList";

const jokes = ({ jokes }) => {
  console.log(jokes);

  return (
    <div>
      <h1>List of Jokes</h1>
      <JokesList jokes={jokes} />
    </div>
  );
};

export default jokes;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const jokes = await res.json();
  return {
    props: {
      jokes,
    },
  };
};
