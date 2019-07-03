var activeFilters = {
  address: ['England', 'USA'],
  name: ['Tom'],
  age: [25],
  email: ['ellie@mail.com']
};
var allUsers = [{
    name: 'John',
    email: 'johnson@mail.com',
    age: 25,
    address: 'USA'
  },
  {
    name: 'Tom',
    email: 'tom@mail.com',
    age: 35,
    address: 'England'
  },
  {
    name: 'Mark',
    email: 'mark@mail.com',
    age: 28,
    address: 'England'
  },
  {
    name: 'Ellie',
    email: 'ellie@mail.com',
    age: 24,
    address: 'Canada'
  }
];

/*
let users = allUsers.filter(function(item) {
  for (var key in activeFilters) {
    if (item[key] === undefined || item[key] != activeFilters[key])
      return false;
  }
  return true;
});
*/
users = []


function filterUsers(listOfObjects, filtersObject , filteredArray=[]) {
   /** 
    * @param {Array} listOfObjects List of objects you want to filter.
    * @param {Object} filtersObject Object with list filters you want to apply.
    * @param {Array} filteredArray Output of filtered objects.
    */

  const filters = Object.keys(filtersObject)

  listOfObjects.forEach((object) => {
    for (index in filters) {
      if (filtersObject[filters[index]].includes(object[filters[index]]) && !filteredArray.includes(object)) {
        filteredArray.push(object)
      }
    }
  })
}


filterUsers(allUsers, activeFilters , users)
console.log(users)
//console.log('users: ', users)

//console.log(users)

/*
users= users.filter(function(item) {
  for (var key in filter) {
    if (item[key] === undefined || item[key] != filter[key])
      return false;
  }
  return true;
});




*/