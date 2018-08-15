import 'reflect-metadata';
import * as TypeMoq from 'typemoq';
import IWarrior from '../interfaces/warrior.interface';
import Fighter from '../fighter';
import {expect} from 'chai';

describe('Fighter', () => {
	describe('format', () => {
		let warriorMock: TypeMoq.IMock<IWarrior> = TypeMoq.Mock.ofType<IWarrior>();
		let sut: Fighter = new Fighter(warriorMock.object);

		warriorMock
			.setup(x => x.getWarriorType())
			.returns(() => 'Samurai');


		it('should have a Samurai greeting', function () {
			let actual;
			const expected = `Fighter: Ninja, says hello`;

			actual = sut.greet();

			expect(actual).to.equal(expected);
		});
	});
});
