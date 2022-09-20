class Bank{
    myArr = [];

    addAccount(){
        let ac = new Account(this.myArr.length.toString(),0);
        this.myArr.push(ac);
        return this.myArr.length;
    }

    addSavingsAccount(interest){
        let ac = new SavingsAccount(this.myArr.length.toString(),0,interest);
        this.myArr.push(ac);
        return this.myArr.length;
    }

    addCheckingAccount(limit){
        let ac = new CheckingAccount(this.myArr.length.toString(),-300,limit);
        this.myArr.push(ac);
        return this.myArr.length;
    }

    closeAccount(num){
       var filtered = this.myArr.filter(x => x.number!=num);
       this.myArr =filtered;
    }

    accountReport(){
       for(let x of this.myArr){
        if(x.limit!=null){
            console.log("Account Type: "+x.constructor.name+ 
            " Account No: "+x.number+
            " Balance: "+x.balance+
            " limit: "+x.limit);

        }else if(x.interest!=null){
            console.log("Account Type: "+x.constructor.name+ 
            " Account No: "+x.number+
            " Balance: "+x.balance+
            " Interest: "+x.interest);
        }else { 
            console.log("Account Type: "+x.constructor.name+ 
            " Account No: "+x.number+
            " Balance: "+x.balance);
        }
       }
    }

    endOfMonth(){
        for( let x of this.myArr){
            if(x.limit!=null && x.balance<0){
                console.log("\nWarning, low balance "+x.constructor.name+" "+
                x.number+" : balance "+x.balance+" : overdraft limit: "+x.limit);
            }else if(x.interest!=null){
                console.log("\nInterest added "+x.constructor.name+" "+
                x.number+" : balance "+x.balance+" : interest "+x.interest)
            }else{
                return;
            }
        }
    }
}

let bb = new Bank();

bb.addAccount();
bb.addAccount();
bb.addAccount();
bb.addAccount();
bb.addCheckingAccount(400);
bb.addSavingsAccount(9);
console.log(bb.myArr)
bb.accountReport();

bb.endOfMonth();