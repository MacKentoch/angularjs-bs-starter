import './app.vendors';
// config
import appConfigFunction					from './config/app.config.function';
// run
import appRunFunction							from './run/app.run.function';
// vendors module
import coreModule 								from './core/app.core.module';
// route: angular router
import routeModule 								from './route/app.route.module';
// components
import navbarModule               from './components/navbar/app.navbar.module';
// root controller
import rootModule                 from './views/root/app.root.module';
// views
import homeModule									from './views/home/app.home.module';
import aboutModule                from './views/about/app.about.module';

const APP_MODULE_NAME = 'ng1BsStarter';

const APP_MODULES_TO_INJECT = [
	coreModule.name,
	routeModule.name,

  rootModule.name,
	homeModule.name,
  aboutModule.name,

  navbarModule.name
];


let appModule = angular
									.module(APP_MODULE_NAME, APP_MODULES_TO_INJECT)
									.config(appConfigFunction)
									.run(appRunFunction);

export default appModule;
