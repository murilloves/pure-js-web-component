const components = [
	['core/components/append-component.js'],
]

const modules = [
	['core/app/first-component/first-component.js'],
	['core/app/second-component/second-component.js'],
];

let scriptIndex = 0;

(function includeHTML() {

	function insertScript(source, callback) {
		let script = document.createElement('script');
		let prior = document.getElementsByTagName('script')[scriptIndex];
		scriptIndex++;
		script.async = 1;
		script.src = source;
		prior.parentNode.insertBefore(script, prior);
	}

	function importSources(sources) {
		for (let source of sources) {
			insertScript(source, null);
		}
	}

	let promiseImportComponents = function() {
		return new Promise(function(resolve, reject) {
			resolve(importSources(components));
		});
	};

	(function importScripts() {
		/* WITH PROMISES: */
		promiseImportComponents().then(function() {
			setTimeout(function() {
				return importSources(modules);
			}, 10);
		})
	})();

})();
