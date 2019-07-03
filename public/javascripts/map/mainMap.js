let allMarkers = []
const markerInfo = document.querySelector("#markerInfoWindow")

function hideMarkerInfo() {
    markerInfo.style.display = "none"
}

function getMarkerData(markerId) {
    fetch(`/map/marker/${markerId}`)
    markerInfo.style.display = "inline"
}

function initMap() {




    var options = {
        zoom: 4,
        center: {
            lat: 46,
            lng: 7
        }
    }
    //initialize map
    var map = new google.maps.Map(document.getElementById('map'), options)


    //get markerdata from database
    fetch('/api2/markers')
        .then(res => res.json())
        .then((markers) => {
            for (let i = 0; i < markers.length; i++) {
                addMarker(markers[i]);
            }
        })


    let infoWindow = new google.maps.InfoWindow();
    let hoverInfoWindow = new google.maps.InfoWindow();

    function addMarker(data) {

        //SECTION TODO Change
        const name = data.nombre
        const description = data.descripcion
        const url = data.url
        const created = data.creado
        const gender_observation = data.observaciones_genero
        const language_observation = data.observaciones_lenguage
        const access_requirement = data.requisito
        const free = data.gratis
        const concerted = data.ccreatedoncertado
        const subcontracted = data.subvencionsfo
        const charged_to_the_patient = data.con_cargo_al_paciente
        const costs_observation = data.observaciones_costes
        const responsable_firstname = data.nombre_responsable
        const responsable_lastname = data.apellidos_responsable
        const address = data.direccion 
        const address2 = data.direccion2
        const town = data.municipio
        const postal_code = data.codigo_postal
        const email = data.email
        const telephone = data.telefono
        const website = data.pagina_web
        const open_hours = data.horario
        const countries = data.pais
        const type = data.tipo_organizacion
        const atended_populations = data.populaciones_atendidas
        const professional_centers = data.professionales_centros
        const spoken_languages = data.idiomas_hablados

        //!SECTION

        const lat = data.lat
        const lng = data.lng

        //create marker
        const marker = new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng
            },
            map: map,
            icon: iconSelector(type),
            title: name,

            //userProps
            prop: {
                lat: lat,
                lng: lng,

                name: name,
                description: description,
                url: url,
                created: data.created,
                gender_observation: gender_observation,
                language_observation: language_observation,
                access_requirement: access_requirement,
                free: free,
                concerted: concerted,
                subcontracted: subcontracted,
                charged_to_the_patient: charged_to_the_patient,
                costs_observation: costs_observation,
                responsable_firstname: responsable_firstname,
                responsable_lastname: responsable_lastname,
                address: address,
                address2: address2,
                town: town,
                postal_code: postal_code,
                email: email,
                telephone: telephone,
                website: website,
                open_hours: open_hours,
                countries: countries,
                type: type,
                atended_populations: atended_populations,
                professional_centers: professional_centers,
                spoken_languages: spoken_languages,
                created: created

            },

        })
        hoverWindow(marker, hoverInfoWindow)
        clickWindow(marker, infoWindow)


        //add marker to list of markers
        allMarkers.push(marker)
    }
}

//SECTION Marker config

function clickWindow(marker, infoWindow) {
    marker.addListener('click', _ => {
        infoWindow.open(map, marker)
        const {prop} = marker
        infoWindow.setContent(
            `<h3>${prop.name}</h3>
                <p>${prop.type}</p> 
                ${moreInfoButton(marker)}
                ${directionsButton(marker)} 
                `
        )
    })
}

function hoverWindow(marker, hoverInfoWindow) {

    marker.addListener('mouseover', _ => {
        hoverInfoWindow.open(map, marker)
        hoverInfoWindow.setContent(marker.prop.description)
    })
    marker.addListener('mouseout', _ => {
        hoverInfoWindow.close()
    })
    marker.addListener('click', _ => {
        hoverInfoWindow.close()
    })
}


function iconSelector(type) {

    switch (type) {
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

function moreInfoButton(marker) {
    const markerId = marker.title // marker.id

    return (
        `
        <div title="more Information" onclick="getMarkerData('${markerId}')" class="markerButton" style="background:teal;">+</div>
        `
    )
}

function moreInfoButtonHandler(e) {
    console.log("moreInfoButtonHandler")
    alert(e)
}

function directionsButton(marker) {
    const directions = `${marker.prop.lat},${marker.prop.lng}`

    return (`
        <a target="_blank" href="https:/www.google.com/maps/dir/?api=1&destination=${directions}">
            <div title="How to get there" class="markerButton" style="background:red;">!</div>
        </a>
    `)
}