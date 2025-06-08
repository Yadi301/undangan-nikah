window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const nama = params.get("dear");
  const namaTamu = document.getElementById("namaTamu");
  if (nama) {
    namaTamu.textContent = decodeURIComponent(nama);
  }
};
