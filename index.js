const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

// سكربت تجريبي يرجع JobId وهمي
app.get("/api/getFruitServer", async (req, res) => {
  const fruit = req.query.fruit;

  if (!fruit) return res.status(400).json({ error: "fruit is required" });

  // مبدأياً نرجع داتا وهمية للتجربة
  return res.json({
    fruit: fruit,
    placeId: 2753915549,
    jobId: "2a4df61c53be5b83a112c50f5631f459"
  });
});

app.listen(port, () => {
  console.log("API running on port " + port);
});
