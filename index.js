import Test from "./test.js";
import Lab5 from "./Lab5/index.js";
import mongoose from "mongoose";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import express from 'express';
import "dotenv/config";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
import AssignmentsRoutes from "./Kanbas/Assignments/routes.js";
import EnrollmentsRoutes from "./Kanbas/Enrollments/routes.js";
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
   );
   const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));  
app.use(express.json());
Lab5(app);
Test(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentsRoutes(app);
EnrollmentsRoutes(app);
app.listen(process.env.PORT || 4000)
