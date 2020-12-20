import Validations from './Validations'

export default class RegistrationValidations {
    email: string;
    password: string;
    submitPassword: string;
   
    constructor(email: string, password: string, submitPassword: string) {
        this.email = email,
        this.password = password,
        this.submitPassword = submitPassword
    }

    checkValidations() {
        let errors: string[] = [];
        if(!Validations.checkEmail(this.email)) {
            errors['email'] = 'Не email';
        }

        if(!Validations.minLength(this.password, 8)) {
            errors['password'] = 'Пароль должен быть больше 8 символов';
        }
    }
}