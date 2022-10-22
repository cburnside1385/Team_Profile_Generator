const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "Burnside";
    const employee = new Engineer("Burney", 1, "Email@email.com.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Burney", 1, "Email@email.com.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "Burnside";
    const employee = new Engineer("Burney", 1, "Email@email.com.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})