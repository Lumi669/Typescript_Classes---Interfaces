"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("Report not found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid avlue");
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment("d22", []);
accounting.addReport("Something went wrong....kkk");
accounting.mostRecentReport = "hwllo rose";
accounting.printReports();
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map