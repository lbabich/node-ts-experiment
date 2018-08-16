import {IValidatorHelper} from './validator.interface';
import {IBob} from './result.interface';

export class StringHelper {
	constructor(private _validator: IValidatorHelper) {
	}

	public format(value: string): IBob {
		return this._validator.bob();
	}
}
