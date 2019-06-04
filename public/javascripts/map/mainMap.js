function initMap() {
    var options = {
        zoom: 4,
        center: {
            lat: 46,
            lng: 7
        }
    }
    var map = new google.maps.Map( document.getElementById( 'map' ), options );
    getMarkers();

    markers;
    function getMarkers() {
        fetch( 'http://localhost:3000/api/markers' )
            .then( res => res.json() )
            .then( ( markers ) => {
                console.log( markers ); //all markers
                for ( let i = 0; i < markers.length; i++ ) {
                    //console.log( markers[ i ] ); //each marker
                    addMarker( markers[ i ] );
                }
                function addMarker( marker ) {
                    var marker = new google.maps.Marker( {
                        position: {
                            lat: marker.lat,
                            lng: marker.lng
                        },
                        map: map,
                        icon: marker.icon,
                        content: marker.content,
                        
                    } );
                    if ( marker.content ) {
                        var infoWindow = new google.maps.InfoWindow( {
                            content: marker.content
                        } );
                        google.maps.event.addListener( marker, 'click', function () {
                            infoWindow.open( map, marker );
                        } );
                    }
                }
            } )
    }

    //SECTION Markers
    /*


        marker.addListener('click', function(){
            infoWindow.open(map,marker);
        });
    */
    //!SECTION Markers
}