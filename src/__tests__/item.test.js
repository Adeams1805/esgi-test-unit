import Item from '../components/Item';

/**
 * NAME
 */

test('name null should return false', () => {
    expect(new Item({
        name: null,
        content: "content",
        createdAt: new Date()
    }).isValid()).toBe(false);
});

test('name undefined should return false', () => {
    expect(new Item({
        content: "content",
        createdAt: new Date()
    }).isValid()).toBe(false);
});

test('name empty string should return false', () => {
    expect(new Item({
        name: "",
        content: "content",
        createdAt: new Date()
    }).isValid()).toBe(false);
});


/**
 * CONTENT
 */

test('content null should return false', () => {
    expect(new Item({
        name: "item",
        content: null,
        createdAt: new Date()
    }).isValid()).toBe(false);
});

test('content undefined should return false', () => {
    expect(new Item({
        name: "item",
        createdAt: new Date()
    }).isValid()).toBe(false);
});

test('content empty string should return false', () => {
    expect(new Item({
        name: "item",
        content: "",
        createdAt: new Date()
    }).isValid()).toBe(false);
});

test('content >= 1000 should return false', () => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < 1000; i++) str += chars.charAt(Math.floor(Math.random() * chars.length));

    expect(new Item({
        name: "item",
        content: str,
        createdAt: new Date()
    }).isValid()).toBe(false);
});

/**
 * DATE
 */

test('date null should return false', () => {
    expect(new Item({
        name: "item",
        content: "content",
        createdAt: null
    }).isValid()).toBe(false);
});

test('date undefined should return false', () => {
    expect(new Item({
        name: "item",
        content: "content",
    }).isValid()).toBe(false);
});

test('date empty string should return false', () => {
    expect(new Item({
        name: "item",
        content: "content",
        createdAt: ""
    }).isValid()).toBe(false);
});

test('date invalid should return false', () => {
    expect(new Item({
        name: "item",
        content: "content",
        createdAt: "test"
    }).isValid()).toBe(false);
});



/**
 * VALID
 */

test('everything valid should return true', () => {
    expect(new Item({
        name: "item",
        content: "content",
        createdAt: new Date()
    }).isValid()).toBe(true);
});