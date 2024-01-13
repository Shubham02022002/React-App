import { sum } from "../sum";

test('check sum of 2 positve numbers', () => {
    expect(sum(2,3)).toBe(5);
});