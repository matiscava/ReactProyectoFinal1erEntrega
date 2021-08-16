import React from 'react';
// import Imagenes from '../assets/Imagenes';
import '../estilos.css';
import Item from './Item';
import ItemDetail from './ItemDetail';
import ImgBilletera01 from '../assets/img/billeteras/Billetera03.webp';
import ImgBilletera02 from '../assets/img/billeteras/Billetera02.webp';
import ImgBilletera03 from '../assets/img/billeteras/Billetera04.webp';
import ImgBilletera04 from '../assets/img/billeteras/Billetera01.webp';
import ImgBilletera05 from '../assets/img/billeteras/Billetera05.webp';
import ImgCinturon01 from '../assets/img/cinturones/Cinturon01.webp';
import ImgCinturon02 from '../assets/img/cinturones/Cinturon04.webp';
import ImgCinturon03 from '../assets/img/cinturones/Cinturon02.webp';
import ImgCinturon04 from '../assets/img/cinturones/Cinturon03.webp';


const billeteras = [
    {
        'id':1,
        'nombre': 'Billetera Rusty Simplicity Marron',
        'precio': 3890,
        'stock': 10,
        'marca': 'Rusty',
        'modelo':'Simplicity',
        'imgURL': ImgBilletera01,
        'alt': 'ImgBilletera01',
        'informacion':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit labore distinctio possimus. Voluptate cumque magni assumenda, sed unde quae iste omnis nisi facere inventore reiciendis officia quaerat ex quis!'
    },
    {
        'id':2,
        'nombre': 'Billetera Hombre Duogan Tarjetero Monedero Eco Cuero',
        'precio': 2280,
        'stock': 6,
        'marca': 'Duogan',
        'modelo':'Retro',
        'imgURL': ImgBilletera02,
        'alt': 'ImgBilletera02',
        'informacion':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit labore distinctio possimus. Voluptate cumque magni assumenda, sed unde quae iste omnis nisi facere inventore reiciendis officia quaerat ex quis!'
    },
    {
        'id':3,
        'nombre': 'Billetera Bioworld PlayStation One grey poliéster y poliuretano',
        'precio': 1890,
        'stock': 3,
        'marca': 'Bioworld',
        'modelo':'PlayStation One',
        'imgURL': ImgBilletera03,
        'alt': 'ImgBilletera03',
        'informacion':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit labore distinctio possimus. Voluptate cumque magni assumenda, sed unde quae iste omnis nisi facere inventore reiciendis officia quaerat ex quis!' 
    },
    {
        'id':4,
        'nombre': 'Billetera Walla Vintage black y silver cuero',
        'precio': 4899,
        'stock': 6,
        'marca': 'Walla',
        'modelo':'Vintage',
        'imgURL': ImgBilletera04,
        'alt': 'ImgBilletera04',
        'informacion':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit labore distinctio possimus. Voluptate cumque magni assumenda, sed unde quae iste omnis nisi facere inventore reiciendis officia quaerat ex quis!'
    },
    {
        'id':5,
        'nombre': 'Billetera Los Robles Polo Time 0076 marrón cuero',
        'precio': 5990,
        'stock': 7,
        'marca': 'Los Robles',
        'modelo':'Polo Time',
        'imgURL': ImgBilletera05,
        'alt': 'ImgBilletera05',
        'informacion':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit labore distinctio possimus. Voluptate cumque magni assumenda, sed unde quae iste omnis nisi facere inventore reiciendis officia quaerat ex quis!'
    }
];

const cinturones = [
    {
        'id':6,
        'nombre': 'Cinturones Cinto De Cuero Hombre Talles Grandes Hasta 180cm',
        'precio': 1850,
        'stock': 11,
        'marca': 'Jonaro Jeans',
        'modelo':'Cinturon liso de cuero',
        'imgURL': ImgCinturon01,
        'alt': 'ImgCinturon01',
        'informacion':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit labore distinctio possimus. Voluptate cumque magni assumenda, sed unde quae iste omnis nisi facere inventore reiciendis officia quaerat ex quis!'
    },
    {
        'id':7,
        'nombre': 'Cintos Hombre Studebaker Cuero Vaqueta Hebilla Gastada',
        'precio': 1024,
        'stock': 5,
        'marca': 'Studebaker',
        'modelo':'Casual',
        'imgURL': ImgCinturon02,
        'alt': 'ImgCinturon02',
        'informacion':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit labore distinctio possimus. Voluptate cumque magni assumenda, sed unde quae iste omnis nisi facere inventore reiciendis officia quaerat ex quis!'
    },
    {
        'id':8,
        'nombre': 'Cinturones Cinto De Cuero Hombre Con Tachas',
        'precio': 1780,
        'stock': 21,
        'marca': 'Jonaro Jeans',
        'modelo':'Cinturon Remache',
        'imgURL': ImgCinturon03,
        'alt': 'ImgCinturon03',
        'informacion':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit labore distinctio possimus. Voluptate cumque magni assumenda, sed unde quae iste omnis nisi facere inventore reiciendis officia quaerat ex quis!'
    },
    {
        'id':9,
        'nombre': 'Cinturón De Vestir Hombre Cuero Reversible Talle Especial',
        'precio': 1899,
        'stock': 2,
        'marca': 'Fabricantes Directos',
        'modelo':'Moderno',
        'imgURL': ImgCinturon04,
        'alt': 'ImgCinturon04',
        'informacion':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit labore distinctio possimus. Voluptate cumque magni assumenda, sed unde quae iste omnis nisi facere inventore reiciendis officia quaerat ex quis!'
    }
];

