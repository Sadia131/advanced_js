const students = [
    {id: 39, name: 'Sadia Islam'},
    {id: 20, name: 'Rabeya Obaida'},
    {id: 29, name: 'Ayaan'},
    {id: 22, name: 'Ashraf'}
];

const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 25);
const bigger0ne = students.find(s => s.id> 25);
console.log(ids);
console.log(bigger);
console.log(bigger0ne);