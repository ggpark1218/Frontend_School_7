const { describe } = require("node:test");

describe('자스민 테스트입니다!', () => {
    it('1을 더해주는 함수입니다.', () => {

        const num = 30;

        expect(plusOne(plusOne(30))).toBe(num+1);
    });

});