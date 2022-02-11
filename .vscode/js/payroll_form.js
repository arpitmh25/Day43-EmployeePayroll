const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

class EmployeePayrollData {

    constructor(...params) {
        this.name = params[0];
        this.profileImage = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "**** NAME is Incorrect ****";
    }

    get profileImage() {
        return this._profileImage;
    }

    set profileImage(profileImage) {
        this._profileImage = profileImage;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;

    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        let future = new Date();
        future.setDate(future.getDate() + 30);
        if (startDate < new Date() || startDate < future)
            this._startDate = startDate;
        else
            throw "**** START DATE is Incorrect ****";
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }


    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Name = " + this.name + ", Profile Image = " + this.profileImage + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = " + this.salary + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
    }
}

function save() {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = document.querySelector("#name").value;
    } catch (error) {
        alert(error);
        return;
    }
    employeePayrollData.gender = document.querySelector("#male").checked ? "M" : "F";
    employeePayrollData.salary = document.querySelector("#salary").value;
    dateString = document.querySelector("#month").value + " " + document.querySelector("#day").value + ", " + document.querySelector("#year").value;
    try {
        employeePayrollData.startDate = new Date(dateString);
    } catch (error) {
        alert(error);
        return;
    }
    let departmentsArray = [];
    document.querySelectorAll("[name=department]").forEach(input => {
        if (input.checked) departmentsArray.push(input.value);
    });
    try {
        employeePayrollData.departments = departmentsArray;
    } catch (error) {
        alert(error);
        return;
    }
    alert("Employee Added Successfully!\n" + employeePayrollData.toString());
}

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
salary.oninput = function() {
    output.textContent = salary.value;
};
