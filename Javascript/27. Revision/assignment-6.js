// Class

/**
 * Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming
 * 


class Person
    properties
        name : string ("")
    constructor
        Person(name)
    methods
        introduceSelf() => console.log the name

class Course 
    properties
        title : string ("")
        code : string ("")
        students : Array<Students> ([])
        teachers : Array<Teachers> ([])
    constructor
        Course(title, code)
    methods
        listStudents() => return Array<Student.name>
        listTeachers() => return Array<Teacher.name>

class Teacher : extends Person
    properties
        teaches : Array<Course> ([])
    constructor
        Teacher(name, teaches)
    methods
        assignCourse(course.id) => update this.teaches and course.teachers
        removeCourse(course.id) => update this.teaches and course.teachers
        listCourses() => return Array<Course.title>
        introduceSelf() => console.log name and all this.courses titles

class Student : extends Person
    properties
        id: string ("")
        year : number (-1)
        courses : Array<Courses> ([])
    constructor
        Student(name, id, year)
    methods
        enroll(course.id) => update this.courses and course.students
        drop(course.id) => update this.courses and course.students
        introduceSelf() => console.log all properties and this.courses titles
 */
