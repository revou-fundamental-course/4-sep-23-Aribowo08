// Function to calculate the area of a square
function calculateLuasPersegi() {
    var sisi = parseFloat(document.getElementById("sisi").value);
    var luas = sisi * sisi;
    document.getElementById("luas-result").textContent = "Luas Persegi: " + luas;
}

// Function to calculate the perimeter of a square
function calculateKelilingPersegi() {
    var sisi = parseFloat(document.getElementById("sisi").value);
    var keliling = 4 * sisi;
    document.getElementById("keliling-result").textContent = "Keliling Persegi: " + keliling;
}

// Add event listeners to the buttons
document.getElementById("luas-calculate-button").addEventListener("click", calculateLuasPersegi);
document.getElementById("keliling-calculate-button").addEventListener("click", calculateKelilingPersegi);
