import * as assignmentsDao from "./dao.js";
export default function AssignmentsRoutes(app) {
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
      });
    
 app.delete("/api/assignments/:assignmentId", async (req, res) => {
   const { assignmentId } = req.params;
   const status = await assignmentsDao.deleteAssignment(assignmentId);
   res.send(status);
 });
 app.post("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignment = {
      ...req.body,
      assignment: assignmentId,
    };
    const newAssignment = assignmentsDao.createAssignment(assignment);
    res.send(newAssignment);
  });
}
