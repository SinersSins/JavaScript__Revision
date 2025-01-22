const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
  ];
  
  // filterAdults(users) => [{ id: 2, ... }, { id: 3, ... }, { id: 4, ... }]
  // mapUserNames(users) => ["Alice", "Bob", "Charlie", "Diana"]
  // groupUsersByCity(users) => {
  //   "New York": [{ id: 1, ... }, { id: 3, ... }],
  //   "Los Angeles": [{ id: 2, ... }],
  //   "Chicago": [{ id: 4, ... }]
  // }

  
function filterAdults(users){
    let result = users.filter((user) => user.age > 18)
    return result;
}

console.log(filterAdults(users))




function mapUserNames(users){
    let result = users.map((user)=> user.name)
    return result
}
console.log(mapUserNames(users))




function groupUsersByCity(users){
    return users.reduce((group, user)=>{
        if(!group[user.city]){
            group[user.city] = [];
        }
        
            group[user.city].push(user)
        
        return group;
    },{})
}

console.log(groupUsersByCity(users))