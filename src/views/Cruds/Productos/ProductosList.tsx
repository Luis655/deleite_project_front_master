import { defineComponent } from "vue";
import { Call } from "../../../../helpers/calls/Call"
import DataTable from 'datatables.net-dt'
import jQuery from "jquery";
import 'datatables.net-autofill-dt';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-keytable-dt';
import 'datatables.net-select-dt';

interface ProductImage {
  idProducto?: number;
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

interface Produc {
  idProducto?: number;
  idConfirmacionT?: boolean;
  nombreP?: string;
  descripcionP?: string;
  precio?: string;
  ingredienteselect?: string;
  nombreCategoria?: string;
  nombreTematica?: string;
  base64?: string;
}

interface Fotos {
  idProducto?: number,
  imagenPrincipalchar?: string
};

/*
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
deshabilitarSalida();*/


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
      id: Object as any,
      produc: [] as Produc[]


    }
  },
  methods: {
    handlerchange(e: any) {
      const { name, value } = e.target;
      this.valores = ({ ...this.valores, [name]: value });

    },
    updateProducto(id: any, idConfirmacionT: any) {
      if (idConfirmacionT == null)
        idConfirmacionT = true;
      this.$router.push({ name: 'ProductoCrudActualizar', params: { id: id, trueorfalse: idConfirmacionT } })

      alert(id);
    },
    borrarProductos(idproducto: any) {
      //var nombreid = (document.getElementById('idProducto') as HTMLInputElement).value;
      const id = parseInt(idproducto);
      const url = `api/Imagenes/delete/${id}`;
      oCall.cenisFetch('DELETE', url, "", "")
        .then(async (response) => {
          console.log("EXUTI¡");
          if (response.status == 200) {
            const url = `api/Producto/delete/${id}`;
            oCall.cenisFetch('Delete', url, "", "")
              .then(async (response) => {
                //console.log("Exito");
                location.assign(window.location.href);

              })
          }
        });
      alert("joasdasd");
      // Código para borrar el producto
    },
    dtatable() {

      let ta = document.getElementById("miTabla") as HTMLElement;
      let table = new DataTable(ta, {
        searching: true,
        paging: true,
        pageLength: 3,
        ordering: true,
        order: [[3, 'desc'], [0, 'asc']]
      });



    },

    async crearCategoria() {
      oCall.cenisFetch('GET', 'api/Producto/get', "", "")
        .then(async (response) => {
          //console.log(response.Data.$values);
          this.produc = await response.Data.$values;

          return Promise.resolve();

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

  async mounted() {
    await this.crearCategoria();
    setTimeout(this.dtatable, 500);

  },

  render() {
    return (
      <>
        <body>

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


                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <button onClick={this.dtatable} class="btn btn-cruds" id="whatsapp-button">tabla</button>

              <br />
              <br />
              <center>
                <div class="col-11">
                  <div class="table-responsive">
                    <table id="miTabla" class="table table-bordered" data-order='[[ 1, "asc" ]]' data-page-length='3'>
                      <thead>
                        <tr>
                          <th scope="col">Producto</th>
                          <th scope="col">Descripcion</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Ingredientes</th>
                          <th scope="col">Categoria</th>
                          <th scope="col">Tematica</th>
                          <th scope="col">Imagen</th>
                          <th scope="col">Acciones</th>

                        </tr>
                      </thead>
                      <tbody>
                        {this.produc.map((item) => {
                          return (
                            <tr>
                              <th scope="row">{item.nombreP}</th>
                              <td>{item.descripcionP}</td>
                              <td>{item.precio}</td>
                              <td>{item.ingredienteselect}</td>
                              <td>{item.nombreCategoria}</td>
                              <td>{item.nombreTematica}</td>
                              <td><img src={item.base64} height="50" class="rounded-circle mt-n3" alt="N/A" /></td>
                              <td>
                                <div class="row">

                                  <button onClick={() => { this.updateProducto(item.idProducto, item.idConfirmacionT) }} class="btn btn-cruds" id="whatsapp-button">Actualizar</button>
                                  <button onClick={() => { this.borrarProductos(item.idProducto) }} class="btn btn-cruds" id="whatsapp-button">Borrar</button>

                                  <button onClick={() => {
                                    const id = item.idProducto; alert(id)
                                    this.$router.push({ name: 'detalleproducto', params: { id: id } })

                                  }} class="btn btn-cruds" id="whatsapp-button">Detalles</button>

                                </div>

                              </td>
                            </tr>
                          )
                        })}
                      </tbody>

                    </table>


                  </div>

                </div>
              </center>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

            </div>
          </div>

        </body>
      </>
    )
  }
})

export default ProductosList