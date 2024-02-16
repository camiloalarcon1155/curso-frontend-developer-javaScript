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

const logoCamkat = document.querySelector('.logo')





menuEmailMov.addEventListener('click', toggleDesktopMenuEmail)
menuEmailDesktop.addEventListener('click', toggleDesktopMenuEmail);

menuHamIcon.addEventListener('click', ToggleMobilMenu);

menuCarritoIcon.addEventListener('click', ToggleCarritoCompras);

//productDetailCloseIcono.addEventListener('click', closeDesplegableCompra);

logoCamkat.addEventListener('click',mostrarMiInformacion);




function toggleDesktopMenuEmail() {
    menuDetalleCadaCompra.innerHTML = '';
     const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    DesktopMenuEmail.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva


}


function ToggleMobilMenu() {
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


        mobileMenuIHam.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva

}


function ToggleCarritoCompras() {
    menuDetalleCadaCompra.innerHTML = '';
    //menuCarritoCompras.classList.toggle('inactive');
    //para que cuando est en modo movil con el menu del movil desplegado y le demos en el menu de tus ordenes y no se superpongan, entonces tenemos que preguntar si estan activos o inactivos, para que aparezca uno o el otro
    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
   // const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

     const isDesktopMenuEmailClosed = DesktopMenuEmail.classList.contains('inactive');
    if (!isDesktopMenuEmailClosed) {
    DesktopMenuEmail.classList.add('inactive');
    } 

    //const ismenuDetalleCadaCompraClosed = menuDetalleCadaCompra.classList.contains('inactive');

    // if (!ismenuDetalleCadaCompraClosed) {
    //     menuDetalleCadaCompra.classList.add('inactive');
    // }
    
    menuCarritoCompras.classList.toggle('inactive');

}

//ESTA FUNCION NO SE HA USADO AUN
function mostrarCadaProducto(arrElements) {
    //
    // for (let i = 0; i < cosas.length; i++) {
    //     const cosaImage = cosas[i].image;
    //     //let found = false;

    //     for (let j = 0; j < catalogoCompletoList.length; j++) {
    //         if (cosaImage === catalogoCompletoList[j].image) {
    //             product = catalogoCompletoList[j];
    //             console.log('La imagen de cosas se encontró en catalogoCompletoList');
    //       //      found = true;
    //             break;
    //         }
    //     }

    //     if (!found) {
    //         console.log('La imagen de cosas no se encontró en catalogoCompletoList');
    //     }
    // }
    let cosas = arrElements;

    let product = [];
    for (let i = 0; i < cosas.length; i++) {
        let arregloImage = cosas[i].image;
         
        for (let j = 0; j < catalogoCompletoList.length; j++) {

            console.log('i:' + (j + 1));
            console.log(arregloImage);
            console.log(catalogoCompletoList[j].image);
            
            
            if (arregloImage === catalogoCompletoList[j].image) {
                console.log('encontrada');

                product = catalogoCompletoList[j]
                console.log(product)
            }
        }
    }
 
    
       
    const productDivClose = document.createElement('div');
    productDivClose.classList.add('product-detail-close');
    const productIconoClose = document.createElement('img');
    productIconoClose.setAttribute('src','./icons/icon_close.png');
    

    const productImg = document.createElement('img');

    productImg.setAttribute('src', product.image);
    
    const productDivInfo = document.createElement('div');
    productDivInfo.classList.add('product-info');

    const pValor = document.createElement('p');
    pValor.innerText = '$' + product.price;

    const pNombreProduct = document.createElement('p');
    pNombreProduct.innerText = product.name;
        
    const pInfoProduct = document.createElement('p');
    pInfoProduct.innerText = product.name; //ir a crearle info al producto en el objeto********

    const productButton = document.createElement('button');
    productButton.classList.add('primary-button');
    productButton.classList.add('add-to-cart-button');
    productButton.innerText = 'Add to Cart';

    const iconoCompraCarrito = document.createElement('img');
    iconoCompraCarrito.setAttribute('src','./icons/bt_add_to_cart.svg');


   productDivClose.appendChild(productIconoClose);

    productButton.appendChild(iconoCompraCarrito);
    
    productDivInfo.appendChild(pValor);
    productDivInfo.appendChild(pNombreProduct);
    productDivInfo.appendChild(pInfoProduct);
    productDivInfo.appendChild(productButton);

    menuDetalleCadaCompra.appendChild(productDivClose);    
    menuDetalleCadaCompra.appendChild(productImg);
    menuDetalleCadaCompra.appendChild(productDivInfo);

    }



 function openDesplegableCompra() {
    //menuDetalleCadaCompra.clear;
    menuDetalleCadaCompra.classList.remove('inactive'); 
    //menuCarritoCompras.classList.add('inactive');

   //mostrarCadaProducto(camisetasHombreList) 
 
    
}



function closeDesplegableCompra() {
    menuDetalleCadaCompra.innerHTML = '';
    //menuDetalleCadaCompra.classList.toggle('inactive');
}
    


