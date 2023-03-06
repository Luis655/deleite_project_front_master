import { defineComponent } from "vue";
import { Call } from "../../../../helpers/calls/Call"

interface ProductImage {
  IdProducto?: number;
  idCategoria?: number;
  idTematica?: number;
  nombreP?: string;
  descripcionP?: string;
  precio?: string;
  ImagenPrincipalchar?: string;
  popular?: boolean;
  ingredienteselect?: string;
  saludable?: boolean;
};
interface Fotos {
  idProducto?: number,
  imagenPrincipalchar?: string
};


function borrarProducto() {
  alert("joasdasd");
  // Código para borrar el producto
}

function guardarDatosAntesDeSalir(event: BeforeUnloadEvent) {
  // Guardar los datos del formulario en el almacenamiento local (si es necesario)
  borrarProducto();
  // Mostrar un mensaje al usuario para confirmar si desea salir de la página o no
  event.preventDefault();
  event.returnValue = "¿lmhjhjhhghggvgvgvgvgvgvgvgvgvgvgv?";
}

function habilitarSalida() {
  borrarProducto();
  // Permitir que el usuario abandone la página
  window.removeEventListener("beforeunload", guardarDatosAntesDeSalir);
}

function deshabilitarSalida() {
  // Impedir que el usuario abandone la página
  window.addEventListener("beforeunload", guardarDatosAntesDeSalir);
}

// Impedir que el usuario abandone la página al cargarla por primera vez
deshabilitarSalida();


// Para habilitar la salida, llama a la función habilitarSalida()
// Para deshabilitar la salida, llama a la función deshabilitarSalida()


let oCall = new Call();
let inputCount = 0;






