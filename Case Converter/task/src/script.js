function uppercase(){
  let text = document.getElementById("textarea").value;
  document.getElementById("textarea").value = text.toUpperCase();
}
function lowercase(){
  let text = document.getElementById("textarea").value;
  document.getElementById("textarea").value = text.toLowerCase();
}
function propercase(){
  let text = document.getElementById("textarea").value;
  document.getElementById("textarea").value = text.toProperCase();
}
function sentencecase(){
  let text = document.getElementById("textarea").value;
  document.getElementById("textarea").value = firstLetterUpper(text);
}
function filedownload(){
  let text = document.getElementById("textarea").value;
  download("text.txt", text);
}
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function firstLetterUpper(theString) {
  let newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
  return newString;
}
function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}