# Учебный проект «Седона»

Посмотреть демо можно [здесь.](https://maxlindr.github.io/sedona-demo/index.html)

__Внимание:__ видео на странице Фото и видео не работает и это нормально. Его просто не существует! Это заставка, фейк, муляж, обман! Всё как обычно… Бюджеты распилены, яхты раскуплены, а вместо видео поставлена картинка!

## Техническое задание

### 1. Общие технические требования

    1.1. Сетка: определена в макете.
    1.2. Адаптивность сетки: мобильная, планшетная и десктопная версии («фикс» или «резина»).
    1.3. Адаптивность графики: ретинизация, векторные изображения.
    1.4. Используемая методология: БЭМ.
    1.5. Используемый препроцессор: Less или Sass.
    1.6. Используемый инструмент автоматизации: Gulp.
    1.7. Используемые фреймворки: нет.
    1.8. Кроссбраузерность: Chrome, Firefox, Safari.
    1.9. Типографика: частично определена в макете (прочее — на усмотрение разработчика).
    1.10. Используемый шрифт: PT Sans.

...

### Требования к поведению блоков

### 3. Все макеты

    3.1. Между версиями (мобильная, планшетная, десктопная) сетка может быть как резиновой, так и фиксированной.
    3.2. При фиксированной сетке контентная область центруется и не может быть уже макетной ширины.
    3.3. Логотип на внутренних страницах — это ссылка на главную страницу.
    3.4. Главное меню в мобильной версии появляется над шапкой сайта.
    3.5. Мобильное меню может быть реализовано двумя способами:
        реализация без JS;
        реализация с использованием JS.
    3.6. При реализации без использования JS главное меню в мобильной версии должно быть всегда открыто, а иконка с крестиком — скрыта.
    3.7. При реализации с использованием JS блок с главным меню в мобильной версии должен открываться при нажатии на иконку «гамбургера». Когда меню открыто, иконка «гамбургера» заменяется на крестик. При нажатии на иконку с крестиком меню закрывается.
    3.8. Все состояния элементов при наведении и нажатии указаны в стайлгайде.
    3.9. Логотип HTML Academy в футере ведёт на лендинг интенсива «Профессиональный HTML и CSS, уровень 2».

### 4. Главная

__Мобильная версия (Index > Mobile):__

    4.1. Логотип показывается в самом упрощённом виде.
    4.2. Блок поиска гостиницы: при нажатии на кнопку поиска должен осуществляться переход на отдельную страницу (отдельную страницу верстать не нужно).
    4.3. Блок карты: необходимая реализация — интерактивная карта (карты Google или Яндекса), ширина подстраивается под ширину вьюпорта (но не уже контентной ширины макета), на карте размещён маркер (может быть как кастомным, так и дефолтным), центр карты соответствует центру блока в макете.

__Планшетная версия (Index > Tablet):__

    4.4. Блоки меняют размеры и расположение согласно макету.
    4.5. В составе логотипа добавляются новые элементы.
    4.6. Главное меню открыто всегда вне зависимости от его состояния на мобильной версии.

__Десктопная версия (Index > Desktop):__

    4.7. Блоки меняют размеры и расположение согласно макету.
    4.8. В состав логотипа добавляются новые элементы.

### 5. Форма

__Мобильная версия (Form > Mobile):__

    5.1. Должны быть реализованы кастомные элементы форм.
    5.2. У полей ввода телефона и почты должны быть указаны соответствующие типы для удобного заполнения с телефона.
    5.3. При попытке отправить форму, в которой поля для ввода телефона или почты заполнены данными в неподходящем формате, появляется встроенное в браузер сообщение об ошибке.

__Планшетная версия (Form > Tablet):__

    5.4. Блоки меняют размеры и расположение согласно макету.

__Десктопная версия (Form > Desktop):__

    5.5. Блоки меняют размеры и расположение согласно макету.

### 6. Страница с фото и видео

__Мобильная версия (Photo > Mobile):__

    6.1. Все изображения являются ссылками на полноразмерный вариант (открытие полноразмерного изображения реализовывать не нужно).
    6.2. Работу плеера для проигрывания видео реализовывать не нужно, только вёрстка элементов интерфейса.

__Планшетная версия (Photo > Tablet):__

    6.3. Блоки меняют размеры и расположение согласно макету.

__Десктопная версия (Photo > Desktop):__

    6.4. Блоки меняют размеры и расположение согласно макету.

---

<a href="https://htmlacademy.ru/intensive/adaptive"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/adaptive/logo-for-github-2.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[HTML и CSS, уровень 2](https://htmlacademy.ru/intensive/adaptive)» от [HTML Academy](https://htmlacademy.ru).

[travis-image]: https://travis-ci.com/htmlacademy-adaptive/1449935-sedona-20.svg?branch=master
[travis-url]: https://travis-ci.com/htmlacademy-adaptive/1449935-sedona-20
[dependency-image]: https://david-dm.org/htmlacademy-adaptive/1449935-sedona-20/dev-status.svg?style=flat-square
[dependency-url]: https://david-dm.org/htmlacademy-adaptive/1449935-sedona-20?type=dev
