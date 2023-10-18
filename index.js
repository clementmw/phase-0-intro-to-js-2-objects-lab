const employee = {
    name : "James",
    streetAddress : "390 Washington",

}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    // Copy the original employee object to a new object
    let newEmployee = Object.assign({}, employeeObject);
    // Update the new object with the provided key and value
    newEmployee[key] = value;
    return newEmployee;
}

// Update the employee object with a new name
let newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");

// console.log(newEmployee);



function destructivelyUpdateEmployeeWithKeyAndValue (employeeObject, key, value){
   employeeObject[key] = value;
   
   
   return employeeObject
}

let newValue = destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","12 Broadway");
//console.log(newValue)

function deleteFromEmployeeByKey (employeeObject, key){
    let newEmp  = Object.assign({}, employeeObject);
    delete newEmp [key];
    return newEmp
}
let delemp = deleteFromEmployeeByKey(employee, 'name')
//console.log(delemp)

function destructivelyDeleteFromEmployeeByKey (employeeObject, key){

    delete employeeObject [key] 
    return employeeObject
}
let delempl = destructivelyDeleteFromEmployeeByKey(employee, 'name')
//console.log(delempl)