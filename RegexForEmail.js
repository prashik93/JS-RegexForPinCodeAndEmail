class RegexForEmail {

    constructor(...params) {
        this.email = params[0];
    }

    get email() {return this._email;}
    set email(email) {
        let emailRegex = RegExp('^[a-z]{3}[@][a-z]{3,}$');
        if(emailRegex.test(email)){
            this._email = email;
        }
        else throw "Email is Incorrect!"
    }

    toString() {
        return "emailRegex=" + this.email;
    }
}

let regexForEmail = new RegexForEmail("abc@bridgelabz");
console.log(regexForEmail.toString());

try{
    regexForEmail.email = "abcbridgelabz";
    console.log(regexForEmail.toString());
} catch(e) {
    console.error(e);
}
