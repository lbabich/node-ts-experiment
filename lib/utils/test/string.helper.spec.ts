import * as TypeMoq from 'typemoq';
import StringHelper from './../string.helper';
import {expect} from "chai";
import IValidatorHelper from '../validator.interface';

describe('StringHelper', () => {
	describe('format', () => {

		let mock: TypeMoq.IMock<IValidatorHelper> = TypeMoq.Mock.ofType<IValidatorHelper>();
		let stringHelper: StringHelper = new StringHelper(mock.target);

		it('should return foo', () => {
			let actual;
			const expected = 'foo';

			mock.setup(x => x.validate()).returns(() => true);

			actual = stringHelper.format();
			expect(actual).to.equal(expected);
		});

		it('should return bob', () => {
			let actual;
			const expected = 'bob';

			mock.setup(x => x.validate()).returns(() => true);

			actual = stringHelper.format();
			expect(actual).to.equal(expected);
		});

	});
});