function renderTodoRopa() {
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Catálogo Completo';
    renderObjetosHTML(catalogoCompletoList);
}

function renderCamisetasH() {
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Camisetas Economicas Hombre';
    renderObjetosHTML(camisetasHombreList);
}

function renderJeansH() {
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Jeans Hombre';
    renderObjetosHTML(jeansHombreList);
}

function renderJeansM() {
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Jeans Dama';
    renderObjetosHTML(jeansMujerList);
}

function renderchaquetasM() {
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'chaquetas Dama';
    renderObjetosHTML(chaquetasDamaList);
}

function renderOtrasPrendas() {
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'Otras Prendas';
    renderObjetosHTML(otrasPrendasList);
}


function mostrarMiInformacion() {
    menuDetalleCadaCompra.innerHTML = '';
    DesktopMenuEmail.classList.add('inactive');
    mobileMenuIHam.classList.add('inactive');
    menuCarritoCompras.classList.add('inactive');
    cardsContainer.innerText = '';
    tituloTipRopa.innerText = 'CAMKAT STORE S.A.S';

    const divInfoEmpresa = document.createElement('div');
    divInfoEmpresa.classList.add('contInfoEsmpresa')

    const h1Mision = document.createElement('h1');
    h1Mision.innerText ='Misión';
    const pMision = document.createElement('p');
    pMision.classList.add('misionEmpresa');
    
    const h1Vision = document.createElement('h1');
    h1Vision.innerText= 'Visión';
    const pVision = document.createElement('p');
    pVision.classList.add('vsionEmpresa');

    const h1Nosotros = document.createElement('h1');
    h1Nosotros.innerText = 'Quienes somos';
    const pNosotros = document.createElement('p');
    pNosotros.classList.add('infoNosotros');


    pMision.innerText = 'En nuestra tienda de ropa, nos dedicamos a ofrecer a nuestros clientes una experiencia de compra excepcional al proporcionar prendas de vestir de alta calidad que reflejan las últimas tendencias de la moda. Nos esforzamos por brindar un servicio al cliente excepcional, creando un ambiente acogedor y colaborativo donde cada cliente se sienta valorado y escuchado. Nuestra misión es inspirar confianza y empoderamiento a través de la moda, ayudando a nuestros clientes a expresar su estilo único y sentirse seguros en cada ocasión.'
    
    pVision.innerText = 'Nuestra visión es convertirnos en la principal opción para aquellos que buscan moda de calidad y un servicio excepcional. Buscamos expandir nuestra presencia tanto en línea como en tiendas físicas, llegando a nuevos mercados y comunidades para compartir nuestra pasión por la moda con un público cada vez mayor. Nos esforzamos por ser reconocidos como líderes en la industria de la moda por nuestra innovación, sostenibilidad y compromiso con la satisfacción del cliente.'

    pNosotros.innerText = 'En nuestra tienda de ropa, nos apasiona la moda y creemos en el poder transformador que tiene la ropa para elevar la confianza y la autoexpresión. Nuestra dedicada equipo está compuesto por expertos en moda y servicio al cliente, comprometidos a proporcionar una experiencia de compra excepcional a cada cliente que cruza nuestras puertas o visita nuestra tienda en línea. Nos enorgullece ofrecer una amplia selección de prendas de vestir de alta calidad, cuidadosamente seleccionadas para reflejar las últimas tendencias y satisfacer las necesidades de nuestros clientes. Como empresa, nos esforzamos por mantener altos estándares de ética y responsabilidad social, trabajando en estrecha colaboración con proveedores y comunidades para promover la sostenibilidad y el bienestar. Estamos comprometidos a inspirar confianza y empoderamiento a través de la moda, creando un espacio donde todos son bienvenidos y pueden encontrar su estilo único.'

    divInfoEmpresa.appendChild(h1Mision);
    divInfoEmpresa.appendChild(pMision);
    divInfoEmpresa.appendChild(h1Vision);
    divInfoEmpresa.appendChild(pVision);
    divInfoEmpresa.appendChild(h1Nosotros);
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
    image: "https://i.imgur.com/6wpmVPm.jpg",
    info: 'Esta prenda se esta vendiendo en camkatStore, donde se venden excelentes prendas todos los dia y ademas puedes disfrutar de excelentes marcas'
});

catalogoCompletoList.push({
    name: 'Camiseta azul',
    price: 19000,
    image: "https://i.imgur.com/qYKTC6x.jpeg",
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
    image: "https://i.imgur.com/qYKTC6x.jpeg",
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
    
    const productDivClose = document.createElement('div');
    productDivClose.classList.add('product-detail-close');
    const productIconoClose = document.createElement('img');
    productIconoClose.setAttribute('src', './icons/icon_close.png');
        
    productIconoClose.addEventListener('click',closeDesplegableCompra)
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
    }

    
    openDesplegableCompra()

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

