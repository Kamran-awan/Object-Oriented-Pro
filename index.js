#! /usr/bin/env node 
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudents(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "whom would you like interact with",
            choices: ["staff", "student", "exit",],
        });
        if (ans.select == "staff") {
            console.log("You approach staff room! please feel free to ask any question");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Entre the student's name that you wish to engage wtih",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudents(name);
                console.log(`Hello i am ${name.name}. nice to meet you!`);
                console.log("New student added.");
                console.log("Current students list");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name}. nice to see you again!`);
                console.log("Existing student list");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Existing the program....");
            process.exit();
        }
    } while (true);
};
programStart(persons);
