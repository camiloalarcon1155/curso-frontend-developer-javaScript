/* Esto es un proyecto forkeado de platzi,m llamado curso de frontend developmen, fue forkeado como curso de java scrpt practico ya ahora lo estoy personalizando para mi tienda CamKatStore, haremos cambios de variables, aumento de variables y funciones y sus imagenes seran de ropa. Este proyecto sigue siendo meramente tecnico */

//Declaracion y apuntar a objetos de HTML:
const menuEmailDesktop = document.querySelector('.navbar-email');
const menuEmailMov = document.querySelector('.emailMobil');
const emailmenuMovLogin = document.querySelector('.emailMobilSesionIniciada');
const emailmenuDesktopLogin = document.querySelector('.emailDesktopSesionIniciada');
const DesktopMenuEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenuIHam = document.querySelector('.mobile-menu');
const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const menuCarritoCompras = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container'); 
const containerMostrarInformacion = document.querySelector('.containerMiInformacion'); 
const sectionMostrarInformacion = document.querySelector('.mostrarInformacion'); 
const detalleDeCadaProducto = document.querySelector('#productDetail');
const tituloTipRopa = document.querySelector('.tipoDeRopa');
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
const divIngresoCuenta = document.querySelector('.divIngresoCuenta');
const miCuentaMenuDesktop = document.querySelector('.desktop-menu-cuenta');
const buttonCrearCuenta = document.querySelector('.signup-buttonIngreso');
const divCrearCuenta = document.querySelector('.divCrearCuenta');
const opcionSignOutMenuMob = document.querySelector('.sign-outMenuMobil');
const opcionSignOutMenuDesktop = document.querySelector('.sign-outMenuDesktop');
const contenComprasAdicionadas = document.querySelector('.shoppingCartDivOnlyCompras');
const divNumComprasCart = document.querySelector('.numComprasCart');
const buttonConfirmarCrearCuenta = document.querySelector('.primary-buttonCrear');
const divConfirmarCrearCuenta = document.querySelector('.divEmailCreado');
const divConfirmarEmailEnviado = document.querySelector('.divEmailEnviado');
const inputRecoverEnviarEmail = document.querySelector('.primary-buttonRecover');
const buttonLoginEmailCreado = document.querySelector('.login-buttonEmailCreado');
const buttonIngresoEmail = document.querySelector('.login-buttonIngreso');
const correoDesktopMenuCK = document.querySelector('.correoDesktopMenu');
const licorreoDesktopMenu = document.querySelector('.liCorreoDesktopMenu');
const liEmailDeskSesIniciada = document.querySelector('.liEmailDesktopSesionIniciada');
const liTitleTotalCompras = document.querySelector('.liTitleTotalCompras');
const liDesktopMenuCuenta = document.querySelector('.liDesktop-menu-cuenta');
const liDignOutMenuDesktop = document.querySelector('.liDign-outMenuDesktop');
const pInfoErrroneaLogin = document.querySelector('.pInfoErrroneaIngreso');
const divIngresadoConExito = document.querySelector('.ingresadoConExito');
const divMostrarCuentaIngresada = document.querySelector('.divMostrarCuenta');
const pNameMostrarCuentaIngresada = document.querySelector('.pNameMostrarCuenta');
const pEmailMostrarCuentaIngresada = document.querySelector('.pEmailMostrarCuenta');
const pPasswordMostrarCuentaIngresada = document.querySelector('.pPasswordMostrarCuenta');
const aOlvidoContrasenia = document.querySelector('.olvidoContrasenia');
const inhabilitarContraseniaOlvidada = document.querySelector('#contraseniaOlvidada');
const divDesplegableCambioAccount = document.querySelector('.divEditarAccount');
const divDesplegableRecoverAccount = document.querySelector('.divRecoverAccount');
const buttonMostrarCuentaEditarCuenta = document.querySelector('.login-buttonMostrarCuenta-EditarCuenta');
const buttonCambiarKeyDeEditarCuenta = document.querySelector('.buttonEditarCambiarContrasenia');
const divDesplegableChangeKey = document.querySelector('.divChangeKey');
const buttonIngresadoConfirmado = document.querySelector('#usuarioIngresado');
const inputPlaceHolderNameEditarCuenta = document.querySelector('.inputNameEditarAccount');
const inputPlaceHolderEmailEditarCuenta = document.querySelector('.inputEmailEditarAccount');
const buttonCarritoComprasConfirmarCompra = document.querySelector('.shopping-cartPrimary-button');
const divDesplegableMetodosPago = document.querySelector('.divTodosMetodoDePago');
const selectorDeMetodosPago = document.querySelector('.selectPagos');
const divPagoNequi = document.querySelector('.pagoNequi');
const divPagoBancolombia = document.querySelector('.pagoBancolombia');
const divPagoDaviplata = document.querySelector('.pagoDaviplata');
const divPagoMastercard = document.querySelector('.pagoMastercard');
const spanPrecioTotalMetodoPago = document.querySelector('.spanValorCompraMetodoPago');
const buttonConfirmarcambioDeInformacion = document.querySelector('.primary-buttonEditarAccount-Confirmar');
const avisokeysDiferentes = document.querySelector('.pContraseniasDiferentes');
const avisoCambioInfoExitoso = document.querySelector('.pCambioExitoso');
const buttonCambioContraseniaConfirmacion = document.querySelector('.primary-buttonChangeKey-Change');
const pContraseniaIncorrecta = document.querySelector('.pContraseniaIncorrecta');
const pCorreoIncorrecto = document.querySelector('.correoIncorrectoRecover');
const buttonLoginEmailEnviado = document.querySelector('.primary-buttonEmailEnviado');













//Escuchar los click de los botones de HTML:
menuEmailMov.addEventListener('click', toggleMiCuentaMenuIngresar)

menuEmailDesktop.addEventListener('click', toggleDesktopMenuEmail);

menuHamIcon.addEventListener('click', toggleMobilMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoCompras);

logoCamkat.addEventListener('click', toggleMostrarMiInformacion);

inicioFooter.addEventListener('click', recargarMiPagina);

AcercaDeFooter.addEventListener('click', toggleMostrarMiInformacion);

todasOrdenesMenuMobil.addEventListener('click', toggleTotalOrdenens);

