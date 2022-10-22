const Intern = require("../lib/Intern");

test("setting school via the constructor argument", () => {
    const testValue = "Central Michigan University";
    const employee = new Intern("Burney", 1, "Email@email.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Burney", 1, "Email@email.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "Central Michigan University";
    const employee = new Intern("Burney", 1, "Email@email.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});