import { defineComponent } from "vue";
import { Call } from "../../../helpers/calls/Call"


interface Resgistrar {
    nombre?: string,
    correo?: string,
    contraseña?: string,
}
let oCall = new Call()
const registrarse = defineComponent({
    data() {
        return {
            valores: Object as Resgistrar,
            registrar: Object as Resgistrar
        }
    },
    methods: {
        handlerchange(e: any) {
            const { name, value } = e.target;
            this.valores = ({ ...this.valores, [name]: value })
        },

        Registrarse(e: any) {
            e.preventDefault(),
                oCall.cenisFetch('POST', 'api/Usuario/create', "", this.valores)
                    .then((Response) => {
                        console.log(Response)
                        if (Response.status === 201) {

                            console.log(Response),
                                console.log("Se ha creado un nuevo usuario", Response)
                            console.log(Response)
                            this.$router.push("/inicio")

                        }
                        else {
                            console.log("Error")
                        }

                    })
                    .catch((error) => {
                        console.error("Error al crear usuario", error)
                    })
        }
    },
    render() {
        return (
            <>
                <section class="LoginCentrado">
                    <div class="container-fluid h-custom backgroundLogin">
                        <div>
                            <h1>Registro de cuenta</h1>
                            <h6>No comparta su cuenta de acceso y mantenga su contraseña única y segura</h6>
                            &nbsp;
                        </div>
                        &nbsp;
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-md-9 col-lg-6 col-xl-5">
                                <img src="src/assets/Deleite_logo.jpg" class="img-fluid" />
                            </div>

                            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>

                                    <h2 class="display-6 tituloLogin" style="color: #724a3a">REGISTRO</h2>
                                    <br></br>

                                    <div class="form-outline mb-3">
                                        <input id="form3Example1" class="form-control form-control-lg"
                                            placeholder="Nombre" name="nombre" onChange={(e) => this.handlerchange(e)} value={this.registrar.nombre} />
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="form3Example2" class="form-control form-control-lg"
                                            placeholder="Correo" name="correo" onChange={(e) => this.handlerchange(e)} value={this.registrar.correo} aria-label="Correo" />
                                    </div>

                                    <div class="form-outline mb-3">
                                        <input type="password" id="form3Example3" class="form-control form-control-lg"
                                            placeholder="Contraseña" name="contraseña" onChange={(e) => this.handlerchange(e)} value={this.registrar.contraseña} />
                                    </div>

                                    <div class="text-center text-lg-start mt-4 pt-2">
                                        <div class="text-center">
                                            <button onClick={(e) => this.Registrarse(e)} href="#" class="btn btn-login btn-login2">Registrarse</button>
                                        </div>
                                    </div>

                                </form>
                                &nbsp;
                            </div>
                            &nbsp;
                        </div>
                        &nbsp;
                    </div>
                    &nbsp;
                </section>
            </>
        )
    }
})

export default registrarse

