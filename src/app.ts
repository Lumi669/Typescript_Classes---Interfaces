class Department {
  // private readonly id: string;
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployees(employee: string) {
    // this.id = "id1";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

//here admins can use shorthand version codes as well
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
const it = new ITDepartment("id1", ["Rose"]);
it.addEmployees("Rose");
it.addEmployees("Mikko");
it.printEmployeeInformation();
it.describe();
console.log("it = ", it);
