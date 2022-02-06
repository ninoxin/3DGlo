const validator = () => {


    const textInput = document.getElementById('form1-name')
    const phoneInput = document.getElementById('form1-phone')
    const emailInput = document.getElementById('form1-email')
    const form = document.getElementById('form1')

    const textInput2 = document.getElementById('form2-name')
    const phoneInput2 = document.getElementById('form2-phone')
    const emailInput2 = document.getElementById('form2-email')
    const form2 = document.getElementById('form2')

    const textInput3 = document.getElementById('form3-name')
    const phoneInput3 = document.getElementById('form3-phone')
    const emailInput3 = document.getElementById('form3-email')
    const form3 = document.getElementById('form3')

    
    const calcCount = document.getElementById('calc-count')
    const calcDay = document.getElementById('calc-day')
    const calcSquare = document.getElementById('calc-square')
    

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let isError = false

        if (/[^a-z0-9_.~*'!@-]/g.test(emailInput.value) && emailInput.value !== '') {
            alert(' В инпуте только почта')
        } else {
            isError = true
        }

        if (!/[^а-яА-Я-]/g.test(textInput.value) && textInput.value !== '') {
            alert(' В инпуте только кирилица')
        } else {
            isError = true
        }

        if (!/[^() -\d]/g.test(phoneInput.value) && phoneInput.value !== '') {
            alert(' В инпуте только числа')
        } else {
            isError = true
        }

        if (!isError) {
            alert(' Заявка отправлена')
        }
    })

    form2.addEventListener('submit', (e) => {
        e.preventDefault()
        let isError = false

        if (!/[^а-яА-Я-]/g.test(textInput2.value) && textInput2.value !== '') {
            alert(' В инпуте только кирилица2')
        } else {
            isError = true
        }

        if (!/[^() -\d]/g.test(phoneInput2.value) && phoneInput2.value !== '') {
            alert(' В инпуте только числа2')
        } else {
            isError = true
        }

        if (!isError) {
            alert(' Заявка отправлена')
        }
    })

    form3.addEventListener('submit', (e) => {
        e.preventDefault()
        let isError = false

        if (!/[^а-яА-Я-]/g.test(textInput3.value) && textInput3.value !== '') {
            alert(' В инпуте только кирилица3')
        } else {
            isError = true
        }

        if (!/[^() -\d]/g.test(phoneInput3.value) && phoneInput3.value !== '') {
            alert(' В инпуте только числа3')
        } else {
            isError = true
        }

        if (!isError) {
            alert(' Заявка отправлена')
        }
    })

   
    calcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })

    calcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })

    calcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })


}
export default validator