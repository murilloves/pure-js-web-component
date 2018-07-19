function getUrl () {
	let url = window.location.href;
	url = url.split('/index')[0];
	return url;
}

function appendTagComponent (element, componentPath, componentName, url) {
	// console.log(url + pathToComponent + '/' + componentName + '.html');

	var xhr= new XMLHttpRequest();
	xhr.open('GET', url + '/' + componentPath + '/' + componentName + '.html', true);
	xhr.onreadystatechange= function() {
	    if (this.readyState!==4) return;
	    if (this.status!==200) return;
	    element.innerHTML= this.responseText;
	};
	xhr.send();
}

function appendComponent(componentPath) {
	const url = getUrl();
	const pathArray =  componentPath.split('/');
	const componentName = pathArray[pathArray.length - 1];
	const elements = document.getElementsByTagName(componentName);
	for (let element of elements) {
		appendTagComponent(element, componentPath, componentName, url);
	}
}
