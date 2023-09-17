export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(name) {
        if (this.members.has(name)) {
            throw new Error(`${name.name} уже есть в массиве Set`);
        } else {
            this.members.add(name);
        }
    }

    addAll(...names) {
        names.forEach((name) => this.members.add(name));
    }

    toArray() {
        return Array.from(this.members);
    }
}
