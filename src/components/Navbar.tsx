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
                    if (response.status === 201) {
                        console.log('Se ha creado una nueva categoría:', response.Data);
                        console.log(response)
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

        },
    },
    mounted() {
        oCall.cenisFetch('GET', 'api/Producto/veriicarProductos', "", "")
        .then((response) => {})
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
                                    <a class="nav-link" href="/">Inicio</a>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/views/Catalogo" class="nav-link">Catálogo</router-link>
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

                                            <li><router-link class="dropdown-item" to="/views/Login/Login">Iniciar sesión</router-link></li>
                                            <li><router-link class="dropdown-item" to="/views/Login/Registrarse">Registrar</router-link></li>
                                            <li><a class="dropdown-item" onClick={this.cerrarsesion}>Cerrar sesión</a></li>

                                            <li><hr class="dropdown-divider" /></li>

                                            <li><router-link class="dropdown-item" to="/views/Cruds/Productos/ProductoCrud">Crear producto</router-link></li>
                                            <li><router-link class="dropdown-item" to="/views/Cruds/Productos/ConsultarProducto">Consultar productos</router-link></li>
                                            <li><router-link class="dropdown-item" to="../views/Cruds/Productos/ConsultarProducto">Detalle productos</router-link></li>

                                            <li><hr class="dropdown-divider" /></li>

                                            <li><router-link to="/crearcategoria" class="dropdown-item">Crear categoria</router-link></li>

                                            <li><hr class="dropdown-divider" /></li>

                                            <li><router-link class="dropdown-item" to="/views/Cruds/Tematicas/TematicaCrud">Crear tematica</router-link></li>
                                            <li><router-link class="dropdown-item" to="/views/Cruds/Tematicas/CosultarTematica">Consultar Temáticas</router-link></li>

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
