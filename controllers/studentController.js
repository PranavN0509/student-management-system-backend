import students from "../data/studentData.js";

const getStudentsArray = async (req, res) => {
    try {
        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json();
        if (students.length < 30) {
            students.push(...data.users);
        }
        return students;
    }
    catch (e) {
        console.log(e)
    }
}

const getAllStudents = async (req, res) => {
    try {
        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json();
        if (students.length < 30) {
            students.push(...data.users);
        }
        return (res.json(students));
    }
    catch (e) {
        console.log(e)
    }
}


const addStudent = (req, res) => {
    const obj = req.body;
    console.log(students.length)
    const newId = students.length + 1;

    const newStudent = { id: newId, address: { city: obj.city }, company: { department: obj.department }, ...obj }
    students.push(newStudent);
    return res.json(newStudent);

    // if (!name || !age || !gender) {
    //     return res.status(400).json({ message: "All fields required" });
    // }

    // const newStudent = {
    //     id: Date.now(),
    //     name,
    //     age,
    //     gender
    // };

    // students.push(newStudent);
    // res.status(201).json(newStudent);
};

export { getAllStudents, addStudent, getStudentsArray };
