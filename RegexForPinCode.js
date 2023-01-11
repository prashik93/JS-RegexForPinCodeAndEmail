class RegexForPinCode {

    constructor(...params) {
        this.pinCode = params[0];
    }

    get pinCode() {return this._pinCode;}
    set pinCode(pinCode) {
        let pinCodeRegex = RegExp('(^[1-9][0-9]{5}|(^[1-9][0-9]{2}[\\s][0-9]{3}))$');
        if(pinCodeRegex.test(pinCode)){
            this._pinCode = pinCode;
        }
        else throw "PinCode is Incorrect!"
    }

    toString() {
        return "pinCodeRegex=" + this.pinCode;
    }
}

let regexForPinCode = new RegexForPinCode("400088");
console.log(regexForPinCode.toString());

try{
    regexForPinCode.pinCode = "400 088";
    console.log(regexForPinCode.toString());
} catch(e) {
    console.error(e);
}
