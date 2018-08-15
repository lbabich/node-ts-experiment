import IBob from './result.interface';

interface IValidatorHelper {
	validate(value: string):boolean;
	bob() : IBob;
}

export default IValidatorHelper;
