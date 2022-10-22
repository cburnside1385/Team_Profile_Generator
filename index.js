//required//
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./assets/script");
const validator = require("email-validator");

const writeFileAsync = util.promisify(fs.writeFile);

let teamArray = [];
let teamMembers = ``;

console.clear();
console.log("******************");


async function Start() {
    try {
        await prompt()

        for (let i = 0; i < teamArray.length; i++) {
            teamMembers = teamMembers + html.completedProfile(teamArray[i]);
        }

        let completeHtml = html.completedHTML(teamMembers)

        console.clear();
        writeFileAsync("./dist/index.html", completeHtml);

        console.clear();
        console.log("*******************************");
        console.log("Html file created successfully");
        console.log("*******************************");

    } catch (err) {
        return console.log(err);
    }
}

async function prompt() {
    let responseDone = "";

    do {
        try {
            console.log("******");
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Employee name:",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Employee ID: ",
                    validate: function validateName(name) {
                        return name !== "";
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Employee Email address: ",
                    validate: function validateName(name) {
                        return validator.validate(name);
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "Employee position: ",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                    ]
                }
            ]);

            let response2 = ""

            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Employee github username: ",
                    validate: function validateName(name) {
                        return name !== "";
                    },
                },]);

                const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                teamArray.push(engineer);

            } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "Employee office number: ",
                    validate: function validateName(name) {
                        return name !== "";
                    },
                },]);

          
                const manager = new Manager(response.name, response.id, response.email, response2.x);
                teamArray.push(manager);

            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([{
                    type: "input",
                    name: "x",
                    message: "School the employee is attending: ",
                    validate: function validateName(name) {
                        return name !== "";
                    },
                },]);

            
                const intern = new Intern(response.name, response.id, response.email, response2.x);
                teamArray.push(intern);
            }
        } catch (err) {
            return console.log(err);
        }
        responseDone = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Would you like to add another Employee Profile? ",
            choices: [
                "Yes",
                "No"
            ]
        },]);
    } while (responseDone.finish === "Yes");
}

//Start the program//
Start();