// Your code here
function createEmployeeRecord(info) {
    return {
        firstName: info[0],
        familyName: info[1],
        title: info[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}
const punchOut = createEmployeeRecord(['Zach', 'Willis', 'Associate', 15]);
console.log(punchOut);



function createEmployeeRecords(information) {
    return information.map(createEmployeeRecord);
}
    const punchHistory = createEmployeeRecords([
    ['John', 'Smith', 'Chef', 30],
    ['David', 'Jackson', 'Server', 5],
]);
console.log(punchHistory);



function createTimeInEvent(history, datePunched) {
    const [date, time] = datePunched.split(' ');
    const [year, month, day] = date.split('-');
    const [hour, minute] = time.split(':');
    const punchIn = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: `${year}-${month}-${day}`,
    };
    history.timeInEvents.push(punchIn);
    return history;
}
const employee = {
    name: "Bob Smith",
    timeInEvents: [],
};
const dateStamp = "2023-11-28";
const postPunchInfo = createTimeInEvent(employee, dateStamp);
console.log(postPunchInfo);



function createTimeOutEvent(punchOutInfo, punchOutTime) {
    const [date, time] = punchOutTime.split(' ');
    const [year, month, day] = date.split('-');
    const [hour, minute] = time.split(':');
    const timeOutObject = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: `${year}-${month}-${day}`,
    };
    punchOutInfo.timeOutEvents.push(timeOutObject);
    return punchOutInfo;
}
const worker = {
    name: "John Doe",
    timeInEvents: [],
    timeOutEvents: [],
};
const punchedOut = "2023-11-28 1700";
const punchedOutEmployee = createTimeOutEvent(employee, dateStamp);
console.log(punchedOutEmployee);



function hoursWorkedOnDate(hourWorked, date) {
    const clockIn = hourWorked.timeInEvents.find(event => event.date === date);
    const clockOut = hourWorked.timeOutEvents.find(event => event.date === date);
    if (clockIn && clockOut) {
      const hoursWorked = clockOut.hour - clockIn.hour;
      return hoursWorked;
    } else {
      return 0;
    }
  }
const person = {
    name: "Mike Willis",
    timeInEvents: [
        { type: "TimeIn", hour: 9, date: "2023-11-28" },
    ],
    timeOutEvents: [
        { type: "TimeOut", hour: 17, date: "2023-11-28" },
    ],
};
const date = "2023-11-28";
const hoursWorked = hoursWorkedOnDate(employee, date);
console.log(hoursWorked);



function wagesEarnedOnDate(doughOwed, daysWorked) {
    const hoursWorked = hoursWorkedOnDate(doughOwed, daysWorked);
    const hourlyRate = doughOwed.payRate;
    const doughMade = hoursWorked * hourlyRate;
    return doughMade;
}
const guy = {
    name: "Bob Robinson",
    payRate: 20,
    timeInEvents: [
        { type: "TimeIn", hour: 9, date: "2023-11-28" },
    ],
    timeOutEvents: [
        { type: "TimeOut", hour: 17, date: "2023-11-28" },
    ],
};
const currentDate = "2023-11-28";
const moneyMade = wagesEarnedOnDate(employee, date);  
console.log(moneyMade);



function allWagesFor(hoursEarned) {
    const dateWorked = [...new Set([...hoursEarned.timeInEvents, ...hoursEarned.timeOutEvents].map(event => event.date))];
    const moneyMade = dateWorked.reduce((total, date) => total + wagesEarnedOnDate(hoursEarned, date), 0);
    return moneyMade;
}
  const people = {
    name: "Don Jones",
    payRate: 25,
    timeInEvents: [
        { type: "TimeIn", hour: 9, date: "2023-11-28" },
    ],
    timeOutEvents: [
        { type: "TimeOut", hour: 17, date: "2023-11-28" },
    ],
};
const totalMoneyEarned = allWagesFor(employee);  
console.log(totalMoneyEarned);



function calculatePayroll(payroll) {
    const totalPayroll = payroll.reduce((total, employee) => total + allWagesFor(employee), 0);
    return totalPayroll;
}
const employees = [
    {
        name: "Mark Smith",
        payRate: 15,
        timeInEvents: [{ type: "TimeIn", hour: 9, date: "2023-11-28" }],
        timeOutEvents: [{ type: "TimeOut", hour: 17, date: "2023-11-28" }],
    },
];  
const payrollTotal = calculatePayroll(employees);
console.log(payrollTotal);