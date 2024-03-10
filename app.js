function makeFirstLetterBold() {
  const inputText = document.getElementById("inputText").value;
  const lines = inputText.split("\n");
  let outputText = "";
  console.log(lines);
  lines.forEach(function (line, index) {
    const words = line.split(" ");
    let lineText = "";
    console.log(words);
    words.forEach(function (word) {
      if (word.trim().length === 0) {
        lineText += word;
      } else {
        lineText += "<strong>" + word[0] + "</strong>" + word.substring(1);
      }
      lineText += " ";
    });

    outputText += lineText.trim();
    if (index < lines.length - 1) {
      outputText += "<br>";
    }
  });

  document.getElementById("outputText").innerHTML = outputText;
}
function resetInput() {
  document.getElementById("inputText").value = ""; // Establecer el valor del textarea a una cadena vacía
  document.getElementById("outputText").innerHTML = ""; // Limpiar el campo de salida
}
