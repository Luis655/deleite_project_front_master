import { defineComponent, readonly } from "vue";
import { Call } from "../../../../helpers/calls/Call"
import { validaciones } from "../../../../helpers/calls/Validaciones"
import { swalAlert } from "@/components/alerts";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


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


window.localStorage.removeItem



// Para habilitar la salida, llama a la función habilitarSalida()
// Para deshabilitar la salida, llama a la función deshabilitarSalida()


let oCall = new Call();
let validate = new validaciones();
let inputCount = 0;
let countimages = 0;
let numImagenes = 0;

const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
  $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");



function readFileAsBase64(file?: File): Promise<string | undefined> {
  return new Promise((resolve) => {
    if (!file) {
      resolve(undefined);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64Image = reader.result as string;
      const base64 = base64Image.split(",")[1];
      resolve(base64);
    };
  });
}
//const Producto = defineComponent({
const ProductoCrud = defineComponent({


  data() {
    return {
      valores: {} as ProductImage,
      categoria: Object as ProductImage,
      accion: Object as any,
      id: Object as any,
      trueorfalse: Object as any,
      countimagesArray: [] as []

    }
  },
  methods: {
    handlerchange(e: any) {
      //const { name, value } = e.target;
      //this.valores = ({ ...this.valores, [name]: value })

    },

    async llenarimagenes() {
      oCall.cenisFetch('GET', `api/Producto/getimages/${this.id}/${this.trueorfalse}`, "", "")
        .then((response) => {
          const datos: [] = response.Data.$values;
          this.countimagesArray = [];
          this.countimagesArray = response.Data.$values;

        })
    },

    async AgregarFotos(imagen: any, idimagen: any) {
      const container = document.getElementById('contenedor-inputs');
      const addInputBtn = document.getElementById('crear-input');
      const mensageimagen = document.getElementById('mensajeimagenes');
      if (imagen) {
        mensageimagen?.remove();
        if (container) {
          if (numImagenes >= 3) {
            const imagenButtonAdd = document.getElementById('crear-input') as HTMLInputElement;
            imagenButtonAdd.disabled = true;
            imagenButtonAdd.innerText = 'solo puedes tener 3 imagenes por productos'
          }
          const img = document.createElement('img');
          img.src = imagen;

          img.alt = 'selecciona una imagen';
          img.width = 100;
          img.id = `img-${++inputCount}`;

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Eliminar';
          deleteBtn.className = 'btn btn-cruds';
          deleteBtn.style.margin = '4px';
          deleteBtn.addEventListener('click', () => {
            deleteInputImagen(idimagen, deleteBtn);
          });

          const wrapper = document.createElement('div');
          wrapper.id = `div-${idimagen}`;
          wrapper.className = 'col-4'
          wrapper.appendChild(deleteBtn);
          wrapper.appendChild(img);


          container.appendChild(wrapper);
        } else {
          swalAlert("Error", "Hubo un error al cargar sus imagenes");
        }
      } else {
        countimages++;
        numImagenes = this.countimagesArray.length + countimages;
        if (numImagenes >= 3) {
          const imagenButtonAdd = document.getElementById('crear-input') as HTMLInputElement;
          imagenButtonAdd.disabled = true;
          imagenButtonAdd.innerText = 'Max.'
        }
        mensageimagen?.remove();
        if (addInputBtn && container) {
          const input = document.createElement('input');
          const img = document.createElement('img');
          input.innerText = '...'
          img.src = imagen;

          img.width = 100;
          img.id = `img-${++inputCount}`;


          input.type = 'file';
          input.id = `input-${inputCount}`;
          input.name = `input-${inputCount}`;
          input.className = 'form-control';
          const cont = inputCount;
          input.addEventListener('change', () => {
            mostrarImagen(`input-${cont}`, `img-${cont}`)

          });


          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Eliminar';
          deleteBtn.addEventListener('click', () => {
            deleteInput(input, deleteBtn);
          });

          const wrapper = document.createElement('div');
          wrapper.appendChild(input);
          wrapper.appendChild(deleteBtn);
          wrapper.appendChild(img);


          container.appendChild(wrapper);
        } else {
          swalAlert("Error", "Hubo un error al cargar sus imagenes");
        }


      }
      const deleteInputImagen = (id: any, button: HTMLButtonElement) => {
        const wrapper = button.parentElement;
        if (wrapper) {
          numImagenes--;
          if (numImagenes <= 2) {
            const imagenButtonAdd = document.getElementById('crear-input') as HTMLInputElement;
            imagenButtonAdd.disabled = false;
            imagenButtonAdd.innerText = 'Añadir +';
          }
          wrapper.remove();
          oCall.cenisFetch('DELETE', `api/Imagenes/borrarimagen/${id}`, "", "")
            .then(async (response) => {
              this.llenarimagenes();
            }).catch((error) => {
              swalAlert("Error", "Error al borrar las imagenes");
            });
        } else {
          swalAlert("Error", "Ha ocurrido un herror con el servidor");
        }
      }


      const deleteInput = (input: HTMLInputElement, button: HTMLButtonElement) => {
        const wrapper = button.parentElement;
        if (wrapper) {
          countimages--;
          numImagenes--;
          if (numImagenes <= 2) {
            const imagenButtonAdd = document.getElementById('crear-input') as HTMLInputElement;
            imagenButtonAdd.disabled = false;
            imagenButtonAdd.innerText = 'Añadir +';
          }
          this.llenarimagenes();
          wrapper.remove();
        } else {
          swalAlert("Error", "Error al eliminar el elemento");
        }
      }
      function mostrarImagen(inputid: any, imagenid: any) {
        const $seleccionArchivos = document.querySelector(`#${inputid}`) as HTMLInputElement,
          $imagenPrevisualizacion = document.querySelector(`#${imagenid}`) as HTMLImageElement;
        if ($seleccionArchivos != null) {
          const archivos = $seleccionArchivos.files;
          if (!archivos || !archivos.length) {
            $imagenPrevisualizacion.src = "";
            return;
          }
          const firstImage = archivos[0];
          const objectUrl = URL.createObjectURL(firstImage);
          $imagenPrevisualizacion.src = objectUrl;

        }

      }

    },
    llenarCategorias() {
      const select = document.getElementById("idcategoria") as HTMLSelectElement;
      oCall.cenisFetch('GET', "api/Categoria/getall", "", "")
        .then((response) => {
          select.innerHTML = "";
          if (response.Data instanceof Array) {
            response.Data.forEach((item: any) => {
              const option = document.createElement("option");
              option.value = item.idCategoria;
              option.text = item.nombre;

              select.appendChild(option);
            });
          }
        })
      // Código para borrar el producto
    },
    llenarTematica() {
      const select = document.getElementById("idtematica") as HTMLSelectElement;
      oCall.cenisFetch('GET', "api/Tematica/getall", "", "")
        .then((response) => {
          select.innerHTML = "";
          if (response.Data instanceof Array) {
            response.Data.forEach((item: any) => {
              const option = document.createElement("option");
              option.value = item.idTematica;
              option.text = item.nombreT;
              select.appendChild(option);
            });
          }
        })
    },
    borrarProducto() {
      var nombreid = (document.getElementById('idProducto') as HTMLInputElement).value;
      const id = parseInt(nombreid)
      const url = `api/Imagenes/delete/${id}`;
      oCall.cenisFetch('DELETE', url, "", "")
        .then(async (response) => {
          const url = `api/Producto/delete/${id}`;
          oCall.cenisFetch('Delete', url, "", "")
            .then(async (response) => {
              this.$router.push({ name: 'productsview' })
            })
        })
      // Código para borrar el producto
    },
    async crearCategoria() {
      this.handlerchange;
      var imagenElement = document.getElementById('file-5') as HTMLInputElement;
      var imagen = await readFileAsBase64(imagenElement.files?.[0]);
      var nombreid = (document.getElementById('idProducto') as HTMLInputElement).value;

      const nombreP = (document.getElementById('nombreP') as HTMLInputElement).value;
      const precio = (document.getElementById('precio') as HTMLInputElement).value;
      const descripcionP = (document.getElementById('descripcionP') as HTMLInputElement).value;

      const idcategoria = (document.getElementById('idcategoria') as HTMLSelectElement).value;
      const idtematica = (document.getElementById('idtematica') as HTMLSelectElement).value;
      const popular = (document.getElementById('popular') as HTMLSelectElement).value;
      const ingredienteselect = (document.getElementById('ingredienteselect') as HTMLInputElement).value;
      const saludable = (document.getElementById('saludable') as HTMLSelectElement).value;
      let ArrayValidate = []
      //ArrayValidate.push(validate.FormValidate('input', 'idProducto', 'idProductovalicacion'))
      ArrayValidate.push(validate.FormValidate('input', 'nombreP', 'nombrePvalidacion'))
      ArrayValidate.push(validate.FormValidate('input', 'ingredienteselect', 'ingredienteselectvalidacion'))
      ArrayValidate.push(validate.FormValidate('inputNumber', 'precio', 'preciovalidacion'))
      ArrayValidate.push(validate.FormValidate('input', 'descripcionP', 'descripcionPvalidacion'))
      //validate.FormValidate('input', 'imagenElement', 'imagenPrevisualizacionvalidacion');
      ArrayValidate.push(validate.FormValidate('select', 'idtematica', 'idtematicavalidacion'))
      ArrayValidate.push(validate.FormValidate('select', 'idcategoria', 'idcategoriavalidacion'))
      ArrayValidate.push(validate.FormValidate('select', 'popular', 'popularvalidacion'))
      ArrayValidate.push(validate.FormValidate('select', 'saludable', 'saludablevalidacion'))
      let validacion;
      ArrayValidate.map((valido) => {
        if (!valido) {
          validacion = false;
        }
      })

      this.valores.nombreP = nombreP;
      this.valores.precio = precio;
      this.valores.descripcionP = descripcionP;
      this.valores.IdProducto = parseInt(nombreid);
      this.valores.idCategoria = parseInt(idcategoria);
      this.valores.idTematica = parseInt(idtematica);
      this.valores.popular = popular === "1" ? Boolean(popular) : Boolean("");
      this.valores.ingredienteselect = ingredienteselect;
      this.valores.saludable = saludable == "1" ? Boolean(saludable) : Boolean("");
      this.valores.ImagenPrincipalchar = imagen;



      if (this.valores.ImagenPrincipalchar !== null && validacion !== false) {
        oCall.cenisFetch('POST', 'api/Producto/create', "", this.valores)
          .then(async (response) => {
            try {
              if (response.status == 201) {
                /**
                 * insertar las imagenes relacionadas al producto
                 */
                for (let index = 0; index <= inputCount; index++) {
                  const idimagen = `input-${index}`;
                  var imagenes = document.getElementById(idimagen) as HTMLInputElement;
                  if (imagenes != null) {
                    var imagens = await readFileAsBase64(imagenes.files?.[0]);
                    if (imagenes !== undefined) {
                      const fotos: Fotos = {
                        idProducto: parseInt(nombreid),
                        imagenPrincipalchar: imagens
                      }
                      oCall.cenisFetch('POST', 'api/Producto/addImage', "", fotos)
                        .then((response) => {
                          try {
                            if (response.status == 200) {

                            }
                            else {
                              swalAlert("Error", "Ha ocurrido un Error al hacer el registro1");
                            }
                          } catch (error) {
                            swalAlert("Error", "Ha ocurrido un Error al hacer el registro2");
                          }
                        })
                    }
                  }
                }
                swalAlert("Exito", "se ha agregado correctamente el registro");

                this.$router.push({ name: 'Productos_tabla' })
              }
              else {
                swalAlert("Error", "Ha ocurrido un Error al hacer el registro3");
              }
            } catch (error) {
              console.log(error);

              swalAlert("Error", "Ha ocurrido un Error al hacer el registro4");
            }
          })
          .catch((error) => {
            swalAlert("Error", "Ha ocurrido un Error al hacer el registro5");
          });
      } else {
        swalAlert("Error", "Ha ocurrido un Error al hacer el registro6");
      }
    },

    updateProductos() {
      const nombreid = (document.getElementById('idProducto') as HTMLInputElement).value;
      var id = parseInt(nombreid);
      const url = `api/Producto/get/${id}`;
      const nombreP = document.getElementById('nombreP') as HTMLInputElement;
      const ingredienteselect = document.getElementById('ingredienteselect') as HTMLInputElement;
      const precio = document.getElementById('precio') as HTMLInputElement;
      const descripcionP = document.getElementById('descripcionP') as HTMLInputElement;
      const imagen = document.getElementById('imagenPrevisualizacion') as HTMLImageElement;

      const select = document.getElementById("idtematica") as HTMLSelectElement;
      const select2 = document.getElementById("idcategoria") as HTMLSelectElement;
      const popular = document.getElementById("popular") as HTMLSelectElement;
      const saludable = document.getElementById("saludable") as HTMLSelectElement;



      oCall.cenisFetch("GET", url, "", "")
        .then(async (response) => {
          console.log(response.status);

          if (response.status == 200) {

            nombreP.value = response.Data["nombreP"];
            ingredienteselect.value = response.Data["ingredienteselect"];
            precio.value = response.Data["precio"];
            descripcionP.value = response.Data["descripcionP"];
            select.value = response.Data["idTematica"];
            select2.value = response.Data["idCategoria"];
            popular.value = response.Data["popular"] == "1" ? "1" : "0";
            saludable.value = response.Data["saludable"] == "1" ? "1" : "0";
            imagen.src = response.Data["imagenPrincipal"];

            oCall.cenisFetch('GET', `api/Producto/getimages/${this.id}/${this.trueorfalse}`, "", "")
              .then((response) => {
                console.log("kjhjvhhgvjhghjkjh " + response);

                this.countimagesArray = response.Data.$values;
                if (response.Data.$values.length >= 3) {
                  const imagenButtonAdd = document.getElementById('crear-input') as HTMLInputElement;
                  imagenButtonAdd.disabled = true;
                  imagenButtonAdd.innerText = 'solo puedes tener 3 imagenes por productos'
                }
                response.Data.$values.map((data: any) => {
                  this.AgregarFotos(data['base64'], data['idimgProducto']);
                })

              })
          } else {
            this.$router.push({ name: 'Error404' })
          }
        })
        .catch((error) => {

        })
    },
    mostrarImagen() {
      const $seleccionArchivos = document.querySelector("#file-5") as HTMLInputElement,
        $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion") as HTMLImageElement;
      if ($seleccionArchivos != null) {
        const archivos = $seleccionArchivos.files;
        if (!archivos || !archivos.length) {
          $imagenPrevisualizacion.src = "";
          return;
        }
        const firstImage = archivos[0];
        const objectUrl = URL.createObjectURL(firstImage);
        $imagenPrevisualizacion.src = objectUrl;
      }

    },

    imagensvg() { },

  },
  mounted() {
    window.localStorage.removeItem,
      this.llenarCategorias(),
      this.llenarTematica()
    this.id = this.$route.params.id;
    this.trueorfalse = this.$route.params.trueorfalse;


    if (this.$route.params.id !== null && this.$route.params.trueorfalse == "true") {
      this.updateProductos()
    }
  },

  render() {
    return (
      <>
        <body>
          <div class="TituloProductos" data-aos="fade" data-aos-duration="2000" data-aos-delay="300">

            <h4 class="display-4">PRODUCTOS</h4>

            <di class="d-flex justify-content-center">
              <hr class="solid" />
            </di>
            &nbsp;
            <input id="nombreid" name="nombreid" type="number" value={this.$route.params.id} disabled style="display:none" />

            <h5>
              Los productos que registres se categorizarán automáticamente según las preferencias y datos que registres
            </h5>

          </div>


          <div class="Productos_Create" data-aos="fade" data-aos-duration="2000" data-aos-delay="800">
            <div class="FormularioProductos row">


              <div class="col">
                <form id="Formproduct" name="Formproduct">

                  <input id="idProducto" name="idProducto" type="number" value={this.$route.params.id} style="display:none" />
                  <div id="idProductovalicacion"></div>

                  <div class="mb-3">
                    <label class="LabelsForms" for="idcategoria">Categoria</label>
                    <select class="form-select form-control" id="idcategoria" onChange={(e) => this.handlerchange(e)} aria-label="Default select example">
                    </select>
                    <div id="idcategoriavalidacion"></div>
                  </div>

                  <div class="mb-3">
                    <label class="LabelsForms" for="idtematica">Tematica</label>
                    <select class="form-select" id="idtematica" onChange={(e) => this.handlerchange(e)} aria-label="Default select example">
                    </select>
                    <div id="idtematicavalidacion"></div>
                  </div>


                  <div class="mb-3">
                    <label class="LabelsForms" for="popular">Popular</label>
                    <select class="form-select" id="popular" onChange={(e) => this.handlerchange(e)} aria-label="Default select example">
                      <option selected value="N/A">¿Es popular?</option>
                      <option value="1">SI</option>
                      <option value="0">NO</option>
                    </select>
                    <div id="popularvalidacion"></div>
                  </div>


                  <div class="mb-3">
                    <label class="LabelsForms" for="saludable">Saludable</label>
                    <select class="form-select" id="saludable" onChange={(e) => this.handlerchange(e)} aria-label="Default select example">
                      <option selected value="N/A">¿Es saludable?</option>
                      <option value="1">SI</option>
                      <option value="0">NO</option>
                    </select>
                    <div id="saludablevalidacion"></div>
                  </div>


                  <div class="mb-3">
                    <label class="LabelsForms" for="nombreP">Nombre</label>
                    <input type="text" class="form-control" name="nombreP" id="nombreP" onChange={(e) => this.handlerchange(e)} required />
                    <div id="nombrePvalidacion"></div>
                  </div>
                  
                  <div class="mb-3">
                    <div class="row" id="contenedor-inputs">
                      <div id="mensajeimagenes" class="col">
                        Solo se puede agregar un máximo de 3 imágenes
                      </div>
                      
                    </div>
                    <img id="imagenPrevisualizacion" src="" height="100" width="100" alt="sin imagenes" />
                  </div>

                </form>
              </div>

              <div class="col">
                <form id="Formproduct" name="Formproduct">
                  <div class="mb-3">
                    <label class="LabelsForms">Ingredientes</label>
                    <input type="text" class="form-control" name="ingredienteselect" id="ingredienteselect" onChange={(e) => this.handlerchange(e)} required />
                    <div id="ingredienteselectvalidacion">

                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="LabelsForms">Precio</label>
                    <input type="number" class="form-control" name="precio" id="precio" onChange={(e) => this.handlerchange(e)} required />
                    <div id="preciovalidacion"></div>
                  </div>

                  <div class="mb-3">
                    <label class="LabelsForms">Descripción</label>
                    <textarea rows="3" class="form-control" type="text" id="descripcionP" name="descripcionP" onChange={(e) => this.handlerchange(e)} required />
                    <div id="descripcionPvalidacion"></div>
                  </div>

                  <div class="row display-flex align-items-end g-2">

                    <div class="col-10">
                      <label id="label5" class="form-label" for="file-5"></label>
                      <input type="file" name="file-5" id="file-5" class="form-control" onChange={() => this.mostrarImagen()} />

                    </div>

                    <div class="col-2">
                      <input type="text" value={this.$route.params.id} class="form-control" style="display:none" />
                      <button onClick={() => this.AgregarFotos(null, null)} id="crear-input" type="button" onChange={(e) => this.handlerchange(e)} class="btn-inputProd btn-inputProd2">Añadir +</button>
                    </div>

                    <div class="mb-3">
                      <button onClick={this.crearCategoria} type="button" class="btn btn-cruds btn-mediaProd" onChange={(e) => this.handlerchange(e)}>Enviar</button>
                    </div>

                  </div>

                  <div class="mb-3">
                    <input type="text" value={this.$route.params.id} class="form-control" style="display:none" />
                  </div>

                </form>
              </div>




            </div>
          </div>
        </body>
      </>

    )
  }
})

//export default Producto
export default ProductoCrud