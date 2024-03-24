function mostrarAcorde() {
  respuesta = document.getElementById("respuesta");
  respuesta.classList.toggle('show');
};

function uncheckArpegio() {
  const escalaCheckbox = document.getElementById("escalasCheckbox");
  const triadasCheckbox = document.getElementById("triadasCheckbox");
  const septimasCheckbox = document.getElementById("septimasCheckbox");
  const powerChordsCheckbox = document.getElementById("powerChordsCheckbox");
  const sextasCheckbox = document.getElementById("sextasCheckbox");
  //const alteradasCheckbox = document.getElementById("alteradasCheckbox");
  const suspendidasCheckbox = document.getElementById("suspendidasCheckbox");
  const extensionesCheckbox = document.getElementById("extensionesCheckbox");
  const alteracionesCheckbox = document.getElementById("alteracionesCheckbox");
  const inversionesCheckbox = document.getElementById("inversionesCheckbox");
  const miscelaneasCheckbox = document.getElementById("miscelaneasCheckbox");
  const arpegioModalCheckbox = document.getElementById("arpegioModalCheckbox");

  if (triadasCheckbox || septimasCheckbox || powerChordsCheckbox || sextasCheckbox || suspendidasCheckbox || 
    extensionesCheckbox || alteracionesCheckbox || inversionesCheckbox || miscelaneasCheckbox) {
    arpegioModalCheckbox.checked = false
  };
  escalaCheckbox.checked = true
};

function checkLabels() {
  const alteracionesCheckbox = document.getElementById("alteracionesCheckbox");

  const triadasCheckbox = document.getElementById("triadasCheckbox");
  const septimasCheckbox = document.getElementById("septimasCheckbox");
  const sextasCheckbox = document.getElementById("sextasCheckbox");
  const extensionesCheckbox = document.getElementById("extensionesCheckbox");

  if (alteracionesCheckbox.checked) {
    triadasCheckbox.checked = true;
    septimasCheckbox.checked = true;
    sextasCheckbox.checked = true;
    extensionesCheckbox.checked = true
  }
  uncheckArpegio()
};

function isolateLabel() {
  const arpegioModalCheckbox = document.getElementById("arpegioModalCheckbox");

  const escalaCheckbox = document.getElementById("escalasCheckbox");
  const triadasCheckbox = document.getElementById("triadasCheckbox");
  const septimasCheckbox = document.getElementById("septimasCheckbox");
  const powerChordsCheckbox = document.getElementById("powerChordsCheckbox");
  const sextasCheckbox = document.getElementById("sextasCheckbox");
  //const alteradasCheckbox = document.getElementById("alteradasCheckbox");
  const suspendidasCheckbox = document.getElementById("suspendidasCheckbox");
  const extensionesCheckbox = document.getElementById("extensionesCheckbox");
  const alteracionesCheckbox = document.getElementById("alteracionesCheckbox");
  const inversionesCheckbox = document.getElementById("inversionesCheckbox");
  const miscelaneasCheckbox = document.getElementById("miscelaneasCheckbox");

  if (arpegioModalCheckbox.checked) {
    triadasCheckbox.checked = false;
    septimasCheckbox.checked  = false;
    powerChordsCheckbox.checked  = false;
    sextasCheckbox.checked  = false;
    //alteradasCheckbox.checked  = false;
    suspendidasCheckbox.checked  = false;
    extensionesCheckbox.checked  = false;
    alteracionesCheckbox.checked  = false;
    inversionesCheckbox.checked  = false;
    miscelaneasCheckbox.checked  = false
  };
  escalaCheckbox.checked = true
}

