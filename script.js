alert('Через чари злого мага ви перенеслись в інший світ війни та магії.');
alert('І тепер вам треба пройти іспит до кінця, щоб повернутися переможцем.');
alert('Тепер вам треба вибрати персонажа.');
alert('Маг - символ 1, воін - символ 2, стрелок - символ 3.');

let life = 0;
let friend = 0;
let add = 0
let gamer = 0;
let person = 0;
let unit = '';

// ============================= Вибір персонажа ========================

while (gamer !== 1 || gamer !== 2 || gamer !== 3) {

    person = parseInt(prompt('Виберіть персонажа:'));
    gamer = person;

    if (person === 1) {
        life = 100;
        alert('Ітак ви маг.');
        break;
    }

    else if (person === 2) {
        life = 100;
        alert('Ітак ви воін.');
        break;
    }

    else if (person === 3) {
        life = 100;
        alert('Ітак ви стрелок.');
        break;
    }

    else {
        alert('Неправильний символ для персонажа!');
    }

}

// ============================== Розгалудження шляху ==================================

alert('Тепер ви повинні сразитися з декількома супротивниками. \n Та перемогти злого мага. Вперед!');
alert('Ви довго йшли по дорозі, та підійшли до великої скали, \n з написом з рун. Щось ви змогли прочитати.');
alert('Наліво - символ 1, прямо - символ 2, направо - символ 3');

let move = parseInt(prompt('Виберіть напрямок руху:'));

// ============================== Шлях 1 (наліво) =======================================

