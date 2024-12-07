import * as enrollmentsDao from "./dao.js";
import * as coursesDao from "../Courses/dao.js"
export default function EnrollmentsRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
      const newEnrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
      res.send(newEnrollment);
  });
  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
      const status = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
        res.send(status);
  });
  app.get("/api/enrollments/:userId/courses", (req, res) => {
    const { userId } = req.params;
    const enrolledCourses = coursesDao.findCoursesForEnrolledUser(userId);
    res.send(enrolledCourses);
  });  
  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const userEnrollments = enrollmentsDao.findEnrollmentsForUser(userId);
    res.send(userEnrollments);
  });
}
