var tips = ["HTML stands for hyper text markup language",
			"Words will usually wrap in html, but you can stop this with <span class = 'code'>&nbsp;</span>. For example, <span class = 'code'><p>The quick brown&nbsp;fox</p></span> turns into <p>The quick brown&nbsp;fox</p>",
			"<span class = 'code'>This is a paragraph</span>"
			];


window.onload = function() {
	var tip = document.getElementById('tip');
	var parser = new DOMParser;
	var encodedStr = tips[Math.floor(Math.random() * tips.length)];
	var dom = parser.parseFromString(
	    '<!doctype html><body>' + encodedStr,
	    'text/html');
	var decodedString = dom.body.textContent;

	console.log(tipText);
	tip.innerHTML = tipText;
}