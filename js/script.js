const events = document.querySelectorAll(".event");
const previewList = document.querySelectorAll(".set-photos a");
const mainPhoto = document.querySelector(".active-img");

previewList.forEach(previewPhoto => {
  previewPhoto.addEventListener("click", (evt) => {
    evt.preventDefault();

    mainPhoto.src = previewPhoto.href;
    
  });
});

const photos = document.querySelectorAll('.set-photos a');
const activeImg = document.querySelector('.active-img');
photos.forEach(photo => {
  photo.addEventListener('click', (event) => {
    event.preventDefault();
    const newImgSrc = photo.dataset.image;
    activeImg.src = newImgSrc;

    photos.forEach(link => link.classList.remove('active'));

    photo.classList.add('active');
  });
});


ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [56.838024209044896,60.603893946661],
        zoom: 14,
        controls: ['routePanelControl']
    });

    var routePanel = myMap.controls.get('routePanelControl').routePanel;
    var buildRouteButton = document.getElementById('buildRoute');
    var transportTypeSelect = document.getElementById('transportType');
    var routeInfo = document.getElementById('routeInfo'); // Добавлено

    buildRouteButton.addEventListener('click', function() {
        var from = document.getElementById('from').value;
        var to = document.getElementById('to').value;
        var transportType = transportTypeSelect.value;

        routePanel.state.set({
            type: transportType,
            from: from,
            to: to
        });
    });

    routePanel.options.set({
        allowSwitch: true,
        reverseGeocoding: true,
        types: {auto: true, pedestrian: true}
    });


    routePanel.model.events.add('requestsuccess', function (e) {
        var routes = e.get('routes');
        if (routes.length > 0) {
            var route = routes[0];
            var distance = route.getDistance();
            var duration = route.getDuration();
            routeInfo.innerHTML = `Расстояние: ${distance} м<br>Время: ${duration} сек`; // Добавлено
        } else {
            routeInfo.innerHTML = "Маршрут не найден"; // Добавлено
        }
    });

    routePanel.model.events.add('requesterror', function (e) {
        routeInfo.innerHTML = "Ошибка при построении маршрута: " + e.get('error').message; // Добавлено
    });
}


