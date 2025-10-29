<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);
    $pesan = htmlspecialchars($_POST['pesan']);

    // Konfigurasi email
    $to = "kaylameyrivalesmana@gmail.com"; // Ganti dengan email sekolah
    $subject = "Pesan dari $nama";
    $message = "Nama: $nama\nEmail: $email\nPesan:\n$pesan";
    $headers = "From: $email";

    // Kirim email
    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Terima kasih, $nama! Pesan kamu sudah dikirim.');</script>";
    } else {
        echo "<script>alert('Maaf, terjadi kesalahan. Coba lagi.');</script>";
    }
}
?>