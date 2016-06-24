const CORE_MODULE_NAME = 'app.core.module';
const CORE_MODULE_TO_INJECT = [
	'ui.router',
	'ngAnimate',
];

export default angular
								.module(CORE_MODULE_NAME, CORE_MODULE_TO_INJECT);
