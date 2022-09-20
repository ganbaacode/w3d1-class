class SavingsAccount extends Account{
    constructor(number,balance,interest){
        super(number,balance)
        this.interest=interest;
    }

    get interest(){
        return this._interest;
    }

    set interest(value){
        this._interest=value;
    }

    addInterest(){
        this.balance+=this.balance*this.interest/100;
    }

    toString(){
        console.log("Account Type: "+this.constructor.name+ 
                    "\nAccount No: "+this.number+
                    "\nBalance: "+this.balance+
                    "\nInterest: "+this.interest);
    }
}

