import { renderUserCard } from "./renderUserCard.js";

const URL = "https://randomuser.me/api/";

export const fetchUserData = () => {
  console.log("getUserData");

  const userData = fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const userData = data.results.at(0);
      renderUserCard(userData);
    });

  return userData;
};
