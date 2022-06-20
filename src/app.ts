class Department {
  static fiscalYear = 2022;
  // private readonly id: string;
  // name: string;
  protected employees: string[] = []; //change private to protected

  constructor(private readonly id: string, public name: string) {
    // this.id = id;  // this.name = n;

    //How to access static property 1
    //here use Department.fiscalYear instead of this.fiscalYear,
    //because it is a static property, static property and method
    //is accessed directly on a class(Department here), not on an instance
    //instantiated with "new" keyoword, therefore, "this" keyword
    //can not be used for static property and method.
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    //How to access static property 2
    // static property fiscalYear can be accessed not only in the constructor
    // by Department.fiscalYear, but also it can be accessed in any function
    // marked with static as long as the function is inside the class
    console.log("from createEmployee fiscalYear = ", Department.fiscalYear);

    return { name: name };
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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
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

    //initialize lastReport otherwise it will show error
    //it doesn't give the reports[0] to lastReport as its value
    //therefore, this line of code doesn't conflict
    //with Line43 (this.lastReport = text;)
    // so, this line can be "this.lastReport = 'aaa'" for example.
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text); //reports is initialized in Line70

    //this line is the codes which gives lastReport a value, not Line78
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
accounting.addReport("Something went wrong....");

//How to use a setter
accounting.mostRecentReport = "hwllo rose";
accounting.printReports();

//How to use a getter
//note: here not adding '()', but only "accounting.mostRecentReport"
console.log(accounting.mostRecentReport);

//create employee using static methods
const employee1 = Department.createEmployee("Rose Ben");
console.log("employee1 = ", employee1);

//How to access static property 3
console.log("fiscalYear = ", Department.fiscalYear);

const it = new ITDepartment("d1", ["Rose"]);

accounting.addEmployee("Max"); //Max will not be added into employees array

accounting.addEmployee("Manu"); //Menu will be added into employees array

accounting.printEmployeeInformation();
