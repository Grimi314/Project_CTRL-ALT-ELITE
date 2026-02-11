# ArtistsHub
## _Занурься у світ улюблених виконавців_

ArtistsHub - це адаптивний вебзастосунок для перегляду музичних виконавців з бази даних:
з картками артистів, модальним вікном з детальною інформацією, альбомами/треками та секцією відгуків. 

Жива сторінка: https://grimi314.github.io/Project_CTRL-ALT-ELITE/  
Репозиторій: https://github.com/Grimi314/Project_CTRL-ALT-ELITE  
Макет (Figma): https://www.figma.com/design/QzED11W6Vgdcv6VoXtvA3h/ArtistsHub?node-id=8246-1856&t=3PD2AyWJfN3uZRdn-0  
API-документація: https://sound-wave.b.goit.study/api-docs/

## Основні можливості

- Адаптивність під 320 / 768 / 1440 px
- Фіксований Header з навігацією по секціях та мобільним меню
- Hero з кнопкою *Explore Artists* 
- Artists Section
  - стартово 8 карток артистів 
  - *Load More* підвантажує наступну порцію та додає до списку
  - *Learn More* відкриває модальне вікно з деталями артиста
- About artists  Modal
    - відображає детальну інформацію про артиста
    - треки з YouTube-лінком відкриваються в новій вкладці
    - кнопка закриття модального вікна
- Feedback Section
    - відображає відгуки користувачів
    - свайпер для перегортання відгуків (Swiper.js)
    - кнопка для залишення відгуку
- Лоадер під час будь-яких запитів на бекенд
- Обробка помилок запитів + push-повідомлення користувачу
    - повідомлення відображаються за допомогою бібліотеки iziToast

## Технології

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript 
- Axios 
- Swiper.js 
- css-star-rating
- iziToast 
- Vite 

## API

Проєкт використовує бекенд:
https://sound-wave.b.goit.study/api-docs/

Основні ендпоінти:

- GET /genres - список музичних жанрів
- GET /artists - список артистів (з параметрами пошуку)
- GET /artists/{id} - детальна інформація про артиста
- GET /artists/{id}/albums - альбоми та треки артиста
- GET /feedbacks - список відгуків
- POST /feedbacks - створення нового відгуку

## Запуск проєкту 

1) Клонувати репозиторій

git clone https://github.com/Grimi314/Project_CTRL-ALT-ELITE.git
cd Project_CTRL-ALT-ELITE

2) Встановити залежності

npm install

3) Запустити проєкт локально

npm run dev

4) Зібрати проєкт для продакшену

npm run build

5) Переглянути зібрану версію локально

npm run preview
## Команда

Проєкт виконано командою CTRL-ALT-ELITE.

### Ролі
- Team Lead: Сергій Мар’ян  
- Scrum Master: Анастасія Нотич  

### Розподіл секцій

| Блок / секція | Відповідальні |
|---|---|
| Header + Mobile Menu | Наталя Товстих |
| Hero Section | Сергій Пригода |
| Artists Section | Євген Качан, Анастасія Нотич |
| Artist Details Modal | Сергій Мар’ян, Андрій Лушпак |
| About Us Section | Влада Бадида |
| Feedback Section | Данило Дашко, Денис Грицун |
| Feedback Modal | Вероніка Шуст |
| Footer | Сергій Таран |
