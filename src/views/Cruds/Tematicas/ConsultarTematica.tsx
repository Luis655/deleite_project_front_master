import { defineComponent } from "vue";
import { Call } from "../../../../helpers/calls/Call"

interface Tematica {
    idTematica: number,
    nombreT: string
    productos: []
}

const Tematica = defineComponent({
    data() {
        return {
            tematicas: [] as Tematica[]
        }
    },
    mounted() {
        this.recuperartematicas()
    },
    methods: {
        async recuperartematicas() {
            let oCall = new Call();
            oCall.cenisFetch("GET", "api/Tematica/getall", "", "").then((respuesta) => {
                if (respuesta.status === 200) {
                    this.tematicas = respuesta.Data
                    console.log(this.tematicas);

                }
            })
                .catch((error) => {
                    console.log("Sin recuperar")
                })
        },
        async eliminarTematica(id: number) {
            let oCall = new Call();
            oCall.cenisFetch("DELETE", `api/Tematica/delete/${id}`, "", "").then((respuesta) => {
                this.recuperartematicas()
            })
        },

        Editar(element: number) {
            this.$router.push({
                path: '/creartematica',
                query: { accion: "editar", id: element }
            });
        }
    },
    render() {
        return (
            <>
                <body>

                    <div class="TituloTematica">

                        <h2>TEMÁTICAS</h2>
                        &nbsp;
                        <h6>
                            Las temáticas te permiten darle un valor agregado a tus productos, darles un significado más especial.
                        </h6>

                    </div>

                    <div class="ContainerTematica">
                        <div class="row">
                            {this.tematicas.map((item) => {
                                return (
                                    <div class="col-md-3  g-5" key={item.idTematica}>

                                        <div class="card item">
                                            <div class="card-body">

                                                <div class="headerCard">
                                                    <a  class="btn-close" onClick={() => this.eliminarTematica(item.idTematica)} aria-label="Close"></a>
                                                </div>
                                                <div>
                                                    <h5 class="card-title">{item.nombreT}</h5>
                                                </div>
                                                <div class="footerCard">
                                                    <a onClick={() => this.Editar(item.idTematica)} class="btn btn-tematica btn-tematica2">Editar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </body>
            </>
        )
    }
})

export default Tematica