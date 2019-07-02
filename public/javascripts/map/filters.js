let activeFilters = {
    services: [],
    forWhom: [],
    country: [],
    language: []
}

document.querySelectorAll( '#mySidenav li' ).forEach( elem => {
    elem.addEventListener( 'click', e => {
        if ( e.target.tagName == "LI" ) {
            e.target.children[ 0 ].click()
            return
        }
        console.log( e.target )
    } )
} )


document.querySelector('img').addEventListener('click',_=>{
    console.log(activeFilters)
})