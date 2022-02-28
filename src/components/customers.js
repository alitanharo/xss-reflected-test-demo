export class Customer {
  constructor(name, password, balance) {
    {
      this.name = name;
      this.password = password;
      this.balance = balance;
    }

    this.send = function (amount) {
      return (this.balance -= +amount);
    };
    this.receive = function (amount) {
      return (this.balance += +amount);
    };
  }
}

export let student = new Customer("alex", "alex", 200);
export let victim1 = new Customer("tom", "cat", 1000);
export let victim2 = new Customer("jerry", "mous", 500);
