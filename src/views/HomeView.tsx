import { defineComponent } from "vue";
import { Call } from "../../helpers/calls/Call"

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



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
                                    <h2 data-aos="fade-down" data-aos-duration="2000" data-aos-delay="100" class="display-1 text-white font-weight-bold" style="font-size: 85px;">Deleite</h2>
                                    <h5 style="color: white;" data-aos="fade" data-aos-duration="3000" data-aos-delay="200">D' Lillian</h5>
                                    <br />
                                    <h4 style="color: white;" data-aos="fade" data-aos-duration="3000" data-aos-delay="1000">Reposteria gourmet</h4>
                                    <hr class="divider" />
                                </div>
                                <div class="col-lg-8 align-self-baseline">
                                    <p class="text-white mb-5" data-aos="fade" data-aos-duration="3000" data-aos-delay="1500">
                                        Deleite tiene la responsabilidad de tener una amplia variedad de productos,
                                        creamos postres nuevos para renovar nuestros menús y nos gusta consentirte
                                        decorando los pasteles con diferentes adornos, coberturas, glaseados, etc.
                                        Y lo más importante... "Deleitar tu paladar"
                                    </p>
                                    <a class="btn BtnPortada BtnPortada1" href="#Acerca_de" style="color: white;" data-aos="fade" data-aos-duration="3000" data-aos-delay="2000">Conocer más</a>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section>
                        <br />
                        <br />
                        <div class="text-center">
                            <h2 class="display-4 NF-titulo" style="font-weight: 600; color: #724a3a;" data-aos="fade" data-aos-duration="2000" data-aos-delay="500">Nuestros favoritos</h2>
                            &nbsp;
                            <h4 class="NF-titulo2" style="color: #724a3a;" data-aos="fade" data-aos-duration="2000" data-aos-delay="700">Los más pedidos por nuestros clientes</h4>
                        </div>
                        &nbsp;
                    </section>
                    <section>
                        <div class="favoritos" data-aos="fade" data-aos-duration="2000" data-aos-delay="900">
                            <div id="portfolio">
                                <div class="container-fluid p-0">
                                    <div class="row g-1">
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/Mostach.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">MOSTACHÓN</div>
                                                    <div class="project-name">Queso crema y fresa</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/favoritos2.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">CHEESE CAKE'S</div>
                                                    <div class="project-name">CK de frutos rojos</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/favoritos3.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">PASTEL</div>
                                                    <div class="project-name">3 leches chocolate</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/moka.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">PASTEL</div>
                                                    <div class="project-name">3 leches Moka</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/favoritos5.jpg" alt="..." />
                                                <div class="portfolio-box-caption">
                                                    <div class="project-category text-white-50">PASTEL</div>
                                                    <div class="project-name">3 Leches Chocolate envinado</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-4 col-sm-6">
                                            <a class="portfolio-box">
                                                <img class="img-fluid img-fluid2" src="../src/assets/images/favoritos/favoritos6.jpg" alt="..." />
                                                <div class="portfolio-box-caption p-3">
                                                    <div class="project-category text-white-50">PASTEL</div>
                                                    <div class="project-name">3 Leches con Nutella</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        <div class="Container text-center">
                            <router-link to="/catalogo" class="btn BtnCatalogo btnCat1">Ver más</router-link>
                        </div>
                        &nbsp;
                    </section>

                    <section>
                        &nbsp;
                        <div class="container px-5" >
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-lg-2" data-aos="fade-left" data-aos-duration="2000">
                                    <div class="p-5"><img class="img-fluid" src="../src/assets/images/PastelInicio.jpg" alt="..." /></div>
                                </div>
                                <div class="col-lg-6 order-lg-1" data-aos="fade-down" data-aos-duration="3000">
                                    <div class="p-5 text-center">
                                        <h2 class="display-4">Celebra un día especial</h2>
                                        &nbsp;
                                        <h4 style="color: #724a3a;">Todo sale mejor con un trozo de pastel</h4>
                                        &nbsp;
                                        <p class="txts-inicio">Con nuestra reposteria gourmet, 100% artesanal y hecha con amor,
                                            lista para enamorar hasta el paladar más exigente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Acerca_de">
                        <div class="container px-5">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6"  data-aos="fade-right" data-aos-duration="2000">
                                    <div class="p-5"><img class="img-fluid" width="450" src="../src/assets/images/AcercaDe.jpg" alt="..." />
                                    </div>
                                </div>
                                <div class="col-lg-6"  data-aos="fade-down" data-aos-duration="3000">
                                    <div class="p-5 text-center">
                                        <h2 class="display-2">Acerca de</h2>
                                        <h3 class="display-6" style="color: #724a3a;">Deleite</h3>
                                        &nbsp;
                                        <p class="txts-inicio">
                                            Somos una empresa 100% mexicana y comprometida con la calidad y exigencia de nuestros clientes.
                                            Siempre hemos dicho "De la vista nace el amor", compruebalo tu mismo y se parte de la experiencia Deleite.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    &nbsp;
                    <section>
                        &nbsp;
                        <div class="container px-5">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-lg-2" data-aos="fade-left" data-aos-duration="2000">
                                    <div class="p-5"><img class="img-fluid" src="../src/assets/images/Tradi_con_pasion.jpg" alt="..." /></div>
                                </div>
                                <div class="col-lg-6 order-lg-1" data-aos="fade-down" data-aos-duration="3000">
                                    <div class="p-5 text-center">
                                        <h2 class="display-4">Tradición con pasión</h2>
                                        &nbsp;
                                        <h4 style="color: #724a3a;">Deleite tiene la capacidad de prestar atención a cada detalle de su pastel</h4>
                                        &nbsp;
                                        <p class="txts-inicio">
                                            Con nuestra reposteria gourmet, 100% artesanal y hecha con amor,
                                            lista para enamorar hasta el paladar más exigente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    &nbsp;
                    <section>
                        <br />
                        <br />
                        <div class="TerceraSeccion"  data-aos="fade" data-aos-duration="500" data-aos-delay="100">
                            <div class="TerceraSeccionChild" data-aos="fade" data-aos-duration="3000" data-aos-delay="500">
                                <h2 class="display-6 fade-in-down text-center">
                                    "Quiero llegar al paladar de muchas personas, que conozcan mi sabor y se sientan
                                    consetidos por mí."</h2>
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
