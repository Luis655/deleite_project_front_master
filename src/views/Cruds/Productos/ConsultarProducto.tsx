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

interface calificacion {
    idproducto?: number;
    estrellas?: number;
}

let inicioPagina = 0;
let finalPagina = 11;
const elementosDisplay = 12;
let indexActula = 1;

const ConsultarProducto = defineComponent({
    data() {
        return {
            produc: [] as Produc[],
            id: Object as any,
            Response: {} as response,
            nombreCategoria: String as any,
            valores: {} as calificacion,

        }},
    methods:{
        Detallerir(id:any){
            alert(id);
            //this.$router.push({ name: 'detalleproducto', params: { id: id}})
        },


        async llamarProductos(consulta: any) {
            const productosDiv = document.getElementById('productospaginados') as HTMLElement;
            let url = 'api/Producto/get';
            if (this.$route.query.idCategoria) {
                this.nombreCategoria = this.$route.query.nombreCategoria;
                url = `api/Categoria/productos/${this.$route.query.idCategoria}`
            } else if (this.$route.query.idTematica) {
                url = `api/Categoria/${this.$route.query.idTematica}`
            } else if (consulta) {
                url = 'api/Producto/get';
            } else {
                url = 'api/Producto/get';
            }
            oCall.cenisFetch('GET', url, "", "")
                .then(async (response) => {
                    //console.log(response.Data.$values);
                    this.produc = await response.Data.$values;

                    this.paginacion();

                    //console.log(this.produc);
                    console.log(this.nombreCategoria);

                    for (let index = 0; index <= this.produc.length; index++) {

                        if (index >= inicioPagina && index <= finalPagina) {


                            const newDiv = document.createElement('div');
                            newDiv.id = `divproductos${index}`;
                            newDiv.className = 'col-md-4  centercards';

                            newDiv.innerHTML =
                                `
                <div class="card item cardsRespon" style="width: 18rem;">

                    <div class="imgsize">
                        <img src=${response.Data.$values[index].base64} class="card-img-top" />
                    </div>

                    <div class="card-body">

                        <div>
                            <h5 class="card-title" style="font-weight: 600;">${response.Data.$values[index].nombreP}</h5>
                        </div>

                            <p class="card-text" style="font-size: 22px;">$ ${response.Data.$values[index].precio}.00</p>

                        <div>
                            <div>
                                <h6 style="font-size: 15px; font-weight: 600;">Temática</h6>
                                <p class="card-text text-muted" style="font-size: 16px">${response.Data.$values[index].nombreTematica}</p>
                            </div>
                            &nbsp;
                            <div>
                                <h6 style="font-size: 15px; font-weight: 600;">Categoria</h6>
                                <p class="card-text text-muted" style="font-size: 16px">${response.Data.$values[index].nombreCategoria}</p>
                            </div>
                            &nbsp;
                            <div>                          
                                <a class="btn btn-cards btn-cards2" href="/detalleproducto/${response.Data.$values[index].idProducto}/${response.Data.$values[index].idConfirmacionT}">Detalles</a>
                            </div>

                        </div>
                    </div>

                    `;



                            productosDiv?.appendChild(newDiv);
                        } else {

                        }
                    }    //console.log(this.produc);
                    return Promise.resolve();

                })
                .catch((error) => {
                    console.log(error.Data);
                })
        },

        paginacion() {



            const elements = this.produc.length;
            const numlipagination = Math.ceil(elements / elementosDisplay)

            console.log("numero de paginas: " + numlipagination);



            const paginatecontent = document.getElementById('paginacionelement') as HTMLElement;

            const paginateul = document.createElement('ul');
            paginateul.className = 'pagination';

            const paginationBf = document.createElement('li');
            paginationBf.className = 'page-item';
            paginationBf.innerHTML = '<li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'


            const paginationNxt = document.createElement('li');
            paginationNxt.className = 'page-item';
            paginationNxt.innerHTML = '<li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'

            paginateul.appendChild(paginationBf);

            for (let index = 1; index <= numlipagination; index++) {
                const paginatelinum = document.createElement('li');
                paginatelinum.className = 'page-item';
                paginatelinum.innerHTML = `<li class="page-item"><a class="page-link" href="#">${index}</a></li>`;

                paginatelinum.addEventListener('click', () => {
                    const numeroiniciopagina = index * elementosDisplay;
                    finalPagina = numeroiniciopagina - 1;
                    inicioPagina = finalPagina + 1 - elementosDisplay;
                    indexActula = index;
                    paginateul.remove();

                    for (let index = 0; index <= this.produc.length; index++) {
                        const divproductos = document.getElementById(`divproductos${index}`);
                        divproductos?.remove();
                    }
                    this.llamarProductos(null);

                });

                paginateul.appendChild(paginatelinum);

            }

            paginationNxt.addEventListener('click', () => {
                if(indexActula>=numlipagination){
                    indexActula = indexActula-1;
                }
                const numeroiniciopagina = (indexActula+1)*elementosDisplay;
                finalPagina = numeroiniciopagina-1;
                inicioPagina = finalPagina+1-elementosDisplay;
                paginateul.remove();
                indexActula++;
                for (let index = 0; index <= this.produc.length; index++) {
                    const divproductos = document.getElementById(`divproductos${index}`);
                    divproductos?.remove();
                }
                this.llamarProductos(null);

            });

            paginationBf.addEventListener('click', () => {

                if (indexActula <= 1) {
                    indexActula = 2;
                }
                const numeroiniciopagina = (indexActula - 1) * elementosDisplay;
                finalPagina = numeroiniciopagina - 1;
                inicioPagina = finalPagina + 1 - elementosDisplay;
                paginateul.remove();
                indexActula--;

                for (let index = 0; index <= this.produc.length; index++) {
                    const divproductos = document.getElementById(`divproductos${index}`);
                    divproductos?.remove();
                }
                this.llamarProductos(null);

            });

            paginateul.appendChild(paginationNxt);
            paginatecontent.appendChild(paginateul);



        },
    },
    async mounted() {
        await this.llamarProductos(null);
        oCall.cenisFetch('GET', 'api/Producto/veriicarProductos', "", "")
            .then((response) => { });
    },
    render() {
        return (
            <>
                <body>
                    <div class="ConsultaProductos">
                        <div class="ListadoProductos">

                            <div data-aos="fade" data-aos-duration="2000" data-aos-delay="300">
                                <h2 class="display-4">{this.nombreCategoria.name != "String" ? this.nombreCategoria : 'Catalogo Deleite'}</h2>
                                <h5>Del horno a tu mesa</h5>
                                <di class="d-flex justify-content-center">
                                    <hr class="solid" />
                                </di>
                                &nbsp;
                                <h5>Elige entre nuestra gran variedad de sabores y presentaciones, listos para consentir tu paladar</h5>
                            </div>

                            <div class="container container-fluid" data-aos="fade" data-aos-duration="2000" data-aos-delay="800">
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