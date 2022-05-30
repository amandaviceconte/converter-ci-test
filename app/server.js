import express from "express";
import * as converter from "./converter.js"

const app = express()

app.get("/rgbToHex", function(req, res) {

  let red   = parseInt(req.query.red, 10);
  let green = parseInt(req.query.green, 10);
  let blue  = parseInt(req.query.blue, 10);
  let hex = converter.rgbToHex(red, green, blue);
  res.send(hex);

});

app.get("/hexToRgb", function(req, res) {

  let hex = req.query.hex;
  let rgb = converter.hexToRgb(hex);
  res.send(JSON.stringify(rgb));

});

app.listen(3000);