import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import dotenv from "dotenv";


dotenv.config();
const app = express()

const corsOptions = {
    origin: "https://student-management-system-frontend-one.vercel.app",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json())


app.use("/students", studentRoutes);
app.use("/dashboard", dashboardRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Student-Management-System API running on http://localhost:${PORT}`);
});