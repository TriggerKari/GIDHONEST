
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
            { name: 'Успенский собор', coords: [73.371529, 54.991375] },
            { name: 'Театр драмы', coords: [73.367116, 54.987547] },
            { name: 'Филармония', coords: [73.368755, 54.989633] },
        ],
        budget5000: [
            { name: 'Парк 30‑летия ВЛКСМ', coords: [73.383100, 54.980300] },
            { name: 'Успенский собор', coords: [73.371529, 54.991375] },
            { name: 'Цирк', coords: [73.366000, 54.984000] },
            { name: 'ТЦ "Континент"', coords: [73.401200, 54.989300] },
        ],
        budget10000: [
            { name: 'Успенский собор', coords: [73.371529, 54.991375] },
            { name: 'Филармония', coords: [73.368755, 54.989633] },
            { name: 'ТЦ "МЕГА"', coords: [73.329942, 55.004675] },
            { name: 'Аквапарк "АкваRIO"', coords: [73.388000, 54.940500] },
        ]
    };

    const route = routes[type];
    if (!route) return;

    if (window.currentMarkers) {
        window.currentMarkers.forEach((m) => m.destroy());
    }
    if (window.currentLine) {
        window.currentLine.destroy();
    }

    window.currentMarkers = route.map((p) =>
        new mapgl.Marker(map, {
            coordinates: p.coords,
            label: { text: p.name, anchor: 'top' },
        })
    );

    window.currentLine = new mapgl.Polyline(map, {
        coordinates: route.map((p) => p.coords),
        color: '#ff6600',
        width: 4,
    });
    map.setCenter(route[0].coords);
}
