const clothes = [
    {
        id:    0,
        title: 'Футболка "Эволюционируй или ...',
        price: 220,
        isNew: true,
        img:   '/src/assets/t-shirt.png',
    },
    {
        id:    1,
        title: 'Футболка "Эволюционируй или ...',
        price: 220,
        isNew: true,
        img:   '/src/assets/t-shirt.png',
    },
    {
        id:    2,
        title: 'Футболка "Эволюционируй или ...',
        price: 220,
        isNew: false,
        img:   '/src/assets/product-image.jpg',
    },
    {
        id:    3,
        title: 'Футболка "Эволюционируй или ...',
        price: 220,
        isNew: false,
        img:   '/src/assets/t-shirt.png',
    },
    {
        id:    4,
        title: 'Футболка "Эволюционируй или ...',
        price: 220,
        isNew: false,
        img:   '/src/assets/t-shirt.png',
    },
    {
        id:    5,
        title: 'Футболка "Эволюционируй или ...',
        price: 220,
        isNew: false,
        img:   '/src/assets/t-shirt.png',
    },
    {
        id:    6,
        title: 'Футболка "Эволюционируй или ...',
        price: 220,
        isNew: false,
        img:   '/src/assets/t-shirt.png',
    },
];

const accessories = [
    {
        id:    7,
        title: 'Классная кружка',
        price: 220,
        isNew: true,
        img:   '/src/assets/t-shirt.png',
    },
    {
        id:    8,
        title: 'Классная кружка',
        price: 220,
        isNew: true,
        img:   '/src/assets/t-shirt.png',
    },
];

const makeProductCard = (title, image, price, isNew) => `<div class="card mb ml">
    <div class="image">
        <img width="330" height="330" src="${image}" alt="product-img">
        ${isNew ? '<span class="image__badge">new</span>' : ''}
    </div>
    <div class="description">
        <div class="description__price">
            ${price} баллов
        </div>
        <h3 class="description__title">
            ${title}
        </h3>
        <div class="description__hint">
            Размеры S/M/L
        </div>
        <button onclick="openModal()" class="description__button mt">
        Заказать
        </button>
    </div>
</div>`;

function clearHtml() {
    document.querySelector('.js__catalog').innerHTML = '';
}

function getClothes() {
    clothes.forEach((card) => {
        const {
            title, price, img, isNew,
        } = card;
        const cardHtml = makeProductCard(title, img, price, isNew);

        document.querySelector('.js__catalog').innerHTML += cardHtml;
    });
}

function getAccessories() {
    document.querySelector('.js__catalog').innerHTML += '';
    accessories.forEach((accessory) => {
        const {
            title, price, img, isNew,
        } = accessory;
        const accessoryHtml = makeProductCard(title, img, price, isNew);

        document.querySelector('.js__catalog').innerHTML += accessoryHtml;
    });
}

document.querySelectorAll('.js_category_button').forEach((button) => {
    button.addEventListener('click', () => {
        // const button = event.target;
        const categoryKey = button.dataset.key;

        if (categoryKey === 'clothes') {
            clearHtml();
            getClothes();
        } else if (categoryKey === 'accessories') {
            clearHtml();
            getAccessories();
        } else {
            getClothes();
            getAccessories();
        }
    });
});

// function openModal() {
//     window.location.href = 'modal.html';
// }
