//LLamando a un node del DOM
let root = document.querySelector("#root");

//Elemento de tipo div con un atriuto class
let div_formulario = document.createElement("div");
div_formulario.className = "div-formulario";

//Lista de datos (String)
let formularios = [
    {nombre: "Login", link: "componentes/Login/login.html"},
    {nombre: "Formulario de Búsqueda", link: "componentes/Formulario-de-Busqueda/formulariodebusqueda.html"},
    {nombre: "Formulario de Comentario", link:"componentes/Formulario-de-Comentarios-Reseñas/formulariodecomentario-reseña.html"},
    {nombre: "Formulario de Comprar Pedidos", link: "componentes/Formulario-de-Pedido-Compras/formulariodepedidocompras.html"},
    {nombre: "Formulario de Registro", link: "componentes/Formulario-de-Registro/formularioderegistro.html"},
    {nombre: "Formulario de Contacto", link: "componentes/Forumulario-de-Contacto/formulariodecontacto.html"}
];

//forEach (for)
formularios.forEach(lista =>{ 
    let div_item = document.createElement("a");
    div_item.href = lista.link;
    div_item.className = "div-item";
    div_item.innerText = lista.nombre;

    div_formulario.appendChild(div_item);
 });

 root.appendChild(div_formulario);