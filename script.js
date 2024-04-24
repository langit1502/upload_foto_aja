// Ambil elemen kode
const codeElement = document.getElementById("code");

// Ambil teks kode
const codeText = codeElement.textContent;

// Bersihkan teks kode dari karakter spasi dan baris baru yang tidak terlihat
const cleanedCodeText = codeText.trim();

// Pisahkan setiap karakter kode ke dalam array
const codeChars = cleanedCodeText.split("");

// Kosongkan teks kode pada elemen HTML
codeElement.textContent = "";

// Indeks karakter teks kode
let charIndex = 0;

// Tambahkan setiap karakter teks kode satu per satu dengan interval waktu
const typingInterval = setInterval(() => {
    // Tambahkan karakter ke elemen kode
    codeElement.textContent += codeChars[charIndex];

    // Periksa apakah sudah mencapai karakter terakhir
    if (charIndex === codeChars.length - 1) {
        // Hentikan interval jika sudah mencapai karakter terakhir
        clearInterval(typingInterval);
    }

    // Tambahkan indeks karakter
    charIndex++;
}, 300); // Atur kecepatan mengetik di sini (milidetik)
