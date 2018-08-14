import hello from '../helloWorld';
import { expect } from 'chai';
import 'mocha';
import * as request from 'supertest';
import app from '../app';

describe('Hello function', () => {
	it('should return hello world', () => {
		const result = hello();
		expect(result).to.equal('Hello World!');
	});
});

describe('Express', function() {
	it('calling /', function(done) {
		request(app)
			.get('/')
			.expect(200)
			.end(function(err, res) {
				const result = res.body.message;
				expect(result).to.equal('Hello, there 123!');
				done();
				if (err) throw err;
			});
	});
});
