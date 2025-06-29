
const map = new mapgl.Map('map', {
    center: [73.3682, 54.9893],
    zoom: 13,
    key: 'b472639d-eede-4047-b9e8-bb318bd58087'
});

navigator.geolocation.getCurrentPosition((pos) => {
    const userCoords = [pos.coords.longitude, pos.coords.latitude];
    new mapgl.Marker(map, {
        coordinates: userCoords,
        icon: 'https://docs.2gis.com/img/mapgl/marker.svg',
        label: {
            text: 'Вы здесь',
            anchor: 'top'
        }
    });
    map.setCenter(userCoords);
});

function drawRoute(type) {
    const routes = {
        family: [
            [73.371529, 54.991375],
            [73.367116, 54.987547],
            [73.368755, 54.989633],
        ],
        budget5000: [
            [73.371529, 54.991375],
            [73.367116, 54.987547],
            [73.368755, 54.989633],
        ],
        budget10000: [
            [73.371529, 54.991375],
            [73.367116, 54.987547],
            [73.368755, 54.989633],
            [73.329942, 55.004675],
        ]
    };
    const coords = routes[type];

    if (window.currentLine) {
        currentLine.destroy();
    }

    window.currentLine = new mapgl.Polyline(map, {
        coordinates: coords,
        color: '#ff6600',
        width: 4
    });
}
