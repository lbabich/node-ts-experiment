import {inject, injectable} from 'inversify';
import {TYPES} from './types';

import {IFighter} from './interfaces/fighter.interface';
import {IWarrior} from './interfaces/warrior.interface';

@injectable()
export class Fighter implements IFighter {

	constructor(@inject(TYPES.Warrior) private _warriorService: IWarrior) {
	}

	public greet(): string {
		return `Fighter: ${this._warriorService.getWarriorType()}, says hello`;
	}
}
