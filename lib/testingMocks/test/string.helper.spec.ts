import * as TypeMoq from 'typemoq';
import StringHelper from './../string.helper';
import {expect} from "chai";
import IValidatorHelper from '../validator.interface';
import IBob from '../result.interface';

describe('StringHelper', () => {
	describe('format', () => {

		let validatorHelperMock: TypeMoq.IMock<IValidatorHelper> = TypeMoq.Mock.ofType<IValidatorHelper>();
		let sut: StringHelper = new StringHelper(validatorHelperMock.object);


		it('should return foo', () => {
			// Setup
			const mockedBob : IBob = {
				name:'Bob',
				nestedObj: {
					myArray: [1, 2, 3]
				}};

			const expected : IBob = {
				name:'Bob',
				nestedObj: {
					myArray: [1, 2, 3]
				}};

			// Action
			validatorHelperMock
					.setup(x => {
						x.validate(TypeMoq.It.isValue('hello'))
					})
					.returns(() => {
						return false;
					});

			validatorHelperMock
					.setup(x => {
						x.bob()
					}).returns(()=> mockedBob );

			let actual = sut.format('Hello');

			// Assert
			expect(actual).to.deep.equal(expected);
			expect(actual.name).to.equal('Bob');
		});

		// it('should return foo', () => {
		// 	let actual;
		// 	const expected = 'foo';
		//
		// 	validatorHelperMock
		// 		.setup(x => {
		// 			x.validate(TypeMoq.It.isValue('hello'))
		// 		})
		// 		.returns(() => {
		// 			return false;
		// 		});
		//
		// 	validatorHelperMock
		// 		.setup(x => {
		// 			x.bob()
		// 		});
		//
		// 	actual = sut.format("hello");
		//
		// 	expect(actual).to.equal(expected);
		//
		// 	validatorHelperMock
		// 		.verify(x => {
		// 				x.validate('hello');
		// 			},
		// 			TypeMoq.Times.atLeast(1));
		// });
	});
});
