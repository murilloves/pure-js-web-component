const components = [
	['components/append-tags.js'],
]

const modules = [
	['scripts.js'],
	['my-tag/my-tag.js'],
	['your-tag/your-tag.js'],
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
		// importSources(components);
		// setTimeout(function() {
		// 	importSources(modules);
		// }, 50);
		/* WITH PROMISES: */
		promiseImportComponents().then(function() {
			setTimeout(function() {
				return importSources(modules);
			}, 10);
		})
	})();

})();
