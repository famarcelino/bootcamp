import { generateList } from '../list';

test('should generate a list', () => {
    // entrada: 5
    // ARRANGE
    const amount = 5;
    // ACT
    const result = generateList(amount);
    // saída: [0, 1, 2, 3, 4];
    // ASSERT
    const expected = [0, 1, 2, 3, 4];
    expect(result).toEqual(expected);
})

test('should generate an empty list when amount is zero', () => {
    // entrada: 0
    // ARRANGE
    const amount = 0;
    // ACT
    const result = generateList(amount);
    // saída: [];
    // ASSERT
    expect(result).toEqual([]);
})