emailOpcionTotalCompras.addEventListener('click', toggleTotalOrdenens);

miCuentaMenuMov.addEventListener('click', toggleDesktopMenuEmail);

miCuentaMenuDesktop.addEventListener('click', toggleMostrarCuentaIngresada);

buttonIngresoEmail.addEventListener('click', function(event) {
    event.preventDefault();
    guardarInfoLoginIngresoYMostrarPagina();
});

buttonCrearCuenta.addEventListener('click', toggleMiCuentaMenuCrear);

opcionSignOutMenuMob.addEventListener('click', recargarMiPagina);

opcionSignOutMenuDesktop.addEventListener('click', recargarMiPagina);

buttonConfirmarCrearCuenta.addEventListener('click', function(event) {
    // Evita el comportamiento predeterminado del botón
    event.preventDefault();
    
    // Llama a la función que deseas ejecutar
    toggleMiCuentaCreadaConfirmacion();
});

buttonLoginEmailCreado.addEventListener('click', toggleMiCuentaMenuIngresar);

correoDesktopMenuCK.addEventListener('click', toggleMiCuentaMenuIngresar);

buttonMostrarCuentaEditarCuenta.addEventListener('click', function (event) {

    event.preventDefault();
    toggleEditarMiCuenta();
});

aOlvidoContrasenia.addEventListener('click', toggleRecuperarCuenta);

inputRecoverEnviarEmail.addEventListener('click', function (event) {

    event.preventDefault();
    toggleEnviarCorreo();
});

buttonCambiarKeyDeEditarCuenta.addEventListener('click', toggleCambiarKey);

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

buttonCarritoComprasConfirmarCompra.addEventListener("click", toggleMostrarMetodosPago);

selectorDeMetodosPago.addEventListener("change", mostrarMetodoPago);

buttonConfirmarcambioDeInformacion.addEventListener('click', function (event) {

    event.preventDefault();
    verificarContrasenia();
});

buttonCambioContraseniaConfirmacion.addEventListener('click', function (event) {

    event.preventDefault();
    confirmarCambioContrasenia();
});

buttonLoginEmailEnviado.addEventListener('click',toggleMiCuentaMenuIngresar)



function toggleDesktopMenuEmail() {
    window.scrollTo(0, 0);
    closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';
    
     const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

     const isdivIngresoCuentaClosed = divIngresoCuenta.classList.contains('inactive');
    if (!isdivIngresoCuentaClosed) {
        divIngresoCuenta.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

     const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    }    

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    }

    const isDivDesplegableChangeKeyClosed = divDesplegableChangeKey.classList.contains('inactive');
    if (!isDivDesplegableChangeKeyClosed) {
        divDesplegableChangeKey.classList.add('inactive');
    }

    const isDivDesplegableMetodosPagoClosed = divDesplegableMetodosPago.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!isDivDesplegableMetodosPagoClosed) {
        divDesplegableMetodosPago.classList.add('inactive');
    }

    DesktopMenuEmail.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva

}

function toggleMobilMenu() {
closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';
    
    const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');
    if (!ismMenuCarritoComprasClosed) {
    menuCarritoCompras.classList.add('inactive');
    }

    const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

     const isdivIngresoCuentaClosed = divIngresoCuenta.classList.contains('inactive');
    if (!isdivIngresoCuentaClosed) {
        divIngresoCuenta.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

     const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    }

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    }

    const isDivDesplegableChangeKeyClosed = divDesplegableChangeKey.classList.contains('inactive');
    if (!isDivDesplegableChangeKeyClosed) {
        divDesplegableChangeKey.classList.add('inactive');
    }

    const isDivDesplegableMetodosPagoClosed = divDesplegableMetodosPago.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!isDivDesplegableMetodosPagoClosed) {
        divDesplegableMetodosPago.classList.add('inactive');
    }

    mobileMenuIHam.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva

}

function toggleCarritoCompras() {
    window.scrollTo(0, 0);
    closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
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

     const isdivIngresoCuentaClosed = divIngresoCuenta.classList.contains('inactive');
    if (!isdivIngresoCuentaClosed) {
        divIngresoCuenta.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

     const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    }
    
    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    }

    const isDivDesplegableChangeKeyClosed = divDesplegableChangeKey.classList.contains('inactive');
    if (!isDivDesplegableChangeKeyClosed) {
        divDesplegableChangeKey.classList.add('inactive');
    }

    const isDivDesplegableMetodosPagoClosed = divDesplegableMetodosPago.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!isDivDesplegableMetodosPagoClosed) {
        divDesplegableMetodosPago.classList.add('inactive');
    }

    menuCarritoCompras.classList.toggle('inactive');

}

function toggleMostrarMiInformacion() {
    window.scrollTo(0, 0);
   
    //Generamos los condicionales para cerrar otros desplegables cuando se habra este desplegable de mostrar info:

    //detalleDeCadaProducto.innerHTML = '';
    closeDesplegableDetalleDeProducto()
    
     const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
        if (!isDesktopMenuEmailClosed) {
        DesktopMenuEmail.classList.add('inactive');
    } 
    
    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

     const isdivIngresoCuentaClosed = divIngresoCuenta.classList.contains('inactive');
    if (!isdivIngresoCuentaClosed) {
        divIngresoCuenta.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

     const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    }    

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    }

    const isDivDesplegableChangeKeyClosed = divDesplegableChangeKey.classList.contains('inactive');
    if (!isDivDesplegableChangeKeyClosed) {
        divDesplegableChangeKey.classList.add('inactive');
    }

    const isDivDesplegableMetodosPagoClosed = divDesplegableMetodosPago.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!isDivDesplegableMetodosPagoClosed) {
        divDesplegableMetodosPago.classList.add('inactive');
    }

    //se genera el html desde javaScript:
    //cardsContainer.innerText = '';
    containerMostrarInformacion.innerText = '';


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

    containerMostrarInformacion.appendChild(divInfoEmpresa1);
    containerMostrarInformacion.appendChild(divInfoEmpresa2);
    containerMostrarInformacion.appendChild(divInfoEmpresa3);

    sectionMostrarInformacion.classList.toggle('inactive');

    
}

 function openDesplegableDetalleDeProducto() {
    detalleDeCadaProducto.classList.remove('inactive'); 
}

