let outputscreen = document.getElementById("output-screen");
function display(num) {
    outputscreen.value += num;
}

function calculator() {
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(error) {
        alert("Angka yang anda masukkan salah!")
    }
}

function hapus() {
    outputscreen.value = "";
}

function del() {
    outputscreen.value = outputscreen.value.slice(0,-1);
}

function percentage() {
    outputscreen.value /= 100;
}
