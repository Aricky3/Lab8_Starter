// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('test if # 321-987-8743 is valid', () => {
    expect(functions.isPhoneNumber('321-987-8743')).toBe(true);
});

test('test if # 951-987-8743 is valid', () => {
    expect(functions.isPhoneNumber('951-987-8743')).toBe(true);
});

test('test if # 3987-8743 is not valid', () => {
    expect(functions.isPhoneNumber('3987-8743')).toBe(false);
});

test('test if # 39f7-a743 is not valid', () => {
    expect(functions.isPhoneNumber('39f7-a743')).toBe(false);
});

/*Email section */
test('edp445@gmail.com is a valid email', () => {
    expect(functions.isEmail('edp445@gmail.com')).toBe(true);
});

test('chungus@gmail.com is a valid email', () => {
    expect(functions.isEmail('chungus@gmail.com')).toBe(true);
});

test('edAgmail.com is not a valid email', () => {
    expect(functions.isEmail('edAgmail.com')).toBe(false);
});

test('edAgmailcom is not a valid email', () => {
    expect(functions.isEmail('edAgmailcom')).toBe(false);
});

