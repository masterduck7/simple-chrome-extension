const getQuote = async () => {
	try {
		const res = await fetch("https://zenquotes.io/api/random");
		const data = await res.json();
		const quote = data[0]["q"];
		console.log(quote);
		if (quote.includes("Too many requests")) {
			return "No quote to show. Please try in a few minutes";
		}
		return quote;
	} catch (error) {
		return "No quote to show";
	}
};

document.addEventListener("DOMContentLoaded", function () {
	var helloButton = document.getElementById("helloButton");
	var loadingText = document.getElementById("loadingText");
	var quoteText = document.getElementById("quoteText");

	helloButton.addEventListener("click", async function () {
		quote = await getQuote().then((response) => {
			loadingText.style.display = "none";
			quoteText.innerHTML = response;
		});
	});
});
