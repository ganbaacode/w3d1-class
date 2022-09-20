class CheckingAccount extends Account{
    constructor(number,balance,limit){
        super(number,balance);
        this.limit=limit;
    }

    get limit(){
        return this._limit;
    }

    set limit(amt){
        this._limit=amt;
    }

    withdraw(amt){
        if(amt>this.balance+this.limit){
            return -1;
        }else{
            this._balance=this.balance-amt;
        }
        
    }

    toString(){
        console.log("Account Type: "+this.constructor.name+ 
                    "\nAccount No: "+this.number+
                    "\nBalance: "+this.balance+
                    "\nlimit: "+this.limit);
    }
}

