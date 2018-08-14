import * as express from 'express';
import * as bodyParser from 'body-parser';
import {WelcomeRouter} from './routes';

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
	}

	private _createApplicationRoutes(): void {
		const welcomeRouter = new WelcomeRouter().router;
		this.app.use('/', welcomeRouter);
	}
}

export default new App().app;
