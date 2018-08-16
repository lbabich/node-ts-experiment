import {IBob} from './result.interface';

export interface IValidatorHelper {
	validate(value: string): boolean;

	bob(): IBob;
}
