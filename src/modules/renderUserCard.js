const container = document.querySelector(".container");

export const renderUserCard = (userData) => {
  console.log(userData);

  const picture = userData.picture.large;
  const fullName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
  const cell = userData.cell;
  const phone = userData.phone;
  const country = userData.location.country;
  const city = userData.location.city;
  const email = userData.email;
  const nat = userData.nat;
  const username = userData.login.username;
  const flag = `https://flagsapi.com/${nat}/flat/32.png`;

  const html = /* html */`
    <div class="user-card">
      <img class="photo" src="${picture}" alt="${fullName}">
      <div class="data">
        <h1>${fullName}</h1>
        <h4>${username} (${email})</h4>
      </div>
      <div class="bottom-data">
        <div>
          <span class="phone">${phone}</span> /
          <span class="mobile">${cell}</span>
        </div>
        <img class="flag" src="${flag}" alt="${nat}">
        <span>${country} (${city})</span>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", html);
};
