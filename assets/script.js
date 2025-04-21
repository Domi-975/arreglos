// Arreglos de propiedades
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa familiar en suburbio',
        src: 'https://example.com/house.jpg',
        descripcion: 'Casa espaciosa ideal para familias.',
        ubicacion: '456 Family St, Suburbia, CA 12345',
        habitaciones: 5,
        costo: 3500,
        smoke: false,
        pets: false
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Estudio acogedor en el centro',
        src: 'https://example.com/studio.jpg',
        descripcion: 'Estudio pequeño y acogedor, ideal para una persona.',
        ubicacion: '789 City Center, Metropolis, CA 98765',
        habitaciones: 1,
        costo: 1500,
        smoke: true,
        pets: true
    }
];

// Función para renderizar propiedades en venta
function renderizarPropiedadesVenta() {
    const ventaList = document.getElementById('venta-list');
    let html = ''; // Variable para almacenar el HTML

    const propiedadesMostrar = propiedades_venta.slice(0, 4); // Muestra 4 propiedades

    for (const prop of propiedadesMostrar) {
        html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}" />
                    <div class="card-body">
                        <h5 class="card-title">${prop.nombre}</h5>
                        <p class="card-text">${prop.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
                        <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                        <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
                            <i class="${prop.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
                            ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${prop.pets ? 'text-success' : 'text-danger'}">
                            <i class="${prop.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> 
                            ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    ventaList.innerHTML = html; // Asignar el HTML construido a innerHTML
}

// Función para renderizar propiedades en alquiler
function renderizarPropiedadesAlquiler() {
    const alquilerList = document.getElementById('alquiler-list');
    let html = ''; // Variable para almacenar el HTML

    const propiedadesMostrar = propiedades_alquiler.slice(0, 4); // Muestra 4 propiedades

    for (const prop of propiedadesMostrar) {
        html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}" />
                    <div class="card-body">
                        <h5 class="card-title">${prop.nombre}</h5>
                        <p class="card-text">${prop.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
                        <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                        <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
                            <i class="${prop.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
                            ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${prop.pets ? 'text-success' : 'text-danger'}">
                            <i class="${prop.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> 
                            ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    alquilerList.innerHTML = html; // Asignar el HTML construido a innerHTML
}

// Verificar si estamos en la página de inicio
if (document.getElementById('venta-list') && document.getElementById('alquiler-list')) {
    renderizarPropiedadesVenta(3); // Muestra 3 propiedades en la página principal
    renderizarPropiedadesAlquiler(3); // Muestra 3 propiedades en la página principal
}

// Verificar si estamos en la página de propiedades en venta
if (document.getElementById('venta-list') && !document.getElementById('alquiler-list')) {
    renderizarPropiedadesVenta(4); // Muestra 4 propiedades en la página de venta
}

// Verificar si estamos en la página de propiedades en alquiler
if (document.getElementById('alquiler-list') && !document.getElementById('venta-list')) {
    renderizarPropiedadesAlquiler(4); // Muestra 4 propiedades en la página de alquiler
}