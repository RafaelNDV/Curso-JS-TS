import validator from 'validator'

export default class Login {
    constructor(formClasss){
        this.form = document.querySelector(formClasss)
    }

    init(){
        this.events()
        console.log('mano')
    }

    events(){
        if(!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e){
        const el = e.target
        const emailinput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')
        let error = false

        if(!validator.isEmail(emailinput.value)){
            alert('Email inválido')
            error = true
        }
        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            alert('Senha precisa ter entre 3 e 50 caracteres')
            error = true
        }
        if(!error) el.submit()
    }
}