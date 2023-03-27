import { defineComponent } from "vue";

const Micuenta = defineComponent({
    render() {
        return (
            <>
                <body class="MicuentaBody">
                    <div class="head-titulo">
                        <h1>MI CUENTA</h1>
                        &nbsp;
                        <h6>Aqui puedes encontrar información de tu cuenta de administrador</h6>
                    </div>

                    &nbsp;
                    <div class="ContainerCuenta">
                        <div class="row ">
                            <div class="FormCuenta">

                                <div class="col-md-8">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label d-flex justify-content-start">Nombre</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row ">
                            <div class="FormCuenta">

                                <div class="col-md-8">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label d-flex justify-content-start">Correo</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="FormCuenta">

                                <div class="col-md-8">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label d-flex justify-content-start">Contraseña</label>
                                        <input type="password" class="form-control" id="exampleFormControlInput1" />
                                    </div>
                                </div>

                            </div>
                        </div>
                            &nbsp;
                        <div>
                            <button class="btn btn-cuenta  btn-cuenta2">Guardar cambios</button>
                        </div>

                    </div>
                </body>
            </>
        )
    }
})

export default Micuenta