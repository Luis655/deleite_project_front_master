import { defineComponent } from "vue";
import { Call } from "../../helpers/calls/Call"

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


interface Categoria {
    idCategoria: number,
    nombreCategoria: string,
    imagen: string,
    base64: string,

    productos: []
}


const Catalogo = defineComponent({
    data() {
        return {
            token: "" as any,
            categorias: [] as Categoria[],

        }
    },

    mounted() {
        this.recuperar()
        this.MostrarAcciones()
    },

    methods: {

        async recuperar() {
            let oCall = new Call();
            oCall.cenisFetch("GET", "api/Categoria/getCategorias", "", "").then((respuesta) => {
                console.log(this.categorias);
                //response.Data.$values
                if (respuesta.status === 200) {
                    this.categorias = respuesta.Data.$values
                    console.log(this.categorias);

                }
            })
                .catch((error) => {
                    console.log("Sin recuperar")
                })
        },
        async eliminarCategoria(id: number) {
            let oCall = new Call();
            oCall.cenisFetch("DELETE", `api/Categoria/delete/${id}`, "", "").then((respuesta) => {
                this.recuperar()
            })
        },

        Editar(element: number) {
            this.$router.push({
                path: '/CrearCategoria',
                query: { accion: "editar", id: element }
            });
        },
        async GoToConsultarProducto(id: number, nombreCategoria: string) {

            this.$router.push({ path: '/ConsultarProducto', query: { idCategoria: id, nombreCategoria: nombreCategoria } })
        },

        async MostrarAcciones() {
            const tokenJSON = localStorage.getItem('token');
            if (tokenJSON) {
                try {
                    this.token = (tokenJSON);
                    console.log('Token actualizado:', this.token);
                } catch (error) {
                    console.error('Error al analizar el token JSON: ', error);
                }

            }
            else {
                this.token = "";
            }
        }
    },



    render() {
        return (
            <>
                <section>
                    &nbsp;
                    <div>
                        <h2 class="Ticatalogo display-3" style="font-weight: 600" data-aos="zoom-out" data-aos-duration="3000">EL PAN DEL BUEN SABOR</h2>
                    </div>
                    &nbsp;
                    <div class="CarouselInicio"  data-aos="fade" data-aos-duration="3000" data-aos-delay="1000">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../src/assets/images/Carousel1.jpg" class="imgCarousel d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="../src/assets/images/Carousel2.jpg" class="imgCarousel d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="../src/assets/images/Carousel3.jpg" class="imgCarousel d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
                &nbsp;
                <section>
                    &nbsp;
                    <div>
                        <h2 class="Ticatalogo2 display-4" style="font-weight: 500" data-aos="fade" data-aos-duration="2000" data-aos-delay="1000">CATÁLOGO</h2>
                        &nbsp;
                        <h4 class="NF-titulo2" style="color: #724a3a;" data-aos="fade" data-aos-duration="2000" data-aos-delay="1200">El olor a pan deberia ser patrimonio de la humanidad</h4>
                    </div>

                    <div id="portfolio">
                        <div class="container-fluid p-5 container-movil" data-aos="fade" data-aos-duration="2000" data-aos-delay="1500">
                            <div class="row g-1">
                                {this.categorias.map((item) => {
                                    return (
                                        <div class="col-lg-4 col-sm-6 padre" key={item.idCategoria}>

                                            <div class="hijo">
                                                <a type="button" class="portfolio-box" title="Project Name" onClick={() => this.GoToConsultarProducto(item.idCategoria, item.nombreCategoria)}>
                                                    <img class="img-fluid img-catalogo" src={item.base64} />
                                                    <div class="portfolio-box-caption">
                                                        <div class="project-name">{item.nombreCategoria}</div>
                                                    </div>
                                                </a>
                                            </div>

                                            {this.token !== "" ?

                                                <div class="div-btn-catalogo">
                                                    <a class="btn btn-catalogo btn-catalogo2" onClick={() => this.eliminarCategoria(item.idCategoria)}>
                                                        Eliminar
                                                    </a>
                                                    &nbsp;
                                                    <a class="btn btn-catalogo btn-catalogo2" onClick={() => this.Editar(item.idCategoria)}>
                                                        Editar
                                                    </a>
                                                </div>
                                                : ""
                                            }


                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
})

export default Catalogo