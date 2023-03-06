import { defineComponent } from "vue";

import { library } from '@fortawesome/fontawesome-svg-core'

import { faEnvelope, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@fortawesome/fontawesome-free/css/all.css'



const Footer = defineComponent({
    render() {
        return (
            <>
                <div>
                    <footer
                        class="text-center text-lg-start text-dark"
                        style="background-color: #A38068">

                        <section
                            class="d-flex justify-content-between p-4 text-white"
                            style="background-color: #724a3a">

                        </section>

                        <section>
                            <div class="container text-center text-md-start mt-5">

                                <div class="row mt-3">

                                    <div class="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">

                                        <h6 class="text-uppercase fw-bold text-white">Deleite</h6>
                                        <hr
                                            class="mb-4 mt-0 d-inline-block mx-auto"
                                            style="width: 60px; background-color: #724a3a; height: 2px"
                                        />
                                        <p class=" text-white">
                                            Somos una empresa 100% Mexicana y comprometida a la calidad y exigencia de nuestros clientes.
                                            Siempre hemos dicho que "De la vista nace el amor", compruebalo tu mismo y se parte de la experiencia
                                            Deleite.
                                        </p>
                                    </div>

                                    <div class="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4">

                                        <h6 class="text-uppercase fw-bold text-white">Contacto</h6>
                                        <hr
                                            class="mb-4 mt-0 d-inline-block mx-auto"
                                            style="width: 60px; background-color: #724a3a; height: 2px"
                                        />
                                        <div class="row d-flex justify-content-center">
                                            <div class="contactos">
                                                <p class="text-white"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Mérida, yucatán</p>
                                                <a href="mailto:deleitelzt@gmail.com" class="DeleiMail"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> deleitelzt@gmail.com</a>
                                                <a href="tel:9993893779" class="DelePhone"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+52 999 389 37 79 </a>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">

                                        <h6 class="text-uppercase fw-bold text-white">Redes sociales</h6>
                                        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #724a3a; height: 2px" />
                                        <div class="row d-flex justify-content-center">
                                            <a href="https://www.facebook.com/deleitemerida" target="_blank" class="fa fa-facebook"></a>
                                            &nbsp;
                                            <a href="https://www.instagram.com/deleite_merida/" target="_blank" class="fa fa-instagram"></a>
                                            &nbsp;
                                            <a href="https://www.tiktok.com/@lillianzapientorr" target="_blank" class="fa fa-tiktok"></a>
                                            &nbsp;
                                            <a href="https://api.whatsapp.com/send?phone=5219993893779" class="fa fa-whatsapp" target="_blank"></a>
                                        </div>


                                    </div>

                                </div>

                            </div>
                        </section>



                        <div
                            class="text-center p-3 text-white"
                            style="background-color: rgba(0, 0, 0, 0.2)"
                        >
                            © 2020 Copyright:
                            <a class="text-white" href="https://mdbootstrap.com/"
                            > MDBootstrap.com</a
                            >
                        </div>

                    </footer>
                </div>
            </>
        )
    }
})

export default Footer