const getQuote = async () => {
	try {
		const res = await fetch("https://zenquotes.io/api/random");
		const data = await res.json();
		return data[0]["q"];
	} catch (error) {
		return "No quote to show";
	}
};

document.addEventListener("DOMContentLoaded", function () {
	var helloButton = document.getElementById("helloButton");

	helloButton.addEventListener("click", async function () {
		const quote = await getQuote();
		alert(quote);
	});
});
