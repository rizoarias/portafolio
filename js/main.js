const definirCompra = (n)=>{
    let din = prompt(`Dinero de ${n}`);
    if (din >= 0.6 && din < 1) return alert(`${n}: helado de agua, y te sobran ${din - 0.6}`);
    else if (din >= 1 && din < 1.6) return alert(`${n}: helado de crema, y te sobran ${din - 1}`);
    else if (din >= 1.6 && din < 1.7) return alert(`${n}: helado de heladix, y te sobran ${din - 1.6}`);
    else if (din >= 1.7 && din < 1.8) return alert(`${n}: helado de heladovich, y te sobran ${din - 1.7}`);
    else if (din >= 1.8 && din < 2.9) return alert(`${n}: helado de helardo, y te sobran ${din - 1.8}`);
    else if (din >= 2.9) return alert(`${n}: helado de de Confites o pote de 1/4kg, y te sobran ${din - 2.9}`);
    else return alert(`${n}: no te alcanza para ningun helado`);
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));