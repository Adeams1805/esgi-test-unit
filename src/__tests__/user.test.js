import User from '../components/User';

/**
 * FIRSTNAME
 */

test('firstname null should return false', () => {
    expect(new User({
        prenom: null, 
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('firstname undefined should return false', () => {
    expect(new User({
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('firstname empty string should return false', () => {
    expect(new User({
        prenom: "",
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});


/**
 * LASTNAME
 */

test('lastname null should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: null, 
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('lastname undefined should return false', () => {
    expect(new User({
        prenom: "Maeva",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('lastname empty string should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "", 
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});


/**
 * EMAIL
 */

test('email null should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: null, 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('email undefined should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval",
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('email empty string should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: "", 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('email invalid should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: "mb.gmail", 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});


/**
 * BIRTHDATE
 */

test('date null should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: null,
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('date undefined should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: "m.b@gmail.com",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('date empty string should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('date invalid should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "13",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('age under 13 should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "2015-05-18",
        mdp: "12345678"
    }).isValid()).toBe(false);
});

test('age equals 13 should return true', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "2008-01-05",
        mdp: "12345678"
    }).isValid()).toBe(true);
});


/**
 * PASSWORD
 */

test('password null should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: null
    }).isValid()).toBe(false);
});

test('password undefined should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18"
    }).isValid()).toBe(false);
});

test('password empty string should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: ""
    }).isValid()).toBe(false);
});

test('password < 8 should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345"
    }).isValid()).toBe(false);
});

test('password > 40 should return false', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "123456789012345678901234567890123456789055555555"
    }).isValid()).toBe(false);
});


/**
 * VALID
 */

test('everything valid should return true', () => {
    expect(new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    }).isValid()).toBe(true);
});