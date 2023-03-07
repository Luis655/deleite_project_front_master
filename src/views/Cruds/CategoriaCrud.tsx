import { Call } from "../../../helpers/calls/Call"
import { defineComponent } from "vue";
interface Categoria {

  idCategoria?: number,
  nombre?: string,
  imagenPrincipalchar?: string,
}
let oCall = new Call();
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
      console.log(base64);
    };
  });
}
const CategoriaCrud = defineComponent({
  data() {
    return {
      valores: Object as Categoria,
      categoria: Object as Categoria,
      accion: Object as any,
      id: Object as any
    }
  },

  methods: {
    handlerchange(e: any) {
      const { name, value } = e.target;
      this.valores = ({ ...this.valores, [name]: value })

    },
    async crearCategoria() {
      var imagenElement = document.getElementById('imagen') as HTMLInputElement;
      var imagen = await readFileAsBase64(imagenElement.files?.[0]);
      const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
      this.valores.nombre = nombre;
      this.valores.imagenPrincipalchar = imagen;

      if (this.accion === "editar") {
        oCall.cenisFetch('POST', `api/Categoria/create`, "", this.valores)
          .then((response) => {
            console.log(response) 
          })

          .catch((error) => {
            console.error('Ha ocurrido un error al crear una nueva categoría:', error);
          });
      }
      else {


        oCall.cenisFetch('POST', 'api/Categoria/create', "", this.valores)
          .then((response) => {
            console.log(response)
            if (response.status === 201) {
              console.log('Se ha creado una nueva categoría:', response.Data);
              console.log(response)
              this.$router.push("/catalogo")
              //alert(",jbakdakd")

            }
            else {
              console.log(response)

            }

          })

          .catch((error) => {
            console.error('Ha ocurrido un error al crear una nueva categoría:', error);
          });
      }

    },

    firtRefresh() {
      this.accion = this.$route.query.accion || "";
      this.id = this.$route.query.id;

      if (this.accion === "editar") {
        oCall.cenisFetch('GET', `api/Categoria/${this.id}`, "", '')
          .then((response) => {
            console.log(response)
            if (response.status === 200) {
              this.categoria = response.Data
              this.valores = response.Data
            }
            else {

            }

          })

          .catch((error) => {
            console.error('Ha ocurrido un error al crear una nueva categoría:', error);
          });
      }
    }

  },

  mounted() {
    this.firtRefresh()
  },
  render() {
    return (

      <>
        <div class="Container_Create">
          <div>

            <h2>CATEGORIAS</h2>
            <h6 style="width:600px">Las categorias te permiten administrar y controlar la vista de los productos que ofreces y tienes
              disponibles en la sección del "Catálogo"</h6>

          </div>
          &nbsp;
          <div class="Create_Form">

            <form method="POST" id="Formproduct" name="Formproduct">

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label LabelsForms">Nombre de la Categoria</label>
                <input type="text" class="form-control" autocomplete="off" id="nombre" name="nombre" value={this.categoria.nombre} onChange={(e) => this.handlerchange(e)} aria-describedby="emailHelp" />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label LabelsForms">Imagen</label>
                <input type="file" class="form-control" id="imagen" name="imagen" required/>
              </div>



              <div class="mb-3">
                <button onClick={this.crearCategoria} type="button" class="btn btn-cruds">Enviar</button>
              </div>

            </form>
          </div>
        </div>

      </>
    );
  }
})

export default CategoriaCrud