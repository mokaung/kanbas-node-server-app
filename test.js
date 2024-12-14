export default function Test(app) {
    app.get("/", (req, res) => {
    res.send("Server is running");
  });
}
  