function closeDesplegableDetalleDeProducto() {
    detalleDeCadaProducto.classList.add('inactive');
}
    
function renderTodoRopa() {
    //cardsContainer.setAttribute('class', 'cards-container');
    detalleDeCadaProducto.classList.add('inactive');
    //detalleDeCadaProducto.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoCuenta.classList.add('inactive');
    divCrearCuenta.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    divMostrarCuentaIngresada.classList.add('inactive');
    divDesplegableCambioAccount.classList.add('inactive');
    divDesplegableRecoverAccount.classList.add('inactive');
    divConfirmarEmailEnviado.classList.add('inactive');
    sectionMostrarInformacion.classList.add('inactive');
    divDesplegableChangeKey.classList.add('inactive');
    divDesplegableMetodosPago.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Catálogo Completo';
    renderObjetosHTML(catalogoCompletoList);
}

function renderCamisetasH() {
    //cardsContainer.setAttribute('class', 'cards-container');
    detalleDeCadaProducto.classList.add('inactive');
    //detalleDeCadaProducto.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoCuenta.classList.add('inactive');
    divCrearCuenta.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    divMostrarCuentaIngresada.classList.add('inactive');
    divDesplegableCambioAccount.classList.add('inactive');
    divDesplegableRecoverAccount.classList.add('inactive');
    divConfirmarEmailEnviado.classList.add('inactive');
    sectionMostrarInformacion.classList.add('inactive');
    divDesplegableChangeKey.classList.add('inactive');
    divDesplegableMetodosPago.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Camisetas Economicas Hombre';
    renderObjetosHTML(camisetasHombreList);
}

function renderJeansH() {
    //cardsContainer.setAttribute('class', 'cards-container');
    detalleDeCadaProducto.classList.add('inactive');
    //detalleDeCadaProducto.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoCuenta.classList.add('inactive');
    divCrearCuenta.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    divMostrarCuentaIngresada.classList.add('inactive');
    divDesplegableCambioAccount.classList.add('inactive');
    divDesplegableRecoverAccount.classList.add('inactive');
    divConfirmarEmailEnviado.classList.add('inactive');
    sectionMostrarInformacion.classList.add('inactive');
    divDesplegableChangeKey.classList.add('inactive');
    divDesplegableMetodosPago.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Jeans Hombre';
    renderObjetosHTML(jeansHombreList);
}

function renderJeansM() {
    //cardsContainer.setAttribute('class', 'cards-container');
    detalleDeCadaProducto.classList.add('inactive');
    //detalleDeCadaProducto.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoCuenta.classList.add('inactive');
    divCrearCuenta.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    divMostrarCuentaIngresada.classList.add('inactive');
    divDesplegableCambioAccount.classList.add('inactive');
    divDesplegableRecoverAccount.classList.add('inactive');
    divConfirmarEmailEnviado.classList.add('inactive');
    sectionMostrarInformacion.classList.add('inactive');
    divDesplegableChangeKey.classList.add('inactive');
    divDesplegableMetodosPago.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Jeans Dama';
    renderObjetosHTML(jeansMujerList);
}

function renderchaquetasM() {
    //cardsContainer.setAttribute('class', 'cards-container');
    detalleDeCadaProducto.classList.add('inactive');
    //detalleDeCadaProducto.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoCuenta.classList.add('inactive');
    divCrearCuenta.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    divMostrarCuentaIngresada.classList.add('inactive');
    divDesplegableCambioAccount.classList.add('inactive');
    divDesplegableRecoverAccount.classList.add('inactive');
    divConfirmarEmailEnviado.classList.add('inactive');
    sectionMostrarInformacion.classList.add('inactive');
    divDesplegableChangeKey.classList.add('inactive');
    divDesplegableMetodosPago.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'chaquetas Dama';
    renderObjetosHTML(chaquetasDamaList);
}

function renderOtrasPrendas() {
    //cardsContainer.setAttribute('class', 'cards-container');
    detalleDeCadaProducto.classList.add('inactive');
    //detalleDeCadaProducto.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    asideTodasLasCompras.classList.add('inactive');
    divIngresoCuenta.classList.add('inactive');
    divCrearCuenta.classList.add('inactive');
    divConfirmarCrearCuenta.classList.add('inactive');
    divMostrarCuentaIngresada.classList.add('inactive');
    divDesplegableCambioAccount.classList.add('inactive');
    divDesplegableRecoverAccount.classList.add('inactive');
    divConfirmarEmailEnviado.classList.add('inactive');
    sectionMostrarInformacion.classList.add('inactive');
    divDesplegableChangeKey.classList.add('inactive');
    divDesplegableMetodosPago.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Otras Prendas';
    renderObjetosHTML(otrasPrendasList);
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
        logoEmailUsuario.innerHTML = '<div class = "divGmailUsuario"> <img class= "gmailUsuario" src="https://cdn.icon-icons.com/icons2/1863/PNG/512/account-circle_119476.png" alt="Email"> </div>'
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
    closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';


    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

     /* const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const isdivIngresoCuentaClosed = divIngresoCuenta.classList.contains('inactive');
    if (!isdivIngresoCuentaClosed) {
        divIngresoCuenta.classList.add('inactive');
    }

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

     const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    }

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    } */

    asideTodasLasCompras.classList.toggle('inactive')
}

function toggleMiCuentaMenuIngresar() {
    closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';

   const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

    const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
        if (!divConfirmarCrearCuentaClosed) {
            divConfirmarCrearCuenta.classList.add('inactive');
        }

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    }

/* 
    const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

     const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    }

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    } */
    
    divIngresoCuenta.classList.toggle('inactive');
}

function toggleMiCuentaMenuCrear() {
    closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';

    const isdivIngresoCuentaClosed = divIngresoCuenta.classList.contains('inactive');
    if (!isdivIngresoCuentaClosed) {
        divIngresoCuenta.classList.add('inactive');
    }

/* 
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

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }
    
     const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }
    
    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

     const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    }

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    } */

    divCrearCuenta.classList.toggle('inactive');
}


function UsuarioRegistrado(name, correo, passworld){
        this.name = name;
        this.correo = correo;
        this.passworld = passworld;
    }

    

