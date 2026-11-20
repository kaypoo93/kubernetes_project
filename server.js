const express = require("express");

const os = require("os");

const path = require("path");
 
const app = express();

const PORT = process.env.PORT || 3000;
 
app.use(express.static(path.join(__dirname, "public")));
 
app.get("/info.json", (req, res) => {

  res.set("Cache-Control", "no-store");

  res.json({

    platform: process.env.PLATFORM || "Local/Docker",

    pod: process.env.POD_NAME || os.hostname(),

    namespace: process.env.POD_NAMESPACE || "default",

    node: process.env.NODE_NAME || "local",

    pod_ip: process.env.POD_IP || "",

    hostname: os.hostname()

  });

});
 
app.get("/status", (req, res) => {

  res.status(200).json({ status: "ok" });

});
 
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});
 