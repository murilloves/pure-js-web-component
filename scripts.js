window.onload = function() {
	(function murillosAge() {
		let template = document.getElementById('age').innerHTML;

		const bornDate = new Date('10/02/1990');
		const difference_ms = Date.now() - bornDate.getTime();
		let yearsOld = new Date(difference_ms);

		template = template.replace('{{ Age }}', yearsOld.getUTCFullYear() - 1970);

		document.getElementById('age').innerHTML = template;
	})();
};

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("hour").innerHTML = t;
}

var myVar = setInterval(function(){ myTimer() }, 1000);