let productos = [];
let arrayProducto = [];

billeteras.map((producto)=>{
    productos.push(producto);
    return producto
});
cinturones.map((producto)=>{
    productos.push(producto);
    return producto
});


class ListItems extends React.Component{
    constructor(props){
        super(props);
        this.state={array: productos, porductoInfo: arrayProducto};
    };
    cargarCategoria(arrayCategoria){
        const divCargando =document.querySelector('#cargandoCategorias');
        let contenedorItemDetalle=document.querySelector('.mainItemDetalle');
        contenedorItemDetalle.style.display='none';
        const promesa = ()=>
         new Promise ((resolve)=>{
             this.setState({array:[]});
            divCargando.style.display= 'block';
            divCargando.innerHTML= 'Cargando.';
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando..';
            },500)
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando...';
            },1500)
            setTimeout(()=>{
                resolve(arrayCategoria);
                divCargando.style.display= 'none';
            }, 2000);
        })
        promesa().then((result)=>{
            let contenedorItems=document.querySelector('.contenedorItems');
            contenedorItems.style.display='flex';
            this.setState({array:result})
        })
    }
    
    abrirDetalleProducto(id){
        arrayProducto= [];
        arrayProducto.push(productos[`${id-1}`]);
        const divCargando = document.querySelector('#cargandoCategorias');
        let contenedorItems=document.querySelector('.contenedorItems');
        contenedorItems.style.display='none';
    
        const promesa = ()=>
         new Promise ((resolve)=>{
             this.setState({porductoInfo:[]});
            divCargando.style.display= 'block';
            divCargando.innerHTML= 'Cargando producto en 3...';
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando producto en 2..';
            },500)
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando producto en 1.';
            },1500)
            setTimeout(()=>{
                resolve(arrayProducto);
                divCargando.style.display= 'none';
            }, 2000);
        })
        promesa().then((result)=>{
            let contenedorItemDetalle=document.querySelector('.mainItemDetalle');
            contenedorItemDetalle.style.display='block';
            this.setState({porductoInfo:result})
        })
    }
    cerrarItem(){
        const divCargando = document.querySelector('#cargandoCategorias');
        let contenedorItemDetalle=document.querySelector('.mainItemDetalle');
        let contenedorItems=document.querySelector('.contenedorItems');
        contenedorItemDetalle.style.display='none';
        divCargando.style.display= 'block';
        divCargando.innerHTML= 'Cargando.';
        setTimeout(()=>{
            divCargando.innerHTML= 'Cargando..';
        },500)
        setTimeout(()=>{
            divCargando.innerHTML= 'Cargando...';
        },1500)
        setTimeout(()=>{
            divCargando.style.display= 'none';
            contenedorItems.style.display='flex';
        }, 2000);
    }
    render(){
        return (
            <div className="contenedorCategorias">
                <div className="listadoCategorias">
                    <div className="btnCategoria" id='BtnTodos' onClick={this.cargarCategoria.bind(this,productos)}>
                        Todos los Productos
                    </div>
                    <div className="btnCategoria" id='BtnBilleteras' onClick={this.cargarCategoria.bind(this,billeteras)}>
                        Billeteras
                    </div>
                    <div className="btnCategoria" id='BtnCinturones' onClick={this.cargarCategoria.bind(this,cinturones)}>
                        Cintrunes
                    </div>
                </div>
                <div id='cargandoCategorias'></div>
                <div className='contenedorItems'>
                    {this.state.array.map(a=>(
                        <Item 
                        img={a.imgURL} 
                        alt={a.alt} 
                        precio={a.precio} 
                        nombre={a.nombre} 
                        stock={a.stock} 
                        id={a.id} 
                        funcion={this.abrirDetalleProducto.bind(this,a.id)}></Item>
                    ))
                    }
                </div>
                <div className='mainItemDetalle'>
                       {this.state.porductoInfo.map(produ=>(
                            <ItemDetail
                            img={produ.imgURL}
                            alt={produ.alt}
                            nombre={produ.nombre}
                            precio={produ.precio}
                            stock={produ.stock}
                            id={produ.id}
                            info={produ.informacion}
                            funcion={this.cerrarItem.bind(this)}
                            ></ItemDetail>
                       ))}
                </div>

            </div>
        )
    }
}

export default ListItems;