function createGame(play1, hour, play2) {
  return `
    <li>
      <img src="./assets/icon-${play1}.svg" alt="Bandeira do ${play1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${play2}.svg" alt="Bandeira da ${play2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("suica", "07:00", "camaroes") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "servia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("coreia-do-sul", "10:00", "gana") +
      createGame("brasil", "13:00", "suica") +
      createGame("portugal", "16:00", "uruguai")
  )
//  +
// createCard("02/12", "sexta", createGame("brasil", "16:00", "camaroes"))