let arregloUsuariosRegistrados = [];
function toggleMiCuentaCreadaConfirmacion() {

     closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

/* 

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

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

    const isdivIngresoCuentaClosed = divIngresoCuenta.classList.contains('inactive');
    if (!isdivIngresoCuentaClosed) {
        divIngresoCuenta.classList.add('inactive');
    }

   

    const divConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!divConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

     const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    }

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    }
 */
    const nameEmailRegistrado = document.querySelector('.inputCrearName').value;

    const direccionEmailRegistrado = document.querySelector('.inputCrearEmail').value;

    const passwordEmailRegistrado = document.querySelector('.inputCrearPassword').value;

    
    
    //necesitamos que nameEmailRegistrado, direccionEmailReguistrado y passwordEmailRegistrado se gaurden en una arreglo como objetos
    
     
    const cliente = new UsuarioRegistrado(nameEmailRegistrado, direccionEmailRegistrado, passwordEmailRegistrado);

    //hacemos esto cada vez que se registra un nuevo usuario, para que no reescriban o reemplacen los usuarios. entonces obtiene el anterior cadena de usuarios registrados y luego adiciona un nuevo cliente y por ultimo vuelve a convertir en una nueva cadena(todo esto con el nombre de clave claveUsuariosRegistrados):

    let arregloUsuariosRegistrados = JSON.parse(localStorage.getItem('claveUsuariosRegistrados')) || [];

    
    arregloUsuariosRegistrados.push(cliente); // por ahora vamos a guardar en este areglo para que sea comparado con la cuenta ingresada en la funcion toggleMiCuentaMenuIngresar

    console.log(arregloUsuariosRegistrados)

    if (cliente) {
        console.log('usuario registrado');
    }
    //ahora guardamnos el arreglo de objetos en localStorage para que incluso cuando el usuario recargue la pagina, estos datos queden guardados en el navegador


// Convertir el objeto a una cadena JSON
    const usuarioJSON = JSON.stringify(arregloUsuariosRegistrados);
    
    console.log(usuarioJSON);

// Guardar en localStorage bajo una clave específica
    localStorage.setItem('claveUsuariosRegistrados', usuarioJSON);
    
    //localStorage.clear();
    //localStorage.removeItem('claveUsuariosRegistradoss');

//por ultimo, ponemos los espacios en 0 de nuevo 

        document.querySelector('.inputCrearName').value = "";

        document.querySelector('.inputCrearEmail').value = "";

        document.querySelector('.inputCrearPassword').value = "";


    divConfirmarCrearCuenta.classList.toggle('inactive');
}

function toggleRecuperarCuenta() {
    
    closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';

     const isdivIngresoCuentaClosed = divIngresoCuenta.classList.contains('inactive');
    if (!isdivIngresoCuentaClosed) {
        divIngresoCuenta.classList.add('inactive');
    }

/* 

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

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

    const isDivConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!isDivConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    }
 */
    divDesplegableRecoverAccount.classList.toggle('inactive');
}


function toggleEnviarCorreo() {

    const inputCorreoParaRecuperar = document.querySelector('.inputCell-o-correoRecover').value;

    closeDesplegableDetalleDeProducto()



 //traemos los usuarios ya registrados y guardados como cadena de texto:
        let todosUsuariosLocalStore = JSON.parse(localStorage.getItem('claveUsuariosRegistrados')) || [];
        console.log(todosUsuariosLocalStore)

        //filtramos el usuario al cual desea recuperar su cuenta:
        let usuarioCambioContrasenia = todosUsuariosLocalStore.filter(function (usuario) {
            return usuario.correo === inputCorreoParaRecuperar;
        });


    if (usuarioCambioContrasenia.length > 0) {

        const isDivDesplegableRecoverAccountClosed = divDesplegableRecoverAccount.classList.contains('inactive');
        if (!isDivDesplegableRecoverAccountClosed) {
        divDesplegableRecoverAccount.classList.add('inactive');
        }

        const array = new Uint32Array(1);
        console.log(array);

        self.crypto.getRandomValues(array);

        
        const code = array[0] % 10000; // 
        let codigoAenviarse = code.toString().padStart(4, '0');//se usa esta funcion por que a veces al dividir array[0]%10000, su resto no siempre son 4 digitos, entonces con toString se convierte a cadena de texto y  padStart es la longitud final deseada y le estoy diciendo que debe ser de 4 digitos y que lo que falte lo rellene con ceros, tambien se puede rellenar con unos o lo que uno quiera
        
        console.log('el codigo enviado a tu correo es: '+codigoAenviarse);


        //https://formspree.io/f/xvoedwrl


            
                divConfirmarEmailEnviado.classList.toggle('inactive');

            } else{
                pCorreoIncorrecto.classList.remove('inactive');
            }
        

    

}

