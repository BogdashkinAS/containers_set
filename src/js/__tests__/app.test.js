import Team from '../app.js';
import Character from '../character.js';

test('Use function add', () => {
    const name = new Character('John', 'Swordsman');
    const team = new Team();
    team.add(name);
    expect(team.members).toEqual(new Set([{ name: 'John', type: 'Swordsman' }]));
});

test('Use function add with error', () => {
    const name = new Character('John', 'Swordsman');
    const team = new Team();
    team.add(name);
    expect(() => team.add(name)).toThrow(`${name.name} уже есть в массиве Set`);
});

test('Use function addAll', () => {
    const name = new Character('John', 'Swordsman');
    const name2 = new Character('Adam', 'Bowerman');
    const name3 = new Character('Alex', 'Zombie');
    const team = new Team();
    team.addAll(name, name2, name3);
    expect(team.members).toEqual(new Set([
        { name: 'John', type: 'Swordsman' },
        { name: 'Adam', type: 'Bowerman' },
        { name: 'Alex', type: 'Zombie' }]));
});

test('Use function toArray', () => {
    const name1 = new Character('John', 'Swordsman');
    const name2 = new Character('Adam', 'Bowerman');
    const name3 = new Character('Alex', 'Zombie');
    const team = new Team();
    team.addAll(name1, name2, name3);
    expect(team.toArray()).toEqual([
        { name: 'John', type: 'Swordsman' },
        { name: 'Adam', type: 'Bowerman' },
        { name: 'Alex', type: 'Zombie' }]);
    expect(Array.isArray(team.toArray())).toBeTruthy();
});
