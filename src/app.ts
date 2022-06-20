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
  lastReport: string;

  //create a getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Report not found.");
  }

  //create a setter
  set mostRecentReport(value: string) {
    //if value ==='', then !value is true
    if (!value) {
      throw new Error("Please pass in a valid avlue");
    }
    this.addReport(value);
  }

  //shorthand version of initializing
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");

    //initialize lastReport if not show error
    //it doesn't give the reports[0] to lastReport as its value
    //therefore, this line of code doesn't conflict
    //with Line43 (this.lastReport = text;)
    // so, this line can be "this.lastReport = 'aaa'" for example.
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text); //reports is initialized in Line21

    //this line is the codes which gives lastReport a value, not Line36
    this.lastReport = text;
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
accounting.addReport("Something went wrong....kkk");

//How to use a setter
accounting.mostRecentReport = "hwllo rose";
accounting.printReports();

//How to use a getter
//note: here not adding '()', but only "accounting.mostRecentReport"
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max"); //Max will not be added into employees array

accounting.addEmployee("Manu"); //Menu will be added into employees array

accounting.printEmployeeInformation();
