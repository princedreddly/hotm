let allMarkers = []

function initMap() {
    var options = {
        zoom: 4,
        center: {
            lat: 46,
            lng: 7
        }
    }
    //initialize map
    var map = new google.maps.Map( document.getElementById( 'map' ), options )


    //get markerdata from database
    fetch( '/api2/markers' )
        .then( res => res.json() )
        .then( ( markers ) => {
            for ( let i = 0; i < markers.length; i++ ) {
                addMarker( markers[ i ] );
            }
        } )


    let infowindow = new google.maps.InfoWindow();
    let hoverInfoWindow = new google.maps.InfoWindow();

    const addMarker = ( data ) => {

        const name = "data.name"
        const type = "data.type"
        const description = "data.description"
        const url = "data.url"


        const lat = data.lat
        const lng = data.lng

        //create marker
        const marker = new google.maps.Marker( {
            position: {
                lat: lat,
                lng: lng
            },
            map: map,
            icon: iconSelector( type ),
            title: name,

            //userProps
            prop: {
                lat: lat,
                lng: lng,

                description: description,
                url: url
            },

        } )
        hoverWindow( marker, hoverInfoWindow )

        marker.addListener( 'click', _ => {
            infowindow.open( map, marker )
            infowindow.setContent(
                `<h3>${"Marker Name"}</h3>
                <p>marker type</p>
                ${moreInfoButton(marker)}
                ${directionsButton(marker)} 
                `
            )
        } )
        //add marker to list of markers
        allMarkers.push( marker )
    }
}

//SECTION Marker config

function hoverWindow( marker, hoverInfoWindow ) {

    marker.addListener( 'mouseover', _ => {
        hoverInfoWindow.open( map, marker )
        hoverInfoWindow.setContent( marker.prop.description )
    } )
    marker.addListener( 'mouseout', _ => {
        hoverInfoWindow.close()
    } )
    marker.addListener( 'click', _ => {
        hoverInfoWindow.close()
    } )
}


function iconSelector( type ) {

    console.log( type )

    switch ( type ) {
        case 'Health':
            return 'https://myhealth.alboradait.com/img/marker/Health.png'
        case 'Living':
            return 'https://myhealth.alboradait.com/img/marker/Living.png'
        case 'Social':
            return 'https://myhealth.alboradait.com/img/marker/Social.png'
        case 'Education':
            return 'https://myhealth.alboradait.com/img/marker/Education.png'
        default:
            return 'https://myhealth.alboradait.com/img/marker/Plus.png'
    }
}
//!SECTION

function moreInfoButton( marker ) {
    return (
        `
        <div title="more Information" onclick="frame()" class="markerButton" style="background:teal;">+</div>
        `
    )
}

function moreInfoButtonHandler(e) {
    console.log( "moreInfoButtonHandler" )
    alert(e)
}

function directionsButton( marker ) {
    const directions = `${marker.prop.lat},${marker.prop.lng}`

    return ( `
        <a target="_blank" href="https:/www.google.com/maps/dir/?api=1&destination=${directions}">
            <div title="How to get there" class="markerButton" style="background:red;">!</div>
        </a>
    ` )
}