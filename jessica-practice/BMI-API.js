var unirest = require("unirest");

var req = unirest("POST", "https://bmi.p.rapidapi.com/");

req.headers({
  "x-rapidapi-host": "bmi.p.rapidapi.com",
  "x-rapidapi-key": "61d9f6577fmsh88373fc564d943dp1b03bcjsne039834030c2",
  "content-type": "application/json",
  accept: "application/json",
  useQueryString: true,
});

req.type("json");
req.send({
  weight: {
    value: "85.00",
    unit: "kg",
  },
  height: {
    value: "170.00",
    unit: "cm",
  },
  sex: "m",
  age: "24",
  waist: "34.00",
  hip: "40.00",
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
