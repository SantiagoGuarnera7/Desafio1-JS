// While mas switch


let entrada = prompt("Ingrese su usuario").toLowerCase();
while(entrada != "esc" ){
   switch (entrada) {
       case "santiago":
            alert("BIENVENIDO SANTIAGO");
            break;
        case "micaela":
            alert("BIENVENIDA MICAELA");
            break;
        case "emma":
            alert("BIENVENIDA EMMA");
            break;
        case "pedro":
            alert("BIENVENIDO PEDRO");
            break;
        case "pepito":
            alert("BIENVENIDO PEPITO");
            break;
       default:
           alert("ACCESO DENEGADO")
           break;
   }
   entrada = prompt("Ingrese su usuario").toLowerCase();
}


// for PEDIDOS

for(let pedido = 1; pedido <= 10; pedido++){
    let nombre = prompt("Ingrese su nombre para asignar un numero de pedido");
    let mensaje = `Pedido #${pedido} Nombre: ${nombre}`;
    alert (mensaje);

}
 alert("No hay mas pedidos")