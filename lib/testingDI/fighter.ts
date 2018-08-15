import {injectable, inject} from "inversify";
import IFighterInterface from './interfaces/fighter.interface';
import IWarrior from './interfaces/warrior.interface';
import {TYPES} from './interfaces/types';

@injectable()
class Fighter implements IFighterInterface {

	constructor(
		@inject(TYPES.Warrior) private _warriorService: IWarrior
	)
	{
		console.log(this._warriorService);
	}

	public greet(): string
	{
		const greeting = `Fighter: ${this._warriorService.getWarriorType()}, says hello`;
		console.log(greeting);
		return greeting;
	}
}

export default Fighter;
