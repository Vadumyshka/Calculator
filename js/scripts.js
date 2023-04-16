// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })

    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


function ins(number) {
    document.form.textview.value = document.form.textview.value + number;
}

function clean() {
    document.form.textview.value = "";
}

function oneDeletes() {
    var num = document.form.textview.value;
    document.form.textview.value = num.substring(0, num.length - 1);

}

function rowno() {
    var num = document.form.textview.value;
    if (num) {
        document.form.textview.value = eval(num);
    }
}


