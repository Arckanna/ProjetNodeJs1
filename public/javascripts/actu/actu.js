window.addEventListener("DOMContentLoaded", () => {
  bindActu();
});

function bindActu() {
  const elements = document.querySelectorAll(".btn-danger");
  const actuContainer = document.querySelector("#actu-list-container");

  elements.forEach((e) => {
    e.addEventListener("click", ($event) => {
      const actuId = $event.target.getAttribute("actuid");
      axios
        .delete("/actu/" + actuId)
        .then(function (response) {
          actuContainer.innerHTML = response.data;
          bindActu();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}
