const user = {
    name: 'Max',
    sayHi() {
        console.log(arguments);
        console.log(`Hi! I'm ${this.name}`);
    }
}

user.sayHi('a', 'b', 'c');