let coincidenciaEncontrada = false;
let arregloUsuariosIngresados = [];
function guardarInfoLoginIngresoYMostrarPagina() {

    const direccionEmailIngresado = document.querySelector('.input-emailIngreso').value;

    const passwordEmailIngresado = document.querySelector('.input-passwordIngreso').value;


    
    //necesitamos que direccionEmailIngresado y passwordEmailIngresado se gaurden en una arreglo como objetos(no se si lo necesite para despues)
    
    function UsuarioIngresado(correo, passworld) {
        /* this.nombre = nombre; */
        this.correo = correo;
        this.passworld = passworld;
    }
    const usuario = new UsuarioIngresado(direccionEmailIngresado, passwordEmailIngresado);
    arregloUsuariosIngresados.push(usuario);
    console.log(arregloUsuariosIngresados);

    //ahora necesitamos un loop para que nos compare este correo y contraseña con la informacion ya guardada en "la base de datos cuando se crea un usuario", en este caso usamos el localstore del navegador

    //esta linea de codigo me obtiene la informacion guardada como cadena en la funcion de registro de ususarios. recordar que para guardar en el localStorage se genera una sola cadena de texto con la informacion de todos los usuarios:
    let UsuariosRegistradosLocalStore = JSON.parse(localStorage.getItem('claveUsuariosRegistrados')) || [];
    console.log(UsuariosRegistradosLocalStore);
   
    for (let i = 0; i < UsuariosRegistradosLocalStore.length; i++) {
            
            if (passwordEmailIngresado === UsuariosRegistradosLocalStore[i].passworld && direccionEmailIngresado === UsuariosRegistradosLocalStore[i].correo) {
                
                //llena el nombre de mostrarCuenta:
                pNameMostrarCuentaIngresada.innerText = UsuariosRegistradosLocalStore[i].name;
                
                //llena el nombre de editarCuenta:
                inputPlaceHolderNameEditarCuenta.placeholder = UsuariosRegistradosLocalStore[i].name;
                
                //tocó hacer este ingreso del nombre aqui, porque el usario no ingresa su nombre cuando ya  tiene una cuenta registrada.
                        coincidenciaEncontrada = true;
                        break;
            }
    }
    
            if (coincidenciaEncontrada) {

                //si si halla similitud en los arreglos, deshabilita los 2 botones que aparecen en toglle de ingresar cuenta mientras pasa el segundo que te dice que ingreso exitosamente:
                buttonIngresadoConfirmado.disabled = true;
                buttonCrearCuenta.disabled = true;

                // deshabilitamos olvidaste contraseña o lo quitamos, por que no me dejo dehabilitarlo:
                /* inhabilitarContraseniaOlvidada.disabled = true; */
                inhabilitarContraseniaOlvidada.innerText = "";


                //si si halla similitud en los arreglos, imprime usuario Ingresado,  hace que aside de inicio de sesion se quite: 
                console.log('usuario Ingresado');
                

                //imprimimos en pantalla que ingreso con exito:
                divIngresadoConExito.classList.remove('inactive');
                
                // Llama a setTimeout() y pasa la función y el tiempo en milisegundos (5 segundos = 5000 milisegundos)
                setTimeout(toggleMiCuentaMenuIngresar, 500);
                //toggleMiCuentaMenuIngresar()

                //si si halla similitud en los arreglos, quita el li a de inicio de sesion del menu movil, guarda el email ingresado por usuario en un nuevo li a y lo muestra en lugar del li a de iniciar sesion:
                menuEmailMov.classList.add('inactive'); 
                emailmenuMovLogin.innerText = direccionEmailIngresado;
                emailmenuMovLogin.classList.remove('inactive');

                //si si halla similitud en los arreglos, quita el li a de inicio de sesion del menu desktop, guarda el correo ingresado en el nuevo li y lo muestra en lugar del li a de iniciar sesion:
                licorreoDesktopMenu.classList.add('inactive');
                emailmenuDesktopLogin.innerText = direccionEmailIngresado;
                emailmenuDesktopLogin.classList.remove('inactive');

                //para tablet: si halla similitud en los arreglos, entonces ya activa las li a que tienen el correo ingresado, el sign out, todas las ordenes y mi cuenta:  
                liEmailDeskSesIniciada.classList.remove('inactive');
                liTitleTotalCompras.classList.remove('inactive');
                liDesktopMenuCuenta.classList.remove('inactive');
                liDignOutMenuDesktop.classList.remove('inactive');

                const isPInfoErrroneaLogin = pInfoErrroneaLogin.classList.contains('inactive');
                if (!isPInfoErrroneaLogin) {
                pInfoErrroneaLogin.classList.add('inactive');
                }
                
                //si si halla similitud en los arreglos, activa opciones de sign out, todas las ordenes y mi cuenta:
                todasOrdenesMenuMobil.classList.remove('inactive');
                opcionSignOutMenuMob.classList.remove('inactive');
                miCuentaMenuMov.classList.remove('inactive');

                //si si halla similitud, entonces llena los campos del div mostrar cuenta y editar cuenta(cojntraseña se dejan los asteriscos por defecto):
                /* pNameMostrarCuentaIngresada.innerText = nameDelUusuarioIngresado; */
                pEmailMostrarCuentaIngresada.innerText = direccionEmailIngresado;

                inputPlaceHolderEmailEditarCuenta.placeholder = direccionEmailIngresado;

                /* pPasswordMostrarCuentaIngresada.innerText = passwordEmailIngresado; */

            } else {
                pInfoErrroneaLogin.classList.remove('inactive');
                emailmenuMovLogin.classList.add('inactive');
                emailmenuDesktopLogin.classList.add('inactive');

                console.log('Llene los campos correctamente');
            } 


    

         
    //dejamos espacios de iniciar sesion vacios de nuevo:ç

   document.querySelector('.input-emailIngreso').value = "";

  document.querySelector('.input-passwordIngreso').value = "";
}

function toggleMostrarCuentaIngresada() {

 closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';

    const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

    /* 
    const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
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

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

    const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    } */

    divMostrarCuentaIngresada.classList.toggle('inactive');

}

function toggleEditarMiCuenta() {
    //se pone inactive por si s ha cambiado antes y ya tiene mensaje de cambio exitoso
    avisoCambioInfoExitoso.classList.add('inactive');

    
    closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }

/* 
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

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

    const isDivConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!isDivConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
    if (!isDivDesplegableRecoverAccount) {
        divDesplegableRecoverAccount.classList.add('inactive');
    }

    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    } */

    divDesplegableCambioAccount.classList.toggle('inactive');

}


