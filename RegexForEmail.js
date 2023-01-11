class RegexForEmail {

    constructor(...params) {
        this.email = params[0];
    }

    get email() {return this._email;}
    set email(email) {
        let emailRegex = RegExp('^([a-z 0-9]{3,}|[a-z 0-9]{3,}[-|+|-|.][a-z 0-9]{1,})[@][a-z 0-9]{1,}[.]([com|net|co]{2,3}|[com|net|co]{2,3}[.][au|in|com]{2,3})$');
        if(emailRegex.test(email)){
            this._email = email;
            validEmailsArray.push(email);
        } else {
            inValidEmailsArray.push(email);
        }
    }

    toString() {
        return "emailRegex=" + this.email;
    }
}

let allEmailsArray = ["abc@yahoo.com", "abc-100@yahoo.com", "abc.100@yahoo.com", "abc111@abc.com",
"abc-100@abc.net", "abc.100@abc.com.au", "abc@1.com", "abc@gmail.com.com",
"abc+100@gmail.com", "abc", "abc@.com.my", "abc123@gmail.a", "abc123@.com",
"abc123@.com.com", ".abc@abc.com", "abc()*@gmail.com", "abc@%*.com",
"abc..2002@gmail.com", "abc.@gmail.com", "abc@abc@gmail.com", "abc@gmail.com.1a",
"abc@gmail.com.aa.au"];

let validEmailsArray = new Array();
let inValidEmailsArray = new Array();
let emailRegex = RegExp('^[a-z]{3}[.|_|+|-][a-z]{3,}[@][a-z]{3,}[.][co]{2}[.][a-z]{2}$');
let regexForEmail = new RegexForEmail();

for(let i = 0; i < allEmailsArray.length; i++) {
    regexForEmail.email = allEmailsArray[i];
}

console.log("\nValid Email Are : ");
for(let i = 0; i < validEmailsArray.length; i++) {
    console.log(validEmailsArray[i]);
}

console.log("\nInValid Email Are : ");
for(let i = 0; i < inValidEmailsArray.length; i++) {
    console.log(inValidEmailsArray[i]);
}