const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
  button.innerText = "Try it";
}

function GetChar() {
  let Str = document.getElementById("String1").value;
  let Index = parseInt(document.getElementById("Index").value);
  document.getElementById("Result1").innerText = `Result: ${Str.charAt(Index)}`;
}
function EndsWith() {
  let Str = document.getElementById("String2").value;
  let endStr = document.getElementById("EndString").value;
  document.getElementById("Result2").textContent = `Result: ${Str.endsWith(
    endStr
  )}`;
}
function includeString() {
  let Str = document.getElementById("String3").value;
  let endStr = document.getElementById("includes").value;
  document.getElementById("Result3").textContent = `Result: ${Str.includes(
    endStr
  )}`;
}
function indexOfString() {
  let Str = document.getElementById("String4").value;
  let endStr = document.getElementById("indexOf").value;
  document.getElementById("Result4").textContent = `Result: ${Str.indexOf(
    endStr
  )}`;
}
function padEndString() {
  let Str = document.getElementById("String5").value;
  let Number = document.getElementById("paddingendNumber").value;
  let endStr = document.getElementById("padEnd").value;
  document.getElementById("Result5").textContent = `Result: ${Str.padEnd(
    Number,
    endStr
  )}`;
}
function padStartString() {
  let Str = document.getElementById("String6").value;
  let Number = document.getElementById("paddingstartNumber").value;
  let endStr = document.getElementById("padStart").value;
  document.getElementById("Result6").textContent = `Result: ${Str.padStart(
    Number,
    endStr
  )}`;
}
function repeatString() {
  let Str = document.getElementById("String7").value;
  let endStr = document.getElementById("repeat").value;
  document.getElementById("Result7").textContent = `Result: ${Str.repeat(
    endStr
  )}`;
}
function replaceString() {
  let Str = document.getElementById("String8").value;
  let chr = document.getElementById("chr").value;
  let replacechr = document.getElementById("replacechr").value;
  let result = Str.replaceAll(chr, replacechr);
  document.getElementById("Result8").textContent = `Result: ${result}`;
}

function Slice() {
  let Str = document.getElementById("String9").value;
  let SliceIndex = document.getElementById("SliceIndex").value;
  let result = Str.slice(SliceIndex);
  document.getElementById("Result9").textContent = `Result: ${result}`;
}

function split() {
  let Str = document.getElementById("String10").value;
  let result = Str.split(" ");
  document.getElementById("Result10").textContent = `Result: ${result}`;
}
function ToString() {
  let Str = document.getElementById("String11").value;
  let result = Str.toString();
  document.getElementById("Result11").textContent = `Result: ${result}`;
}
function trim() {
  let Str = document.getElementById("String12").value;
  let result = Str.trim();
  document.getElementById("Result12").textContent = `Result: ${result}`;
}
