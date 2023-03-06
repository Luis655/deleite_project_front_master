import { defineComponent } from "vue";

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
                                    <h2 class="display-3 fade-in-down">CONTÁCTANOS</h2>
                                    <h2 class="display-5 fade-in-down">y</h2>
                                    <h2 class="display-3 fade-in">SÍGUENOS</h2>
                                    &nbsp;
                                    <h3 class="fade-in">En nuestra redes sociales</h3>
                                </div>
                                &nbsp;
                                <div class="icons-redes">
                                    <a href="#" class="m-1 fa fa-facebook bounce-in" style="animation-delay: 500ms;"></a>
                                    &nbsp;
                                    <a href="#" class="m-1 fa fa-instagram bounce-in" style="animation-delay: 1000ms;"></a>
                                    &nbsp;
                                    <a href="#" class="m-1 fa fa-whatsapp bounce-in" style="animation-delay: 1500ms;"></a>
                                    &nbsp;
                                    <a href="#" class="m-1 fa fa-tiktok bounce-in" style="animation-delay: 2000ms;"></a>
                                </div>
                            </div>
                        </section>
                        <div>
                            <div class="ContactoFondoSolido">
                                &nbsp;
                                <div class="text-white">
                                    &nbsp;
                                    <br />
                                    <br></br>
                                    <h3 class="display-5">Realiza tu pedido</h3>
                                    &nbsp;
                                    <h4>¡A través de nuestras redes o directo a nuestro número de</h4>
                                    &nbsp;
                                    <div>
                                        <a class="NumeroWhats" href="#">WhatsApp<span class="text-white">!</span></a>
                                    </div>
                                    &nbsp;
                                    <div>
                                        <br></br>
                                        <br></br>
                                        <h6>Envios a domicilio</h6>
                                        <p>Validos únicamente para el área de Mérida, Yucatán</p>
                                        &nbsp;
                                    </div>
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