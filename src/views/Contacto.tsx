import { defineComponent } from "vue";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Contacto = defineComponent({
    render() {
        return (
            <>
                <body>
                    &nbsp;
                    <header>
                        <section class="FondoContacto">
                            <div style="width: 100%; height: 400px;">
                                <div class="text-white">
                                    <div data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100">
                                        <h2 class="display-2">SÍGUENOS Y CONTÁCTANOS</h2>
                                    </div>
                                    &nbsp;
                                    <div data-aos="fade" data-aos-duration="3000" data-aos-delay="500">
                                        <h3>En nuestra redes sociales</h3>
                                    </div>
                                </div>
                                &nbsp;
                                <div class="icons-redes">
                                    <a data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" href="https://www.facebook.com/deleitemerida" target="_blank" class="fa fa-facebook icoFB m-2"></a>
                                    &nbsp;
                                    <a data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" href="https://www.instagram.com/deleite_merida/" target="_blank" class="fa fa-instagram icoINST m-2"></a>
                                    &nbsp;
                                    <a data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" href="https://www.tiktok.com/@lillianzapientorr" target="_blank" class="fa fa-tiktok icoTIK m-2"></a>
                                    &nbsp;
                                    <a data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800" href="https://api.whatsapp.com/send?phone=5219993893779" class="fa fa-whatsapp icoWHATS m-2" target="_blank"></a>
                                </div>
                            </div>
                        </section>
                        <div>
                            <div class="ContactoFondoSolido">
                                &nbsp;
                                <div class="text-white">
                                    &nbsp;
                                    <br />
                                    <br />
                                    <h3 class="display-5">Realiza tu pedido</h3>
                                    &nbsp;
                                    <h4>¡A través de nuestras redes o directo a nuestro número de
                                        <a class="NumeroWhats" href="https://api.whatsapp.com/send?phone=5219993893779"> WhatsApp<span class="text-white">!</span></a>
                                    </h4>
                                    &nbsp;
                                    <div>
                                        <br />

                                        <h6>Envios a domicilio</h6>
                                        <p>Validos únicamente para el área de Mérida, Yucatán</p>
                                        &nbsp;
                                    </div>

                                    <div>
                                        

                                    </div>

                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <section>

                        </section>
                    </header>
                </body>
            </>
        )
    }
})

export default Contacto