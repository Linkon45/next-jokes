import React from "react";
import Link from "next/link";

const JokeItem = ({ joke }) => {
  return (
    <Link href="/jokes/[id]" as={`/jokes/${joke.id}`}>
      <h3>{joke.title}</h3>
    </Link>
  );
};

export default JokeItem;
