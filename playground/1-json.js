const fs = require("fs");
const { json } = require("stream/consumers");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };
// // Convert JavaScript object into JSON string
// const bookJSON = JSON.stringify(book);
// // Convert JSON string into object
// const bookObject = JSON.parse(bookJSON);

// console.log(book.title);
// //   console.log(bookJSON.title);    undefind

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)

// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString();

console.log(dataJson);

const data = JSON.parse(dataJson);

console.log(data);

// const newData = {...data, name: "Azat Seyrek"}
// const newDataJson = JSON.stringify(newData)


// const JsonData = fs.writeFileSync('1-json.json', newDataJson)