import ToDoList from '../components/ToDoList';
import Item from '../components/Item';
import User from '../components/User';
import moment from 'moment';

/**
 * 30 MIN BETWEEN
 */

test('< 30min should return false', () => {
    expect(
    new ToDoList(
        new User({
            prenom: "Maeva", 
            nom: "Boyaval", 
            email: "m.b@gmail.com", 
            ddn: "2000-05-18",
            mdp: "12345678"
        }),
        [new Item({ name: `test`, content: "Placeholder", createdAt: new Date(moment().subtract(10, "minutes").format()) })]
    ).add(`test2`, "Placeholder2", new Date())
    ).toBe(false);
});

/**
 * +10 ITEMS
 */

test('+10 should return false', () => {
    let t = [];
    for(let i=0; i<10; i++) {
      t.push(new Item({name: `test ${i}`, content: "Placeholder", createdAt: new Date(moment().subtract(30, "minutes").format())}))
    }

    expect(
    new ToDoList(
        new User({
            prenom: "Maeva", 
            nom: "Boyaval", 
            email: "m.b@gmail.com", 
            ddn: "2000-05-18",
            mdp: "12345678"
        }), t
    ).add(`test test`, "Placeholder2", new Date())
    ).toBe(false);
});

/**
 * NAME ALREADY EXISTS
 */

test('name already exists should return false', () => {
    expect(
    new ToDoList(
        new User({
            prenom: "Maeva", 
            nom: "Boyaval", 
            email: "m.b@gmail.com", 
            ddn: "2000-05-18",
            mdp: "12345678"
        }),
        [new Item({
            name: `test`, content: "Placeholder", createdAt: new Date(moment().subtract(40, "minutes").format())
        })]
    ).add(`test`, "Placeholder2", new Date())
    ).toBe(false);
});

/**
 * VALID
 */

test('valid should return true', () => {
    expect(
    new ToDoList(
        new User({
            prenom: "Maeva", 
            nom: "Boyaval", 
            email: "m.b@gmail.com", 
            ddn: "2000-05-18",
            mdp: "12345678"
        }),
        [new Item({
            name: `test`, content: "Placeholder", createdAt: new Date(moment().subtract(40, "minutes").format())
        })]
    ).add(`test test`, "Placeholder2", new Date())
    ).toBe(true);
});