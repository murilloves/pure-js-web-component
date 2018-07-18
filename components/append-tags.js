function getUrl () {
	let url = window.location.href;
	url = url.split('/index')[0];
	return url;
}

// const urlProd = 'https://murilloves.github.io/';
function appendDivInsideTag (element, tagName, url) {
	console.log(url + '/' + tagName + '/' + tagName + '.html');

	var xhr= new XMLHttpRequest();
	xhr.open('GET', url + '/' + tagName + '/' + tagName + '.html', true);
	xhr.onreadystatechange= function() {
	    if (this.readyState!==4) return;
	    if (this.status!==200) return;
	    element.innerHTML= this.responseText;
	};
	xhr.send();
}

function appendTags(tagName) {
	// const tagName = 'my-tag';
	const url = getUrl();
	const elements = document.getElementsByTagName(tagName);
	for (let element of elements) {
		appendDivInsideTag(element, tagName, url);
	}
}
