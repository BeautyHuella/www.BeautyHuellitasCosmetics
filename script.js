function toggleModoUso(btn) {
  const info = btn.nextElementSibling;
  info.classList.toggle("oculto");
}

function moverCarrusel(btn, direccion) {
  const carrusel = btn.parentElement.querySelector(".carrusel");
  const total = carrusel.children.length;
  const width = carrusel.clientWidth;
  let index = parseInt(carrusel.dataset.index || 0);
  index += direccion;

  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  carrusel.style.transform = `translateX(-${index * 100}%)`;
  carrusel.dataset.index = index;
}
