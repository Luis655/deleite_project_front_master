import { Call } from "../../../helpers/calls/Call"
import { defineComponent } from "vue";
import * as yup from 'yup'

interface Login {
    correo?: string,
    contraseña?: string
}

interface FormErrors {
    [key: string]: string;
}

let oCall = new Call()
const login = defineComponent({
    data() {
        return {
            valores: {} as Login,
            login: Object as Login,
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
                    correo: yup.string()
                        .required('El correo es requerido.'),
                    contraseña: yup.string()
                        .required('La contraseña es requerida.'),

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
        async iniciarSesion(e: any) {
            e.preventDefault();

            let esvalido = await this.SchemaValidation()
            if (esvalido == 0) {
                return
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
                        this.$router.push("/")
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
                                        <input for="validationCustom01" type="email" id="form3Example3" name="correo" value={this.login.correo}  onChange={(e) => this.handlerChange(e)} class={`form-control ${this.errors['correo'] ? "is-invalid" : ""}`}
                                            placeholder="Correo" aria-label="correo" required />
                                        <div class="invalid-feedback">
                                            {this.errors['correo']}
                                        </div>
                                    </div>

                                    <div class="form-outline mb-3">
                                        <input type="password" id="form3Example4" value={this.login.contraseña} name="contraseña" onChange={(e) => this.handlerChange(e)} class={`form-control ${this.errors['contraseña'] ? "is-invalid" : ""}`}
                                            placeholder="Contraseña" required />
                                        <div class="invalid-feedback">
                                            {this.errors['contraseña']}
                                        </div>
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

