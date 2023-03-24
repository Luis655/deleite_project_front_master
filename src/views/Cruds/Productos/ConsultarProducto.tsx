import { faMound } from "@fortawesome/free-solid-svg-icons";
import { defineComponent, onMounted } from "vue";
import { Call } from "../../../../helpers/calls/Call"
let oCall = new Call();
let nombre = ''
interface Produc {
    $values: lsProduct[]
    $id: number,

}
interface response {
    $id: number,
    idCategoria: number,
    nombre: string,
    imagen: string,
    productos: Produc

}

interface lsProduct {
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

let inicioPagina = 0;
let finalPagina = 5;
const elementosDisplay = 6;

const ConsultarProducto = defineComponent({
    data() {
        return{
            produc: [] as Produc[],
            id: Object as any,
            Response: {} as response,
            nombreCategoria: String as any
        }},
    methods:{
    async llamarProductos(){
        const productosDiv = document.getElementById('productospaginados') as HTMLElement;

        oCall.cenisFetch('GET', 'api/Producto/get', "", "" )
        .then(async (response) =>{
           //console.log(response.Data.$values);
           this.produc = await response.Data.$values;

           this.paginacion();

           console.log(this.produc);
                for (let index = 0; index <= this.produc.length; index++) {
                    console.log(response.Data.$values[index].base64);
                    
                if(index>=inicioPagina &&index<=finalPagina){

                const newDiv = document.createElement('div');
                newDiv.id=`divproductos${index}`;
                newDiv.className='col-md-4  centercards';
                
                newDiv.innerHTML=
                `
                <div class="card item" style="width: 18rem;">

                    <div class="imgsize">
                        <img src=${response.Data.$values[index].base64} class="card-img-top" />
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">${response.Data.$values[index].nombreP}</h5>
                        <p class="card-text">$ ${response.Data.$values[index].precio}</p>

                        <div>
                            <h6 style="font-size: 15px">Temática</h6>
                            <p class="card-text text-muted" style="font-size: 12px">${response.Data.$values[index].nombreTematica}</p>
                            </div>
                            &nbsp;
                            <div>
                                <a><router-link class="btn btn-productos btn-productos2" to="/detalleproducto">Ver más</router-link></a>
                            </div>
                        </div>
    
                    </div>
                    
                    `;
                    
                
            
                productosDiv?.appendChild(newDiv);
            }else{
                console.log("hola");
                
            }
        }    //console.log(this.produc);
        return Promise.resolve();

            })
            .catch((error)=>{
                console.log(error.Data);
            })},

        async llamarProductosCategorias() {
            this.id = this.$route.query.id
            oCall.cenisFetch('GET', `api/Categoria/${this.id}`, "", "")
                .then(async (response) => {
                    // this.Response = await response.Data.Productos.$Values
                    console.log(response.Data.$values)
                    this.nombreCategoria = this.$route.query.nombreCategoria;
                    const nombreP = document.getElementById('nombreP') as HTMLInputElement;
                    const productosDiv = document.getElementById('productospaginados') as HTMLElement;
                    console.log(response.Data.$values[0].nombreCategoria)
                    nombre = response.Data.$values[0].nombreCategoria

                    response.Data.$values.map((item: any) => {
                        

                        const newDiv = document.createElement('div');
                        newDiv.id = `divproductos$`;
                        newDiv.className = 'col-md-4  centercards';

                        newDiv.innerHTML =
                            `
                <div class="card item" style="width: 18rem;">
                <h2 class="display-4"></h2>
                    <div class="imgsize">
                        <img src=${item.base64} class="card-img-top" />
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">${item.nombreP}</h5>
                        <p class="card-text">$ ${item.precio}</p>

                        <div>
                            <h6 style="font-size: 15px">Temática</h6>
                            <p class="card-text text-muted" style="font-size: 12px">${item.nombreTematica}</p>
                        </div>
                        &nbsp;
                        <div>
                            <a><router-link class="btn btn-productos btn-productos2" to="/detalleproducto">Ver más</router-link></a>
                        </div>
                    </div>

                </div>
                
                `;
                productosDiv?.appendChild(newDiv);
                    })
                })
            
        },
    
    paginacion(){
        const elements = this.produc.length;
        const numlipagination =  Math.ceil(elements/elementosDisplay)

        console.log("numero de paginas: " + numlipagination);
        


        const paginatecontent = document.getElementById('paginacionelement') as HTMLElement;

        const paginateul = document.createElement('ul');
        paginateul.className='pagination';

        const paginationBf = document.createElement('li');
        paginationBf.className = 'page-item';
        paginationBf.innerHTML= '<li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'


        const paginationNxt = document.createElement('li');
        paginationNxt.className = 'page-item';
        paginationNxt.innerHTML= '<li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'
        
        paginateul.appendChild(paginationBf);

        for (let index = 1; index <= numlipagination; index++) {
            const paginatelinum = document.createElement('li');
            paginatelinum.className = 'page-item';
            paginatelinum.innerHTML =  `<li class="page-item"><a class="page-link" href="#">${index}</a></li>`;
            paginatelinum.addEventListener('click', () => {
                const numeroiniciopagina = index*elementosDisplay;
                finalPagina = numeroiniciopagina;
                inicioPagina = finalPagina-elementosDisplay;
                for (let index = 0; index <= this.produc.length; index++) {
                const divproductos = document.getElementById(`divproductos${index}`);
                divproductos?.remove();
                }
                this.llamarProductos();
                
            });
            paginateul.appendChild(paginatelinum);
            
        }


      
        paginateul.appendChild(paginationNxt);
        paginatecontent.appendChild(paginateul);

        

    },
},
    async mounted() {
        if (this.$route.query.idCategoria) {

        }
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
                                <h2 class="display-4">{this.nombreCategoria ? this.nombreCategoria : 'No disponible' }</h2>
                                <h5>Del horno a tu mesa</h5>
                                <di class="d-flex justify-content-center">
                                    <hr class="solid" />
                                </di>
                                &nbsp;
                                <h5>Elige entre nuestra gran variedad de sabores y presentaciones, listos para consentir tu paladar</h5>
                            </div>

                            <div class="container container-fluid">


                                <div class="row rowcards" id="productospaginados">



                                   
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="Paginacion">
                        <nav aria-label="Page navigation example" id="paginacionelement">
                          
                        </nav>
                    </div>


                </body>
            </>
        )
    }
})

export default ConsultarProducto