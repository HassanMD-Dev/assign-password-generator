const showPass = document.getElementById("showPass");
const upperCase = document.getElementById("upper");
const lowerCase = document.getElementById("lower");
const numberP = document.getElementById("number");
const symbol = document.getElementById("symbol");
const passLength = document.getElementById("length");
const generateBtn = document.getElementById("generatePass");

let charset = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  num: "0123456789",
  sym: "!@#$%^&*()_+",
};
const generatePassword = (e) => {
  e.preventDefault();
  let pool = "";
  let randomPass = "";
  if (upperCase.checked) pool += charset.upper;
  if (lowerCase.checked) pool += charset.lower;
  if (numberP.checked) pool += charset.num;
  if (symbol.checked) pool += charset.sym;
  if (pool === "") {
    alert("Please select at least one option");
    return;
  }
  let length = passLength.value;

  for (let i = 0; i < length; i++) {
    let randIndex = Math.floor(Math.random() * pool.length);

    randomPass += pool[randIndex];
  }
  showPass.value = randomPass;
};

generateBtn.addEventListener("click", generatePassword);
