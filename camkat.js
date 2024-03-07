/* Esto es un proyecto forkeado de platzi,m llamado curso de frontend developmen, fue forkeado como curso de java scrpt practico ya ahora lo estoy personalizando para mi tienda CamKatStore, haremos cambios de variables, aumento de variables y funciones y sus imagenes seran de ropa. Este proyecto sigue siendo meramente tecnico */


const menuEmailDesktop = document.querySelector('.navbar-email');
const menuEmailMov = document.querySelector('.emailMobil');

const DesktopMenuEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenuIHam = document.querySelector('.mobile-menu');
const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const menuCarritoCompras = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container'); // lo traemos para meter el div que contiene el template de nuestro objeto productos
const menuDetalleCadaCompra = document.querySelector('#productDetail');


//const productDetailCloseIcono = document.querySelector('.product-detail-close')


// lo creamos para cerrar el aside 2 que tiene la descripcion de cada compra
const tituloTipRopa = document.querySelector('.tipoDeRopa');//titulo que va a llevar cada lista de productos

const opcionRopaTodoDesk = document.querySelector('.opcionTodoDesktop');
const opcionRopaTodoMov = document.querySelector('.opcionTodoMobil');

const opcionRopaCamisetasHDesk = document.querySelector('.opcionCamisetasHDesktop');
const opcionRopaCamisetasHMov = document.querySelector('.opcionCamisetasHMobil');

const OpcionRopaJeansHDesk = document.querySelector('.OpcionJeansHDesktop');
const OpcionRopaJeansHMov = document.querySelector('.OpcionJeansHMobil');

const opcionRopachaquetasMDesk = document.querySelector('.opcionchaquetasMDesktop');
const opcionRopachaquetasMMov = document.querySelector('.opcionchaquetasMMobil');

const opcionRopaJeansMDesk = document.querySelector('.opcionJeansMDesktop');
const opcionRopaJeansMMov = document.querySelector('.opcionJeansMMobil');

const opcionRopaOtrasPrendasDesk = document.querySelector('.opcionOtrasPrendasDesktop');
const opcionRopaOtrasPrendasMov = document.querySelector('.opcionOtrasPrendasMobil');

const logoCamkat = document.querySelector('.logo');

const logoInicioCamKat = document.querySelector('.divImagenLogocamkat');

const inicioFooter = document.querySelector('.footerInicio');
const AcercaDeFooter = document.querySelector('.footerAcercaDe'); 
const contactoFooter = document.querySelector('.footerContacto');

const logoEmailUsuario = document.getElementById('logoDelCorreo');

const todasOrdenesMenuMobil = document.querySelector('.todasOrdersMenuMobil');

const asideTodasLasCompras = document.querySelector('#asideTotalCompras');

const emailOpcionTotalCompras = document.querySelector('.titleTotalCompras');

const miCuentaMenuMov = document.querySelector('.miCuentaMenuMobil');

const divIngresoMobil = document.querySelector('.divIngresoCuenta');

const miCuentaMenuDesktop = document.querySelector('.desktop-menu-cuenta');

const buttonCrearCuenta = document.querySelector('.signup-buttonIngreso');

const divCrearCuenta = document.querySelector('.divCrearCuenta');

const opcionSignOutMenuMob = document.querySelector('.sign-outMenuMobil');

const opcionSignOutMenuDesktop = document.querySelector('.sign-outMenuDesktop');

const contenComprasAdicionadas = document.querySelector('.divOnlyCompras');

const divNumComprasCart = document.querySelector('.numComprasCart');


const buttonConfirmarCrearCuenta = document.querySelector('.primary-buttonCrear');
const divConfirmarCrearCuenta = document.querySelector('.divEmailCreado');

const buttonLoginEmailCreado = document.querySelector('.login-buttonEmailCreado');



const buttonRegistrarEmail = document.querySelector('.login-buttonIngreso');

const correoDesktopMenuCK = document.querySelector('.correoDesktopMenu');



/* menuEmailMov.addEventListener('click', toggleDesktopMenuEmail) */
menuEmailMov.addEventListener('click', miCuentaMenuIngresar)
menuEmailDesktop.addEventListener('click', toggleDesktopMenuEmail);


menuHamIcon.addEventListener('click', toggleMobilMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoCompras);


logoCamkat.addEventListener('click',mostrarMiInformacion);
inicioFooter.addEventListener('click', recargarMiPagina);
AcercaDeFooter.addEventListener('click', mostrarMiInformacion);



