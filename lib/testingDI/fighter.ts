import {inject, injectable} from 'inversify';
import {IFighterInterface} from './interfaces/fighter.interface';
import {TYPES} from './interfaces/types';
import {IWarrior} from './interfaces/warrior.interface';

@injectable()
export class Fighter implements IFighterInterface {

	constructor(@inject(TYPES.Warrior) private _warriorService: IWarrior) {
	}

	public greet(): string {
		return `Fighter: ${this._warriorService.getWarriorType()}, says hello`;
	}
}
