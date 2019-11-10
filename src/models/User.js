export default class User {
    constructor(firstname, lastname, birthdate, faculty, courses) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.faculty = faculty;
        this.courses = courses;
    }
    addCourse(course){
        this.courses.push(course);
    }
    getGPA(){
        let gpa = 0.0;
        var i;
        for (i = 0; i < this.courses.length; i++) {
            let grade = this.courses[i].grade;
            if (grade > 90)  gpa  += 4;
            else if (grade > 80) gpa += 3;
            else if (grade > 70)  gpa += 2;
            else if (grade > 60)  gpa += 1;
            else if (grade > 50)  gpa += 0.5;
            else if (grade <= 50)  gpa += 0;
        }
        gpa = gpa/this.courses.length;
        return gpa;
    }
}