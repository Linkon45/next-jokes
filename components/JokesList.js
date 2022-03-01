import React from "react";
import JokeItem from "./JokeItem";

const JokesList = ({ jokes }) => {
  return (
    <div>
      <ul>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <li>
              <JokeItem joke={joke} />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default JokesList;
