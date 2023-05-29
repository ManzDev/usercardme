import { renderUserCard } from "./renderUserCard.js";

const URL = "https://randomuser.me/api/";

export const fetchUserData = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  renderUserCard(data.results.at(0));
};
