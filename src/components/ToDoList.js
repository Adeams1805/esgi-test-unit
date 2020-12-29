import Item from './Item';
import moment from 'moment';
import * as EmailService from './EmailService';
import testUtils from 'react-dom/test-utils';

export default class ToDoList {
    constructor(user, items) {
        this.user = user;
        this.items = [...items];
    }

    add(name, content, createdAt) {
        const it = new Item({name, content, createdAt});

        if(it.isValid()) {
            //check moins de 10 items
            if(this.items.length >= 10) {
                console.log("Une ToDoList ne peut pas avoir plus de 10 items");
                return false;
            }

            //check name unique
            if(this.items.find(el => el.name === name) !== undefined) {
                console.log("Les items doivent avoir un nom unique");
                return false;
            }

            //check 30 min
            if(this.items.length !== 0) {
                const currentItemDate = moment(createdAt.toJSON());
                const lastItemDate = moment(this.items[this.items.length-1].createdAt.toJSON());
                if(currentItemDate.diff(lastItemDate, "minutes") < 30) {
                    console.log("Vous devez attendre 30 min avant de pouvoir ajouter un nouvel item");
                    return false;
                }
            }

            //envoi mail au 8eme item
            if(this.items.length === 7) {
                const params = {
                    name: `${JSON.parse(localStorage.getItem("user")).firstname} ${JSON.parse(localStorage.getItem("user")).lastname}`,
                    email: JSON.parse(localStorage.getItem("user")).email
                }
                EmailService.send(params.name, params.email);
            }

            //add
            this.items.push(it);
            return true;
        }

        return false;
    }
}