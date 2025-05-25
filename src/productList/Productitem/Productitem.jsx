import React from "react";
import './productitem.css';

export const ProductItem = ({Product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(Product);
    }

    return (
        <div className={'product ' + className}>
            <div className={"img"}><img width={200} src={Product.Image}/></div>
            <div className={"title"}>{Product.title}</div>
            <div className={"description"}>{Product.description}</div>
            <div className={"prise"}>
                <span>Стоимость: <b>{Product.prise}</b></span>
        </div>
        <button className={'add-btn'} onClick={onAddHandler}>
            Добавить в корзину
        </button>
        </div>
    );
};