const ProductosList = defineComponent({

  data() {
    return {
      valores: Object as ProductImage,
      categoria: Object as ProductImage,
      accion: Object as any,
      id: Object as any


    }
  },
  methods: {
    handlerchange(e: any) {
      const { name, value } = e.target;
      this.valores = ({ ...this.valores, [name]: value });

    },
    updateProducto(id=1, idConfirmacionT:any) {
      if(idConfirmacionT==null)
        idConfirmacionT=true;
      this.$router.push({ name: 'actualizarproducto', params: { id: id, trueorfalse: idConfirmacionT }})

      alert(id);
    },
    borrarProductos(idproducto:any) {
      //var nombreid = (document.getElementById('idProducto') as HTMLInputElement).value;
      const id = parseInt(idproducto);
      const url = `api/Imagenes/delete/${id}`;
      oCall.cenisFetch('DELETE', url, "", "")
        .then(async (response) => {
          console.log("EXUTI¡");
          if(response.status ==200){
            const url = `api/Producto/delete/${id}`;
              oCall.cenisFetch('Delete', url, "", "")
              .then(async(response)=>{
                console.log("Exito");
              })
          }
        });
      alert("joasdasd");
      // Código para borrar el producto
    },

    async crearCategoria() {
      const table = (document.getElementById('miTabla') as HTMLTableElement);

      const cabecera = table.createTHead();
  

      oCall.cenisFetch('GET', 'api/Producto/get', "", "")
        .then(async (response) => {
          console.log(response.Data.$values);
          if (response.Data.$values instanceof Array) {
            response.Data.$values.forEach((item: any) => {
              //const row = table.insertRow();

              const cuerpo = table.createTBody();
              const cuerpoRow = cuerpo.insertRow();
              cuerpoRow.innerHTML = `
              <tbody>
              <tr>
                <td>${item.nombreP}</td>
                <td>${item.descripcionP}</td>
                <td>${item.precio}</td>
                <td>${item.ingredienteselect}</td>
                <td>${item.nombreCategoria}</td>
                <td>${item.nombreTematica}</td>
                <td><img id="imagen${item.idProducto}" src="data:image/png;base64,${item.base64}"/></td>
               
                </tr>
                </tbody>
              
              `;

              const nuevoBoton = document.createElement('button');
              nuevoBoton.className = 'btn btn-cruds'; // Agrega la clase "btn" y "btn-cruds" al botón
              nuevoBoton.type = 'button'; // Establece el tipo de botón en "button"
              nuevoBoton.innerText = "Actualizar";
              nuevoBoton.onclick = () => {
                this.updateProducto(item.idProducto, item.idConfirmacionT);

                // Agrega aquí la función que deseas ejecutar cuando se hace clic en el botón
              };
              cuerpoRow.appendChild(nuevoBoton);

              const nuevoBoton2 = document.createElement('button');
              nuevoBoton2.className = 'btn btn-cruds'; // Agrega la clase "btn" y "btn-cruds" al botón
              nuevoBoton2.type = 'button'; // Establece el tipo de botón en "button"
              nuevoBoton2.innerText = "Borrar";
              nuevoBoton2.onclick = () => {
                this.borrarProductos(item.idProducto);

                // Agrega aquí la función que deseas ejecutar cuando se hace clic en el botón
              };
              cuerpoRow.appendChild(nuevoBoton2);


              console.log(item.nombreP);
              // Agregar el nombre del producto
              /*const nombreCell = row.insertCell();
              nombreCell.appendChild(document.createTextNode(item.nombreP));

              //Agregar descripcion del producto
              const descripcion = row.insertCell();
              descripcion.appendChild(document.createTextNode(item.descripcionP));

              //Agregar descripcion del precio
              const precio = row.insertCell();
              precio.appendChild(document.createTextNode(item.precio));

              //Agregar ingredienteselect del producto
              const ingredienteselect = row.insertCell();
              ingredienteselect.appendChild(document.createTextNode(item.ingredienteselect));

              //Agregar nombreTematica del producto
              const nombreTematica = row.insertCell();
              nombreTematica.appendChild(document.createTextNode(item.nombreTematica));

              //Agregar nombreCategoria del producto
              const nombreCategoria = row.insertCell();
              nombreCategoria.appendChild(document.createTextNode(item.nombreCategoria));

              // Agregar la imagen del producto
              const imagenCell = row.insertCell();
              const imagen = new Image();
              imagen.src = `data:image/png;base64,${item.base64}`;
              imagenCell.appendChild(imagen);

              const boton1 = row.insertCell();
              const nuevoBoton = document.createElement('button');
              nuevoBoton.className = 'btn btn-cruds'; // Agrega la clase "btn" y "btn-cruds" al botón
              nuevoBoton.type = 'button'; // Establece el tipo de botón en "button"
              nuevoBoton.innerText = "Actualizar";
              nuevoBoton.onclick = () => {
                this.updateProducto(item.idProducto);

                // Agrega aquí la función que deseas ejecutar cuando se hace clic en el botón
              };
              boton1.appendChild(nuevoBoton);

              /*const boton1 = row.insertCell();
              boton1.appendChild(document.createElement('button'));
              //boton1.classList.add('btn btn-danger');
              boton1.innerText="Click me";
              boton1.onclick = function() {
                updateProducto();
 
              }*/
            })


          } else {
            console.log("Error");
          }
        })
        .catch((error) => {
          console.error('Ha ocurrido un error al crear una nueva categoría:', error);
        });
    }
  },
  /*get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods = value;
  },*/
  mounted() {
    this.crearCategoria()
  },

  render() {
    return (
      <>
        <body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.2/js/bootstrap.bundle.min.js" integrity="sha512-iI8eycE4bV1eXZMgfbV2+76cRupxvN/yB//wL7V/E8Wq1d7VKNtX9lnPjPhhG3q+k1SN+bT1T1Y36FgQ2qxBOg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<br />
<br />
<br />








          <div class="row">
            <div class="col-lg-12">

              <div class="row-lg-12">
                <div class="TituloProductos">

                  <h2> PRODUCTOS</h2>
                  <input id="nombreid" name="nombreid" type="number" value={this.$route.params.id} disabled style="display:none" />
                  <h6 style="width:600px">
                    Los productos que registres se categorizarán automáticamente según las preferencias y datos que registres
                  </h6>
                  <button onClick={() => this.updateProducto(1, aa)} id="crear-inpust" type="button" class="btn btn-cruds">producto</button>


                </div>
              </div>
              <center>
                <div class="col-11">
              <div class="table-responsive">
              <table id="miTabla" class="table table-bordered">
                <thead class="thead-dark">
        <th>Producto</th>
        <th>Descripcion</th>
        <th>Precio</th>
        <th>Ingredientes</th>
        <th>Categoria</th>
        <th>Tematica</th>
        <th>Imagen</th>
        <th>Acciones</th>
      </thead>
              </table>
              </div>
              </div>
              </center>

            </div>
          </div>

        </body>
      </>
    )
  }
})

export default ProductosList