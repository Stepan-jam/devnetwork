const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running")); // 3

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000; // 2

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); //1

//1
/* server.listen(port[, host][, backlog][, callback]) — Начинает принимать соединения
на указанном порте и хосте. Если параметр host опущен, сервер будет принимать соединения,
направленные на любой IPv4-адрес (INADDR_ANY). При значении порта равном нулю назначается
случайный порт. */

//2
// The process.env property returns an object containing the user environment.

//3
/* Тут мы настроили простую маршрутизацию
respond with "API RUNNING" when a GET request is made to the homepage */
