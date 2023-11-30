// apologies for the terrible naming conventions
/*=======================================
QUESTION 1
=========================================*/
console.log("Question 1")
const q1e1 = {
    "name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raiseEligible": true,
}
const q1e2 = {
    "name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raiseEligible": true,
}
const q1e3 = {
    "name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raiseEligible": false,
}
console.log(q1e1,q1e2,q1e3)

/*=======================================
QUESTION 2
=========================================*/
console.log("Question 2")
const q2comp = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "name": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true,
        },
        {
            "name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true,
        },
        {
            "name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false,
        },
    ],
}
console.log(q2comp)

/*=======================================
QUESTION 3
=========================================*/
console.log("Question 3")
const q3comp = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "name": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true,
        },
        {
            "name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true,
        },
        {
            "name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false,
        },
        {
            "name": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false,
        },
    ],
}
console.log(q3comp)

/*=======================================
QUESTION 4
=========================================*/
console.log("Question 4")
var q4totalSal = 0;
for(i=0; i < q3comp.employees.length; i++){
    // console.log("salary of", q3comp.employees[i].name, ":", q3comp.employees[i].salary)
    q4totalSal += q3comp.employees[i].salary;
}
console.log("Total salary: ", q4totalSal)

/*=======================================
QUESTION 5 
=========================================*/
console.log("Question 5")
const q5comp = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "name": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true,
        },
        {
            "name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true,
        },
        {
            "name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false,
        },
        {
            "name": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false,
        },
    ],
}
for(i=0; i < q5comp.employees.length; i++){
    if(q5comp.employees[i].raiseEligible){
        // console.log(q5comp.employees[i].name, "gets a raise!");
        q5comp.employees[i].salary += q5comp.employees[i].salary * .1;
        q5comp.employees[i].raiseEligible = false;
    }
    // console.log(q5comp.employees[i].name, ":", q5comp.employees[i].salary);
}
console.log(q5comp)

/*=======================================
QUESTION 6 
=========================================*/
console.log("Question 6")
const q6comp = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "name": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 44000,
            "raiseEligible": true,
        },
        {
            "name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 20350,
            "raiseEligible": true,
        },
        {
            "name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false,
        },
        {
            "name": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false,
        },
    ],
}
q6wfh = ['Anna', 'Sam'];
for(i=0; i < q6comp.employees.length; i++){
    if(q6comp.employees[i].name == q6wfh[0] || q6comp.employees[i].name == q6wfh[1]){
        q6comp.employees[i].wfh = true;
    }
    else {
        q6comp.employees[i].wfh = false;
    }
}
console.log(q6comp)