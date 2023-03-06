import { defineComponent } from "vue";
import { Call } from "../../helpers/calls/Call"
interface Categoria {

    idCategoria: 0,
    nombre: "Pepinos",
    imagen: "Imagen de pepinos",
}
const HomeView = defineComponent({
    methods: {
        crearCategoria(nuevaCategoria: Categoria) {
            let oCall = new Call();
            oCall.cenisFetch('POST', 'api/Categoria/create', "", "")
                .then((response) => {
                    console.log('Se ha creado una nueva categoría:', response.Data);
                    console.log(response)
                })

                .catch((error) => {
                    console.error('Ha ocurrido un error al crear una nueva categoría:', error);
                });
        },
    },
    render() {
        return (
            <>
                <body id="page-top">
                    <header class="masthead">
                        <div class="container px-4 px-lg-5 h-100">
                            <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                                <div class="col-lg-8 align-self-end">
                                    <h2 class="fade-in display-1 text-white font-weight-bold" style="font-size: 85px;">Deleite</h2>
                                    <h5 class="fade-in" style="color: white;">D' Lillian</h5>
                                    <br />
                                    <h4 class="fade-in-down" style="color: white;">Reposteria gourmet</h4>
                                    <hr class="divider" />
                                </div>
                                <div class="col-lg-8 align-self-baseline">
                                    <p class="fade-in-down text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste
                                        dolorem
                                        molestiae reprehenderit praesentium numquam cumque rerum, nesciunt ab distinctio quis delectus. Autem,
                                        soluta sint voluptatum provident quaerat accusamus dicta!</p>
                                    <a class="fade-in btn BtnPortada BtnPortada1" href="#Acerca_de" style="color: white;">Conocer más</a>
                                </div>
                            </div>
                        </div>
                    </header>

                    &nbsp;
                    &nbsp;
                    <section>
                        <br />
                        <br />
                        <div class="text-center">
                            <h2 class="display-5" style="font-weight: 400; color: #724a3a;">FAVORITOS</h2>
                            <br />
                            <h4 style="color: #724a3a;">Los más pedidos por nuestros clientes</h4>
                        </div>
                        &nbsp;
                    </section>
                    <section>
                        <div class="favoritos">
                            <div id="portfolio">
                                <div class="container-fluid p-0">
                                    <div class="row g-0">
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-flui img-fluid2" src="../src/assets/images/favoritos/favoritos1.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">Category</div>
                                                    <div class="project-name">Project Name</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/favoritos2.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">Category</div>
                                                    <div class="project-name">Project Name</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/favoritos3.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">Category</div>
                                                    <div class="project-name">Project Name</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/favoritos4.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">Category</div>
                                                    <div class="project-name">Project Name</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/favoritos5.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">Category</div>
                                                    <div class="project-name">Project Name</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/favoritos6.jpg" alt="..." />
                                                <div class="portfolio-box-caption p-3">
                                                    <div class="project-category text-white-50">Category</div>
                                                    <div class="project-name">Project Name</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        <div class="Container text-center">
                            <router-link to="/catálogo" class="btn BtnCatalogo btnCat1">Ver más</router-link>
                        </div>
                    </section>
                    <br />
                    <br />
                    <br />
                    <br />

                    <section>
                        <div class="container px-5">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-lg-2">
                                    <div class="p-5  fade-in"><img class="img-fluid" src="../src/assets/images/PastelInicio.jpg" alt="..." /></div>
                                </div>
                                <div class="col-lg-6 order-lg-1 fade-in-down">
                                    <div class="p-5 text-center">
                                        <h2 class="display-4">Celebra un día especial</h2>
                                        &nbsp;
                                        <p>Con nuestra reposteria gourmet, 100% artesanal y hecha con amor,
                                            lista para enamorar hasta el paladar más exigente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Acerca_de">
                        <div class="container px-5">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 fade-in">
                                    <div class="p-5"><img class="img-fluid" width="400" src="../src/assets/images/AcercaDeDeleite.jpg" alt="..." />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5 fade-in-down text-center">
                                        <h2 class="display-2">Acerca de</h2>
                                        <h3 class="display-6" style="color: #724a3a;">Deleite</h3>
                                        &nbsp;
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste
                                            esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae
                                            adipisci, beatae obcaecati.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    &nbsp;
                    <section>
                        <br />
                        <br />
                        <div class="TerceraSeccion">
                            <div class="TerceraSeccionChild ">
                                <h2 class="display-6 fade-in-down text-center">"Quiero llegar al paladar de muchas personas, que conozcan mi sabor y se sientan
                                    consetidos por
                                    mí."</h2>
                                &nbsp;
                                <div class="text-center">
                                    <h3 class="fade-in" style="font-weight: 100; font-size: 25px;">- Lillian Zapien -</h3>

                                    <h4 class="fade-in" style="font-weight: 100; font-size: 18px;">CEO Deleite</h4>
                                </div>

                            </div>
                        </div>
                    </section>

                    <div>
                    </div>
                </body>
            </>
        )
    }
}
)

export default HomeView
