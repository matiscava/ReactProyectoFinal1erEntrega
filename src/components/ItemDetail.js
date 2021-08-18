import React from 'react';

const ItemDetail = ({img,alt,nombre,precio,stock,id,info,funcion})=>{
    return (
        <div className='contenedorItemDetalle' id={`contenedorItemDetalle-${id}`} key={`contenedorItemDetalle-${id}`}>
                <div className='contendorImgItemDetalle'>
                    <img className='ItemDetalleImg' src={img} alt={alt} />
                </div>
                <div className='contendorInfoItemDetalle'>
                    <p className='ItemDetalle'>{nombre}</p>
                    <p className='ItemDetallePrecio'>Valor: $ {precio}</p>
                    <p className='ItemDetalleInfo'>{info}</p>
                    <p className='ItemDetalleStock'>Stock: {stock} </p>
                    <div className='ItemDetalleContenedorBtn'>
                        <div className='ItemDetalleBtn ItemDetalleBtn--Volver' id={`ItemDetalleBtnVolver-${id}`} onClick={funcion}>Volver a Colecciones</div>
                        <div className='ItemDetalleBtn ItemDetalleBtn--agregar' id={`ItemDetalleBtnAgregar-${id}`}> Agregar al carrito </div>
                    </div>
                </div>
                <span className='IconoSocial-close ItemDetalleBtnCerrar' onClick={funcion}></span>
            </div>
    )
}

export default ItemDetail;
