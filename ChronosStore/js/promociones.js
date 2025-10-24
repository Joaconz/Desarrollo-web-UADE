document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#promo-form");
  const result = document.querySelector("#resultados");

  function obtenerPrecioFijo(producto) {
    const preciosPorValor = {
      "Chronos Classic": 250,
      "Chronos Modern Black": 420,
      "Chronos Heritage": 1200,
    };

    const key = String(producto).trim().toLowerCase();
    if (preciosPorValor[key] !== undefined) return preciosPorValor[key];
    return 250;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const producto = form.producto.value;
    const cantidad = parseInt(form.cantidad.value, 10);
    const promo = form.promocion.value;

    if (!cantidad || cantidad <= 0) {
      result.innerHTML = "<p class='text-red-600'>Ingrese una cantidad válida.</p>";
      return;
    }

    const precioBase = obtenerPrecioFijo(producto);

    let totalSinDescuento = precioBase * cantidad;
    let descuento = 0;

    switch (promo) {
      case "dosx50":
        if (cantidad >= 2) descuento = precioBase * 0.5;
        break;
      case "tresx2":
        if (cantidad >= 3) descuento = precioBase;
        break;
      case "descuento10":
        if (totalSinDescuento > 30000) descuento = totalSinDescuento * 0.1;
        break;
    }

    let totalFinal = totalSinDescuento - descuento;

    if (descuento > 0) {
      Swal.fire({
        icon: 'success',
        title: '¡Promoción aplicada!',
        text: `Ahorro total: $${descuento.toFixed(2)}`,
        confirmButtonColor: '#C6A664'
      });
    }

    result.innerHTML = `
      <div class='bg-white shadow p-4 rounded mt-4'>
        <p><strong>Producto:</strong> ${producto}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Precio unitario:</strong> $${precioBase.toFixed(2)}</p>
        <p><strong>Total sin descuento:</strong> $${totalSinDescuento.toFixed(2)}</p>
        <p><strong>Descuento aplicado:</strong> $${descuento.toFixed(2)}</p>
        <p><strong>Total final:</strong> $${totalFinal.toFixed(2)}</p>
      </div>
    `;
  });
});