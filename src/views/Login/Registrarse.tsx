import { defineComponent } from "vue";
import { Call } from "../../../helpers/calls/Call"
import * as yup from 'yup'
import { swalAlert } from "@/components/alerts";


interface Resgistrar {
    nombre?: string,
    correo?: string,
    contraseña?: string,
}
interface FormErrors {
    [key: string]: string;
}
let oCall = new Call()
const registrarse = defineComponent({
    data() {
        return {
            valores: {} as Resgistrar,
            registrar: Object as Resgistrar,
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
                    nombre: yup.string()
                        .required('El nombre es requerido.'),
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

        async Registrarse(e: any) {
            e.preventDefault();
            let esvalido = await this.SchemaValidation()
            if (esvalido == 0) {
                return
            }


            oCall.cenisFetch('POST', 'api/Usuario/create', "", this.valores)
                .then((Response) => {
                    console.log(Response)
                    if (Response.status === 201) {

                        console.log(Response),
                            console.log("Se ha creado un nuevo usuario", Response)
                        console.log(Response)
                        this.$router.push("Login")
                        swalAlert("Exito", "Registro completado exitosamente")

                    }
                    else {
                        swalAlert("Error", "Hubo un problema, intentelo de nuevo")
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
                    <div class="container-fluid h-custom backgroundLogin" data-aos="fade" data-aos-duration="2000" data-aos-delay="300">
                        <div>
                            <h4 class="display-4">Registro de cuenta</h4>
                            <di class="d-flex justify-content-center">
                                <hr class="solid" />
                            </di>
                            <h4>No comparta su cuenta de acceso y mantenga su contraseña única y segura</h4>
                            &nbsp;
                        </div>
                        &nbsp;
                        <div class="row d-flex justify-content-center align-items-center h-100" data-aos="fade" data-aos-duration="2000" data-aos-delay="800">
                            <div class="col-md-9 col-lg-6 col-xl-5">
                                <img src="src/assets/Deleite_logo.jpg" class="img-fluid" />
                            </div>

                            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1" >
                                <form >

                                    <h2 class="display-6 tituloLogin" style="color: #724a3a">REGISTRO</h2>
                                    <br></br>

                                    <div class="form-outline mb-3">
                                        <input id="form3Example1"
                                            placeholder="Nombre" name="nombre" onChange={(e) => this.handlerChange(e)} value={this.registrar.nombre} class={`form-control ${this.errors['nombre'] ? "is-invalid" : ""}`} />
                                        <div class="invalid-feedback">
                                            {this.errors['nombre']}
                                        </div>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="form3Example2"
                                            placeholder="Correo" name="correo" onChange={(e) => this.handlerChange(e)} value={this.registrar.correo} class={`form-control ${this.errors['correo'] ? "is-invalid" : ""}`} aria-label="Correo" />
                                        <div class="invalid-feedback">
                                            {this.errors['correo']}
                                        </div>
                                    </div>

                                    <div class="form-outline mb-3">
                                        <input type="password" id="form3Example3"
                                            placeholder="Contraseña" name="contraseña" onChange={(e) => this.handlerChange(e)} value={this.registrar.contraseña} class={`form-control ${this.errors['contraseña'] ? "is-invalid" : ""}`} />
                                        <div class="invalid-feedback">
                                            {this.errors['contraseña']}
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        ¿Ya tienes una cuenta?
                                        <a href="/Login" class="text-body">Inicia sesión</a>
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

