// Efek Loading Transisi
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');

  // Menunggu 3 detik (sesuai animasi progress bar) lalu pindah halaman
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.classList.add('hidden');
      mainContent.classList.remove('hidden');
      startSlideshow();
    }, 1000); // Waktu fade out
  }, 3000);
});

// Jalankan pergantian foto otomatis
function startSlideshow() {
  const photos = document.querySelectorAll('.photo');
  let currentIndex = 0;

  setInterval(() => {
    // Hapus kelas 'active' dari foto saat ini
    photos[currentIndex].classList.remove('active');

    // Pindah ke foto berikutnya
    currentIndex = (currentIndex + 1) % photos.length;

    // Tambahkan kelas 'active' ke foto baru
    photos[currentIndex].classList.add('active');
  }, 3000); // Foto berganti setiap 3 detik
}
