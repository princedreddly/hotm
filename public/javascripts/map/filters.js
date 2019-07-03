let activeFilters = {
    services: [],
    forWhom: [],
    country: [],
    language: []
}
let activeMarkers = []


document.

document.querySelectorAll('#mySidenav li').forEach(elem => {
    elem.addEventListener('click', e => {
        if (e.target.tagName == "LI") {
            e.target.children[0].click()
            return
        }
        console.log(e.target)

        toggleFilter(e.target)

        /*
        name = e.target.name

        activeFilters[name].push
*/
        filterUsers(allMarkers, activeFilters, activeMarkers)
    
        //console.log(activeMarkers)
        console.log(activeFilters)
    })
})


function toggleFilter(checkbox){

    name = checkbox.name
    value = checkbox.value

    if (checkbox.checked) {
        console.log('checked')

        activeFilters[name].push(value)

    } else {
        console.log('unchecked')

        let index = activeFilters[name].indexOf(value);
 
        if (index > -1) {
        activeFilters[name].splice(index, 1);
        }
    }
}


function filterUsers(listOfObjects, filtersObject, filteredArray = []) {

    const filters = Object.keys(filtersObject)

    listOfObjects.forEach((object) => {
        for (index in filters) {
            if (filtersObject[filters[index]].includes(object[filters[index]]) && !filteredArray.includes(object)) {
                filteredArray.push(object)
            }
        }
    })

}


document.querySelector('img').addEventListener('click', _ => {
    console.log(activeFilters)
})