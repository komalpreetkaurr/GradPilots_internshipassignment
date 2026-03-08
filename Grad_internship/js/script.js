// LOAD COMPONENTS

function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      if (id === "cards") {
        const allScholarships = JSON.parse(localStorage.getItem("scholarships")) || [];
        displayScholarships(allScholarships);
      }
    });
}

loadComponent("filters", "components/filters.html");
loadComponent("stats", "components/stats.html");
loadComponent("cards", "components/cards.html");


// DISPLAY SCHOLARSHIPS
function displayScholarships(data) {

  const container = document.getElementById("scholarships");
  container.innerHTML = "";

  data.forEach(s => {

    container.innerHTML += `
      <div class="card">

        <h3>${s.name}</h3>

        <p><b>Country:</b> ${s.country}</p>
        <p><b>Stream:</b> ${s.stream}</p>
        <p><b>Funding:</b> ${s.funding}</p>
        <p><b>Deadline:</b> ${s.deadline}</p>

        <div class="card-buttons">

          <button class="details-btn">View Details</button>

          <button class="cart-btn" onclick="addToCart('${s.name}')">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>

        </div>

      </div>
    `;
  });
}


// ADD TO CART
function addToCart(name){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(name);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart");

}


// APPLY FILTERS
function applyFilters() {

  const countries = [...document.querySelectorAll(".countryFilter:checked")].map(cb => cb.value);
  const streams = [...document.querySelectorAll(".streamFilter:checked")].map(cb => cb.value);
  const levels = [...document.querySelectorAll(".levelFilter:checked")].map(cb => cb.value);
  const deadline = document.getElementById("deadlineFilter").value;

  const scholarships = JSON.parse(localStorage.getItem("scholarships")) || [];

  let filtered = scholarships;

  if (countries.length > 0) {
    filtered = filtered.filter(s => countries.includes(s.country));
  }

  if (streams.length > 0) {
    filtered = filtered.filter(s => streams.includes(s.stream));
  }

  if (levels.length > 0) {
    filtered = filtered.filter(s => levels.includes(s.level));
  }

  if (deadline !== "") {
    filtered = filtered.filter(s => s.deadline === deadline);
  }

  displayScholarships(filtered);
}


// RESET FILTERS
function resetFilters() {

  document.querySelectorAll("input[type='checkbox']")
    .forEach(cb => cb.checked = false);

  document.getElementById("deadlineFilter").value = "";

  const scholarships = JSON.parse(localStorage.getItem("scholarships")) || [];

  displayScholarships(scholarships);
}


// VIEW SWITCH (CARDS / TABLE / MAP)
document.addEventListener("click", function(e){

  if(e.target.id === "cardView"){
    document.getElementById("scholarships").className = "cards";
  }

  if(e.target.id === "tableView"){
    document.getElementById("scholarships").className = "table";
  }

  if(e.target.id === "mapView"){
    document.getElementById("scholarships").className = "map";
  }

});