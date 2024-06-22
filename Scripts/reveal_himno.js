function delete_button(){
    var boton = document.querySelector('.contenedor_himno');
    var elemento_borrar= document.querySelector('h5');
    boton.removeChild(elemento_borrar);
}
function agg(){
    delete_button();
    const ub_div = document.querySelector('.contenedor_himno');

    const modHim = document.createElement('span');
    modHim.innerHTML = a;
    ub_div.appendChild(modHim);

    const modBot = document.createElement('h5');
    modBot.innerHTML ='<<div class ="botonaso"><button onclick="elim();"></a>Ver menos</button></div>';
    ub_div.appendChild(modBot)
}

function elim(){
    const ub_btn = document.querySelector('.contenedor_himno');
    var vm_btn = document.querySelector('span');
    ub_btn.removeChild(vm_btn);

    const ub_botonaso = document.querySelector('.contenedor_himno');
    var bt_del = document.querySelector('h5');
    ub_botonaso.removeChild(bt_del);

    const ub_div = document.querySelector('.contenedor_himno');
    const modBot_ms = document.createElement('h5');
    modBot_ms.innerHTML ='<div class ="botonaso"><button onclick="agg();">Ver mas</button></div>';
    ub_div.appendChild(modBot_ms)
}








var a = '<div class="container_section transition_left"><img  class="container" src="recursos/assets_bio/alumnos5.jpeg" alt="colegio" /><br><div id="tarjeta_bordo" class="container"><div id="cursiva"><p>No muy lejos está de vosotros</p><p>la misión sacrosanta  cumplir</p><p> doquiera gozosos veréis</p><p>victoriosas campanas tañir</p></div></div></div><div class="container_section transition_right"><img class="container" src="recursos/assets_bio/alumnos6.jpeg" alt="colegio" /><div id="tarjeta_bordo" class="container"><div id="cursiva"><p>Esta canción cantemos con orgullo</p><p>pues la patria nos contempla,</p><p> el corazón brindemos entonando </p><p> nuestro himno con fervor.</p></div></div></div><div class="container_section transition_left"><img class="container" src="recursos/assets_bio/alumnos7.jpeg" alt="colegio" /><div id="tarjeta_bordo" class="container"><div id="cursiva"><p>Escuadrón juvenil de esperanza</p><p>promisión redentora de amor</p><p>adelante allá en lontananzas</p><p>se divisa una antorcha un albor</p></div></div></div><div class="container_section transition_right"><img class="container" src="recursos/assets_bio/alumnos11.jpeg" alt="colegio" /><div id="tarjeta_bordo" class="container"><div id="cursiva"><p>Segadores de herencia divina</p><p>que por surcos ignotos marcháis</p><p>más de un alto haréis en la vida</p><p>para el germen del bien enterrad,</p><p>para el germen del bien enterrad.</p></div></div></div><br><br><br>';