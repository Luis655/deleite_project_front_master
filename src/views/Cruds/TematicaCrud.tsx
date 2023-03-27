import { defineComponent } from "vue";
import { Call } from "../../../helpers/calls/Call"
import * as yup from 'yup'

interface Tematica {

    idTematica?: number,
    nombreT?: string,
}
interface FormErrors {
    [key: string]: string;
}
let oCall = new Call()
const tematicaCrud = defineComponent({
    data() {
        return {
            valores: {} as Tematica,
            tematica: Object as Tematica,
            accion: Object as any,
            id: Object as any,
            errors: {} as FormErrors
        }
    },
    methods: {
        async handlerChange(e: any) {
            const { name, value } = e.target;
            this.valores = ({ ...this.valores, [name]: value });
            if (value.length > 0) {
                delete this.errors[name];
            }
            else {
                await this.SchemaValidation();
            }
        },

        async SchemaValidation(): Promise<number> {
            let isValid = 1;
            try {
                const schema = yup.object().shape({
                    nombreT: yup.string()
                    .required('El nombre es requerido.'),
                });
                await schema.validate(this.valores, { abortEarly: false })
            } catch (err) {
                if (err instanceof yup.ValidationError) {
                    const errors: FormErrors = {};
                    err.inner.forEach((error) => {
                        const path = error.path?.toString();
                        if (path)
                            errors[path] = error.message;
                    });
                    this.errors = errors;
                    isValid = 0;
                }
            }
            return Promise.resolve(isValid);
        },

       async crearTematica(e: any) {
            let esvalido = await this.SchemaValidation()
            if(esvalido == 0){
                return
            }
            console.log('Guardado')
            return
            if (this.accion === 'editar') {
                e.preventDefault(),
                    oCall.cenisFetch("PUT", `api/Tematica/${this.id}`, "", this.valores)
                        .then((Response) => {
                            console.log("Mensaje DE Tematicas: " + Response)
                            if(Response.status === 200){
                                console.log(Response),
                                console.log("Se ha editado la tematica")
                                console.log(Response),
                                this.$router.push("/consultartematica")
                            }
                        })
                        .catch((error) => {
                            console.error('Ha ocurrido un error al crear una nueva categoria', error)
                        });


            }
            else {
                oCall.cenisFetch('POST', 'api/Tematica/create', '', this.valores)
                    .then((response) => {
                        console.log(response)
                        if (response.status === 201) {
                            console.log(response)
                            console.log("Se ha creado una nueva tematica")
                            console.log(response)
                            this.$router.push('/consultartematica')
                        }
                        else {
                            console.log("Error")
                        }
                    })
                    .catch((error) => {
                        console.error('Error al crear la tematica', error)
                    });
            }
        },

        firtRefresh() {
            this.accion = this.$route.query.accion || "";
            this.id = this.$route.query.id;

            if (this.accion === "editar") {
                oCall.cenisFetch('GET', `api/Tematica/${this.id}`, "", '')
                    .then((response) => {
                        console.log(response)
                        if (response.status === 200) {
                            this.tematica = response.Data
                            this.valores = response.Data
                        }
                        else {

                        }

                    })

                    .catch((error) => {
                        console.error('Ha ocurrido un error al crear una nueva tematica:', error);
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

                        <h2>TEMATICAS</h2>
                        <h6 style="width:600px">Las tematicas te permiten administrar y controlar la vista de los productos que ofreces y tienes
                            disponibles en la sección del "Catálogo"</h6>

                    </div>
                    &nbsp;
                    <div class="Create_Form">

                        <form>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label LabelsForms">Nombre de la Tematica</label>
                                <input type="text"  autocomplete="off" class={`form-control ${this.errors['nombreT'] ? "is-invalid" : ""}`} value={this.tematica.nombreT} name="nombreT" onChange={(e) => this.handlerChange(e)} aria-describedby="emailHelp" />
                                <div class="invalid-feedback">
                                    {this.errors['nombreT']}
                                </div>
                            </div>
                            <div class="mb-3">
                                <button onClick={(e) => this.crearTematica(e)} class="btn btn-cruds">Enviar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }

})
export default tematicaCrud
