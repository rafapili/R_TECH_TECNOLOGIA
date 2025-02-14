import React from 'react';
import '../css/produto.css'

class Produto extends React.Component{
    constructor(props){
        super(props)
        this.titulo = this.props.titulo
        this.description = this.props.description
        this.imgProduct = this.props.imgProduct
    }

    render(){
        return <div className="caixaProduct">
            <img src={this.imgProduct} alt="" className="imgProduct"/>
            <h4 className="tituloProduct">{this.titulo}</h4>
            <p className="descriptionProduct">{this.description}</p>
            <button className="btnComprar">Comprar</button>
        </div>
    }
}

export default Produto
