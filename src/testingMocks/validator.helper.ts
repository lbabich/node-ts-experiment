import {IValidatorHelper} from './validator.interface';
import {IBob} from './result.interface';

export class ValidatorHelper implements IValidatorHelper {
	public validate(value: string): boolean {
		return false;
	}

	public bob(): IBob {
		return {
			name: 'Bob',
			nestedObj: {
				myArray: [1, 2, 3]
			}
		} as IBob;
	}
}
