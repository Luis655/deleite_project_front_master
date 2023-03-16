import { faMound } from "@fortawesome/free-solid-svg-icons";
import { defineComponent, onMounted } from "vue";
import { Call } from "../../../../helpers/calls/Call"
let oCall = new Call();
interface Produc {
  idProducto?: number;
  idConfirmacionT?: boolean;
  nombreP?: string;
  descripcionP?: string;
  precio?: string;
  ingredienteselect?: string;
  nombreCategoria?: string;
  nombreTematica?: string;
  base64?: string;
}

const ConsultarProducto = defineComponent({
    data() {
        return{
            produc: [] as Produc[]
        }},
    methods:{
    async llamarProductos(){
        oCall.cenisFetch('GET', 'api/Producto/get', "", "" )
        .then(async (response) =>{
            this.produc = await response.Data.$values;
            console.log(this.produc);
            return Promise.resolve();
        })
        .catch((error)=>{
            console.log(error.Data);
            
        })
    },
},
    async mounted(){
        await this.llamarProductos();
    },
    render() {
        return (
            <>
                <body>
                    <div class="ConsultaProductos">
                        <div class="ListadoProductos">
                            <div class="FiltroPor">
                                <div>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Filtrar por</option>
                                        <option value="4">Lo más pedido</option>
                                        <option value="1">Nombre</option>
                                        <option value="2">Precio</option>
                                        <option value="3">Temática</option>

                                    </select>
                                </div>
                            </div>

                            <div>
                                <h2 class="display-4">PASTELES</h2>
                                <h5>Del horno a tu mesa</h5>
                                <di class="d-flex justify-content-center">
                                    <hr class="solid" />
                                </di>
                                &nbsp;
                                <h5>Elige entre nuestra gran variedad de sabores y presentaciones, listos para consentir tu paladar</h5>
                            </div>

                            <div class="container container-fluid">
                                <div class="row rowcards">



                                    {this.produc.map((item)=>{
                                    return(
                                 

                                    <div class="col-md-4  centercards">
                                        <div class="card item" style="width: 18rem;">

                                            <div class="imgsize">
                                                <img src={item.base64} class="card-img-top" />
                                            </div>

                                            <div class="card-body">
                                                <h5 class="card-title">{item.nombreP}</h5>
                                                <p class="card-text">$ {item.precio}</p>

                                                <div>
                                                    <h6 style="font-size: 15px">Temática</h6>
                                                    <p class="card-text text-muted" style="font-size: 12px">{item.nombreTematica}</p>
                                                </div>
                                                &nbsp;
                                                <div>
                                                    <a><router-link class="btn btn-productos btn-productos2" to="/detalleproducto">Ver más</router-link></a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    )

})}

                                   
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="Paginacion">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                </body>
            </>
        )
    }
})

export default ConsultarProducto