let usuariosFiltrados;
function verificarContrasenia() {

    /* const editInfoName = document.querySelector('.inputNameEditarAccount').value; */

    /* const editInfoEmail = document.querySelector('.inputEmailEditarAccount').value; */

    let nombreNuevo = inputPlaceHolderNameEditarCuenta.value;
    let correoNuevo = inputPlaceHolderEmailEditarCuenta.value;

    const editInfoPassword1 = document.querySelector('.input-passwordEditarAccount1').value;

    const editInfoPassword2 = document.querySelector('.input-passwordEditarAccount2').value;

    //comprobamos si las 2 contraseñas son iguales e imprimimos mensaje en caso de que no:

    if (editInfoPassword1 === editInfoPassword2) {
        avisokeysDiferentes.classList.add('inactive');
        
        //traemos los usuarios ya registrados y guardados como cadena de texto:
        let UsuariosLocalStore = JSON.parse(localStorage.getItem('claveUsuariosRegistrados')) || [];
        console.log(UsuariosLocalStore)

        //filtramos el usuario al cual se le van a cambiar los ddatos:
        let usuarioCambioInformacion = UsuariosLocalStore.filter(function (usuario) {
            return usuario.passworld === editInfoPassword1;
        });

        console.log(usuarioCambioInformacion);

        //volvemos  averficar su contraseña y traemos los usuarios que no tengan nada que ver con ese usuario, para volver a reescribirlos y ademas volver a guardar el usuario al que se le cambiaron los datos:

        if (usuarioCambioInformacion.length > 0) {
        
             if (usuarioCambioInformacion[0].passworld == editInfoPassword2) {

            let usuariosFiltrados = UsuariosLocalStore.filter(function (usuario) {
                return usuario.passworld !== editInfoPassword1;
            });
            
        //volvemos a crear el usuario que le cambiaron los datos, ahora con la nueva informacion y lo agregamos al nuevo arreglo
        const beneficiario = new UsuarioRegistrado(nombreNuevo, correoNuevo, editInfoPassword1);

            usuariosFiltrados.push(beneficiario);

            console.log(usuariosFiltrados);


            const usuarioJSON = JSON.stringify(usuariosFiltrados);
            localStorage.setItem('claveUsuariosRegistrados', usuarioJSON);

            avisoCambioInfoExitoso.classList.remove('inactive');

                 //si logra hacer el cambio y guardar la info, dejamos limpias los espacios:
            
                 /* nombreNuevo.value = "";
                 correoNuevo.value = "";
                 editInfoPassword1= "";
                 editInfoPassword2= "";  */


                 document.querySelector('.inputNameEditarAccount').value = "";
                 document.querySelector('.inputEmailEditarAccount').value = "";
                 document.querySelector('.inputNameEditarAccount').placeholder = "";
                 document.querySelector('.inputEmailEditarAccount').placeholder = "";
                 document.querySelector('.input-passwordEditarAccount1').value = "";
                 document.querySelector('.input-passwordEditarAccount2').value = "";
            

        } else {
                 console.log('usuario no encontrado');
        }
        
        } else {
            avisokeysDiferentes.classList.remove('inactive');
            avisoCambioInfoExitoso.classList.add('inactive');
        }
            
       


    } else {
        avisokeysDiferentes.classList.remove('inactive');
        avisoCambioInfoExitoso.classList.add('inactive');

    }
    


}


function confirmarCambioContrasenia() {

    /* const editInfoName = document.querySelector('.inputNameEditarAccount').value; */

    /* const editInfoEmail = document.querySelector('.inputEmailEditarAccount').value; */

   let inputContraseniaActual = document.querySelector('.inputChangeKeyActual').value;
   let inputContraseniaNueva = document.querySelector('.inputChangeKeyNueva').value;

    //comprobamos si las 2 contraseñas son iguales e imprimimos mensaje en caso de que no:
        avisokeysDiferentes.classList.add('inactive');
        avisoCambioInfoExitoso.classList.add('inactive');
        
        //traemos los usuarios ya registrados y guardados como cadena de texto:
        let todosUsuariosLocalStore = JSON.parse(localStorage.getItem('claveUsuariosRegistrados')) || [];
        console.log(todosUsuariosLocalStore)

        //filtramos el usuario al cual se le van a cambiar los ddatos:
        let usuarioCambioContrasenia = todosUsuariosLocalStore.filter(function (usuario) {
            return usuario.passworld === inputContraseniaActual;
        });

    
   
        //volvemos  averficar su contraseña y traemos los usuarios que no tengan nada que ver con ese usuario, para volver a reescribirlos y ademas volver a guardar el usuario al que se le cambiaron los datos:

        if (usuarioCambioContrasenia.length > 0) {
        
             if (usuarioCambioContrasenia[0].passworld == inputContraseniaActual) {

            let usuariosParaReescribir = todosUsuariosLocalStore.filter(function (usuario) {
                return usuario.passworld !== inputContraseniaActual;
                
            });

            console.log(usuarioCambioContrasenia);
            nameNuevo = usuarioCambioContrasenia[0].name;
            emailNuevo = usuarioCambioContrasenia[0].correo;
            
        //volvemos a crear el usuario que le cambiaron los datos, ahora con la nueva informacion y lo agregamos al nuevo arreglo
                 /* const beneficiario = new UsuarioRegistrado(nombreNuevo, correoNuevo, editInfoPassword1); */

                 const cliente = new UsuarioRegistrado(nameNuevo, emailNuevo, inputContraseniaNueva);


            console.log(usuariosParaReescribir);


            usuariosParaReescribir.push(cliente);

            console.log(usuariosParaReescribir);


            const usuarioJSON = JSON.stringify(usuariosParaReescribir);
            localStorage.setItem('claveUsuariosRegistrados', usuarioJSON);

                 document.querySelector('.inputChangeKeyActual').value = "";
                 document.querySelector('.inputChangeKeyNueva').value = "";
                 avisoCambioInfoExitoso.classList.remove('inactive');
                 avisokeysDiferentes.classList.add('inactive');

                 pContraseniaIncorrecta.classList.add('inactive');
                 avisoCambioInfoExitoso.classList.remove('inactive');

                 
            

        } else {
                 console.log('usuario no encontrado');
        }
        
        } else {
            pContraseniaIncorrecta.classList.remove('inactive');
            avisoCambioInfoExitoso.classList.add('inactive');
        }
        
    


}

function toggleCambiarKey() {

    closeDesplegableDetalleDeProducto()
    //detalleDeCadaProducto.innerHTML = '';

    const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
    if (!isDivDesplegableCambioAccountClosed) {
        divDesplegableCambioAccount.classList.add('inactive');
    }

/* 

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

    const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
    if (!isSectionMostrarInformacionClosed) {
        sectionMostrarInformacion.classList.add('inactive');
    }

    const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
    if (!isAsideTotalOrdenensClosed) {
        asideTodasLasCompras.classList.add('inactive');
    }

    const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
    if (!isDivCrearCuentaClosed) {
        divCrearCuenta.classList.add('inactive');
    }

    const isDivConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
    if (!isDivConfirmarCrearCuentaClosed) {
        divConfirmarCrearCuenta.classList.add('inactive');
    }

    const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
    if (!divMostrarCuentaIngresadaClosed) {
        divMostrarCuentaIngresada.classList.add('inactive');
    }


    const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
    if (!isDivConfirmarEmailEnviadoClosed) {
        divConfirmarEmailEnviado.classList.add('inactive');
    }
 */
    divDesplegableChangeKey.classList.toggle('inactive');

}

