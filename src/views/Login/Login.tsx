import { Call } from "../../../helpers/calls/Call"
import { defineComponent } from "vue";

interface Login {
    nombre?: string,
    contraseña?: string
}



let oCall = new Call()
const login = defineComponent({
    data() {
        return {
            valores: Object as Login,
            login: Object as Login
        }
    },

    methods: {
        handlerchange(e: any) {
            const { name, value } = e.target;
            this.valores = ({ ...this.valores, [name]: value })
        },
        iniciarSesion(e: any) {
            e.preventDefault();

            if (!this.valores.nombre) {
                alert('El Nombre de usuario/Correo es requerido');
                return;
            }

            if (!this.valores.contraseña) {
                alert('La contraseña es requerida');
                return;
            }

            oCall.cenisFetch('POST', 'api/Usuario/login', "", this.valores)
                .then((response) => {
                    console.log(response)
                    if (response.Data.success) {
                        const token = response.Data.result; // suponiendo que la respuesta del servidor tiene una propiedad "token" que contiene el token
                        console.log(token);
                        // Almacena el token en el local storage
                        localStorage.setItem("token", token);
                        console.log(response.Data)
                        this.$router.push("/inicio")
                    }

                    else {
                        console.log("Error")
                    }

                })
                .catch((error) => {
                    console.error('Ha ocurrido un error al momento de iniciar ssesion', error)
                });
        }
    },
    render() {
        return (
            <>
                <section class="LoginCentrado">
                    <div class="container-fluid h-custom backgroundLogin">
                        <div>
                            <h1>¡Bienvenido!</h1>
                            <h4>Acceso restringido y único para Administradores del sitio</h4>
                            &nbsp;
                        </div>
                        &nbsp;
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            &nbsp;
                            <div class="col-md-9 col-lg-6 col-xl-5">
                                <img src="src/assets/Deleite_logo.jpg" class="img-fluid" />
                            </div>

                            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                                <form>

                                    <h2 class="display-6 tituloLogin" style="color: #724a3a">INICIAR SESIÓN</h2>
                                    <br></br>
                                    <div class="form-outline mb-4">
                                        <input for="validationCustom01" type="email" id="form3Example3" value={this.login.nombre} name="nombre" onChange={(e) => this.handlerchange(e)} class="form-control form-control-lg"
                                            placeholder="Correo" aria-label="Correo" required />
                                    </div>

                                    <div class="form-outline mb-3">
                                        <input type="password" id="form3Example4" value={this.login.contraseña} name="contraseña" onChange={(e) => this.handlerchange(e)} class="form-control form-control-lg"
                                            placeholder="Contraseña" required />
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">

                                        <div class="form-check mb-0">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />

                                            <label class="form-check-label" for="form2Example3">Recuerdame</label>
                                        </div>
                                        <a href="#!" class="text-body">Olvidaste tu contraseña?</a>
                                    </div>

                                    <div class="text-center text-lg-start mt-4 pt-2">
                                        <div class="text-center">
                                            <button type="button" onClick={(e) => this.iniciarSesion(e)} class="btn btn-login btn-login2">Iniciar sesión</button>
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

export default login

