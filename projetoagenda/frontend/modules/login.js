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

        console.log(emailinput.value, passwordInput.value)
    }
}