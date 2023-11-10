let emp={
    eid:101,
    ename:'rahul',
    esal:45000
}
console.log(typeof emp)
emp_string=JSON.stringify(emp)
console.log(emp_string)
emp_parse=JSON.parse(emp_string)
console.log(emp_parse)
console.log(typeof emp_string)
console.log(typeof emp_parse)