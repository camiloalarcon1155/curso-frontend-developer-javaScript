/* Esto es un proyecto forkeado de platzi,m llamado curso de frontend developmen, fue forkeado como curso de java scrpt practico ya ahora lo estoy personalizando para mi tienda CamKatStore, haremos cambios de variables, aumento de variables y funciones y sus imagenes seran de ropa. Este proyecto sigue siendo meramente tecnico */


const menuEmail = document.querySelector('.navbar-email');
const DesktopMenuEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenuIHam = document.querySelector('.mobile-menu');
const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const menuCarritoCompras = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container'); // lo traemos para meter el div que contiene el template de nuestro objeto productos
const menuDetalleCadaCompra = document.querySelector('#productDetail');
const productDetailCloseIcono = document.querySelector('.product-detail-close') // lo creamos para cerrar el aside 2 que tiene la descripcion de cada compra
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

const logoCamkat = document.querySelector('.logo')






menuEmail.addEventListener('click', toggleDesktopMenuEmail);

menuHamIcon.addEventListener('click', ToggleMobilMenu);

menuCarritoIcon.addEventListener('click', ToggleCarritoCompras);

productDetailCloseIcono.addEventListener('click', closeDesplegableCompra);

logoCamkat.addEventListener('click',mostrarMiInformacion);




function toggleDesktopMenuEmail() {

     const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }
   
    DesktopMenuEmail.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva
}


function ToggleMobilMenu() {
    //en una variable almacenamos 
    const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    closeDesplegableCompra()
    
        mobileMenuIHam.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva
    
}


function ToggleCarritoCompras() {
    //menuCarritoCompras.classList.toggle('inactive');
    //para que cuando est en modo movil con el menu del movil desplegado y le demos en el menu de tus ordenes y no se superpongan, entonces tenemos que preguntar si estan activos o inactivos, para que aparezca uno o el otro
    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
   // const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const ismenuDetalleCadaCompraClosed = menuDetalleCadaCompra.classList.contains('inactive');

    if (!ismenuDetalleCadaCompraClosed) {
        menuDetalleCadaCompra.classList.add('inactive');
    }
    menuCarritoCompras.classList.toggle('inactive');

}


function openDesplegableCompra() {

    // const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    // if (!ismMenuCarritoComprasClosed) {
    //     menuCarritoCompras.classList.add('inactive');
    // }
    // menuCarritoCompras.classList.toggle('inactive');

    //👇👇👇👇👇El uso de classList.contains('inactive') seguido de classList.add('inactive') dentro de una condición if se refiere a verificar primero si el elemento ya tiene la clase inactive antes de añadirla. Esto se utiliza para asegurarse de que la clase inactive solo se añada si el elemento no está ya oculto. En el caso específico de la función openDesplegableCompra(), se utiliza classList.add('inactive') directamente porque el objetivo es cerrar el elemento de todos modos, independientemente de su estado actual.

    menuCarritoCompras.classList.add('inactive');

    //aqui no hubo necesidad de poner condicionales y todo eso, por que no se 

    menuDetalleCadaCompra.classList.remove('inactive');// no add, por que queremos quiotarle la clase inactive que ya tiene y asi aparezca el menu detalles de esa compra. no le pusimos add o toggle, por que la idea es que se pueda cerrar la imagen desde el icono o imagen  "X" que tiene cada imagen.
}

function closeDesplegableCompra() {
    menuDetalleCadaCompra.classList.add('inactive');
}
    


