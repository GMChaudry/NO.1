let students = [
    { name: "salman", seniorStauts: true, assigmentCompleted: true },
    { name: "saad", seniorStauts: false, assigmentCompleted: false },
    { name: "saleem", seniorStauts: true, assigmentCompleted: true },
    { name: "Haider", seniorStauts: false, assigmentCompleted: false },
];
students.forEach(function (findSeniorStudent) {
    if (findSeniorStudent.seniorStauts === true)
        console.log("This student is completed all his assignment,Hence given Senior Status");
    else if (findSeniorStudent.seniorStauts === false)
        console.log("This student is not completed all his assignment");
    console.log(findSeniorStudent);
    console.log(findSeniorStudent.assigmentCompleted === true);
});
export {};
