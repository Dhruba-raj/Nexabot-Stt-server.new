const express = require("express");
const app = express();

app.use(express.json({ limit: "10mb" }));

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("STT Server Running ✅");
});

// MAIN ROUTE
app.post("/ask", async (req, res) => {

  // For now, just fake STT
  const fakeText = "hey nexa what is ai";

  res.json({
    text: fakeText,
    emotion: "happy"
  });
});

app.listen(10000);
