class Account{
    constructor(number, balance){
        this.number=number;
        this.balance=balance;
    }

    get number(){
       return this._number;
    }

    get balance(){
        return this._balance;
    }

    set number(value){
        this._number=value;
    }

    set balance(amount){
        this._balance = amount;
    }

    deposit(amount){
        this.balance=this.balance+amount;
    }

    withdraw(amount){
        this.balance=this.balance-amount;
    }
    toString(){
        console.log("Account Type: "+this.constructor.name+ 
                    "\nAccount No: "+this.number+
                    "\nBalance: "+this.balance);
    }

}

