document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menampilkan atau menyembunyikan konten syarat dan ketentuan
    function toggleTerms() {
        const terms = document.getElementById('terms');  // Mengambil elemen dengan ID 'terms'

        // Jika elemen 'terms' tersembunyi, tampilkan, jika tidak, sembunyikan
        if (terms.style.display === 'none' || terms.style.display === '') {
            terms.style.display = 'block';  // Tampilkan elemen
        } else {
            terms.style.display = 'none';   // Sembunyikan elemen
        }
    }

    // Menambahkan event listener untuk teks yang bisa diklik
    document.getElementById('toggle-terms').addEventListener('click', toggleTerms);
});