if (move === 1) {
    alert('Невдовзі по дорозі ви бачите воїна. \n Вам треба перемогти його.');

    // =============================== Битва з воїном =======================================

    if (person === 1) {
        alert('У вас в арсеналі є декілька бойових заклинань, \n посох та заговорений короткий меч.');
        alert('Заклинання - 1, посох - 2, меч - 3.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (70 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (60 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

        if (battle === 3) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (50 - 20) + 20);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

    }

    if (person === 2) {
        alert('У вас в арсеналі є двуручний великий меч, \n та короткий меч.');
        alert('Великий меч - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (70 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (60 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

    }

    if (person === 3) {
        alert('У вас в арсеналі є лук та стрели, \n та короткий меч.');
        alert('Лук - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (70 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (60 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

    }


    // ============================ Загадка 1 ================================

    alert('Далі ідучи по дорозі ви бачите хатинку. \n Хазяйка вас зустріла, накормила, напоїла, \n та приглашає розгадати загадку.');
    alert('Якщо відгадаєте загадку - получите подарунок.');
    let consent = prompt("Якщо згодні пишіть слово 'так' незгодні - слово 'ні'.");

    if (consent.toLowerCase() === 'так') {
        for (i = 0; i < 3; i++) {
            let respond = prompt('Що можно побачити з закритими глазами. Що це?');
            if (respond.toLowerCase() === 'сон') {
                alert('Ви відгадали, отримайте від мене подарунок: сокіл помічник. \n Він супроводжуватиме вас і буде вашим товаришем');
                friend += 1;
                add += 1;
                unit = 'Сокол';
                break;
            }
            else {
                alert('Ви не вгадали.');
            }
        }
    }

    // ======================= Битва з вовками ================================

    alert('Далі по дорозі ви зустрічаєте зграю вовків. \n Прийдеться битися знову.');

    if (person === 1) {

        alert('Яку зброю виберете? Заклинання - 1, посох - 2, меч - 3.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Сокіл атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }
                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }
                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Сокіл атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 3) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Сокіл атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

    }

    if (person === 2) {
        alert('У вас в арсеналі є двуручний великий меч, \n та короткий меч.');
        alert('Великий меч - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Сокіл атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Сокіл атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

    }

    if (person === 3) {
        alert('У вас в арсеналі є лук та стрели, \n та короткий меч.');
        alert('Лук - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Сокіл атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Сокіл атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

    }

}


// ============================== Шлях 2 (прямо) =======================================

else if (move === 2) {
    alert('Невдовзі по дорозі ви бачите воїна. \n Вам треба перемогти його.');

    // =============================== Битва з воїном на шляху 2 =======================================

    let friend = 0;

    if (person === 1) {
        alert('У вас в арсеналі є декілька бойових заклинань, \n посох та заговорений короткий меч.');
        alert('Заклинання - 1, посох - 2, меч - 3.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;

        if (battle === 1) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (70 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);

                if (res <= 60) {
                    let tmp = prompt("Воїн просить оставити його в живих, натомість пропонує вам свою преданість. Ви згодні? 'Так' або 'ні'?");
                    if (tmp.toLowerCase() === 'так') {
                        friend += 1;
                        add += 1;
                        unit = 'Товариш';
                        alert("У вас з'явився друг.");
                        break;
                    }
                }

                else if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (60 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);

                if (res <= 60) {
                    let tmp = prompt("Воїн просить оставити його в живих, натомість пропонує вам свою преданість. Ви згодні? 'Так' або 'ні'?");
                    if (tmp.toLowerCase() === 'так') {
                        friend += 1;
                        add += 1;
                        unit = 'Товариш';
                        alert("У вас з'явився друг.");
                        break;
                    }
                }

                else if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

        if (battle === 3) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (50 - 20) + 20);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);

                if (res <= 60) {
                    let tmp = prompt("Воїн просить оставити його в живих, натомість пропонує вам свою преданість. Ви згодні? 'Так' або 'ні'?");
                    if (tmp.toLowerCase() === 'так') {
                        friend += 1;
                        add += 1;
                        unit = 'Товариш';
                        alert("У вас з'явився друг.");
                        break;
                    }
                }

                else if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

    }

    if (person === 2) {
        alert('У вас в арсеналі є двуручний великий меч, \n та короткий меч.');
        alert('Великий меч - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (70 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);

                if (res <= 60) {
                    let tmp = prompt("Воїн просить оставити його в живих, натомість пропонує вам свою преданість. Ви згодні? 'Так' або 'ні'?");
                    if (tmp.toLowerCase() === 'так') {
                        friend += 1;
                        add += 1;
                        unit = 'Товариш';
                        alert("У вас з'явився друг.");
                        break;
                    }
                }

                else if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (60 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);

                if (res <= 60) {
                    let tmp = prompt("Воїн просить оставити його в живих, натомість пропонує вам свою преданість. Ви згодні? 'Так' або 'ні'?");
                    if (tmp.toLowerCase() === 'так') {
                        friend += 1;
                        add += 1;
                        unit = 'Товариш';
                        alert("У вас з'явився друг.");
                        break;
                    }
                }

                else if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

    }

    if (person === 3) {
        alert('У вас в арсеналі є лук та стрели, \n та короткий меч.');
        alert('Лук - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (70 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);

                if (res <= 60) {
                    let tmp = prompt("Воїн просить оставити його в живих, натомість пропонує вам свою преданість. Ви згодні? 'Так' або 'ні'?");
                    if (tmp.toLowerCase() === 'так') {
                        friend += 1;
                        add += 1;
                        unit = 'Товариш';
                        alert("У вас з'явився друг.");
                        break;
                    }
                }

                else if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                res = res - Math.floor(Math.random() * (60 - 30) + 30);
                alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                life = life - Math.floor(Math.random() * (50 - 10) + 10);
                alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);

                if (res <= 60) {
                    let tmp = prompt("Воїн просить оставити його в живих, натомість пропонує вам свою преданість. Ви згодні? 'Так' або 'ні'?");
                    if (tmp.toLowerCase() === 'так') {
                        friend += 1;
                        add += 1;
                        unit = 'Товариш';
                        alert("У вас з'явився друг.");
                        break;
                    }
                }

                else if (res <= 0) {
                    alert('Ви перемогли!');
                }
                else if (life <= 0) {
                    alert('Ви програли!');
                }
                else {
                    alert('Битва триває.');
                }
            }
        }

    }

    // ======================= Битва з вовками (шляч 2) ================================

    alert('Далі по дорозі ви зустрічаєте зграю вовків. \n Прийдеться битися знову.');

    if (person === 1) {

        alert('Яку зброю виберете? Заклинання - 1, посох - 2, меч - 3.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Ваш товариш атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }
                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }
                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Ваш товариш атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 3) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Ваш товариш атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

    }

    if (person === 2) {
        alert('У вас в арсеналі є двуручний великий меч, \n та короткий меч.');
        alert('Великий меч - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Ваш товариш атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Ваш товариш атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

    }

    if (person === 3) {
        alert('У вас в арсеналі є лук та стрели, \n та короткий меч.');
        alert('Лук - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Ваш товариш атакує вовків.');
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Ваш товариш атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

    }
}

// ============================== Шлях 3 (направо) =======================================

else if (move === 3) {

    // ================================= Загадка 3 (шлях 3) ======================================

    alert('Далі ідучи по дорозі ви бачите рись, яка попала в капкан. \n щоб звільнити рись треба відгадати загадку.');

    let consent = prompt("Якщо згодні пишіть слово 'так' незгодні - слово 'ні'.");

    if (consent.toLowerCase() === 'так') {
        for (i = 0; i < 3; i++) {
            let respond = prompt('Що збільшується, але ніколи не зменьшеється. Що це?');
            if (respond.toLowerCase() === 'вік') {
                alert('Ви відгадали, рись біжить за вами. \n Вона супроводжуватиме вас і буде вашим помічником');
                friend = 1;
                add += 1;
                unit = 'Рись';
                break;
            }
            else {
                alert('Ви не вгадали.');
            }
        }
    }


    alert('Невдовзі по дорозі ви бачите воїна. \n Вам треба перемогти його.');

    // =============================== Битва з воїном (шлях 3) =======================================

    if (person === 1) {
        alert('У вас в арсеналі є декілька бойових заклинань, \n посох та заговорений короткий меч.');
        alert('Заклинання - 1, посох - 2, меч - 3.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує воїна.');
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);

                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує воїна.');
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 3) {

            while (res > 0 && life > 0) {
                if (friend === 1) {
                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує воїна.');
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

    }

    if (person === 2) {
        alert('У вас в арсеналі є двуручний великий меч, \n та короткий меч.');
        alert('Великий меч - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує воїна.');
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує воїна.');
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

    }

    if (person === 3) {
        alert('У вас в арсеналі є лук та стрели, \n та короткий меч.');
        alert('Лук - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує воїна.');
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує воїна.');
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон воїну у воїна залишилося ${res} процентів життя.`);
                    life = life - Math.floor(Math.random() * (50 - 10) + 10);
                    alert(`Воїн вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

    }


    // ======================= Битва з вовками (шлях 3)================================

    alert('Далі по дорозі ви зустрічаєте зграю вовків. \n Прийдеться битися знову.');

    if (person === 1) {

        alert('Яку зброю виберете? Заклинання - 1, посох - 2, меч - 3.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }
                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }
                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 3) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

    }

    if (person === 2) {
        alert('У вас в арсеналі є двуручний великий меч, \n та короткий меч.');
        alert('Великий меч - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

    }

    if (person === 3) {
        alert('У вас в арсеналі є лук та стрели, \n та короткий меч.');
        alert('Лук - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert('Рись атакує вовків.')
                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон вовкам.`);

                    if (res <= 75 && res >= 50) {
                        alert('Один вовк загинув.')
                    }
                    else if (res < 50 && res >= 25) {
                        alert('Два вовка загинуло.')
                    }
                    else if (res <= 0) {
                        alert('Три вовки загинуло.')
                    }

                    life = life - Math.floor(Math.random() * (10 - 1) + 1);
                    alert(`Вовки вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0) {
                        alert('Ви перемогли!');
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

    }

}

// =================================== Загадка =====================================

alert('Нарешті ви підійшли до замка злого мага, \n але щоб сразитись з магом вам треба відгадати загадку.');
let result1 = 0;

let respond = prompt('Вранці - чотири, в обід - дві, вечором - три. Що це? У вас всього одна спроба.');
if (respond.toLowerCase() === 'людина') {
    alert('Ви відгадали, тепер битва з магом');
    if (add === 1) {
        friend = 1;
    }
    else {
        friend = 0;
    }

    // =================================== Битва з магом ==================================

    life = 100;

    if (person === 1) {

        alert('Яку зброю виберете? Заклинання - 1, посох - 2, меч - 3.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`${unit} атакує мага`);
                    alert(`У мага залишилося ${res} процентів життя`);
                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    alert(`У мага залишилося ${res} процентів життя`);
                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`${unit} атакує мага`)
                    alert(`У мага залишилося ${res} процентів життя`);

                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    alert(`У мага залишилося ${res} процентів життя`);

                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

        if (battle === 3) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон магу.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`${unit} атакує мага`);
                    alert(`У мага залишилося ${res} процентів життя`);


                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (50 - 20) + 20);
                    alert(`Ви нанесли урон магу.`);
                    alert(`У мага залишилося ${res} процентів життя`);

                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }
            }
        }

    }

    if (person === 2) {
        alert('У вас в арсеналі є двуручний великий меч, \n та короткий меч.');
        alert('Великий меч - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`${unit} атакує мага`);
                    alert(`У мага залишилося ${res} процентів життя`);


                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    alert(`У мага залишилося ${res} процентів життя`);


                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`${unit} атакує мага`)
                    alert(`У мага залишилося ${res} процентів життя`);


                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    alert(`У мага залишилося ${res} процентів життя`);

                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам нанесли урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

    }

    if (person === 3) {
        alert('У вас в арсеналі є лук та стрели, \n та короткий меч.');
        alert('Лук - 1, короткий меч - 2.');
        let battle = parseInt(prompt('Виберіть зброю:'));
        let res = 100;
        if (battle === 1) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`${unit} атакує мага`);
                    alert(`У мага залишилося ${res} процентів життя`);

                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (70 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    alert(`У мага залишилося ${res} процентів життя`);

                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

        if (battle === 2) {

            while (res > 0 && life > 0) {
                if (friend === 1) {

                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    res = res - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`${unit} атакує мага`);
                    alert(`У мага залишилося ${res} процентів життя`);

                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

                else if (friend === 0) {
                    res = res - Math.floor(Math.random() * (60 - 30) + 30);
                    alert(`Ви нанесли урон магу.`);
                    alert(`У мага залишилося ${res} процентів життя`);

                    life = life - Math.floor(Math.random() * (30 - 10) + 10);
                    alert(`Маг вам наніс урон у вас залишилося ${life} процентів життя.`);
                    if (res <= 0 && life > 0) {
                        alert('Ви перемогли!');
                        result1 += 1;
                    }
                    else if (life <= 0) {
                        alert('Ви програли!');
                    }
                    else {
                        alert('Битва триває.');
                    }
                }

            }
        }

    }

}
else {
    alert('Ви не вгадали.');
}


if (result1 === 1) {
    alert('Вітаємо з перемогою!');
}
else {
    alert('Ви програли... Наступного разу вам пощастить.');
}

