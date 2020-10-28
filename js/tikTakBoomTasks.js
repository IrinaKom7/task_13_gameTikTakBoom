const tasks = `

    [
        {
            "question": "2 * 2 = ",
            "answer1": { "result": true, "value": "4" },
            "answer2": { "result": false, "value": "3" }
        },
        {
            "question": "Как зовут крокодила, лучшего друга Чебурашки?",
            "answer1": { "result": false, "value": "Данди" },
            "answer2": { "result": true, "value": "Гена" }
        },
        {
            "question": "5 + 5",
            "answer1": { "result": false, "value": "1" },
            "answer2": { "result": true, "value": "10" }
        },
        {
            "question": "Столица Италии?",
            "answer1": { "result": false, "value": "Ватикан" },
            "answer2": { "result": true, "value": "Рим" }
        },
        {
            "question": "Столица Белоруссии?",
            "answer1": { "result": true, "value": "Минск" },
            "answer2": { "result": false, "value": "Могилев" }
        },
        {
            "question": "Столица Испании?",
            "answer1": { "result": false, "value": "Севилья" },
            "answer2": { "result": true, "value": "Мадрид" }
        },
        {
            "question": "Модель Земли?",
            "answer1": { "result": false, "value": "Карта" },
            "answer2": { "result": true, "value": "Глобус" }
        },
        {
            "question": "Одна из крупнейших рек в мире и длиннейшая в Европе?",
            "answer1": { "result": false, "value": "Лена" },
            "answer2": { "result": true, "value": "Волга" }
        },
        {
            "question": "Место, где река берет своё начало? ",
            "answer1": { "result": true, "value": "Исток" },
            "answer2": { "result": false, "value": "Устье" }
        },
        {
            "question": "Самое мелкое море в мире?",
            "answer1": { "result": false, "value": "Черное" },
            "answer2": { "result": true, "value": "Азовское" }
        },
        {
            "question": "Эти горы разделяют Азию и Европу",
            "answer1": { "result": false, "value": "Кавказские" },
            "answer2": { "result": true, "value": "Уральские" }
        },
        {
            "question": "Ящерица – непревзойденный мастер маскировки?",
            "answer1": { "result": false, "value": "Варан" },
            "answer2": { "result": true, "value": "Хамелеон" }
        },
        {
            "question": " Животное-лентяй = ",
            "answer1": { "result": true, "value": "Ленивец" },
            "answer2": { "result": false, "value": "Кот" }
        },
        {
            "question": "Самый крупный грызун в мире?",
            "answer1": { "result": false, "value": "Морская свинка" },
            "answer2": { "result": true, "value": "Капибара" }
        },
        {
            "question": "Животное с ветвистыми рогами",
            "answer1": { "result": false, "value": "Лось" },
            "answer2": { "result": true, "value": "Олень" }
        },
        {
            "question": "Грызун со страшными иголками",
            "answer1": { "result": false, "value": "Ёжик" },
            "answer2": { "result": true, "value": "Дикобраз" }
        },
        {
            "question": "Животное, которого самая длинная шея?",
            "answer1": { "result": true, "value": "Жираф" },
            "answer2": { "result": false, "value": "Лебедь" }
        },
        {
            "question": "Редкий крупный жук, прячущийся под камнями?",
            "answer1": { "result": false, "value": "Майский" },
            "answer2": { "result": true, "value": "Жужелица" }
        },
        {
            "question": "Обитатель моря, обжигающий человека словно крапивой?",
            "answer1": { "result": false, "value": "Осьминог" },
            "answer2": { "result": true, "value": "Медуза" }
        },
        {
            "question": "Кто смог прогнать лису из зайкиной избушки?",
            "answer1": { "result": false, "value": "Медведь" },
            "answer2": { "result": true, "value": "Петух" }
        },
        {
            "question": "Герой сказки, который лопнул от хохота?",
            "answer1": { "result": true, "value": "Пузырь" },
            "answer2": { "result": false, "value": "Колобок" }
        },
        {
            "question": "Кем была лягушка, поймавшая стрелу?",
            "answer1": { "result": false, "value": "Королева" },
            "answer2": { "result": true, "value": "Царевна" }
        },
        {
            "question": "Как звали мальчика, который не послушался своей старшей сестры и стал козленочком?",
            "answer1": { "result": false, "value": "Добрыня" },
            "answer2": { "result": true, "value": "Иванушка" }
        },
        {
            "question": "Кто в одной из русских народных сказок обманул медведя и оставил его голодным?",
            "answer1": { "result": false, "value": "Баба" },
            "answer2": { "result": true, "value": "Мужик" }
        },
        {
            "question": "Он ходил в сапогах в одной из сказок Шарля Перро",
            "answer1": { "result": true, "value": "Кот" },
            "answer2": { "result": false, "value": "Мушкетёр" }
        },
        {
            "question": "Мальчик, которому черепаха дала золотой ключик?",
            "answer1": { "result": false, "value": "Пьеро" },
            "answer2": { "result": true, "value": "Буратино" }
        },
        {
            "question": "Кем был Илья Муромец?",
            "answer1": { "result": false, "value": "Воин" },
            "answer2": { "result": true, "value": "Богатырь" }
        },
        {
            "question": "Кто развалил Теремок?",
            "answer1": { "result": false, "value": "Волк" },
            "answer2": { "result": true, "value": "Медведь" }
        },
        {
            "question": "Какое ключевое слово позволяет создавать объекты общего вида?",
            "answer1": { "result": true, "value": "object" },
            "answer2": { "result": false, "value": "this" }
        },
        {
            "question": "Данный тип имеет два значения, true или false. Используется для сравнения и проверки условий?",
            "answer1": { "result": false, "value": "string" },
            "answer2": { "result": true, "value": "boolean" }
        },
        {
            "question": "Переменные, объявленные внутри тела функции?",
            "answer1": { "result": false, "value": "Глобальные" },
            "answer2": { "result": true, "value": "Локальные" }
        },
        {
            "question": "Какой оператор завершает выполнение текущего цикла?",
            "answer1": { "result": false, "value": "stop" },
            "answer2": { "result": true, "value": "break" }
        },
        {
            "question": "Какой оператор останавливает текущую итерацию цикла и запускает новую?",
            "answer1": { "result": true, "value": "continue" },
            "answer2": { "result": false, "value": "break" }
        },
        {
            "question": "Фрагменты текста, которые могут быть добавлены в код, и которые игнорируются браузером?",
            "answer1": { "result": false, "value": "Теги" },
            "answer2": { "result": true, "value": "Комментарии" }
        },
        {
            "question": "Данный объект позволяет хранить уникальные значения, примитивы и ссылки на объекты?",
            "answer1": { "result": false, "value": "Map" },
            "answer2": { "result": true, "value": "Set" }
        },
        {
            "question": "Элемент, в котором происходит событие, или элемент, вызвавший событие?",
            "answer1": { "result": false, "value": "Event.isTrusted" },
            "answer2": { "result": true, "value": "Event.target" }
        }
    ]
`;