function renderTodoRopa() {
    mobileMenuIHam.classList.toggle('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Catálogo Completo';
    renderObjetosHTML(camisetasHombreList);
    renderObjetosHTML(jeansHombreList);
    renderObjetosHTML(jeansMujerList);
    renderObjetosHTML(chaquetasDamaList);
    renderObjetosHTML(otrasPrendasList);
}

function renderCamisetasH() {
    mobileMenuIHam.classList.toggle('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Camisetas Economicas Hombre';
    renderObjetosHTML(camisetasHombreList);
}

function renderJeansH() {
    mobileMenuIHam.classList.toggle('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Jeans Hombre';
    renderObjetosHTML(jeansHombreList);
}

function renderJeansM() {
    mobileMenuIHam.classList.toggle('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Jeans Dama';
    renderObjetosHTML(jeansMujerList);
}

function renderchaquetasM() {
    mobileMenuIHam.classList.toggle('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'chaquetas Dama';
    renderObjetosHTML(chaquetasDamaList);
}

function renderOtrasPrendas() {
    mobileMenuIHam.classList.toggle('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Otras Prendas';
    renderObjetosHTML(otrasPrendasList);
}


function mostrarMiInformacion() {
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'CAMKAT STORE S.A.S';

    const divInfoEmpresa = document.createElement('div');
    divInfoEmpresa.classList.add('contInfoEsmpresa')

    const pMision = document.createElement('p');
    pMision.classList.add('misionEmpresa');
    
    const pVision = document.createElement('p');
    pVision.classList.add('vsionEmpresa');

    const pNosotros = document.createElement('p');
    pNosotros.classList.add('infoNosotros');


    pMision.innerText = 'En nuestra tienda de ropa, nos dedicamos a ofrecer a nuestros clientes una experiencia de compra excepcional al proporcionar prendas de vestir de alta calidad que reflejan las últimas tendencias de la moda. Nos esforzamos por brindar un servicio al cliente excepcional, creando un ambiente acogedor y colaborativo donde cada cliente se sienta valorado y escuchado. Nuestra misión es inspirar confianza y empoderamiento a través de la moda, ayudando a nuestros clientes a expresar su estilo único y sentirse seguros en cada ocasión.'
    
    pVision.innerText = 'Nuestra visión es convertirnos en la principal opción para aquellos que buscan moda de calidad y un servicio excepcional. Buscamos expandir nuestra presencia tanto en línea como en tiendas físicas, llegando a nuevos mercados y comunidades para compartir nuestra pasión por la moda con un público cada vez mayor. Nos esforzamos por ser reconocidos como líderes en la industria de la moda por nuestra innovación, sostenibilidad y compromiso con la satisfacción del cliente.'

    pNosotros.innerText = 'En nuestra tienda de ropa, nos apasiona la moda y creemos en el poder transformador que tiene la ropa para elevar la confianza y la autoexpresión. Nuestra dedicada equipo está compuesto por expertos en moda y servicio al cliente, comprometidos a proporcionar una experiencia de compra excepcional a cada cliente que cruza nuestras puertas o visita nuestra tienda en línea. Nos enorgullece ofrecer una amplia selección de prendas de vestir de alta calidad, cuidadosamente seleccionadas para reflejar las últimas tendencias y satisfacer las necesidades de nuestros clientes. Como empresa, nos esforzamos por mantener altos estándares de ética y responsabilidad social, trabajando en estrecha colaboración con proveedores y comunidades para promover la sostenibilidad y el bienestar. Estamos comprometidos a inspirar confianza y empoderamiento a través de la moda, creando un espacio donde todos son bienvenidos y pueden encontrar su estilo único.'


    divInfoEmpresa.appendChild(pMision);
    divInfoEmpresa.appendChild(pVision);
    divInfoEmpresa.appendChild(pNosotros);

    cardsContainer.appendChild(divInfoEmpresa);
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
    image: "https://i.imgur.com/6wpmVPm.jpg"
});

catalogoCompletoList.push({
    name: 'Camiseta azul',
    price: 19000,
    image: "https://i.imgur.com/qYKTC6x.jpeg"
});

catalogoCompletoList.push({
    name: 'Camiseta blanca',
    price: 20000,
    image: "https://i.imgur.com/LXLgc0g.jpeg"
});

catalogoCompletoList.push({
    name: 'Camiseta rojo',
    price: 21000,
    image: "https://i.imgur.com/7xdMKA7.jpeg"
});

catalogoCompletoList.push({
    name: 'Camiseta color negro',
    price: 22000,
    image: "https://i.imgur.com/p2xCOiZ.jpg"
});

catalogoCompletoList.push({
    name: 'Camiseta color rosa',
    price: 25000,
    image: "https://i.imgur.com/NOKEmj4.jpeg"
});


//🥼🥼🥼Arreglo de objetos de camisetas economicas:
const camisetasHombreList = [];// este vendria siendo la abase de datos que estaria en el backend, pero vbamos a hacer uno similar aqui, para organizar el forntend
camisetasHombreList.push({
    name: 'Camiseta rojo oscuro',
    price: 18000,
    image: "https://i.imgur.com/6wpmVPm.jpg"
});//ya creamos un array de elemmentos y con este podemos crear todos los productos que sean

camisetasHombreList.push({
    name: 'Camiseta azul',
    price: 19000,
    image: "https://i.imgur.com/qYKTC6x.jpeg"
});

camisetasHombreList.push({
    name: 'Camiseta blanca',
    price: 20000,
    image: "https://i.imgur.com/LXLgc0g.jpeg"
});

camisetasHombreList.push({
    name: 'Camiseta rojo',
    price: 21000,
    image: "https://i.imgur.com/7xdMKA7.jpeg"
});

camisetasHombreList.push({
    name: 'Camiseta color negro',
    price: 22000,
    image: "https://i.imgur.com/p2xCOiZ.jpg"
});

camisetasHombreList.push({
    name: 'Camiseta color rosa',
    price: 25000,
    image: "https://i.imgur.com/NOKEmj4.jpeg"
});


//👖👖👖Arreglo de objetos de jeans hombre:
const jeansHombreList = [];
jeansHombreList.push({
    name: 'jean DSqueared',
    price: 18000,
    image: "https://i.imgur.com/vDXf8Xf.jpg"
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 19000,
    image: "https://i.imgur.com/o2XCN3K.jpg"
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 20000,
    image: "https://i.imgur.com/OYXPR4i.jpg"
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 21000,
    image: "https://i.imgur.com/Vso5GyJ.jpg"
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 22000,
    image: "https://i.imgur.com/fcW97Gd.jpg"
});

jeansHombreList.push({
    name: 'jean DSqueared',
    price: 25000,
    image: "https://i.imgur.com/p9FbDYj.jpg"
});




//👖👖👖Arreglo de objetos de jeans mujer:
const jeansMujerList = [];
jeansMujerList.push({
    name: 'Jean Economico Dama',
    price: 18000,
    image: "https://i.imgur.com/XsWPVsy.jpg"
});

jeansMujerList.push({
    name: 'Camiseta azul',
    price: 19000,
    image: "https://i.imgur.com/0csXwNY.jpg"
});

jeansMujerList.push({
    name: 'Camiseta blanca',
    price: 20000,
    image: "https://i.imgur.com/EsKMf8k.jpg"
});

jeansMujerList.push({
    name: 'Camiseta rojo',
    price: 21000,
    image: "https://i.imgur.com/VyuxoLh.jpg"
});

jeansMujerList.push({
    name: 'Camiseta color negro',
    price: 22000,
    image: "https://i.imgur.com/1oQSVsT.jpg"
});

jeansMujerList.push({
    name: 'Camiseta color rosa',
    price: 25000,
    image: "https://i.imgur.com/EmY5huB.jpg"
});


//👚👚👚👚Arreglo de objetos de blusas dama:
const chaquetasDamaList = [];
chaquetasDamaList.push({
    name: 'Chaqueta1',
    price: 18000,
    image: "https://i.imgur.com/3VTii84.jpg"
});

chaquetasDamaList.push({
    name: 'Chaqueta2',
    price: 19000,
    image: "https://i.imgur.com/0V3Zk5v.jpg"
});

chaquetasDamaList.push({
    name: 'Chaqueta3',
    price: 20000,
    image: "https://i.imgur.com/wWPiLqy.jpg"
});

chaquetasDamaList.push({
    name: 'Chaqueta4',
    price: 21000,
    image: "https://i.imgur.com/mMEAfyy.jpg"
});

chaquetasDamaList.push({
    name: 'Chaqueta5',
    price: 22000,
    image: "https://i.imgur.com/cDpjfGJ.jpg"
});

chaquetasDamaList.push({
    name: 'Chaqueta6',
    price: 25000,
    image: "https://i.imgur.com/1Zjfk6P.jpg"
});


//otras prendas
const otrasPrendasList = [];
otrasPrendasList.push({
    name: 'Pijama',
    price: 18000,
    image: "https://i.imgur.com/TYkYiGZ.jpg"
});

otrasPrendasList.push({
    name: 'Pijama red',
    price: 19000,
    image: "https://i.imgur.com/ypsTb0K.jpg"
});

otrasPrendasList.push({
    name: 'Jean negro',
    price: 20000,
    image: "https://i.imgur.com/J6GGYWG.jpg"
});

otrasPrendasList.push({
    name: 'jean moico abano',
    price: 21000,
    image: "https://i.imgur.com/MGrFmzD.jpg"
});

otrasPrendasList.push({
    name: 'Jean moico negro',
    price: 22000,
    image: "https://i.imgur.com/mVsNUxA.jpg"
});

otrasPrendasList.push({
    name: 'polilicra',
    price: 25000,
    image: "https://i.imgur.com/BrNHjvr.jpeg"
});

 //probar algo
const listaFalsa = [];
listaFalsa.push({
    name: 'Falso',
    price: '000000',
    image: "https://img.freepik.com/vector-gratis/bote-basura-lleno-bolsas-basura-vasos-vino-botellas-plastico-cascaras-platano_1268-15181.jpg"
});



function renderObjetosHTML(arrElements) {
    for (product of arrElements) {
//console.log(product.image);
    //lo que haremos aqui es ir creando cada etiqueta o elemento de la plantilla que tenemos para cada producto en html:

/* 
    <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> 
*/
    
    //y a medida que los creamos, les iremos agregando su clase ... :

    const productCard = document.createElement('div'); // creamos un elemnto tipo Div, para poder despues introducir cada elememento creado con nuestro template sobre pdoductos.
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    // product = {name, price, image} --> product.image
    productImg.setAttribute('src', product.image);

    productImg.addEventListener('click', openDesplegableCompra);// que me habra una funcion para desplegar el aside que contiene el menu con el detalle de cada compra. Le pusimos open y no toggle, por que solo queremos que lo habra, no que lo aparezca y desaparezca.
    
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

    //y por ultimo debemos meter cada elemento hijo dentro de su padre con appendChild...:
    
    productInfoIcono.appendChild(productImgCart);

    //productInfoDiv.appendChild(pValor, pNombreProduct)
    productInfoDiv.appendChild(pValor);
    productInfoDiv.appendChild(pNombreProduct);

     //productInfo.appendChild(productInfoDiv, productInfoIcono)
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoIcono);
    
   // productImg.appendChild();

     //productCard.appendChild(productImg, productInfo)
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    //Ahora ya tenemos todas las etiquetas hijo dentro de su etiqueta padre. lo que haremos ahora es meter la etiqueta mas grande que trajimos desde nuestro html, en la etiqueta "<div class="cards-container">" que esta ya en html, para eso la traemos desde html con un queryselector y lo introducimos con un appendchild
    
    cardsContainer.appendChild(productCard);
    }; // este for esta bien yy completo, pèro no es buena practica que este ahi tirado. lo mejor meterlo en una funcion y llamarlo, enviandole c0mo parametro  un array y de ese array se hace el for (product of array)
    

    }

//ahora si la llamamos:


// switch (objetoEnviado) {

// }

//renderObjetosHTML(camisetasHombreList)

// De esta forma tambien se podrian eviar los arreglos desde el backend y usarlos automaticamente con esta funcion. o que tambie se puede ejcutar cuando le demos click a un boton o lo que sea. como funcion es mucho mas util que dejar el for ahi tirado.

//renderObjetosHTML(listaFalsa)

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

