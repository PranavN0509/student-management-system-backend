import students from "../data/studentData.js";
import { getStudentsArray } from "./studentController.js"

const getDashboardStats = async (req, res) => {
    try {
        // Get latest student list from API
        const studentList = await getStudentsArray();

        if (!Array.isArray(studentList) || studentList.length === 0) {
            return res.status(404).json({ message: "No student data found" });
        }

        // Calculate stats
        const totalStudents = studentList.length;

        const genderCount = studentList.reduce((acc, student) => {
            const gender = student.gender?.toLowerCase();
            acc[gender] = (acc[gender] || 0) + 1;
            return acc;
        }, {});

        const averageAge = studentList.reduce((sum, student) => sum + Number(student.age || 0), 0)
            / totalStudents;

        const minAge = Math.min(...studentList.map(s => Number(s.age) || Infinity));
        const maxAge = Math.max(...studentList.map(s => Number(s.age) || -Infinity));


        res.json({
            totalStudents,
            genderCount,
            averageAge: Number(averageAge.toFixed(2)),
            minAge,
            maxAge,
        });
    } catch (e) {
        console.error("Error fetching dashboard stats:", e);
        res.status(500).json({ message: "Error fetching dashboard stats" });
    }
};


export { getDashboardStats };