import ValidatorInteface from './validator.interface'

class StringHelper
{
	private _validator: ValidatorInteface;

		constructor(private validator: ValidatorInteface) {
		this._validator = validator;
	}

	public format() : string
	{
		if (this._validator.validate())
		{
			return 'bob';
		}
		else
		{
			return 'foo';
		}
	}
}

export default StringHelper;
