import { Call } from "../../helpers/calls/Call";

import { defineComponent } from "vue";
import { swalAlert } from "@/components/alerts";

import router from "@/router";
interface producto {


}


let oCall = new Call();


const Navbar = defineComponent({
    data() {
        return {
            token: ""
        }
    },
    methods: {
        cerrarsesion() {
            localStorage.removeItem("token");
            this.$router.push("/login")
            swalAlert("Exito", "Sesión cerrada exitosamente")

        },

        crearProducto() {
            oCall.cenisFetch('POST', 'api/Producto/create', "", { "idProducto": null })
                .then((response) => {
                    console.log(response)
                    if (response.status === 201) {
                        this.$router.push({ name: 'ProductoCrud', params: { id: response.Data, trueorfalse: "false" } })
                    }
                    else {
                        console.log("Error")

                    }
                })
                .catch((error) => {
                    console.error('Ha ocurrido un error al crear una nueva categoría:', error);
                });
        }
    },

    watch: {
        "$route"() {
            const tokenJSON = localStorage.getItem('token');
            if (tokenJSON) {
                try {
                    this.token = (tokenJSON);
                } catch (error) {
                    console.error('Error al analizar el token JSON: ', error);
                }
            }
            else {
                this.token = "";
            }


        },
    },
    mounted() {
        oCall.cenisFetch('GET', 'api/Producto/veriicarProductos', "", "")
            .then((response) => { })
    },
    render() {
        return (
            <>

                &nbsp;
                <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div class="container px-4">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                                class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Inicio</a>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/Catalogo" class="nav-link">Catálogo</router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/Contacto" class="nav-link">Contacto</router-link>
                                </li>

                                {this.token !== "" ?
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Administrador</a>
                                        <ul class="dropdown-menu">

                                            <li><button class="dropdown-item" onClick={ () => this.crearProducto()}>Crear Producto</button></li>
                                            <li><router-link class="dropdown-item" to="/CrearCategoria">Crear Categoria</router-link></li>
                                            <li><router-link class="dropdown-item" to="/CrearTematica">Crear Temática</router-link></li>

                                            <li><hr class="dropdown-divider" /></li>
                                            <li><router-link class="dropdown-item" to="/Tematicas">Temáticas</router-link></li>
                                            <li><router-link class="dropdown-item" to="/ConsultarProducto">Productos</router-link></li>
                                            <li><router-link class="dropdown-item" to="/VistaDeProductos_Tabla">Tabla de Productos</router-link ></li>

                                            <li><hr class="dropdown-divider" /></li>
                                            <li><button class="dropdown-item" onClick={this.cerrarsesion}>Cerrar sesión</button></li>

                                        </ul>
                                    </li>
                                    :
                                    <li class="nav-item">
                                        <router-link to="/Login" class="nav-link">Iniciar sesión</router-link>
                                    </li>
                                }

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )

    }
})

export default Navbar
