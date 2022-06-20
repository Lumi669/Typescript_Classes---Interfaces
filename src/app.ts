class Department {
  // private readonly id: string;
  // name: string;
  protected employees: string[] = []; //change private to protected

  constructor(private readonly id: string, public name: string) {
    // this.id = id;  // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }
  addEmployees(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees);
  }
}
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return; //not add Max as empolyee
    }
    this.employees.push(name);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d22", []);
accounting.addEmployee("Max"); //Max will not be added into employees array
accounting.addEmployee("Manu"); //Menu will be added into employees array
accounting.printEmployeeInformation();
