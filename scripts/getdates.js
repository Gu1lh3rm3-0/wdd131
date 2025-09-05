const current = document.querySelector("#current");
const last = alert(document.lastModified("#last"));

const today = new Date();

current.innerHTML = <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "current"
	}
).format(today)}</span>;

last.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "last"
	}
).format(today)}</span>`;