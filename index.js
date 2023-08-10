
function createEmployeeRecord(employeeRecord){

   const [firstName,familyName,title,payPerHour] = employeeRecord;
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents:[]
    };
}
//const employeeRecord = createEmployeeRecord(["Gray", "Worm", "Security", 1]);
//console.log(employeeRecord)

function createEmployeeRecords(employeeRecords){
  return  employeeRecords.map(employeeRecord =>createEmployeeRecord(employeeRecord));


}
 
let employeeRecords = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ];

  let nameExtractor = function (e) { return e.firstName ;}
 let employeeName= createEmployeeRecords(employeeRecords).map(nameExtractor);
 console.log(employeeName);
 let x= createEmployeeRecords(employeeRecords)
 console.log(x)

function createTimeInEvent(dateStamp){

    const [date,time] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time, 10),
        date: date
    });
    return this;
  
}
let employeeRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]);
let updatedemployeeRecord = createTimeInEvent.call(employeeRecord, "2014-02-28 1400");
let newEvent = updatedemployeeRecord.timeInEvents[0]
console.log(updatedemployeeRecord)

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

