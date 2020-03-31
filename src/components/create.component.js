import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validator } from "../core/validator";

export class CreateComponent extends Component {
    constructor ( id ) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.$el, {
            title: [Validator.required],
            fulltext: [Validator.required, Validator.minLength(10)]
        })
    }
}

function submitHandler(event) {
    event.preventDefault()

    if ( this.form.isValid() ) {

        //При отправке формы - проверяем получение данных
        const formData = {
        // не указывается тип если совпадает с названием 
        type: this.$el.type.value,
        ...this.form.value()
        
        } 

        console.log('Submit', formData, this.form.value())
    } else {
        console.warn('Form is invalid');
        
    }

    

}