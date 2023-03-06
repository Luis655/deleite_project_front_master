import { defineComponent } from "vue";
import { RouterLink } from "vue-router";


const DetalleProducto = defineComponent({
    render() {
        return (
            <>
                <div>
                    <div class="ContainerDetalles">
                        <div class="DetallesChild">

                            <div>
                                <div class="alert alert-deleite" role="alert">
                                    Temática: <span>Para toda ocasión</span>
                                </div>

                                <div class="alert recomendado" role="alert">
                                    <h3>¡De nuestros productos más vendidos!</h3>
                                </div>
                            </div>
                            &nbsp;
                            <div>
                                <h2 class="display-4">PASTEL DE QUESO</h2>
                            </div>
                            &nbsp;

                            <div>
                                <div>
                                    <div class="container-fluid p-0">
                                        <div class="row g-0">
                                            <div class="col-lg-4 col-sm-6">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#modalImage1">
                                                    <img src="src/assets/images/favoritos/favoritos1.jpg" class="img-min item" />
                                                </a>
                                            </div>
                                            <div class="col-lg-4 col-sm-6">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#modalImage1">
                                                    <img src="src/assets/images/favoritos/favoritos2.jpg" class="img-min item" />
                                                </a>
                                            </div>
                                            <div class="col-lg-4 col-sm-6">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#modalImage1">
                                                    <img src="src/assets/images/favoritos/favoritos3.jpg" class="img-min item" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row g-0 d-flex justify-content-center">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalImage1">
                                            <img src="src/assets/images/favoritos/favoritos4.jpg" class="img-min2 item" />
                                        </a>
                                    </div>
                                    &nbsp;

                                    <div>
                                        <h2>$ 250.00</h2>
                                    </div>

                                    &nbsp;
                                    <div class="row g-0">
                                        <div>
                                            <h6>Puedes cambiar o variar el ingrediente principal por</h6>
                                        </div>

                                        <div class="ingredientes">
                                            <h5><span class="badge bg-deleite">Zarzamora</span></h5>
                                            &nbsp;
                                            <h5><span class="badge bg-deleite">Fresa</span></h5>
                                            &nbsp;
                                            <h5><span class="badge bg-deleite">Frambuesa</span></h5>
                                        </div>
                                        &nbsp;
                                        <div class="ingredientes">
                                            <h6>Este producto es:</h6>
                                        </div>

                                        <div class="ingredientes">

                                            <h5><span class="badge bg-tipo">Sin azúcar</span></h5>
                                            &nbsp;
                                            <h5><span class="badge bg-tipo2">Con azúcar</span></h5>
                                        </div>

                                    </div>

                                    <div class="row g-0 descripcionProducto">
                                        <div class="descripcionProducto2">
                                            <p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Et numquam, dicta odio reprehenderit dolores possimus nobis quae,
                                                est fugit aperiam alias eaque molestias natus? Provident voluptatibus
                                                commodi excepturi deserunt ipsam.
                                            </p>
                                        </div>
                                    </div>



                                    <div>
                                        <a><router-link class="btn btn-cruds" to="/contacto">¡Lo quiero!</router-link></a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div tabindex="-1" aria-labelledby="modalImage1" arial-hidden="true" class="modal fade" id="modalImage1">
                    <div class="modal-dialog modal-lg modal-dialog-center">
                        <div class="modal-content">
                            <img src="src/assets/images/favoritos/favoritos1.jpg" />
                        </div>
                    </div>
                </div>


            </>



        )

    }

})

export default DetalleProducto