todasOrdenesMenuMobil.addEventListener('click', toggleTotalOrdenens);
emailOpcionTotalCompras.addEventListener('click', toggleTotalOrdenens);
miCuentaMenuMov.addEventListener('click', miCuentaMenuIngresar);
miCuentaMenuDesktop.addEventListener('click', miCuentaMenuIngresar);
buttonRegistrarEmail.addEventListener('click', function(event) {
    event.preventDefault();
    guardarInfoLoginIngresoYMostrarPagina();
});
buttonCrearCuenta.addEventListener('click', miCuentaMenuCrear);
opcionSignOutMenuMob.addEventListener('click', recargarMiPagina);
opcionSignOutMenuDesktop.addEventListener('click', recargarMiPagina);
buttonConfirmarCrearCuenta.addEventListener('click', function(event) {
    // Evita el comportamiento predeterminado del botón
    event.preventDefault();
    
    // Llama a la función que deseas ejecutar
    miCuentaCreadaConfirmacion();
});
buttonLoginEmailCreado.addEventListener('click', miCuentaMenuIngresar);

correoDesktopMenuCK.addEventListener('click', miCuentaMenuIngresar);




function toggleDesktopMenuEmail() {
    window.scrollTo(0, 0);
    closeDesplegableCompra()
    menuDetalleCadaCompra.innerHTML = '';
     const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

     const isdivIngresoMobilClosed = divIngresoMobil.classList.contains('inactive');
    if (!isdivIngresoMobilClosed) {
        divIngresoMobil.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    DesktopMenuEmail.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva


}


function toggleMobilMenu() {
    closeDesplegableCompra()
        menuDetalleCadaCompra.innerHTML = '';
        //en una variable almacenamos 
        const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
        if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
        }

        const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
        if (!isDesktopMenuEmailClosed) {
        DesktopMenuEmail.classList.add('inactive');
        } 

        const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

     const isdivIngresoMobilClosed = divIngresoMobil.classList.contains('inactive');
    if (!isdivIngresoMobilClosed) {
        divIngresoMobil.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

        mobileMenuIHam.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva

}


function toggleCarritoCompras() {
    window.scrollTo(0, 0);
    closeDesplegableCompra()
    menuDetalleCadaCompra.innerHTML = '';

    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');

    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

     const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

     const isdivIngresoMobilClosed = divIngresoMobil.classList.contains('inactive');
    if (!isdivIngresoMobilClosed) {
        divIngresoMobil.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }
    
    menuCarritoCompras.classList.toggle('inactive');

}


 function openDesplegableCompra() {
    //menuDetalleCadaCompra.clear;
    menuDetalleCadaCompra.classList.remove('inactive'); 
    //menuCarritoCompras.classList.add('inactive');

   //mostrarCadaProducto(camisetasHombreList) 
 
    
}



function closeDesplegableCompra() {
    //menuDetalleCadaCompra.innerHTML = '';
    menuDetalleCadaCompra.classList.add('inactive');
}
    


function renderTodoRopa() {
    cardsContainer.setAttribute('class', 'cards-container');
    menuDetalleCadaCompra.classList.add('inactive');
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoMobil.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Catálogo Completo';
    renderObjetosHTML(catalogoCompletoList);
}

function renderCamisetasH() {
    cardsContainer.setAttribute('class', 'cards-container');
    menuDetalleCadaCompra.classList.add('inactive');
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoMobil.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Camisetas Economicas Hombre';
    renderObjetosHTML(camisetasHombreList);
}

function renderJeansH() {
    cardsContainer.setAttribute('class', 'cards-container');
    menuDetalleCadaCompra.classList.add('inactive');
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoMobil.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Jeans Hombre';
    renderObjetosHTML(jeansHombreList);
}

function renderJeansM() {
    cardsContainer.setAttribute('class', 'cards-container');
    menuDetalleCadaCompra.classList.add('inactive');
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoMobil.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Jeans Dama';
    renderObjetosHTML(jeansMujerList);
}

function renderchaquetasM() {
    cardsContainer.setAttribute('class', 'cards-container');
    menuDetalleCadaCompra.classList.add('inactive');
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoMobil.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'chaquetas Dama';
    renderObjetosHTML(chaquetasDamaList);
}

function renderOtrasPrendas() {
    cardsContainer.setAttribute('class', 'cards-container');
    menuDetalleCadaCompra.classList.add('inactive');
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoMobil.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Otras Prendas';
    renderObjetosHTML(otrasPrendasList);
}

function mostrarMiInformacion() {
    window.scrollTo(0, 0);
    cardsContainer.setAttribute('class', 'activeFlex');
    // cardsContainer.classList.add('activeFlex');
    menuDetalleCadaCompra.classList.add('inactive');
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoMobil.classList.add('inactive');
    divCrearCuenta.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');

    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'CAMKAT STORE S.A.S';

    const divInfoEmpresa1 = document.createElement('div');
    divInfoEmpresa1.classList.add('contInfoEmpresa1')
    const h1Mision = document.createElement('h1');
    h1Mision.innerText ='Misión';
    const pMision = document.createElement('p');
    pMision.classList.add('misionEmpresa');
    
     const divInfoEmpresa2 = document.createElement('div');
    divInfoEmpresa2.classList.add('contInfoEmpresa2')
    const h1Vision = document.createElement('h1');
    h1Vision.innerText= 'Visión';
    const pVision = document.createElement('p');
    pVision.classList.add('vsionEmpresa');

     const divInfoEmpresa3 = document.createElement('div');
    divInfoEmpresa3.classList.add('contInfoEmpresa3')
    const h1Nosotros = document.createElement('h1');
    h1Nosotros.innerText = '¿Quienes somos?';
    const pNosotros = document.createElement('p');
    pNosotros.classList.add('infoNosotros');


    pMision.innerText = 'En nuestra tienda de ropa, nos dedicamos a ofrecer a nuestros clientes una experiencia de compra excepcional al proporcionar prendas de vestir de alta calidad que reflejan las últimas tendencias de la moda. Nos esforzamos por brindar un servicio al cliente excepcional, creando un ambiente acogedor y colaborativo donde cada cliente se sienta valorado y escuchado. Nuestra misión es inspirar confianza y empoderamiento a través de la moda, ayudando a nuestros clientes a expresar su estilo único y sentirse seguros en cada ocasión.'
    
    pVision.innerText = 'Nuestra visión es convertirnos en la principal opción para aquellos que buscan moda de calidad y un servicio excepcional. Buscamos expandir nuestra presencia tanto en línea como en tiendas físicas, llegando a nuevos mercados y comunidades para compartir nuestra pasión por la moda con un público cada vez mayor. Nos esforzamos por ser reconocidos como líderes en la industria de la moda por nuestra innovación, sostenibilidad y compromiso con la satisfacción del cliente.'

    pNosotros.innerText = 'En nuestra tienda de ropa, nos apasiona la moda y creemos en el poder transformador que tiene la ropa para elevar la confianza y la autoexpresión. Nuestra dedicada equipo está compuesto por expertos en moda y servicio al cliente, comprometidos a proporcionar una experiencia de compra excepcional a cada cliente que cruza nuestras puertas o visita nuestra tienda en línea. Nos enorgullece ofrecer una amplia selección de prendas de vestir de alta calidad, cuidadosamente seleccionadas para reflejar las últimas tendencias y satisfacer las necesidades de nuestros clientes. Como empresa, nos esforzamos por mantener altos estándares de ética y responsabilidad social, trabajando en estrecha colaboración con proveedores y comunidades para promover la sostenibilidad y el bienestar. Estamos comprometidos a inspirar confianza y empoderamiento a través de la moda, creando un espacio donde todos son bienvenidos y pueden encontrar su estilo único.'

    divInfoEmpresa1.appendChild(h1Mision);
    divInfoEmpresa1.appendChild(pMision);
    divInfoEmpresa2.appendChild(h1Vision);
    divInfoEmpresa2.appendChild(pVision);
    divInfoEmpresa3.appendChild(h1Nosotros);
    divInfoEmpresa3.appendChild(pNosotros);

    cardsContainer.appendChild(divInfoEmpresa1);
    cardsContainer.appendChild(divInfoEmpresa2);
    cardsContainer.appendChild(divInfoEmpresa3);
}

function recargarMiPagina(){
    window.location.reload();
    window.scrollTo(0, 0);
}

function ajustarCorreoSegunTamanioPantalla() {
    const direccionEmailIngresado = document.querySelector('.input-emailIngreso').value;
    var screenWidth = window.innerWidth;

    if (screenWidth <= 888) {
        /* menuEmailDesktop.innerText = ""; */
        /* logoEmailUsuario.innerHTML = ''; */
        logoEmailUsuario.innerHTML = '<div class = "divGmailUsuario"> <img class= "gmailUsuario" src="https://c0.klipartz.com/pngpicture/246/763/gratis-png-marca-angulo-del-corazon-gmail-logo-de-gmail-thumbnail.png" alt="Email"> </div>'
    } else {

        /* logoEmailUsuario.innerText = direccionEmailIngresado; */
        logoEmailUsuario.innerText = 'Mi cuenta';

    }

}

window.addEventListener('resize', ajustarCorreoSegunTamanioPantalla);
window.addEventListener('load', ajustarCorreoSegunTamanioPantalla);

ajustarCorreoSegunTamanioPantalla();



function toggleTotalOrdenens() {
    window.scrollTo(0, 0);
    closeDesplegableCompra()
    menuDetalleCadaCompra.innerHTML = '';

     const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

    const isdivIngresoMobilClosed = divIngresoMobil.classList.contains('inactive');
    if (!isdivIngresoMobilClosed) {
        divIngresoMobil.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    asideTodasLasCompras.classList.toggle('inactive')
}



function miCuentaMenuIngresar() {
    closeDesplegableCompra()
    menuDetalleCadaCompra.innerHTML = '';

    const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

    const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    divIngresoMobil.classList.toggle('inactive');
}

function miCuentaMenuCrear() {
    closeDesplegableCompra()
    menuDetalleCadaCompra.innerHTML = '';

    const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

    const isdivIngresoMobilClosed = divIngresoMobil.classList.contains('inactive');
    if (!isdivIngresoMobilClosed) {
        divIngresoMobil.classList.add('inactive');
    }
    
     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }


    


    divCrearCuenta.classList.toggle('inactive');
}
let arregloUsuariosRegistrados = [];
function miCuentaCreadaConfirmacion() {

     closeDesplegableCompra()
    menuDetalleCadaCompra.innerHTML = '';

    const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

    const isdivIngresoMobilClosed = divIngresoMobil.classList.contains('inactive');
    if (!isdivIngresoMobilClosed) {
        divIngresoMobil.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

    const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const nameEmailRegistrado = document.querySelector('.inputCrearName').value;
    
 const direccionEmailRegistrado = document.querySelector('.inputCrearEmail').value;

    const passwordEmailRegistrado = document.querySelector('.inputCrearPassword').value;


    
    //necesitamos que nameEmailRegistrado, direccionEmailReguistrado y passwordEmailRegistrado se gaurden en una arreglo como objetos
    
    function UsuarioRegistrado(name, correo, passworld){
        this.name = name;
        this.correo = correo;
        this.passworld = passworld;
    }
    const cliente = new UsuarioRegistrado(nameEmailRegistrado,direccionEmailRegistrado, passwordEmailRegistrado);
    arregloUsuariosRegistrados.push(cliente); // por ahora vamos a guardar en este areglo para que sea comparado con la cuenta ingresada en la funcion miCuentaMenuIngresar

    console.log(arregloUsuariosRegistrados)

    //ahora guardamnos el arreglo de objetos en localStorage para que incluso cuando el usuario recargue la pagina, estos datos queden guardados en el navegador

// Convertir el objeto a una cadena JSON
/* const usuarioJSON = JSON.stringify(arregloUsuariosRegistrados); */

// Guardar en localStorage bajo una clave específica
/* localStorage.setItem('arregloUsuariosRegistrados', usuarioJSON); */





    divConfirmarCrearCuenta.classList.toggle('inactive');
}




let arregloUsuariosIngresados = [];
function guardarInfoLoginIngresoYMostrarPagina() {
    console.log('pelamela');

    const direccionEmailIngresado = document.querySelector('.input-emailIngreso').value;

    const passwordEmailIngresado = document.querySelector('.input-passwordIngreso').value;


    
    //necesitamos que direccionEmailIngresado y passwordEmailIngresado se gaurden en una arreglo como objetos
    
    function UsuarioIngresado(correo, passworld){
        /* this.nombre = nombre; */
        this.correo = correo;
        this.passworld = passworld;
    }
    const usuario = new UsuarioIngresado(direccionEmailIngresado, passwordEmailIngresado);
    arregloUsuariosIngresados.push(usuario);
    console.log(arregloUsuariosIngresados);

    //ahora necesitamos un loop para que nos compare este correo y contraseña con la informacion ya guardada en "la base de datos cuando se crea un usuario"


    for (let u = 0; u < arregloUsuariosIngresados.length; u++) {

        let cadaUsuario = arregloUsuariosIngresados[u];
        console.log(cadaUsuario.correo);
        console.log(arregloUsuariosRegistrados[u].correo);


        for (let i = 0; i < arregloUsuariosRegistrados.length; i++) {

          if( cadaUsuario.passworld === arregloUsuariosRegistrados[i].passworld){
            console.log('usuario Registrado');
        }
        else {
                        console.log('Digite bien la información');
        }            
        }
        
    }

    const isdivIngresoMobilClosed = divIngresoMobil.classList.contains('inactive');
    if (!isdivIngresoMobilClosed) {
        divIngresoMobil.classList.add('inactive');
    }

    menuEmailMov.innerText = direccionEmailIngresado;
    correoDesktopMenuCK.innerText = direccionEmailIngresado;
    console.log(direccionEmailIngresado);
    //menuEmailDesktop.innerText = direccionEmailIngresado;


    //  if (direccionEmailIngresado) {
    //      menuEmailDesktop.innerText = direccionEmailIngresado;
    // } else {
    //     menuEmailDesktop.innerText = 'camkatstore@gmail.comx';
    //     }
}

//la siguiente funcion elegirRenderizacionObjeto, me permitira escoger cual arreglo de objetos enviare a la funcion de renderizado para que le muestre al usuario, de acuedo a tipo de ropa que el usuario busque

/* function elegirRenderizacionObjeto(array1) {
    switch (array1) {
        case array1 === 'camisetasHombreList':
            tituloTipRopa.innerText = 'camisetasHombreList';
            renderObjetosHTML(camisetasHombreList)
            break;
        case array1 === 'jeansHombreList':
            tituloTipRopa.innerText = 'jeansHombreList';
            renderObjetosHTML(jeansHombreList)
            break;
        case array1 === 'jeansMujerList':
            tituloTipRopa.innerText = 'jeansMujerList';
            renderObjetosHTML(jeansMujerListt)
            break;
        case array1 === 'chaquetasDamaList':
            tituloTipRopa.innerText = 'chaquetasDamaList';
            renderObjetosHTML(blusasDamaList)
            break;
    }

};
 */



//👖👖👖Arreglo de objetos de toda la ropa:
const catalogoCompletoList = [];
catalogoCompletoList.push({
    name: 'Camiseta rojo oscuro',
    price: 18000,
    image: "https://i.imgur.com/6wpmVPm.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta azul',
    price: 19000,
    image: "https://i.imgur.com/1iRpCCJ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta blanca',
    price: 20000,
    image: "https://i.imgur.com/LXLgc0g.jpeg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta rojo',
    price: 21000,
    image: "https://i.imgur.com/7xdMKA7.jpeg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta color negro',
    price: 22000,
    image: "https://i.imgur.com/p2xCOiZ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta color rosa',
    price: 25000,
    image: "https://i.imgur.com/NOKEmj4.jpeg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'jean DSqueared',
    price: 18000,
    image: "https://i.imgur.com/vDXf8Xf.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'jean DSqueared',
    price: 19000,
    image: "https://i.imgur.com/o2XCN3K.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'jean DSqueared',
    price: 20000,
    image: "https://i.imgur.com/OYXPR4i.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'jean DSqueared',
    price: 21000,
    image: "https://i.imgur.com/Vso5GyJ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'jean DSqueared',
    price: 22000,
    image: "https://i.imgur.com/fcW97Gd.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'jean DSqueared',
    price: 25000,
    image: "https://i.imgur.com/p9FbDYj.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Jean Economico Dama',
    price: 18000,
    image: "https://i.imgur.com/XsWPVsy.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta azul',
    price: 19000,
    image: "https://i.imgur.com/0csXwNY.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta blanca',
    price: 20000,
    image: "https://i.imgur.com/EsKMf8k.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta rojo',
    price: 21000,
    image: "https://i.imgur.com/VyuxoLh.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta color negro',
    price: 22000,
    image: "https://i.imgur.com/1oQSVsT.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta color rosa',
    price: 25000,
    image: "https://i.imgur.com/EmY5huB.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Chaqueta1',
    price: 18000,
    image: "https://i.imgur.com/3VTii84.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Chaqueta2',
    price: 19000,
    image: "https://i.imgur.com/0V3Zk5v.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Chaqueta3',
    price: 20000,
    image: "https://i.imgur.com/wWPiLqy.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Chaqueta4',
    price: 21000,
    image: "https://i.imgur.com/mMEAfyy.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Chaqueta5',
    price: 22000,
    image: "https://i.imgur.com/cDpjfGJ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Chaqueta6',
    price: 25000,
    image: "https://i.imgur.com/1Zjfk6P.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Pijama',
    price: 18000,
    image: "https://i.imgur.com/TYkYiGZ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Pijama red',
    price: 19000,
    image: "https://i.imgur.com/ypsTb0K.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Jean negro',
    price: 20000,
    image: "https://i.imgur.com/J6GGYWG.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'jean moico abano',
    price: 21000,
    image: "https://i.imgur.com/MGrFmzD.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Jean moico negro',
    price: 22000,
    image: "https://i.imgur.com/mVsNUxA.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'polilicra',
    price: 25000,
    image: "https://i.imgur.com/BrNHjvr.jpeg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});


//🥼🥼🥼Arreglo de objetos de camisetas economicas:
const camisetasHombreList = [];// este vendria siendo la abase de datos que estaria en el backend, pero vbamos a hacer uno similar aqui, para organizar el forntend
camisetasHombreList.push({
    name: 'Camiseta rojo oscuro',
    price: 18000,
    image: "https://i.imgur.com/6wpmVPm.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});//ya creamos un array de elemmentos y con este podemos crear todos los productos que sean

camisetasHombreList.push({
    name: 'Camiseta azul',
    price: 19000,
    image: "https://i.imgur.com/1iRpCCJ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

camisetasHombreList.push({
    name: 'Camiseta blanca',
    price: 20000,
    image: "https://i.imgur.com/LXLgc0g.jpeg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

camisetasHombreList.push({
    name: 'Camiseta rojo',
    price: 21000,
    image: "https://i.imgur.com/7xdMKA7.jpeg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

camisetasHombreList.push({
    name: 'Camiseta color negro',
    price: 22000,
    image: "https://i.imgur.com/p2xCOiZ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

camisetasHombreList.push({
    name: 'Camiseta color rosa',
    price: 25000,
    image: "https://i.imgur.com/NOKEmj4.jpeg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});


//👖👖👖Arreglo de objetos de jeans hombre:
const jeansHombreList = [];
jeansHombreList.push({
    name: 'jean DSqueared',
    price: 18000,
    image: "https://i.imgur.com/vDXf8Xf.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 19000,
    image: "https://i.imgur.com/o2XCN3K.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 20000,
    image: "https://i.imgur.com/OYXPR4i.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 21000,
    image: "https://i.imgur.com/Vso5GyJ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 22000,
    image: "https://i.imgur.com/fcW97Gd.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 25000,
    image: "https://i.imgur.com/p9FbDYj.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});




//👖👖👖Arreglo de objetos de jeans mujer:
const jeansMujerList = [];
jeansMujerList.push({
    name: 'Jean Economico Dama',
    price: 18000,
    image: "https://i.imgur.com/XsWPVsy.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansMujerList.push({
    name: 'Camiseta azul',
    price: 19000,
    image: "https://i.imgur.com/0csXwNY.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansMujerList.push({
    name: 'Camiseta blanca',
    price: 20000,
    image: "https://i.imgur.com/EsKMf8k.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansMujerList.push({
    name: 'Camiseta rojo',
    price: 21000,
    image: "https://i.imgur.com/VyuxoLh.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansMujerList.push({
    name: 'Camiseta color negro',
    price: 22000,
    image: "https://i.imgur.com/1oQSVsT.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

jeansMujerList.push({
    name: 'Camiseta color rosa',
    price: 25000,
    image: "https://i.imgur.com/EmY5huB.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});


//👚👚👚👚Arreglo de objetos de blusas dama:
const chaquetasDamaList = [];
chaquetasDamaList.push({
    name: 'Chaqueta1',
    price: 18000,
    image: "https://i.imgur.com/3VTii84.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

chaquetasDamaList.push({
    name: 'Chaqueta2',
    price: 19000,
    image: "https://i.imgur.com/0V3Zk5v.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

chaquetasDamaList.push({
    name: 'Chaqueta3',
    price: 20000,
    image: "https://i.imgur.com/wWPiLqy.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

chaquetasDamaList.push({
    name: 'Chaqueta4',
    price: 21000,
    image: "https://i.imgur.com/mMEAfyy.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

chaquetasDamaList.push({
    name: 'Chaqueta5',
    price: 22000,
    image: "https://i.imgur.com/cDpjfGJ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

chaquetasDamaList.push({
    name: 'Chaqueta6',
    price: 25000,
    image: "https://i.imgur.com/1Zjfk6P.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});


//otras prendas
const otrasPrendasList = [];
otrasPrendasList.push({
    name: 'Pijama',
    price: 18000,
    image: "https://i.imgur.com/TYkYiGZ.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

otrasPrendasList.push({
    name: 'Pijama red',
    price: 19000,
    image: "https://i.imgur.com/ypsTb0K.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

otrasPrendasList.push({
    name: 'Jean negro',
    price: 20000,
    image: "https://i.imgur.com/J6GGYWG.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

otrasPrendasList.push({
    name: 'jean moico abano',
    price: 21000,
    image: "https://i.imgur.com/MGrFmzD.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

otrasPrendasList.push({
    name: 'Jean moico negro',
    price: 22000,
    image: "https://i.imgur.com/mVsNUxA.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

otrasPrendasList.push({
    name: 'polilicra',
    price: 25000,
    image: "https://i.imgur.com/BrNHjvr.jpeg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

 //probar algo
const listaFalsa = [];
listaFalsa.push({
    name: 'Falso',
    price: '000000',
    image: "https://img.freepik.com/vector-gratis/bote-basura-lleno-bolsas-basura-vasos-vino-botellas-plastico-cascaras-platano_1268-15181.jpg",
    info: 'Esta prenda ¡NO! se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});



function renderObjetosHTML(arrElements) {
    logoInicioCamKat.classList.add('inactive');
    for (product of arrElements) {


    const productCard = document.createElement('div'); 
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
  
    productImg.setAttribute('src', product.image);
        
   /*  productImg.addEventListener('click', () => DesplegableCompra(product)); */
    
    productImg.addEventListener('click', ((obj) => {
    return function() {
        DesplegableCompra(obj); //permite obtener la variable inmediatamente cuando se le da click
    };
    })(product));

    // productImg.addEventListener('click', ((obj) => {return function() {DesplegableCompra(obj);};})(product));
        
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const pValor = document.createElement('p');
    pValor.innerText = '$' + product.price;

    const pNombreProduct = document.createElement('p');
    pNombreProduct.innerText = product.name;

    const productInfoIcono = document.createElement('figure');
    
    const productImgCart = document.createElement('img');
    
    productImgCart.setAttribute('src', 'https://i.imgur.com/nQy0QHq.jpg');

  
    
    productInfoIcono.appendChild(productImgCart);

    productInfoDiv.appendChild(pValor);
    productInfoDiv.appendChild(pNombreProduct);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoIcono);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    
    cardsContainer.appendChild(productCard);
    }; 



    function DesplegableCompra(objAsignado) {

            menuDetalleCadaCompra.innerHTML = '';
            const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');
            if (!ismMenuCarritoComprasClosed) {
            menuCarritoCompras.classList.add('inactive');
            } 

            const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
            if (!ismobileMenuIHamClosed) {
            mobileMenuIHam.classList.add('inactive');
            }  

            const isDesktopMenuEmaiClosed = DesktopMenuEmail.classList.contains('inactive');
            if (!isDesktopMenuEmaiClosed) {
            DesktopMenuEmail.classList.add('inactive');
            } 

            const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
            if (!isAsideTotalOrdenensClosed) {
            asideTodasLasCompras.classList.add('inactive');
            }

            const productDivClose = document.createElement('div');
            productDivClose.classList.add('product-detail-close');
            const productIconoClose = document.createElement('img');
            productIconoClose.setAttribute('src', './icons/icon_close.png');

            //productIconoClose.addEventListener('click', closeDesplegableCompra)
            productDivClose.addEventListener('click', closeDesplegableCompra)

            //     productIconoClose.addEventListener('click',function() {
            //     //const contenedor = document.getElementById('miContenedor');
            //     menuDetalleCadaCompra.innerHTML = '';
            // });

            const productImgAside = document.createElement('img');

            productImgAside.setAttribute('src', objAsignado.image);

            const productDivInfo = document.createElement('div');
            productDivInfo.classList.add('product-info');

            const pValorAside = document.createElement('p');
            pValorAside.innerText = '$' + objAsignado.price;

            const pNombreProductAside = document.createElement('p');
            pNombreProductAside.innerText = objAsignado.name;

            const pInfoProduct = document.createElement('p');
            pInfoProduct.innerText = objAsignado.info; //ir a crearle info al producto en el objeto********

            const productButton = document.createElement('button');
            productButton.classList.add('primary-button');
            productButton.classList.add('add-to-cart-button');
            productButton.innerText = 'Add to Cart';
        
            productButton.addEventListener('click', () => guardarProductosAdicionados(objAsignado)); 

            const iconoCompraCarrito = document.createElement('img');
            iconoCompraCarrito.setAttribute('src','./icons/bt_add_to_cart.svg');


            productDivClose.appendChild(productIconoClose);

            productButton.appendChild(iconoCompraCarrito);

            productDivInfo.appendChild(pValorAside);
            productDivInfo.appendChild(pNombreProductAside);
            productDivInfo.appendChild(pInfoProduct);
            productDivInfo.appendChild(productButton);

            menuDetalleCadaCompra.appendChild(productDivClose);    
            menuDetalleCadaCompra.appendChild(productImgAside);
            menuDetalleCadaCompra.appendChild(productDivInfo);
        
    openDesplegableCompra()
    }

    }

let preciosCompraAdicionada = [];
const catalogoComprasAdicionadas = [];
function guardarProductosAdicionados(objetoProducto) {
    
    catalogoComprasAdicionadas.push(objetoProducto);

    compraAdicionada = objetoProducto;

   /*  catalogoComprasAdicionadas.forEach(function(compraAdicionada) { */

    //contenedores total articulos y precio
        /* const divContenedorTotalCompraAcionada = document.createElement('div');
        divContenedorTotalCompraAcionada.classList.add('divTotales');
    
        const pContenedorCompraAdicionada = document.createElement('p');
    
        const spanContenedorCompraAdicionadaFecha = document.createElement('span');
         spanContenedorCompraAdicionadaFecha.innerText = '03.25.21';
    
        const spanTotalArticulos = document.createElement('span');
        spanTotalArticulos.innerText = '6 articles';

        const pTotalPrecio = document.createElement('p');
        pTotalPrecio.innerText = '$560.000';
    
        pContenedorCompraAdicionada.appendChild(spanContenedorCompraAdicionadaFecha);
        pContenedorCompraAdicionada.appendChild(spanTotalArticulos);
        divContenedorTotalCompraAcionada.appendChild(pContenedorCompraAdicionada);
        divContenedorTotalCompraAcionada.appendChild(pTotalPrecio);
        menuCarritoCompras.appendChild(divContenedorTotalCompraAcionada); */
        
    
    
     //config para crear una fecha:
        let fecha = new Date();
        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;
        let anio = fecha.getFullYear();

        let formatoFecha = `${dia}/${mes}/${anio}`;

        let spanFechaCompraAdicionada = document.querySelector('#spanFechaCompraAdicionada');
         spanFechaCompraAdicionada.innerText = formatoFecha;


    //contenedores compras adicionadas
        const divContenedorCompras = document.createElement('div');
        divContenedorCompras.classList.add('my-order-content');

        const divCompraAdicionada = document.createElement('div');
        divCompraAdicionada.classList.add('shopping-cart');

        const figureCompraAdicionada = document.createElement('figure');
        figureCompraAdicionada.classList.add('shopping-cart-figure');

        const imgCompraAdicionada = document.createElement('img');

        imgCompraAdicionada.setAttribute('src', compraAdicionada.image);
        
        const pCompraAdicionadaNombre = document.createElement('p');
        pCompraAdicionadaNombre.innerText = compraAdicionada.name;

        const pCompraAdicionadaPrecio = document.createElement('p');
        pCompraAdicionadaPrecio.innerText = compraAdicionada.price;

        const imgCompraAdicionadaClose = document.createElement('img');
        imgCompraAdicionadaClose.classList.add('logoDeCerrarCompraListada');
        imgCompraAdicionadaClose.setAttribute('src', './icons/icon_close.png');
        imgCompraAdicionadaClose.addEventListener('click', ((obj) => {
        return function() {
            cerrarCompra(obj); //permite obtener la variable inmediatamente cuando se le da click
        };
        })(objetoProducto));

        figureCompraAdicionada.appendChild(imgCompraAdicionada);
        divCompraAdicionada.appendChild(figureCompraAdicionada);
        divCompraAdicionada.appendChild(pCompraAdicionadaNombre);
        divCompraAdicionada.appendChild(pCompraAdicionadaPrecio);
        divCompraAdicionada.appendChild(imgCompraAdicionadaClose);
        divContenedorCompras.appendChild(divCompraAdicionada);
        contenComprasAdicionadas.appendChild(divContenedorCompras);

    
    
    
    
    
    //configs para cerrar divs de compra:
    function cerrarCompra(compracerrada) {
        
        
        divContenedorCompras.classList.add('inactive');
        for (let i = 0; i < catalogoComprasAdicionadas.length; i++) {
            if (compracerrada.name === catalogoComprasAdicionadas[i].name) {
                catalogoComprasAdicionadas.splice(i, 1);
                break;
            }
            /* break; */
        }
         console.log(catalogoComprasAdicionadas);
        TotalArticulosyTotalPrecio(catalogoComprasAdicionadas)
        
        } 
 
    
    
    
    
    // function TotalArticulosyTotalPrecioCerrar(comprasDespuesDeCierre) {
    //     //configs para total articulops adicionados en desplegable
    //     let totalArticulosAdicionadosSpan = document.querySelector('#spanTotalArticulosAdicionados');
    //     totalArticulosAdicionadosSpan.innerText = comprasDespuesDeCierre.length + ' Articulos';

    //     //configs para total articulops adicionados en desplegable
    //     divNumComprasCart.innerText = comprasDespuesDeCierre.length; 

    //     //configs para sumar el precio Total:
    //     let sumaTotalPreciosCerrar = 0;
    //     /* precios.push(compraAdicionada.price); */

    //     console.log(comprasDespuesDeCierre);

    //     for (let i = 0; i < comprasDespuesDeCierre.length; i++) {
    //     sumaTotalPreciosCerrar += comprasDespuesDeCierre[i].price;
    //     }

    //     let spanTotalPrecioAdicionados = document.querySelector('#spanTotalPrecioArticulos');
    //     spanTotalPrecioAdicionados.innerText = 'Total: ' + sumaTotalPreciosCerrar;
    // }
    

    function TotalArticulosyTotalPrecio(comprasHechas) {
        //configs para total articulops adicionados en desplegable
        let totalArticulosAdicionadosSpan = document.querySelector('#spanTotalArticulosAdicionados');
        totalArticulosAdicionadosSpan.innerText = comprasHechas.length + ' Articulos';

        //configs para total articulops adicionados en desplegable
        divNumComprasCart.innerText = comprasHechas.length; 

        //configs para sumar el precio Total:
        let sumaTotalPrecios = 0;
      

        for (let i = 0; i < comprasHechas.length; i++) {
        sumaTotalPrecios += comprasHechas[i].price;
        }
        let spanTotalPrecioAdicionados = document.querySelector('#spanTotalPrecioArticulos');
        spanTotalPrecioAdicionados.innerText = 'Total: ' + sumaTotalPrecios;
    }
    
    TotalArticulosyTotalPrecio(catalogoComprasAdicionadas)


}


   



//aqui hacemos los addevenlistenner y llamamos a las funciones de renderizacion para menu navegador izquierdo o escritorio:

opcionRopaTodoDesk.addEventListener("click", renderTodoRopa);

opcionRopaCamisetasHDesk.addEventListener("click", renderCamisetasH);

OpcionRopaJeansHDesk.addEventListener("click", renderJeansH);

opcionRopaJeansMDesk.addEventListener("click", renderJeansM);

opcionRopachaquetasMDesk.addEventListener("click", renderchaquetasM);

opcionRopaOtrasPrendasDesk.addEventListener("click", renderOtrasPrendas);


//ahora vamos a hacer lo mismo para el menu movil:

opcionRopaTodoMov.addEventListener("click", renderTodoRopa);

opcionRopaCamisetasHMov.addEventListener("click", renderCamisetasH);

OpcionRopaJeansHMov.addEventListener("click", renderJeansH);

opcionRopaJeansMMov.addEventListener("click", renderJeansM);

opcionRopachaquetasMMov.addEventListener("click", renderchaquetasM);

opcionRopaOtrasPrendasMov.addEventListener("click", renderOtrasPrendas);

// opcionRopaCamisetasH.addEventListener('click', renderObjetosHTML(camisetasHombreList));

// OpcionRopaJeansH.addEventListener("click", renderObjetosHTML(jeansHombreList));

// opcionRopachaquetasM.addEventListener("click", renderObjetosHTML(jeansMujerList));

// opcionRopaJeansM.addEventListener("click", renderObjetosHTML(chaquetasDamaList));

// opcionRopaOtrasPrendas.addEventListener("click", renderObjetosHTML(otrasPrendasList));

