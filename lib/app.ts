import * as express from 'express';
import * as bodyParser from 'body-parser';
import {WelcomeRouter} from './routes';

import StringHelper from './utils/string.helper';
import ValidatorHelper from './utils/validator.helper';

class App {
	public app: express.Application;

	constructor() {
		this.app = express();
		this._setApplicationMiddleware();
		this._createApplicationRoutes();
	}

	private _setApplicationMiddleware(): void{
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));



		const validatorService = new ValidatorHelper();
		const stringHelperService = new StringHelper(validatorService);

		stringHelperService.format();

	}

	private _createApplicationRoutes(): void {
		const welcomeRouter = new WelcomeRouter().router;
		this.app.use('/', welcomeRouter);
	}
}

export default new App().app;
