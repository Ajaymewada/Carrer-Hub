const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
var cors = require('cors')

const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const educationRoutes = require("./routes/educationRoutes");

const app = express();
app.use(cors())
const PORT = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/education", educationRoutes);

// Serve index.html on root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});

app.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "portfoliofinal.html"));
});


app.get("/businessprojects", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "businessprojects.view.html"));
});

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://venucareerhub:KhnY0FgkOryTtmbp@cluster0.qjilknk.mongodb.net/?appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ MongoDB connection error:", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
