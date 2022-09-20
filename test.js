describe("Account test case",function(){
    it("deposit function test: ", function(){
        let acc=new Account("123",0);
        acc.deposit(20000);
        assert.equal(acc.balance,20000);
    });

    it("withdraw function test: ", function(){
        let acc=new Account("123",30000);
        acc.withdraw(20000);
        assert.equal(acc.balance,10000);
    });

});

describe("Savings account test case",function(){
    it("addInterest function test: ", function(){
        let sacc=new SavingsAccount("123",1000,2);
        sacc.addInterest();
        assert.equal(sacc.balance,1020);
    });
});

describe("Checking account test case",function(){
    it("limit function test, more than limit withdrawal", function(){
        let myChecking = new CheckingAccount("123",2000,1000)
        
        assert.equal(myChecking.withdraw(4000),-1);
    });

    it("limit function test, less than limit withdrawal", function(){
        let myChecking = new CheckingAccount("123",2000,1000)
        myChecking.withdraw(2500);
        assert.equal(myChecking.balance,-500);
    });
});

describe("Bank class test cases",function(){


    it("Add account", function(){
        let myBank=new Bank();
        myBank.addAccount();
        console.log(myBank.nextNum)
       assert.deepEqual(myBank.myArr.length,1);
    });

    it("Add checkingAccount", function(){
        let myBank=new Bank();
        myBank.addAccount();
        myBank.addCheckingAccount(2000);
       assert.deepEqual(myBank.myArr.length,2);
    });

    it("Add Savings account test case", function(){
        let myBank=new Bank();
        myBank.addAccount();
        myBank.addCheckingAccount(2000);
        myBank.addSavingsAccount(3);
       assert.deepEqual(myBank.myArr.length,3);
    });

    it("Account close test", function(){
        let myBank=new Bank();
        myBank.addAccount();
        myBank.addCheckingAccount(2000);
        myBank.addSavingsAccount(3);
        myBank.closeAccount(1);
       assert.deepEqual(myBank.myArr.length,2);
    });

    it("Account Report test case", function(){
        let myBank=new Bank();
        myBank.accountReport();
       assert.deepEqual(myBank.myArr.length,1);
    });

    it("endOfMonth function test case", function(){
        let myBank=new Bank();
        myBank.endOfMonth();
       assert.deepEqual(myBank.myArr.length,1);
    });

})