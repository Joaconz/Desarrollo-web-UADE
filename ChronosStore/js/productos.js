    const productos = [
      { id: 1, nombre: "Reloj Chronos Clásico", color: "Negro", precio: 250, imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" },
      { id: 2, nombre: "Reloj Automático Premier", color: "Plata", precio: 540, imagen: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80" },
      { id: 3, nombre: "Reloj Edición Dorada", color: "Oro Rosado", precio: 890, imagen: "https://images.unsplash.com/photo-1511381939415-c1c5bca3a089?auto=format&fit=crop&w=800&q=80" },
      { id: 4, nombre: "Chronos Minimal", color: "Acero", precio: 310, imagen: "https://images.unsplash.com/photo-1524593166156-312d5a1b4d28?auto=format&fit=crop&w=800&q=80" },
      { id: 5, nombre: "Sport Chronograph", color: "Azul Marino", precio: 460, imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" },
      { id: 6, nombre: "Reloj Vintage Heritage", color: "Marrón", precio: 380, imagen: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80" },
      { id: 7, nombre: "Chronos Executive", color: "Negro", precio: 650, imagen: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80" },
      { id: 8, nombre: "Reloj Celeste SkyMaster", color: "Azul", precio: 720, imagen: "https://images.unsplash.com/photo-1521120098171-33f0d0a1a3c4?auto=format&fit=crop&w=800&q=80" },
      { id: 9, nombre: "Chronos Silver Edge", color: "Plata", precio: 290, imagen: "https://images.unsplash.com/photo-1526045431048-1c3d0e3df8a3?auto=format&fit=crop&w=800&q=80" },
      { id: 10, nombre: "Reloj Ébano Noir", color: "Negro Dorado", precio: 520, imagen: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80" },
      { id: 11, nombre: "Chronos Chronometer Pro", color: "Plata", precio: 400, imagen: "https://images.unsplash.com/photo-1600185365926-3a2ce0b5a3c3?auto=format&fit=crop&w=800&q=80" },
      { id: 12, nombre: "Reloj Urban Steel", color: "Acero Oscuro", precio: 330, imagen: "https://images.unsplash.com/photo-1600180758890-6e8c8a600ad4?auto=format&fit=crop&w=800&q=80" },
      { id: 13, nombre: "Chronos Elite", color: "Oro", precio: 1250, imagen: "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10?auto=format&fit=crop&w=800&q=80" },
      { id: 14, nombre: "Reloj Black Moon", color: "Negro", precio: 270, imagen: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80" },
      { id: 15, nombre: "Chronos ChronoSport X", color: "Negro", precio: 410, imagen: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=800&q=80" },
    ];

    const contenedor = document.getElementById("productos");
    const buscador = document.getElementById("buscador");
    const minPrecio = document.getElementById("minPrecio");
    const maxPrecio = document.getElementById("maxPrecio");
    const btnFiltrar = document.getElementById("filtrarBtn");
    const sinResultados = document.getElementById("sin-resultados");

    function mostrarProductos(lista) {
      contenedor.innerHTML = lista.map(p => {
        const localSrc = `img/producto${p.id}.png`;
        return `
        <div class="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden">
          <img src="${localSrc}" onerror="this.onerror=null;this.src='${p.imagen}'" alt="${p.nombre}" class="aspect-square w-full object-cover group-hover:opacity-80 transition" />
          <div class="mt-4 flex justify-between p-4">
            <div>
              <h3 class="text-sm text-gray-700 font-semibold">
                <a href="#"><span aria-hidden="true" class="absolute inset-0"></span>${p.nombre}</a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">${p.color}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">$${p.precio}</p>
          </div>
        </div>
      `}).join("");
      sinResultados.classList.toggle("hidden", lista.length > 0);
    }

    function filtrarProductos() {
      const texto = buscador.value.toLowerCase();
      const min = parseFloat(minPrecio.value) || 0;
      const max = parseFloat(maxPrecio.value) || Infinity;

      const filtrados = productos.filter(p =>
        (p.nombre.toLowerCase().includes(texto) || p.color.toLowerCase().includes(texto)) &&
        p.precio >= min && p.precio <= max
      );
      mostrarProductos(filtrados);
    }

    // Mostrar todos al cargar
    mostrarProductos(productos);

    // Eventos
    buscador.addEventListener("input", filtrarProductos);
    btnFiltrar.addEventListener("click", filtrarProductos);