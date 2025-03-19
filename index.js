const obj = {
  Mon: "drive lesson",
  Tue: "dantist visit",
  Wed: "go to party",
  Thu: "hard work",
  Fri: "chill",
  Sat: "go to park",
};
const userValue = prompt("Enter your day");
alert(obj[userValue] ? obj[userValue] : "Error");
