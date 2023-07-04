const assert = require('assert');
const getRandomNumber = require('../index');

describe('getRandomNumber', () => {
    it('should return a random number', () => {
        const randomNumber = getRandomNumber();
        assert.ok(randomNumber);
        console.log('succes Test');
    });
});
