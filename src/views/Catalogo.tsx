import { defineComponent } from "vue";
import { Call } from "../../helpers/calls/Call"
interface Categoria {
    idCategoria: number,
    nombre: string,
    imagen: string,
    productos: []
}

const Catalogo = defineComponent({
    data() {
        return {
            categorias: [] as Categoria[]
        }
    },

    mounted() {
        this.recuperar()
    },
    methods: {
        async recuperar() {
            let oCall = new Call();
            oCall.cenisFetch("GET", "api/Categoria/getall", "", "").then((respuesta) => {
                if (respuesta.status === 200) {
                    this.categorias = respuesta.Data
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
                path: '/crearcategoria',
                query: { accion: "editar", id: element }
            });
        }
    },
    render() {
        return (
            <>
                &nbsp;
                <br />
                <br />
                <br />
                <section>
                    <div class="CarouselInicio">
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
                <div>
                    <div id="portfolio">
                        <div class="container-fluid p-5">
                            <div class="row g-1">
                                {this.categorias.map((item) => {
                                    return (
                                        <div class="col-lg-4 col-sm-6" key={item.idCategoria}>
                                            <a class="portfolio-box" href="../src/assets/images/PastelInicio.jpg" title="Project Name">
                                                <img class="img-fluid" src="../src/assets/images/PastelInicio.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">{item.nombre}</div>
                                                    <div class="project-name">Project Name</div>
                                                </div>
                                            </a>
                                            <a class="btn btn-danger" onClick={() => this.eliminarCategoria(item.idCategoria)}>
                                                Eliminar
                                            </a>

                                            <a class="btn btn-danger" onClick={() => this.Editar(item.idCategoria)}>
                                                Editar
                                            </a>
                                        </div>
                                    )

                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
})

export default Catalogo