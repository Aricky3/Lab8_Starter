// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
/* Phone Number Section */
test('test if # 321-987-8743 is valid', () => {
    expect(functions.isPhoneNumber('321-987-8743')).toBe(true);
});

test('test if # 951-987-8743 is valid', () => {
    expect(functions.isPhoneNumber('951-987-8743')).toBe(true);
});

test('test if # 3987 is not valid', () => {
    expect(functions.isPhoneNumber('3987')).toBe(false);
});

test('test if # 39f7-a743 is not valid', () => {
    expect(functions.isPhoneNumber('39f7-a743')).toBe(false);
});

/* Email Section */
test('test if edp445@gmail.com is a valid email', () => {
    expect(functions.isEmail('edp445@gmail.com')).toBe(true);
});

test('test if chungus@gmail.com is a valid email', () => {
    expect(functions.isEmail('chungus@gmail.com')).toBe(true);
});

test('test if edAgmail.com is not a valid email', () => {
    expect(functions.isEmail('edAgmail.com')).toBe(false);
});

test('test if edAgmailcom is not a valid email', () => {
    expect(functions.isEmail('edAgmailcom')).toBe(false);
});

/* Strong Password Section */
test('test if cse110 is a valid strong password', () => {
    expect(functions.isStrongPassword('cse110')).toBe(true);
});

test('test if cse_110 is a valid strong password', () => {
    expect(functions.isStrongPassword('cse_110')).toBe(true);
});

test('test if cse is not a valid strong password', () => {
    expect(functions.isStrongPassword('cse')).toBe(false);
});

test('test if 110 is not a valid strong password', () => {
    expect(functions.isStrongPassword('110')).toBe(false);
});

/* Date Section */
test('test if 01/01/2022 is a valid date', () => {
    expect(functions.isDate('01/01/2022')).toBe(true);
});

test('test if 01/02/2022 is a valid date', () => {
    expect(functions.isDate('01/02/2022')).toBe(true);
});

test('test if 01/01/22 is not a valid date', () => {
    expect(functions.isDate('01/01/22')).toBe(false);
});

test('test if 01/01/20222 is not a valid date', () => {
    expect(functions.isDate('01/01/20222')).toBe(false);
});

/* Hex Color Section */
test('test if #123456 is a valid hex color', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});

test('test if 123 is a valid hex color', () => {
    expect(functions.isHexColor('123')).toBe(true);
});

test('test if #12345 is a not valid hex color', () => {
    expect(functions.isHexColor('#12345')).toBe(false);
});

test('test if 12 is a not valid hex color', () => {
    expect(functions.isHexColor('12')).toBe(false);
});