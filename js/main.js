// Имитация данных для разных типов запросов
const mockData = {
    byuser: [{
            id: 1,
            logo: "images/logos/1xstavka.png",
            logo_fit: "contain",
            name: "1xСтавка",
            rating: 4.9,
            review_count: 325,
            bonus_amount: 25000,
            badge: "exclusive",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 2,
            logo: "images/logos/fonbet.png",
            logo_fit: "contain",
            name: "Fonbet",
            rating: 4.8,
            review_count: 123,
            bonus_amount: 101000,
            badge: "no-deposit",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 3,
            logo: "images/logos/leon.png",
            logo_fit: "contain",
            name: "Leon",
            rating: 4.7,
            review_count: 325,
            bonus_amount: 10000,
            badge: null,
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 4,
            logo: "images/logos/winline.png",
            logo_fit: "cover",
            name: "Winline",
            rating: 4.6,
            review_count: 43,
            bonus_amount: 0,
            badge: "no-bonus",
            verified: false,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 5,
            logo: "images/logos/melbet.png",
            logo_fit: "contain",
            name: "Melbet",
            rating: 5.0,
            review_count: 34,
            bonus_amount: 2500,
            badge: "no-deposit",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 6,
            logo: "images/logos/1xstavka.png",
            logo_fit: "contain",
            name: "1xСтавка",
            rating: 4.5,
            review_count: 109,
            bonus_amount: 9900,
            badge: null,
            verified: true,
            internal_link: "#",
            external_link: "#"
        },

    ],
    byeditors: [{
            id: 1,
            logo: "images/logos/fonbet.png",
            logo_fit: "contain",
            name: "Fonbet",
            rating: 5.0,
            review_count: 215,
            bonus_amount: 101000,
            badge: "no-deposit",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 2,
            logo: "images/logos/1xstavka.png",
            logo_fit: "contain",
            name: "1xСтавка",
            rating: 4.9,
            review_count: 325,
            bonus_amount: 25000,
            badge: "exclusive",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 3,
            logo: "images/logos/winline.png",
            logo_fit: "cover",
            name: "Winline",
            rating: 4.8,
            review_count: 187,
            bonus_amount: 0,
            badge: "no-bonus",
            verified: false,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 4,
            logo: "images/logos/leon.png",
            logo_fit: "contain",
            name: "Leon",
            rating: 4.7,
            review_count: 156,
            bonus_amount: 15000,
            badge: null,
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 5,
            logo: "images/logos/melbet.png",
            logo_fit: "contain",
            name: "Melbet",
            rating: 4.5,
            review_count: 98,
            bonus_amount: 2500,
            badge: "no-deposit",
            verified: true,
            internal_link: "#",
            external_link: "#"
        }
    ],
    bybonus: [{
            id: 1,
            logo: "images/logos/fonbet.png",
            logo_fit: "contain",
            name: "Fonbet",
            rating: 4.8,
            review_count: 123,
            bonus_amount: 101000,
            badge: "no-deposit",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 2,
            logo: "images/logos/1xstavka.png",
            logo_fit: "contain",
            name: "1xСтавка",
            rating: 4.9,
            review_count: 325,
            bonus_amount: 25000,
            badge: "exclusive",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 3,
            logo: "images/logos/leon.png",
            logo_fit: "contain",
            name: "Leon",
            rating: 4.7,
            review_count: 325,
            bonus_amount: 10000,
            badge: null,
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 4,
            logo: "images/logos/melbet.png",
            logo_fit: "contain",
            name: "Melbet",
            rating: 5.0,
            review_count: 34,
            bonus_amount: 2500,
            badge: "no-deposit",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 5,
            logo: "images/logos/1xstavka.png",
            logo_fit: "contain",
            name: "1xСтавка",
            rating: 4.5,
            review_count: 109,
            bonus_amount: 9900,
            badge: null,
            verified: true,
            internal_link: "#",
            external_link: "#"
        }
    ],
    "bysubrating&id=reliability": [{
            id: 1,
            logo: "images/logos/winline.png",
            logo_fit: "cover",
            name: "Winline",
            rating: 5.0,
            review_count: 256,
            bonus_amount: 0,
            badge: "no-bonus",
            verified: false,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 2,
            logo: "images/logos/fonbet.png",
            logo_fit: "contain",
            name: "Fonbet",
            rating: 4.9,
            review_count: 215,
            bonus_amount: 101000,
            badge: "no-deposit",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 3,
            logo: "images/logos/1xstavka.png",
            logo_fit: "contain",
            name: "1xСтавка",
            rating: 4.8,
            review_count: 325,
            bonus_amount: 25000,
            badge: "exclusive",
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 4,
            logo: "images/logos/leon.png",
            logo_fit: "contain",
            name: "Leon",
            rating: 4.7,
            review_count: 156,
            bonus_amount: 10000,
            badge: null,
            verified: true,
            internal_link: "#",
            external_link: "#"
        },
        {
            id: 5,
            logo: "images/logos/melbet.png",
            logo_fit: "contain",
            name: "Melbet",
            rating: 4.5,
            review_count: 98,
            bonus_amount: 2500,
            badge: "no-deposit",
            verified: true,
            internal_link: "#",
            external_link: "#"
        }
    ]
};

