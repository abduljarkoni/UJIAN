function matriks() {
  var a = parseInt(document.getElementById("matrix1").value);
  var b = parseInt(document.getElementById("matrix2").value);

  document.getElementById("hasil").value = tambah(a, b);
}

function hitungMatrix() {
  document.getElementById("hasil").value =
    parseInt(document.getElementById("matrix1").value) +
    parseInt(document.getElementById("matrix2").value);
}

function tambah(a, b) {
  return a + b;
}
