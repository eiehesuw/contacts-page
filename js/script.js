
// Настройка параметров карты 

function centerfunction() {
  if (window.innerWidth > 1620) {
    return [55.68035009299096, 37.60698679882813]
  }
  else if (window.innerWidth <= 1620 && window.innerWidth > 1260) {
    return [55.820540921036134, 36.82833079296876]
  }
  else if (window.innerWidth <= 1260) {
    return [55.75864051344586, 37.616599835937514]
  }
}

function init() {
  let map = new ymaps.Map('map', {
    center: centerfunction(),
    zoom: 9
  })

  let pin = new ymaps.Placemark([55.770641433643235, 37.620033063476576], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/pin.png',
    iconImageSize: [56, 64],
    iconImageOffset: [-27, -64]
  })

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
  // map.behaviors.disable(['scrollZoom']);

  map.geoObjects.add(pin);
}

ymaps.ready(init)

// Копирование с помощью кнопок

const copyButtons = document.querySelectorAll('.copy__button')

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dataCopy = button.dataset.type
    navigator.clipboard.writeText(dataCopy)
  })
})

const tableCopy = document.querySelectorAll('.details__table-copy')

tableCopy.forEach(button => {
  button.addEventListener('click', () => {
    const copyItem = button.parentNode.textContent
    navigator.clipboard.writeText(copyItem)
  })
})

// Слайдер

$(function () {

  $('.slider__inner--office').slick({
    infinite: false,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1211,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 450,
        settings: {
          centerMode: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });
  
  $('.command__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll:4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1260,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 770,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
          arrows: false
        }
      },
    ]
  });

});