// Функция для имитации API запроса
function fetchBookmakers(type) {
    return new Promise((resolve) => {
        // Имитируем задержку сети
        setTimeout(() => {
            resolve(mockData[type] || []);
        }, 500);
    });
}

// Функция для отрисовки элементов
function renderBookmakers(bookmakers) {
    const listContainer = document.getElementById('bookmakers-list');
    listContainer.innerHTML = '';

    bookmakers.forEach(bk => {
        const item = document.createElement('div');
        item.className = 'main-list_item';

        // Определяем классы для бейджей
        let badgeClass = '';
        let badgeText = '';
        if (bk.badge === 'exclusive') {
            badgeClass = 'purple';
            badgeText = 'Эксклюзив';
        } else if (bk.badge === 'no-deposit') {
            badgeClass = 'green';
            badgeText = 'Без депозита';
        } else if (!bk.bonus_amount) {
            badgeClass = 'red';
            badgeText = 'Нет бонуса';
        }

        // Создаем звезды рейтинга
        const stars = [];
        const fullStars = Math.floor(bk.rating);
        const hasHalfStar = bk.rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push('<img src="images/icons/star.svg" alt="Рейтинг">');
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push('<img src="images/icons/star-half.svg" alt="Рейтинг">');
            } else {
                stars.push('<img src="images/icons/star-empty.svg" alt="Рейтинг">');
            }
        }

        // Форматируем бонус
        const bonusFormatted = bk.bonus_amount ? `${(bk.bonus_amount / 1000).toFixed(bk.bonus_amount % 1000 === 0 ? 0 : 1)}K ₽` : '';

        item.innerHTML = `
            <div class="main-list_item_logo ${bk.verified ? 'verified' : ''} ${bk.logo_fit}" >
                <img src="${bk.logo}" alt="${bk.name}">
            </div>
            <div class="main-list_item_rating">
                <div class="rating-stars">
                    ${stars.join('')}
                </div>
                <div class="rating-num">${bk.rating.toFixed(1)}</div>
            </div>
            <div class="main-list_item_chat">
                <img src="images/icons/chat.svg" alt="Обсуждение">
                <div class="chat-num">${bk.review_count}</div>
            </div>
            <div class="main-list_item_bonus">
                ${badgeText ? `<div class="badge ${badgeClass}">${badgeText}</div>` : ''}
                ${bk.bonus_amount ? `
                <div class="main-list_item_bonus-flex">
                    <img src="images/icons/gift.svg" alt="Бонус">
                    <div class="bonus-num">${bonusFormatted}</div>
                </div>
                ` : ''}
            </div>
            <div class="bonus-list_item_buttons">
                <a href="${bk.internal_link}" class="main-list_item_buttons_item">Обзор</a>
                <a href="${bk.external_link}" class="main-list_item_buttons_item green">Сайт</a>
            </div>
        `;

        listContainer.appendChild(item);
    });
}

// Обработчик кликов по вкладкам
document.querySelectorAll('.main-tabs_item').forEach(tab => {
    tab.addEventListener('click', async function () {
        document.querySelectorAll('.main-tabs_item').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const type = this.dataset.type;

        // Показываем индикатор загрузки
        const listContainer = document.getElementById('bookmakers-list');
        listContainer.innerHTML = '<div class="loading">Загрузка данных...</div>';

        try {
            // Получаем данные
            const data = await fetchBookmakers(type);
            renderBookmakers(data);
        } catch (error) {
            console.error('Ошибка загрузки данных:', error);
            listContainer.innerHTML = '<div class="error">Ошибка загрузки данных</div>';
        }
    });
});

document.addEventListener('DOMContentLoaded', async () => {
    const initialType = document.querySelector('.main-tabs_item.active').dataset.type;
    const data = await fetchBookmakers(initialType);
    renderBookmakers(data);
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bookmakers-list').addEventListener('mouseover', (e) => {
        if (e.target.closest('.rating-stars img')) {
            const star = e.target;
            star.style.transform = 'scale(1.2)';
            star.style.transition = 'transform 0.2s ease';
        }
    });

    document.getElementById('bookmakers-list').addEventListener('mouseout', (e) => {
        if (e.target.closest('.rating-stars img')) {
            const star = e.target;
            star.style.transform = 'scale(1)';
        }
    });
});