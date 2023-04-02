const searchField = document.querySelector("#search");
const chooseBook = document.querySelectorAll(".book");
searchField.addEventListener("keyup", function(event) {
	const word = event.target.value.toLowerCase();

	chooseBook.forEach(function(item){
		item.querySelector("p").textContent.toLocaleLowerCase().includes(word)
      ? (item.style.display = "block")
      : (item.style.display = "none");
	});
});