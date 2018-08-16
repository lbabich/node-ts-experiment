import {Request, Response, Router} from 'express';

export class WelcomeRouter {
	public router: Router;

	constructor() {
		this.router = Router();
		this._setPaths();
	}

	private _setPaths(): void {
		this.router.get('/', (req: Request, res: Response) => {
			res.send({
				message: 'Hello, there 123!'
			});
		});

		this.router.get('/:name', (req: Request, res: Response) => {
			const {name} = req.params;
			res.send(`Hello, ${name}`);
		});
	}
}