function toggleMostrarMetodosPago() {
    
   const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    divDesplegableMetodosPago.classList.toggle('inactive');

}

function mostrarMetodoPago() { 

    const opcionDepagoElegida = selectorDeMetodosPago.value;
    console.log(opcionDepagoElegida);

    //aqui preguntamos si los desplegables de cada metodo de pago estan cerrados, para que en cada case si no estan cerrados, los cierre y abra el que se selecciona:

    const isDivPagoNequiClosed = divPagoNequi.classList.contains('inactive');
    const isDivPagoBancolombiaClosed = divPagoBancolombia.classList.contains('inactive');
    const isDivPagoDaviplataClosed = divPagoDaviplata.classList.contains('inactive');
    const isDivPagoMastercardClosed = divPagoMastercard.classList.contains('inactive');
    
        
    switch (opcionDepagoElegida) {
        case 'opcion1':
                divPagoNequi.classList.add('inactive');
                divPagoBancolombia.classList.add('inactive');
                divPagoDaviplata.classList.add('inactive');
                divPagoMastercard.classList.add('inactive');

            
            break;

        
        case 'opcion2':

            //const isDivPagoBancolombiaClosed = divPagoBancolombia.classList.contains('inactive');
            if (!isDivPagoBancolombiaClosed) {
                divPagoBancolombia.classList.add('inactive');
            }
            
            //const isDivPagoDaviplataClosed = divPagoDaviplata.classList.contains('inactive');
            if (!isDivPagoDaviplataClosed) {
                divPagoDaviplata.classList.add('inactive');
            }
           
            //const isDivPagoMastercardClosed = divPagoMastercard.classList.contains('inactive');
            if (!isDivPagoMastercardClosed) {
                divPagoMastercard.classList.add('inactive');
            }

            divPagoNequi.classList.remove('inactive');

            break; 
        
        case 'opcion3':

            //const isDivPagoNequiClosed = divPagoNequi.classList.contains('inactive');
            if (!isDivPagoNequiClosed) {
                divPagoNequi.classList.add('inactive');
            }
            
            //const isDivPagoDaviplataClosed = divPagoDaviplata.classList.contains('inactive');
            if (!isDivPagoDaviplataClosed) {
                divPagoDaviplata.classList.add('inactive');
            }
           
            //const isDivPagoMastercardClosed = divPagoMastercard.classList.contains('inactive');
            if (!isDivPagoMastercardClosed) {
                divPagoMastercard.classList.add('inactive');
            }

        divPagoBancolombia.classList.remove('inactive');
            break;
        
        case 'opcion4':

            //const isDivPagoBancolombiaClosed = divPagoBancolombia.classList.contains('inactive');
            if (!isDivPagoBancolombiaClosed) {
                divPagoBancolombia.classList.add('inactive');
            }
            
            //const isDivPagoNequiClosed = divPagoNequi.classList.contains('inactive');
            if (!isDivPagoNequiClosed) {
                divPagoNequi.classList.add('inactive');
            }
           
            //const isDivPagoMastercardClosed = divPagoMastercard.classList.contains('inactive');
            if (!isDivPagoMastercardClosed) {
                divPagoMastercard.classList.add('inactive');
            }

        divPagoDaviplata.classList.remove('inactive');
            break;
        case 'opcion5':

             //const isDivPagoBancolombiaClosed = divPagoBancolombia.classList.contains('inactive');
            if (!isDivPagoBancolombiaClosed) {
                divPagoBancolombia.classList.add('inactive');
            }
            
            //const isDivPagoNequiClosed = divPagoNequi.classList.contains('inactive');
            if (!isDivPagoNequiClosed) {
                divPagoNequi.classList.add('inactive');
            }
           
           //const isDivPagoDaviplataClosed = divPagoDaviplata.classList.contains('inactive');
            if (!isDivPagoDaviplataClosed) {
                divPagoDaviplata.classList.add('inactive');
            }

        divPagoMastercard.classList.remove('inactive');
            break;
    
    }
   
   /*  divPagoBancolombia.classList.remove('inactive'); */
}

