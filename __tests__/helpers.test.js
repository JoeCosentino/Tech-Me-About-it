const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-06-14 15:30:03');

    expect(format_date(date)).toBe('6/14/2022');
})

test('format_plural() correctly pluralizes words', () => {
    const word1 = "lion"
    const amount1 = 1
    const word2 = "tiger"
    const amount2 = 2

    expect(format_plural(word1, amount1)).toEqual('lion');
    expect(format_plural(word2, amount2)).toEqual('tigers')
})