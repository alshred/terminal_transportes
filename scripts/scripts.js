
// MOSTRAR MENU VISTA MOVIL
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// OCULTAR MENU VISTA MOVIL
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// DESPLAZAMIENTO SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FORM SIMULACIÓN PROCESOS COTIZACIÓN & COMPRA
document.getElementById('quoteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const pasajeros = document.getElementById('pasajeros').value;
    
    if (origen && destino && fecha && pasajeros) {
        const precio = Math.floor(Math.random() * 50000) + 60000;
        const total = precio * parseInt(pasajeros);
        const result = document.getElementById('quoteResult');
        result.className = 'alert success show';
        result.innerHTML = `
            <strong>¡Cotización Exitosa!</strong><br>
            Ruta: ${origen} - ${destino}<br>
            Precio por persona: $${precio.toLocaleString()}<br>
            Total (${pasajeros} pasajero${pasajeros > 1 ? 's' : ''}): $${total.toLocaleString()}
        `;
        
        // ACTUALIZAR COTIZACIÓN & RESUMEN COMPRA
        document.getElementById('resumenRuta').textContent = `${origen} - ${destino}`;
        document.getElementById('resumenFecha').textContent = fecha;
        document.getElementById('resumenPasajeros').textContent = pasajeros;
        document.getElementById('resumenTotal').textContent = `$${total.toLocaleString()}`;
    }
});

// FORM SIMULACIÓN PROCESO COMPRA
function processPurchase() {
    const nombre = document.getElementById('nombre').value;
    const documento = document.getElementById('documento').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    
    if (nombre && documento && email && telefono) {
        const result = document.getElementById('purchaseResult');
        result.className = 'alert success show';
        result.innerHTML = `
            <strong>¡Compra Exitosa!</strong><br>
            Gracias ${nombre}, tu boleto ha sido reservado.<br>
            Método de pago: ${payment.charAt(0).toUpperCase() + payment.slice(1)}<br>
            Recibirás un correo de confirmación en ${email}
        `;
        
        // REINICIO FORM DESPUES DE 5 SEGUNDOS
        setTimeout(() => {
            document.getElementById('purchaseForm').reset();
            result.className = 'alert';
        }, 5000);
    } else {
        const result = document.getElementById('purchaseResult');
        result.className = 'alert error show';
        result.innerHTML = '<strong>Error:</strong> Por favor completa todos los campos';
    }
}

// FORMULARIO CONTACTO
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('contactNombre').value;
    const email = document.getElementById('contactEmail').value;
    const asunto = document.getElementById('contactAsunto').value;
    const mensaje = document.getElementById('contactMensaje').value;
    
    if (nombre && email && asunto && mensaje) {
        const result = document.getElementById('contactResult');
        result.className = 'alert success show';
        result.innerHTML = `
            <strong>¡Mensaje Enviado!</strong><br>
            Gracias ${nombre}, hemos recibido tu mensaje.<br>
            Te responderemos pronto a ${email}
        `;
        
        // REINICIO FORM DESPUES DE SUBMIT
        document.getElementById('contactForm').reset();
        
        // REINICIO FORM DESPUES DE 5 SEGUNDOS
        setTimeout(() => {
            result.className = 'alert';
        }, 5000);
    }
});

// AJUSTE FECHA MINIMA PARA SELECTOR FECHAS
const today = new Date().toISOString().split('T')[0];
document.getElementById('fecha').setAttribute('min', today);

// ACTUALIZAR COTIZACIÓN POR CAMBIO DE CANTIDAD PASAJEROS
ddocument.getElementById('pasajeros').addEventListener('change', (e) => {
    document.getElementById('resumenPasajeros').textContent = e.target.value;
});

// LOGIN ADMINISTRADOR
function showAdminLogin(event) {
    event.preventDefault();
    alert('Admin Login: Username: admin, Password: admin123');
}