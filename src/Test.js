import User from './components/User';
import Item from './components/Item';

/**
 * USER
 */


//user firstname null
const userFirstnameNull = () => {
    const u = new User({
        prenom: null, 
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}

//user firstname undefined
const userFirstnameUndefined = () => {
    const u = new User({
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}

//user firstname ""
const userFirstnameEmpty = () => {
    const u = new User({
        prenom: "",
        nom: "Boyaval", 
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}


//user name null
const userNameNull = () => {
    const u = new User({
        prenom: "Maeva",
        nom: null, 
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}

//user name undefined
const userNameUndefined = () => {
    const u = new User({
        prenom: "Maeva",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}

//user name ""
const userNameEmpty = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}


//user email null
const userEmailNull = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        email: null, 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}

//user email undefined
const userEmailUndefined = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}

//user email ""
const userEmailEmpty = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}

//user email invalid
const userEmailInvalid = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "mb.gmail", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}


//user age invalid
const userAgeInvalid = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: null,
        mdp: "12345678"
    });
    u.isValid();
}

//user age < 13
const userTooYoung = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2015-05-18",
        mdp: "12345678"
    });
    u.isValid();
}


//user mdp null
const userMdpNull = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: null
    });
    u.isValid();
}

//user mdp < 8
const userMdpLess = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "123456"
    });
    u.isValid();
}

//user mdp > 40
const userMdpMore = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "123456789012345678901234567890123456789055555555"
    });
    u.isValid();
}


//user valid
const userValid = () => {
    const u = new User({
        prenom: "Maeva",
        nom: "Boyaval",
        email: "m.b@gmail.com", 
        ddn: "2000-05-18",
        mdp: "12345678"
    });
    u.isValid();
}



/**
 * ITEM
 */

//item name null
const itemNameNull = () => {
    const i = new Item({
        name: null,
        content: "content",
        createdAt: new Date()
    });
    i.isValid();
}

//item content null
const itemContentNull = () => {
    const i = new Item({
        name: "item",
        content: null,
        createdAt: new Date()
    });
    i.isValid();
}

//item date invalid
const itemDateInvalid = () => {
    const i = new Item({
        name: "item",
        content: "content",
        createdAt: "test"
    });
    i.isValid();
}


/**
 * ALL
 */

export const testAll = () => {
    //test user
    console.log("TEST USER");
    console.log("prenom: null");
    userFirstnameNull();
    console.log("prenom: undefined");
    userFirstnameUndefined();
    console.log("prenom: ''");
    userFirstnameEmpty();

    console.log("nom: null");
    userNameNull();
    console.log("nom: undefined");
    userNameUndefined();
    console.log("nom: ''");
    userNameEmpty();

    console.log("email: null");
    userEmailNull();
    console.log("email: undefined");
    userEmailUndefined();
    console.log("email: ''");
    userEmailEmpty();
    console.log("email: mb.gmail");
    userEmailInvalid();

    console.log("ddn: null");
    userAgeInvalid();
    console.log("ddn: '2015-05-18'");
    userTooYoung();

    console.log("mdp: null");
    userMdpNull();
    console.log("mdp: < 8");
    userMdpLess();
    console.log("mdp: > 40");
    userMdpMore();
    
    console.log("user: 'Maeva', 'Boyaval', 'm.b@gmail.com', '2000-05-18', '12345678'");
    userValid();

    //test item
    console.log("------------");
    console.log("TEST ITEM");
    console.log("name: null");
    itemNameNull();
    console.log("content: null");
    itemContentNull();
    console.log("createdAt: 'test'");
    itemDateInvalid();
}