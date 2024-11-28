const events = document.querySelectorAll(".event");
const previewList = document.querySelectorAll(".set-photos a");
const mainPhoto = document.querySelector(".active-img");

previewList.forEach(previewPhoto => {
  previewPhoto.addEventListener("click", (evt) => {
    evt.preventDefault();

    mainPhoto.src = previewPhoto.href;
    
  });
});

document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href');

        if (targetId === '#header1') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            let targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Element with ID "${targetId}" not found.`);
                alert(`Ссылка "${this.textContent}" не работает.`);
            }
        }
    });
});
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
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

let poiData = {
    entertainment: [
        {
            name: "Цирк",
            coordinates: [56.82586459496335, 60.604991989394236],
            description: "Городской цирк с разнообразными представлениями.",
            photo: "img/circus.jpg"
        },
        {
            name: "Гривич",
            coordinates: [56.82919730053192, 60.59922117842662],
            description: "Торговый центр «Гринвич» в Екатеринбурге — крупный торгово-развлекательный комплекс с множеством магазинов, ресторанов и развлекательных зон.",
            photo: "img/grivich.jpg" 
        },
        {
            name: "Пассаж",
            coordinates: [56.83658861509256, 60.59557888368065],
            description: "Торговый центр «Пассаж» в Екатеринбурге — это стильный и современный комплекс, предлагающий широкий выбор бутиков, ресторанов и развлечений.",
            photo: "img/passage.jpg" 
        },
        {
            name: "Ingame Компы",
            coordinates: [56.83000938256616, 60.60096933122565],
            description: "Компьютерный клуб. <a href='https://ingamearena.ru/' target='_blank' rel='noopener noreferrer'>https://ingamearena.ru/</a>",
            photo: "img/ingame.webp" 
        },
        {
            name: "Екатеринбургский государственный академический театр оперы и балета",
            coordinates: [56.838880274750956, 60.61668985783576],
            description: "Екатеринбургский государственный академический театр оперы и балета — один из ведущих театров России, славящийся своими высококлассными постановками оперных и балетных спектаклей.<a href='https://uralopera.ru/' target='_blank' rel='noopener noreferrer'>https://uralopera.ru/</a>",
            photo: "img/theater.jpg" 
        }
    ],
    historical: [
        {
            name: "Доходный дом купца Е.И. Первушина, 1906 год",
            coordinates: [56.830977887392116,60.60061952244435],
            description: "В 1906 году в Екатеринбурге по проекту архитектора Павла Заруцкого был построен доходный дом для семьи Первушиных, известных мукомолов. Здание, инвестиционный проект богатой семьи, сразу после постройки заняли Екатеринбургское казначейство, уездный суд.",
            photo: "img/dom 1906.jpg" 
        },

        {
            name: "Усадьба Расторгуева-Харитонова",
            coordinates: [56.84560648118366,60.611067990518734],
            description: "Уса́дьба Расторгу́евых — Харито́новых — один из наиболее ценных архитектурных усадебно-парковых ансамблей в Екатеринбурге, памятник архитектуры федерального значения.",
            photo: "img/ysadba.jpg" 
        },

        {
            name: "Дом Н.И. Севастьянова",
            coordinates: [56.839300379334205,60.60602886444369],
            description: "Дом Севастья́нова — исторический и архитектурный памятник, расположенный в Екатеринбурге по адресу проспект Ленина, 35. Назван в честь одного из владельцев здания Н. И. Севастьянова. Одна из местных достопримечательностей, архитектура которой особо выделяется среди особняков города.",
            photo: "img/gallery photo 5.jpg" 
        },

        {
            name: "Памятник В. Н. Татищеву и Г. В. де Геннину",
            coordinates: [56.8381564594502, 60.60591778512451],
            description: "Памятник В.Н. Татищеву и Г.В. де Геннину в Екатеринбурге увековечивает память основателей города.",
            photo: "img/tatishchev.jpg" 
        },

        {
            name: "Ельцин Центр",
            coordinates: [56.84494072330447, 60.591578357987586],
            description: "Ельцин Центр в Екатеринбурге — это крупный музейный комплекс, посвящённый жизни и деятельности первого президента России Бориса Ельцина, а также истории России конца XX века.",
            photo: "img/event-01.jpg" 
        },
        {
            name: "Высоцкий",
            coordinates: [56.83612793593231, 60.6145541698987],
            description: "Высоцкий — это многофункциональный комплекс в Екатеринбурге, включающий в себя жилые апартаменты, офисы и отель, и являющийся одной из высочайших построек города.",
            photo: "img/event-03.jpg" 
        },
        {
            name: "Храм-на-Крови",
            coordinates: [56.84441788304432, 60.608978282601676],
            description: "Храм-на-Крови в Екатеринбурге — величественный собор, возведённый на месте гибели последнего российского императора Николая II и его семьи.",
            photo: "img/event-02.jpeg" 
        }
    ]
};

function init() {
    let myMap = new ymaps.Map('map', {
        center: [56.838024209044896, 60.603893946661],
        zoom: 14,
        controls: ['routePanelControl']
    });

    let routePanel = myMap.controls.get('routePanelControl').routePanel;
    let buildRouteButton = document.getElementById('buildRoute');
    let transportTypeSelect = document.getElementById('transportType');
    let routeInfo = document.getElementById('routeInfo');
    let categorySelect = document.getElementById('categorySelect');
    let placemarks = [];


    categorySelect.addEventListener('change', () => updatePlacemarks(categorySelect.value));

    function updatePlacemarks(category) {
        placemarks.forEach(placemark => myMap.geoObjects.remove(placemark));
        placemarks = [];

        let poisToDisplay;
        if (category === 'none') {
            poisToDisplay = [];
        } else if (category === '') {
            poisToDisplay = Object.values(poiData).flat();
        } else {
            poisToDisplay = poiData[category] || [];
        }

        poisToDisplay.forEach(poi => {
            if (poi.coordinates) {
                let placemark = createPlacemark(poi);
                placemarks.push(placemark);
                myMap.geoObjects.add(placemark);
            }
        });
    }

     function createPlacemark(poi) {
        return new ymaps.Placemark(poi.coordinates, {
            balloonContentBody: `<div><h3>${poi.name}</h3><img src="${poi.photo}" style="max-width:100%; max-height:200px;"><p>${poi.description}</p></div>`,
            iconLayout: 'default#image',
            iconImageHref: 'img/icon.png', 
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        });
    }


    updatePlacemarks('');
}