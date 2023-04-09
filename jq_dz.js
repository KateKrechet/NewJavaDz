function reload(time) {
    location.reload()
}

function Speed(dist, time) {
    let v = Math.ceil((dist / time)*100)/100
    if ((dist > 0) && (time > 0)) {
        $('#result1').html('Необходимая скорость ' + v + ' км/ч')
    } else {
        $('#result1').html('<h2>Повторите ввод!</h2>')
    }
    setTimeout(reload, 3000)
}

function Shop(money, price) {
    if ((price < 0) || (money <= 0)) {
        $('#result2').html('Повторите ввод')
    } else if ((price === 0) && (money > 0)) {
        $('#result2').html('Вы забыли внести стоимость товара!')
    } else if (price > money) {
        $('#result2').html('У вас недостаточно средств!')
    } else {
        let product = Math.floor(money / price)
        let change = Math.ceil((money - product * price) * 100) / 100
        $('#result2').html('Можем купить ' + product + ' штук <br>Остаток денег (руб): ' + change + '')
    }

    setTimeout(reload, 3000)

}

const dol_to_rub = 78.6
const rub_to_euro = 93.3

function DolToEuro(dollar) {
    if (dollar <= 0) {
        $('#result3').html('Повторите ввод')
    } else {
        let result = Math.ceil((dollar * dol_to_rub / rub_to_euro) * 100) / 100
        $('#result3').html('В евро сумма составляет: ' + result + '')
    }
    setTimeout(reload, 3000)
}


$('#speed').click(function () {
    Speed(Number($('#distance').val()), Number($('#time').val()))
})
$('#product').click(function () {
    Shop(Number($('#money').val()), Number($('#price').val()))
})
$('#converter').click(function () {
    DolToEuro(Number($('#dollar').val()))
})