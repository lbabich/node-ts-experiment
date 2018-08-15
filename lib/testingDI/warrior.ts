import { injectable } from "inversify";
import IWarrior from './interfaces/warrior.interface';

@injectable()
class Warrior implements IWarrior {

	private _warriorType: string;

	constructor()
	{
		this._warriorType = 'ninja';
	}

	public setWarriorType(value: string): void
	{
		this._warriorType = value;
	}

	public getWarriorType(): string
	{
		return this._warriorType;
	}
}

export default Warrior;
