const figlet = require("figlet");
const prompt = require("prompt");
const chalk = require("chalk");
const nodeascii = () => {
  prompt.start();
  let text = "Enter some text";
  let fontName = "Enter font name";
  let textColor = "Enter your favorite color for text";
  let backgroundColor = "Enter background color for your text";
  let fontFamily = "";
  let bgColor = "";
  prompt.get([text, fontName, textColor, backgroundColor], function (err, result) {
    if (result[fontName].length !== 0) {
      fontFamily = result[fontName][0].toUpperCase() + result[fontName].slice(1).toLowerCase();
    }
    let color = result[textColor];
    if (result[backgroundColor].length !== 0) {
      bgColor = `bg${result[backgroundColor][0].toUpperCase()+result[backgroundColor].slice(1).toLowerCase()}`;
    }
    figlet.text(result[text], {
      font: fontFamily,
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, function(err, data) {
      if (["Acrobatic", "Banner", "Block", "Colossal", "Doh", "Ghost", "Lean", "Mirror", "Ogre", "Poison", "Isometric3", ""].includes(fontFamily) === false) {
        console.log(`Please choose one of the following fonts and type:
          Acrobatic,
          Banner,
          Block,
          Colossal,
          Doh,
          Ghost,
          Lean,
          Mirror,
          Ogre,
          Poison,
          Isometric3`);
      }
      if (data !== undefined) {
        if (!chalk[color]) {
          console.log(chalk[bgColor](data));
        } else if (!chalk[bgColor]) {
          console.log(chalk[color](data));
        } else if (!chalk[color] && !chalk[bgColor]) {
          console.log(data);
        } else {
          console.log(chalk[color][bgColor](data));
        }
      }
    });
  });
}
if (process.argv[2] === "node" && process.argv[3] === "ascii") {
  nodeascii();
}
