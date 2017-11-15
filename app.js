const chalk = require("chalk");
// console.log(chalk.blue("Hello World!!!"));
// console.log(chalk.red("Hello World!!!"));

const textPainter = (string, color) => chalk[color](string);
// console.log(textPainter("#hackrack", "blue"));

const evensBlueOddsYellow = (sentence) => {
  var colored = "";
  sentence = sentence.split("");
  sentence.forEach(function(char, i) {
    if (i % 2 === 0) {
      colored += chalk.blue(char);
    } else {
      colored += chalk.yellow(char);
    }
  })
  return colored;
}
// console.log(evensBlueOddsYellow("Umedjon Ibrohimov"));

const angryText = (string) => {
  let capString = string.toUpperCase();
  return chalk.bold.underline.red(capString);
}
// console.log(angryText("hackrack"));

const backgroundCyan = (string) => {
  return chalk.white.bgCyan(string);
}
// console.log(backgroundCyan("mail4umed@yahoo.com"));
const boldFirstUnderlineLast = (string) => {
  let first = chalk.bold.white(string[0]);
  let last = chalk.underline(string[string.length-1]);
  return first + string.slice(1,-1) + last;
}
// console.log(boldFirstUnderlineLast("hackrack"));

const commandLineChalk = (string, color, bgColor, bold) => {
  return chalk[bgColor][color].bold(string);
}
console.log(commandLineChalk(process.argv[2], process.argv[3], process.argv[4], process.argv[5]));
