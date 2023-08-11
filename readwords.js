var censor = require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad,bad and mad text."));
censor.addCensoredWord("glommy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very glommy day."));