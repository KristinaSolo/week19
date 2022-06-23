class Validator{
    constructor(form){
        this.form=form;
    }
    isName(form){
        if(form.match("^[0-9A-Za-z_.-]+$")){
            return true
        }
        else{
            return false;
        }
    }

    isEmail(form){
        if(form.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)){
            return true;
        }
        else{
            return false;
        }
    }  

    isPhone(form){
        if(form.match(/\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/)){
            return true
        }
        else{
            return false
        }
    }
    isDate(form){
        if(form.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/)){
            return true
        }
        else{
            return false
        }
    }
    isDomain(form) {
        if (form.match(/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/)) {
            return true;
        } else {
            return false;
        }
    }

}

let validator = new Validator();
console.log(validator.isName('Alisa'));
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'))

