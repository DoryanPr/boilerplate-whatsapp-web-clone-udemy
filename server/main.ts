import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // const users = Meteor.users;
    // console.log(users);
    const numberOfUsers: number = Meteor.users.find().count();
    if (numberOfUsers === 0) {
        console.log("Il n'y a pas d'utilisateur");
    } else {
        console.log("Il y'a des utilisateurs");
    }
});
