// Создали объект
let tikTakBoom = {
    // countOfPlayers: 2,
    init(
        tasks,
        timerField,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2
    ) {
        this.countOfPlayers = parseInt(FormSelect.value);
        //const timeValueInput = document.getElementById('timeValue');
        //this.boomTimer = 30;
        this.boomTimer = parseInt(timeValueInput.value);
        //пауза в секундах перед ходом
        this.timer3sec = 0;
        //максимальное время на подготовку к ходу для игрока
        this.timer3const = 3;
        this.timer3SecID = -1;
        //признак, что запущен основной таймер и идет игра
        //this.timer1Run = false;
        //Объект со счетчиками по количеству игроков
        //{Player1: 30, Player2: 30, ...}
        this.boomTimerArray = {};
        for (let i = 1; i <= this.countOfPlayers; i++ ) {
            this.boomTimerArray['Player' + i] = this.boomTimer; 
        }

        // Создаем структуру вопросов
        try{
            this.tasks = JSON.parse(tasks);
        }
        catch{
            alert('Обнаружена некорректная струкура в справочнике вопросов.\nПродолжение игры невозможно.');
            return;
        };
        
        try {
            if (!this.tasks.every(el => xor(el.answer1.result, el.answer2.result))) {
                throw new Error('В одном из заданий указаны два положительных или два отрицательных ответа!\nПродолжение игры невозможно.')
            };
            if (!this.tasks.every(el => el.question && el.question.trim().length > 0 )) {
                throw new Error('В одном из заданий нет вопроса или он пустой!\nПродолжение игры невозможно.')
            };
            if (!this.tasks.every(el => el.answer1.value && el.answer2.value && 
                                        el.answer1.value.trim().length > 0 && 
                                        el.answer2.value.trim().length > 0 )) {
                throw new Error('В одном из заданий найден пустой ответ!\nПродолжение игры невозможно.')
            };
            if (!this.tasks.every(el => el.answer1.value && el.answer2.value && 
                el.answer1.value.trim().length > 0 && 
                el.answer2.value.trim().length > 0 )) {
            throw new Error('В одном из заданий найден пустой ответ!\nПродолжение игры невозможно.')
            };
            if (this.tasks.length < 30) {
            throw new Error('Найдено менее 30 заданий!\nПродолжение игры невозможно.')
            };                        
        } catch(anyException) {
            alert(anyException.message);
            return;
        };

        // Ссылаемся на параметры текущего объекта
        this.timerField = timerField;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;

        //Количество верных ответов
        this.needRightAnswers = 19;
        $('#btnStop').collapse('hide');
        $('#cntPlayers').collapse('show');
        $('#btnStart').collapse('show');
        $('#time_second').collapse('show');

    },

    run() { // Начало игры
        $('#btnStop').collapse('show');
        $('#btnStart').collapse('hide');
        $('#cntPlayers').collapse('hide');
        $('#time_second').collapse('hide');
        
        this.state = 0;

        this.rightAnswers = 0;
        this.turnOn();
        //this.timer();
    },

    turnOn() { 
        // Выводим статусное поле
        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
        this.gameStatusField.innerText = `Вопрос игроку №${this.state}`;  
        // Получим случайный вопрос
        const taskNumber = randomIntNumber(this.tasks.length - 1);
        this.printQuestion(this.tasks[taskNumber]);
        // Удаляем из списка вопросов заданный вопрос
        this.tasks.splice(taskNumber, 1);

        //timer 2 start 3 sec
        this.timer3sec = this.timer3const;
        this.countdown();
    },

    //функция вызывается при нажатии на любую кнопку с ответом
    turnOff(value) { // Отвечаем на вопросы
        //если ответили раньше 3х секунд на подготовку,
        //то отстановить счетчик 2
        if (this.timer3SecID !== -1) {
            clearTimeout(this.timer3SecID);
            this.timer3SecID = -1;
            this.timer3sec = 0;
        };
        // Удаляем обработчик на клик по ответам
        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
        
        //проверим ответ
        //Если result === true
        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!';
            //прибавить правильный ответ 
            this.rightAnswers += 1;
            //и 5 сек ко времени текущего игрока
            this.boomTimerArray['Player' + this.state] +=5;
        } else {
            this.gameStatusField.innerText = 'Неверно!';
            //уменьшить на 5 сек  время текущего игрока при ошибке
            this.boomTimerArray['Player' + this.state] -=5;
        }
        //если правильных ответов меньше требуемого кол-ва
        if (this.rightAnswers < this.needRightAnswers) {
        //если вопросов не осталось - проиграл
            if (this.tasks.length === 0) {
                this.finish('lose');
            } else {
                //иначе следующий начать ход
                this.turnOn();
            }
        } else {
            //если ответов достаточно - выиграл
            this.finish('won');
        }

    },

    printQuestion(task) {
        this.textFieldQuestion.innerText = task.question;
        this.textFieldAnswer1.innerText = task.answer1.value;
        this.textFieldAnswer2.innerText = task.answer2.value;

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff('answer1'));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff('answer2'));
        //запомнит текущее задание
        this.currentTask = task;
    },

    finish(result = 'lose') {

        $('#btnStop').collapse('hide');
        $('#btnStart').collapse('show');
        $('#cntPlayers').collapse('show');
        $('#time_second').collapse('show');

       
        if (result === 'lose') {
            this.gameStatusField.innerText = 'Player' + this.state + `, Вы проиграли!`;
        }
        if (result === 'won') {
            this.gameStatusField.innerText = 'Player' + this.state + `, Вы выиграли!`;
        }
        this.state = 0;
        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;

        //console.log(this);
    },

    timer() {
        //Если № игрока не 0 и Таймер 2 не работает (счетчик = 0)
        if (this.state && this.timer3sec === 0) {
            //this.boomTimer -= 1;
            //Уменьшим для текущего игрока время на 1
            this.boomTimerArray['Player' + this.state] -= 1;
            let tmp_timer = this.boomTimerArray['Player' + this.state];
            // выведем остаток секунд на экран
            let sec = tmp_timer % 60;
            let min = (tmp_timer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;
            //Если время не кончилось - запустим счетчик ещё на 1 секунду
            if (tmp_timer > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000
                )
            } else {
                //если время кончилось - вызываем проигрыш
                this.finish('lose');
            }
        }
    },

    countdown() {
        console.log('countdown');
        // Если 3 секунды не закончились 
        if (this.timer3sec > 0 ){
            //вывести кол-во секунд на экран
            let sec = this.timer3sec % 60;
            let min = (this.timer3sec - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;
            //console.log(this.timer3sec);
            //счетчик таймера 2 уменьшаем
            this.timer3sec -= 1;
            //запустим таймер2 ещё на 1 секунду и 
            //запомним ID таймера 2 для вызова clearTimeout в turnOff
            this.timer3SecID = setTimeout(() => {
                this.countdown()
            }, 1000 );

        } else {
            //если время таймера 2 закончилось
            console.log('Отсчёт окончен');
            //this.timer1Run = true;
            //ИД таймера 2 присвоим -1
            this.timer3SecID = -1;
            //Запустим основной таймер
            this.timer();
        }
    }
}





    