function crearCodigoAleatorio() {
    

}


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
        
   /*  productImg.addEventListener('click', () => mostrarDetallesCadaProducto(product)); */
    
    productImg.addEventListener('click', ((obj) => {
    return function() {
        mostrarDetallesCadaProducto(obj); //permite obtener la variable inmediatamente cuando se le da click
    };
    })(product));
    // productImg.addEventListener('click', ((obj) => {return function() {mostrarDetallesCadaProducto(obj);};})(product));
        
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const pValor = document.createElement('p');
    pValor.innerText = '$' + product.price;

    const pNombreProduct = document.createElement('p');
    pNombreProduct.innerText = product.name;

    const productInfoIcono = document.createElement('figure');
    
    const productImgCart = document.createElement('img');
    
    //productImgCart.setAttribute('src', 'https://i.imgur.com/nQy0QHq.jpg');
    productImgCart.setAttribute('src', 'https://i.imgur.com/sbELWKC.jpg')
  
    
    productInfoIcono.appendChild(productImgCart);

    productInfoDiv.appendChild(pValor);
    productInfoDiv.appendChild(pNombreProduct);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoIcono);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
    }; 



    function mostrarDetallesCadaProducto(objAsignado) {

        detalleDeCadaProducto.innerHTML = '';
        
            const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');
            if (!ismMenuCarritoComprasClosed) {
            menuCarritoCompras.classList.add('inactive');
            } 

            const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
            if (!ismobileMenuIHamClosed) {
            mobileMenuIHam.classList.add('inactive');
            }  
        
            const isSectionMostrarInformacionClosed = sectionMostrarInformacion.classList.contains('inactive');
            if (!isSectionMostrarInformacionClosed) {
                sectionMostrarInformacion.classList.add('inactive');
            }

            const isDesktopMenuEmaiClosed = DesktopMenuEmail.classList.contains('inactive');
            if (!isDesktopMenuEmaiClosed) {
            DesktopMenuEmail.classList.add('inactive');
            } 

            const isAsideTotalOrdenensClosed = asideTodasLasCompras.classList.contains('inactive');
            if (!isAsideTotalOrdenensClosed) {
            asideTodasLasCompras.classList.add('inactive');
        }
        
            const isdivIngresoCuentaClosed = divIngresoCuenta.classList.contains('inactive');
            if (!isdivIngresoCuentaClosed) {
                divIngresoCuenta.classList.add('inactive');
            }
        
            const isDivCrearCuentaClosed = divCrearCuenta.classList.contains('inactive');
            if (!isDivCrearCuentaClosed) {
                divCrearCuenta.classList.add('inactive');
            }

            const isDivConfirmarCrearCuentaClosed = divConfirmarCrearCuenta.classList.contains('inactive');
            if (!isDivConfirmarCrearCuentaClosed) {
                divConfirmarCrearCuenta.classList.add('inactive');
            }

            const divMostrarCuentaIngresadaClosed = divMostrarCuentaIngresada.classList.contains('inactive');
            if (!divMostrarCuentaIngresadaClosed) {
                divMostrarCuentaIngresada.classList.add('inactive');
            }

            const isDivDesplegableCambioAccountClosed = divDesplegableCambioAccount.classList.contains('inactive');
            if (!isDivDesplegableCambioAccountClosed) {
                divDesplegableCambioAccount.classList.add('inactive');
            }
                
            const isDivDesplegableRecoverAccount = divDesplegableRecoverAccount.classList.contains('inactive');
            if (!isDivDesplegableRecoverAccount) {
                divDesplegableRecoverAccount.classList.add('inactive');
            }  

            const isDivConfirmarEmailEnviadoClosed = divConfirmarEmailEnviado.classList.contains('inactive');
            if (!isDivConfirmarEmailEnviadoClosed) {
                divConfirmarEmailEnviado.classList.add('inactive');
            }
            
            const isDivDesplegableChangeKeyClosed = divDesplegableChangeKey.classList.contains('inactive');
            if (!isDivDesplegableChangeKeyClosed) {
                divDesplegableChangeKey.classList.add('inactive');
            }
            
            const isDivDesplegableMetodosPagoClosed = divDesplegableMetodosPago.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
            if (!isDivDesplegableMetodosPagoClosed) {
            divDesplegableMetodosPago.classList.add('inactive');
            }
        
        //divMostrarCuentaIngresada.classList.add('inactive');

            const productDivClose = document.createElement('div');
            productDivClose.classList.add('product-detail-close');
            const productIconoClose = document.createElement('img');
            productIconoClose.setAttribute('src', './icons/icon_close.png');

            //productIconoClose.addEventListener('click', closeDesplegableDetalleDeProducto)
            productDivClose.addEventListener('click', closeDesplegableDetalleDeProducto)

            //     productIconoClose.addEventListener('click',function() {
            //     //const contenedor = document.getElementById('miContenedor');
            //     detalleDeCadaProducto.innerHTML = '';
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
            productButton.classList.add('primary-buttonProductDetail');
            productButton.classList.add('add-to-cart-buttonProductDetail');
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

            detalleDeCadaProducto.appendChild(productDivClose);    
            detalleDeCadaProducto.appendChild(productImgAside);
            detalleDeCadaProducto.appendChild(productDivInfo);
        
    openDesplegableDetalleDeProducto()
    }

    }

let preciosCompraAdicionada = [];
const catalogoComprasAdicionadas = [];
function guardarProductosAdicionados(objetoProducto) {
    
    //si encuentra coincidencia entre el correo ingresado y clave ingresado y la informacion guardadada en base de datos, entonces permite adicionar al carrito de compras, si no muestra el menu de ingresar cuenta:
    
if (coincidenciaEncontrada){

    catalogoComprasAdicionadas.push(objetoProducto);
    compraAdicionada = objetoProducto;

    //config para crear una fecha:
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();

    let formatoFecha = `${dia}/${mes}/${anio}`;

    let spanFechaCompraAdicionada = document.querySelector('#shopping-cartSpanFechaCompraAdicionada');
    spanFechaCompraAdicionada.innerText = formatoFecha;


    //contenedores compras adicionadas
    const divContenedorCompras = document.createElement('div');
    divContenedorCompras.classList.add('shoppingCartmy-order-content');

    const divCompraAdicionada = document.createElement('div');
    divCompraAdicionada.classList.add('shopping-cartCadaAdicion');

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
        return function () {
            cerrarCompra(obj); //permite obtener la variable inmediatamente cuando se le da click
        };
    })(objetoProducto));

    /* const buttonCompraAdicionada = document.createElement('button');
    buttonCompraAdicionada.classList.add('shopping-cartPrimary-button'); */


    figureCompraAdicionada.appendChild(imgCompraAdicionada);
    divCompraAdicionada.appendChild(figureCompraAdicionada);
    divCompraAdicionada.appendChild(pCompraAdicionadaNombre);
    divCompraAdicionada.appendChild(pCompraAdicionadaPrecio);
    divCompraAdicionada.appendChild(imgCompraAdicionadaClose);
    divContenedorCompras.appendChild(divCompraAdicionada);
    contenComprasAdicionadas.appendChild(divContenedorCompras);
   /*  contenComprasAdicionadas.appendChild(buttonCompraAdicionada); */
    
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

    function TotalArticulosyTotalPrecio(comprasHechas) {
        //configs para total articulops adicionados en desplegable
        let totalArticulosAdicionadosSpan = document.querySelector('#shopping-cartSpanTotalArticulosAdicionados');
        totalArticulosAdicionadosSpan.innerText = comprasHechas.length + ' Articulos';

        //configs para total articulops adicionados en desplegable
        divNumComprasCart.innerText = comprasHechas.length;

        //configs para sumar el precio Total:
        let sumaTotalPrecios = 0;
      

        for (let i = 0; i < comprasHechas.length; i++) {
            sumaTotalPrecios += comprasHechas[i].price;
        }
        let spanTotalPrecioAdicionados = document.querySelector('#shopping-cartspanTotalPrecioArticulos');
        spanTotalPrecioAdicionados.innerText = 'Total: ' + sumaTotalPrecios;
        spanPrecioTotalMetodoPago.innerText = sumaTotalPrecios;//este es el span de metodos de pago.
    }
    
    TotalArticulosyTotalPrecio(catalogoComprasAdicionadas)
    
//...si no, muestra el menu de ingresar cuenta:
} else {
    toggleMiCuentaMenuIngresar();
}
}




