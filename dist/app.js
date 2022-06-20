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
class ITDepartment extends Department {
    constructor(id, admins) {
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
//# sourceMappingURL=app.js.map