function generarAcorde() {
  const escalas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const triadas = ["maj", "M", "m", "min", "-", "aug", "+", "(#5)", "dim", "°"];
  const septimas = ["7", "△", "△7", "M7", "⌀7", "7(♭5)", "(add9)", "(add11)", "(add13)"];
  const powerChords = ["5", "3"];
  const sextas = ["6", "(add♭6)", "(♭6)", "⁶₉"];
  const miscelaneas = ["2", "(add2)"];
  const alts = ["b9", "#9", "b5", "#5", "b13"];
  const suspendidas = ["sus", "sus4", "sus2"];
  const extensiones = ["9", "7(add9)", "11", "13"];
  const alteraciones = ["(omit5)", "(no5)", "(omit7)", "(no7)", "(#9)", "(♭9)", "(#11)", "(♭11)", "(#13)", "(♭13)"];
  const invertidas = ["/C", "/D", "/E", "/F", "/G", "/A", "B/", "/C#", "/D#", "/F#", "/G#", "/A#"];
  const arpegiosModales = [" jonico", " dorico", " frigio", " lidio", " mixolidio", " eolico", " locrio"];

  const tops = ["110px", "75px", "110px", "75px", "110px", "110px", "75px", "110px", "75px",
  "110px", "75px", "110px", "110px", "75px", "110px", "75px", "110px", "110px", "75px", "110px",
  "75px", "110px", "75px", "110px", "110px", "75px", "110px", "75px", "110px", "110px", "75px",
  "110px", "75px", "110px", "75px", "110px"];
  const translations = ["-213px", "-203px", "-193px", "-183px", "-173px", "-153px", "-143px",
  "-133px", "-123px", "-113px","-103px", "-93px", "-73px", "-63px", "-53px", "-43px", "-33px",
  "-13px", "-03px", "7px", "17px", "27px", "37px", "47px", "67px", "77px", "87px", "97px",
  "107px", "127px", "137px", "147px", "157px", "167px", "177px", "187px"];

  // Obtener las casillas marcadas
  const escalaCheckbox = document.getElementById("escalasCheckbox").checked;
  const triadasCheckbox = document.getElementById("triadasCheckbox").checked;
  const septimasCheckbox = document.getElementById("septimasCheckbox").checked;
  const powerChordsCheckbox = document.getElementById("powerChordsCheckbox").checked;
  const sextasCheckbox = document.getElementById("sextasCheckbox").checked;
  //const alteradasCheckbox = document.getElementById("alteradasCheckbox").checked;
  const suspendidasCheckbox = document.getElementById("suspendidasCheckbox").checked;
  const extensionesCheckbox = document.getElementById("extensionesCheckbox").checked;
  const alteracionesCheckbox = document.getElementById("alteracionesCheckbox").checked;
  const inversionesCheckbox = document.getElementById("inversionesCheckbox").checked;
  const miscelaneasCheckbox = document.getElementById("miscelaneasCheckbox").checked;
  const arpegioModalCheckbox = document.getElementById("arpegioModalCheckbox").checked;

  // Validar que al menos una opción esté seleccionada
  if (!(escalaCheckbox || arpegioModalCheckbox || triadasCheckbox || septimasCheckbox ||
        powerChordsCheckbox || sextasCheckbox || /*alteradasCheckbox ||*/ suspendidasCheckbox ||
        extensionesCheckbox|| alteracionesCheckbox || inversionesCheckbox || miscelaneasCheckbox)) {
    alert("Selecciona almenos una ._.");
    return;
  }

  // Generar acorde aleatorio
  let acorde = [];

  let es = ""

  // Limpiar
  let escala = false
  let triada = false
  let septima = false
  let powerChord = false
  let sexta = false
  let miscelanea = false
  let alterada = false
  let suspendida = false
  let extension = false
  let alteracion = false
  let invertida = false
  let arpegio = false

  let root = document.getElementById("1st"); root.style.display = "none";
  let second = document.getElementById("2maj"); second.style.display = "none";
  let third = document.getElementById("3maj"); third.style.display = "none";
  let fourth = document.getElementById("4jus"); fourth.style.display = "none";
  let fifth = document.getElementById("5jus"); fifth.style.display = "none";
  let sixth = document.getElementById("6maj"); sixth.style.display = "none";
  let seventh = document.getElementById("7maj"); seventh.style.display = "none";
  let octave = document.getElementById("8va"); octave.style.display = "none";
  let ninth = document.getElementById("9maj"); ninth.style.display = "none";
  let eleventh = document.getElementById("11jus"); eleventh.style.display = "none";
  let thirteen = document.getElementById("13maj"); thirteen.style.display = "none";

  second.innerHTML = "<img src='res/dot.png'>";
  third.innerHTML = "<img src='res/dot.png'>";
  fourth.innerHTML = "<img src='res/dot.png'>";
  fifth.innerHTML = "<img src='res/dot.png'>";
  sixth.innerHTML = "<img src='res/dot.png'>";
  seventh.innerHTML = "<img src='res/dot.png'>";
  octave.innerHTML = "<img src='res/dot.png'>";
  ninth.innerHTML = "<img src='res/dot.png'>";
  eleventh.innerHTML = "<img src='res/dot.png'>";
  thirteen.innerHTML = "<img src='res/dot.png'>";

  // Escala
  if (escalaCheckbox) {
    escala = escalas[Math.floor(Math.random() * escalas.length)];
    if (escala == "C") {root.style.display = "flex"; root.style.top = tops[0]; root.style.translate = translations[0]; root=0;}
    else if (escala == "C#") {root.style.display = "flex"; root.style.top = tops[1]; root.style.translate = translations[1]; root=1; if(Math.floor(Math.random()*2)+1==2){escala="D♭"};}
    else if (escala == "D") {root.style.display = "flex"; root.style.top = tops[2]; root.style.translate = translations[2]; root=2;}
    else if (escala == "D#") {root.style.display = "flex"; root.style.top = tops[3]; root.style.translate = translations[3]; root=3; if(Math.floor(Math.random()*2)+1==2){escala="E♭"};}
    else if (escala == "E") {root.style.display = "flex"; root.style.top = tops[4]; root.style.translate = translations[4]; root=4;}
    else if (escala == "F") {root.style.display = "flex"; root.style.top = tops[5]; root.style.translate = translations[5]; root=5;}
    else if (escala == "F#") {root.style.display = "flex"; root.style.top = tops[6]; root.style.translate = translations[6]; root=6; if(Math.floor(Math.random()*2)+1==2){escala="G♭"};}
    else if (escala == "G") {root.style.display = "flex"; root.style.top = tops[7]; root.style.translate = translations[7]; root=7;}
    else if (escala == "G#") {root.style.display = "flex"; root.style.top = tops[8]; root.style.translate = translations[8]; root=8; if(Math.floor(Math.random()*2)+1==2){escala="A♭"};}
    else if (escala == "A") {root.style.display = "flex"; root.style.top = tops[9]; root.style.translate = translations[9]; root=9;}
    else if (escala == "A#") {root.style.display = "flex"; root.style.top = tops[10]; root.style.translate = translations[10]; root=10; if(Math.floor(Math.random()*2)+1==2){escala="B♭"};}
    else if (escala == "B") {root.style.display = "flex"; root.style.top = tops[11]; root.style.translate = translations[11]; root=11;}
    acorde.push(escala);
    third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
    fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
  }

  // Triadas
  if (triadasCheckbox && Math.floor(Math.random()*4)+1!=2) {
    triada = triadas[Math.floor(Math.random() * triadas.length)]
    acorde.push(triada);
    third.style.display = "none";
    fifth.style.display = "none";
    if (triada == "maj") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      es == "maj"
    } else if (triada == "M") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      es == "maj"
    } else if (triada == "min") {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      es == "min"
    } else if (triada == "m") {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      es == "min"
    } else if (triada == "-") {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      es == "min"
    } else if (triada == "dim") {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+6]; fifth.style.translate = translations[root+6];
      es == "dim"
    } else if (triada == "°") {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+6]; fifth.style.translate = translations[root+6];
      es == "dim"
    } else if (triada == "aug") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+8]; fifth.style.translate = translations[root+8];
      es == "aug"
    } else if (triada == "+") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+8]; fifth.style.translate = translations[root+8];
      es == "aug"
    } else if (triada == "(#5)") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+8]; fifth.style.translate = translations[root+8];
      es == "aug"
    }
  }

  // Septimas
  if (septimasCheckbox && Math.floor(Math.random()*4)+1!=2) {
    septima = septimas[Math.floor(Math.random() * septimas.length)];
    if (septima == "7" && (triada=="dim"||triada=="°")) {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+9]; seventh.style.translate = translations[root+9];
      acorde.push(septima)
    } else if (septima == "7" && (triada=="maj"||triada=="M"||!triada)) {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+11]; seventh.style.translate = translations[root+11];
      acorde.push(septima)
    } else if (septima == "7" && (triada=="aug"||triada=="+"||triada=="(#5)")) {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+8]; fifth.style.translate = translations[root+8];
      seventh.style.display = "flex"; seventh.style.top = tops[root+10]; seventh.style.translate = translations[root+10];
      acorde.push(septima)
    } else if (septima == "7") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+10]; seventh.style.translate = translations[root+10];
      acorde.push(septima)
    } else if (septima == "△" && escalaCheckbox) {
      acorde = [];
      acorde.push(escala);
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+11]; seventh.style.translate = translations[root+11];
      acorde.push(septima)
    } else if (septima == "△7" && escalaCheckbox) {
      third.style.display = "none";
      fifth.style.display = "none";
      seventh.style.display = "none";
      acorde = [];
      acorde.push(escala);
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+11]; seventh.style.translate = translations[root+11];
      acorde.push(septima)
    } else if (septima == "M7" && (triada=="min"||triada=="m")) {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+11]; seventh.style.translate = translations[root+11];
      acorde.push(septima)
    } else if (septima == "⌀7" && escalaCheckbox) {
      third.style.display = "none";
      fifth.style.display = "none";
      seventh.style.display = "none";
      acorde = [];
      acorde.push(escala);
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+10]; seventh.style.translate = translations[root+10];
      acorde.push(septima)
    } else if (septima == "7(♭5)" && (triada=="min"||triada=="m"||triada=="-")) {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+6]; fifth.style.translate = translations[root+6];
      seventh.style.display = "flex"; seventh.style.top = tops[root+10]; seventh.style.translate = translations[root+10];
      acorde.push(septima)
    } else if (septima == "(add9)" && triada) {
      ninth.style.display = "flex"; ninth.style.top = tops[root+14]; ninth.style.translate = translations[root+14];
      acorde.push(septima)
    } else if (septima == "(add11)" && triada) {
      eleventh.style.display = "flex"; eleventh.style.top = tops[root+17]; eleventh.style.translate = translations[root+17];
      acorde.push(septima)
    } else if (septima == "(add13)" && triada) {
      thirteen.style.display = "flex"; thirteen.style.top = tops[root+21]; thirteen.style.translate = translations[root+21];
      acorde.push(septima)
    } else {
      septima = false
    }
  }

  // Power Chords
  if (powerChordsCheckbox && !septima && !triada && Math.floor(Math.random()*4)+1!=2) {
    powerChord = powerChords[Math.floor(Math.random() * powerChords.length)];
    if (powerChord == "5") {
      acorde.push(powerChord);
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
    } else if (powerChord == "3" && !septima) {
      acorde.push(powerChord);
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];  
    } else {powerChord = false};
  }

  // Sextas
  if (sextasCheckbox && !powerChord && Math.floor(Math.random()*4)+1!=2) {
    sexta = sextas[Math.floor(Math.random() * sextas.length)];
    if (sexta == "6" && es == "menor") {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      sixth.style.display = "flex"; sixth.style.top = tops[root+9]; sixth.style.translate = translations[root+9];
      acorde.push(sexta)
    } else if (sexta == "6" && escalaCheckbox) {
      acorde = [];
      seventh.style.display = "none";
      acorde.push(escala);
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      sixth.style.display = "flex"; sixth.style.top = tops[root+9]; sixth.style.translate = translations[root+9];
      acorde.push(sexta)
    } else if (sexta == "(add♭6)" && (es == "menor" || !triada)) {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      sixth.style.display = "flex"; sixth.style.top = tops[root+8]; sixth.style.translate = translations[root+8];
      acorde.push(sexta)
    } else if (sexta == "(♭6)" && (es == "menor" || !triada)) {
      third.style.display = "flex"; third.style.top = tops[root+3]; third.style.translate = translations[root+3];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      sixth.style.display = "flex"; sixth.style.top = tops[root+8]; sixth.style.translate = translations[root+8];
      acorde.push(sexta)
    } else if (sexta == "⁶₉" && escalaCheckbox) {
      acorde = [];
      third.style.display = "none";
      fifth.style.display = "none";
      seventh.style.display = "none";
      acorde.push(escala);
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      sixth.style.display = "flex"; sixth.style.top = tops[root+9]; sixth.style.translate = translations[root+9];
      ninth.style.display = "flex"; ninth.style.top = tops[root+14]; ninth.style.translate = translations[root+14];
      acorde.push(sexta)
    } else {sexta = false};
  }

  /*/ Alteradas
  if (alteradasCheckbox && !triada && !septima && !powerChord && !sexta && Math.floor(Math.random()*6)+1!==2) {
    alterada = "alt"
    acorde.push(alterada);
    alt = sextas[Math.floor(Math.random() * alts.length)];
    if (alt == "b9") {
    } else if (alt == "#9") {
    } else if (alt == "b5") {
    } else if (alt == "#5") {
    } else if (alt == "b13") {
    }
  }*/

  // Suspendidas
  if (suspendidasCheckbox && Math.floor(Math.random()*4)+1!=2) {
    suspendida = suspendidas[Math.floor(Math.random() * suspendidas.length)];
    if (suspendida == "sus" && escalaCheckbox) {
      acorde = [];
      third.style.display = "none";
      fifth.style.display = "none";
      sixth.style.display = "none";
      seventh.style.display = "none";
      ninth.style.display = "none";
      eleventh.style.display = "none";
      thirteen.style.display = "none";
      acorde.push(escala);
      fourth.style.display = "flex"; fourth.style.top = tops[root+5]; fourth.style.translate = translations[root+5];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      acorde.push(suspendida);
    } else if (suspendida == "sus4" && escalaCheckbox) {
      acorde = [];
      third.style.display = "none";
      fifth.style.display = "none";
      sixth.style.display = "none";
      seventh.style.display = "none";
      ninth.style.display = "none";
      eleventh.style.display = "none";
      thirteen.style.display = "none";
      acorde.push(escala);
      fourth.style.display = "flex"; fourth.style.top = tops[root+5]; fourth.style.translate = translations[root+5];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      acorde.push(suspendida);
    } else if (suspendida == "sus2" && escalaCheckbox) {
      acorde = [];
      third.style.display = "none";
      fifth.style.display = "none";
      sixth.style.display = "none";
      seventh.style.display = "none";
      ninth.style.display = "none";
      eleventh.style.display = "none";
      thirteen.style.display = "none";
      acorde.push(escala);
      second.style.display = "flex"; second.style.top = tops[root+2]; second.style.translate = translations[root+2];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      acorde.push(suspendida);
    } else {suspendida = false}
  }

  // Miscelaneas
  if (miscelaneasCheckbox && Math.floor(Math.random()*4)+1!=2) {
    miscelanea = miscelaneas[Math.floor(Math.random() * miscelaneas.length)];
    if (miscelanea == "(add2)") {
      second.style.display = "flex"; second.style.top = tops[root+2]; second.style.translate = translations[root+2];
      acorde.push(miscelanea);
    } else if (miscelanea == "2") {
      acorde = [];
      third.style.display = "none";
      fourth.style.display = "none";
      fifth.style.display = "none";
      sixth.style.display = "none";
      seventh.style.display = "none";
      octave.style.display = "none";
      ninth.style.display = "none";
      eleventh.style.display = "none";
      thirteen.style.display = "none";
      acorde.push(escala);
      second.style.display = "flex"; second.style.top = tops[root+2]; second.style.translate = translations[root+2];
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      acorde.push(miscelanea);
    }
  }

  // Extensiones
  if (extensionesCheckbox && Math.floor(Math.random()*4)+1!=2) {
    extension = extensiones[Math.floor(Math.random() * extensiones.length)];
    acorde = [];
    second.style.display = "none";
    sixth.style.display = "none";
    eleventh.style.display = "none";
    thirteen.style.display = "none";
    acorde.push(escala);
    if (extension == "9") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+10]; seventh.style.translate = translations[root+10];
      ninth.style.display = "flex"; ninth.style.top = tops[root+14]; ninth.style.translate = translations[root+14];
      acorde.push(extension);
    } else if (extension == "7(add9)") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4];
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+10]; seventh.style.translate = translations[root+10];
      ninth.style.display = "flex"; ninth.style.top = tops[root+14]; ninth.style.translate = translations[root+14];
      acorde.push(extension);
    } else if (extension == "11") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4]; third.innerHTML = "<img style='filter:hue-rotate(60deg);' src='res/dot.png'>"
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7];
      seventh.style.display = "flex"; seventh.style.top = tops[root+10]; seventh.style.translate = translations[root+10];
      ninth.style.display = "flex"; ninth.style.top = tops[root+14]; ninth.style.translate = translations[root+14];
      eleventh.style.display = "flex"; eleventh.style.top = tops[root+17]; eleventh.style.translate = translations[root+17];
      acorde.push(extension);
    } else if (extension == "13") {
      third.style.display = "flex"; third.style.top = tops[root+4]; third.style.translate = translations[root+4]; third.innerHTML = "<img style='filter:hue-rotate(60deg);' src='res/dot.png'>"
      fifth.style.display = "flex"; fifth.style.top = tops[root+7]; fifth.style.translate = translations[root+7]; fifth.innerHTML = "<img style='filter:hue-rotate(60deg);' src='res/dot.png'>"
      seventh.style.display = "flex"; seventh.style.top = tops[root+10]; seventh.style.translate = translations[root+10];
      ninth.style.display = "flex"; ninth.style.top = tops[root+14]; ninth.style.translate = translations[root+14];
      eleventh.style.display = "flex"; eleventh.style.top = tops[root+17]; eleventh.style.translate = translations[root+17];
      thirteen.style.display = "flex"; thirteen.style.top = tops[root+21]; thirteen.style.translate = translations[root+21];
      acorde.push(extension);
    } else {extension = false}
  }

  // Alteraciones
  if (alteracionesCheckbox && Math.floor(Math.random()*4)+1!=2) {
    alteracion = alteraciones[Math.floor(Math.random() * alteraciones.length)];
    if (alteracion == "(omit5)" && septima) {
      fifth.style.display = "none";
      acorde.push(alteracion)
    } else if (alteracion == "(no5)" && (septima || extension)) {
      fifth.style.display = "none";
      acorde.push(alteracion)
    } else if (alteracion == "(omit7)" && (!triada || !septima) && extension !="7(add9)" && extension) {
      seventh.style.display = "none";
      acorde.push(alteracion)
    } else if (alteracion == "(no7)" && (!triada || !septima) && extension) {
      seventh.style.display = "none";
      acorde.push(alteracion)
    } else if (alteracion == "(#9)" && extension == "7") {
      ninth.style.display = "flex"; ninth.style.top = tops[root+15]; ninth.style.translate = translations[root+15];
      acorde.push(alteracion)
    } else if (alteracion == "(♭9)" && extension == "7") {
      ninth.style.display = "flex"; ninth.style.top = tops[root+13]; ninth.style.translate = translations[root+13];
      acorde.push(alteracion)
    } else if (alteracion == "(#11)" && extension == "9") {
      eleventh.style.display = "flex"; eleventh.style.top = tops[root+18]; eleventh.style.translate = translations[root+18];
      acorde.push(alteracion)
    } else if (alteracion == "(♭11)" && extension == "9") {
      eleventh.style.display = "flex"; eleventh.style.top = tops[root+16]; eleventh.style.translate = translations[root+16];
      acorde.push(alteracion)
    } else if (alteracion == "(#13)" && extension == "11") {
      if (third) {
        third.innerHTML = "<img style='filter:hue-rotate(60deg);' src='res/dot.png'>"
      };
      if (fifth) {
        fifth.innerHTML = "<img style='filter:hue-rotate(60deg);' src='res/dot.png'>"
      };
      thirteen.style.display = "flex"; thirteen.style.top = tops[root+22]; thirteen.style.translate = translations[root+22];
      acorde.push(alteracion)
    } else if (alteracion == "(♭13)" && extension == "11") {
      if (third) {
        third.innerHTML = "<img style='filter:hue-rotate(60deg);' src='res/dot.png'>"
      };
      if (fifth) {
        fifth.innerHTML = "<img style='filter:hue-rotate(60deg);' src='res/dot.png'>"
      };
      thirteen.style.display = "flex"; thirteen.style.top = tops[root+20]; thirteen.style.translate = translations[root+20];
      acorde.push(alteracion)
    }
  }

  // Invertidas
  /*if (inversionesCheckbox) {
    invertida = invertidas[Math.floor(Math.random() * invertidas.length)];
    // Aplicar condiciones especiales para invertidas
    switch (invertida) {
      case "/C":
        if () {
          acorde.push(invertida);
        }
        break;
      case "/C#":
        if () {
          acorde.push(invertida);
        }
      case "/D":
        if () {
          acorde.push(invertida);
        }
      case "/D#":
        if () {
          acorde.push(invertida);
        }
      case "/E":
        if () {
          acorde.push(invertida);
        }
      case "/F":
        if () {
          acorde.push(invertida);
        }
      case "/F#":
        if () {
          acorde.push(invertida);
        }
      case "/G":
        if () {
          acorde.push(invertida);
        }
      case "/G#":
        if () {
          acorde.push(invertida);
        }
      case "/A":
        if () {
          acorde.push(invertida);
        }
      case "/A#":
        if () {
          acorde.push(invertida);
        }
      case "/B":
        if () {
          acorde.push(invertida);
        }
    }
  }*/

  // Arpegio Modal
  if (arpegioModalCheckbox) {
    arpegio = arpegiosModales[Math.floor(Math.random() * arpegiosModales.length)];
    acorde.push(arpegio);
    if (arpegio == " jonico") { n=[2, 4, 5, 7, 9, 11, 12]
    } else if (arpegio == " dorico") { n=[2, 3, 5, 7, 9, 10, 12]
    } else if (arpegio == " frigio") { n=[1, 3, 5, 7, 8, 10, 12]
    } else if (arpegio == " lidio") { n=[2, 4, 6, 7, 9, 11, 12]
    } else if (arpegio == " mixolidio") { n=[2, 4, 5, 7, 9, 10, 12]
    } else if (arpegio == " eolico") { n=[2, 3, 5, 7, 8, 10, 12]
    } else if (arpegio == " locrio") { n=[1, 3, 5, 6, 8, 10, 12]
    };
    second.style.top = tops[root+n[0]]; second.style.display = "flex"; second.style.translate = translations[root+n[0]]; second.innerHTML = "<img width='50%' src='res/dot.png'>";
    third.style.top = tops[root+n[1]]; third.style.display = "flex"; third.style.translate = translations[root+n[1]]; third.innerHTML = "<img width='50%' src='res/dot.png'>";
    fourth.style.top = tops[root+n[2]]; fourth.style.display = "flex"; fourth.style.translate = translations[root+n[2]]; fourth.innerHTML = "<img width='50%' src='res/dot.png'>";
    fifth.style.top = tops[root+n[3]]; fifth.style.display = "flex"; fifth.style.translate = translations[root+n[3]]; fifth.innerHTML = "<img width='50%' src='res/dot.png'>";
    sixth.style.top = tops[root+n[4]]; sixth.style.display = "flex"; sixth.style.translate = translations[root+n[4]]; sixth.innerHTML = "<img width='50%' src='res/dot.png'>";
    seventh.style.top = tops[root+n[5]]; seventh.style.display = "flex"; seventh.style.translate = translations[root+n[5]]; seventh.innerHTML = "<img width='50%' src='res/dot.png'>";
    octave.style.top = tops[root+n[6]]; octave.style.display = "flex"; octave.style.translate = translations[root+n[6]]; octave.innerHTML = "<img width='50%' src='res/dot.png'>";
  }

  // Mostrar el acorde en la interfaz
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = acorde.join("");
};