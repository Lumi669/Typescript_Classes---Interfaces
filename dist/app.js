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
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map