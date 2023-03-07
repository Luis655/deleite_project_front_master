import { Call } from "../../helpers/calls/Call";

import { defineComponent } from "vue";

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

        },

        crearProducto() {
            oCall.cenisFetch('POST', 'api/Producto/create', "", { "idProducto": null })
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        console.log('Se ha creado una nueva categoría:', response.Data.idProducto);
                        console.log(response)
                        this.$router.push({ name: 'crearproducto', params: { id: response.Data.idProducto, trueorfalse: response.Data.idConfirmacionT } })
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

        },
    },
    render() {
        return (
            <>

                &nbsp;
                <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div class="container px-4">
                        <a href="/Inicio"><img src="src/assets/D_Deleite.svg" width="50" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                                class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/inicio">Inicio</a>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/catalogo" class="nav-link">catalogo</router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/contacto" class="nav-link">Contacto</router-link>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/testimonios" class="nav-link">Testimonios</router-link>
                                </li>

                                <li class="nav-item">

                                </li>
                                {this.token !== "" ?
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Administrador</a>
                                        <ul class="dropdown-menu">

                                            <li><router-link class="dropdown-item" to="/micuenta">Mi cuenta</router-link></li>

                                            <li><hr class="dropdown-divider" /></li>

                                            <li><router-link class="dropdown-item" to="/login">Iniciar sesión</router-link></li>
                                            <li><router-link class="dropdown-item" to="/registro">Registrar</router-link></li>
                                            <li><a class="dropdown-item" onClick={this.cerrarsesion}>Cerrar sesión</a></li>

                                            <li><hr class="dropdown-divider" /></li>

                                            <li><router-link class="dropdown-item" to="/crearproducto">Crear producto</router-link></li>
                                            <li><router-link class="dropdown-item" to="/consultarproducto">Consultar productos</router-link></li>
                                            <li><router-link class="dropdown-item" to="/detalleproducto">Detalle productos</router-link></li>

                                            <li><hr class="dropdown-divider" /></li>

                                            <li><router-link to="/crearcategoria" class="dropdown-item">Crear categoria</router-link></li>

                                            <li><hr class="dropdown-divider" /></li>

                                            <li><router-link class="dropdown-item" to="/creartematica">Crear tematica</router-link></li>
                                            <li><router-link class="dropdown-item" to="/consultartematica">Consultar Temáticas</router-link></li>

                                            <li><hr class="dropdown-divider" /></li>

                                            <li><button class="dropdown-item" onClick={this.crearProducto}>Crear producto</button></li>
                                            <li><router-link class="dropdown-item" to="/products/view">Ver Productos</router-link ></li>

                                        </ul>
                                    </li>
                                    : ""
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
