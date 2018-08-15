import ValidatorInteface from './validator.interface'
import IBob from './result.interface';

class StringHelper {
	private _validator: ValidatorInteface;

	constructor(private validator: ValidatorInteface)
	{
		this._validator = validator;
	}

	public format(value: string): IBob
	{
		return this._validator.bob();
	}
}

export default StringHelper;
