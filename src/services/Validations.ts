export default class Validations {
    static checkEmail(email: string) {
        if((/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).test(email)){
            return true;
        } else {
            return false;
        }
    }

    static minLength(name:string, minLength:number){
        if(name.length < minLength) {
            return false
        }
        return true
    }
}