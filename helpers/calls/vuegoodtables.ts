import VueGoodTable from 'vue-good-table/dist/vue-good-table';

export default{
    components: {
      VueGoodTable
    },
    data() {
      return {
        columns: [
          {
            label: 'Nombre',
            field: 'nombreP'
          },
          {
            label: 'Tipo',
            field: 'nombreCategoria'
          },
          {
            label: 'Imagen',
            field: 'imagen',
            formatFn: (value: any) => {
              return `<img src="data:image/png;base64,${value}" />`;
            }
          }
        ],
        rows: []
      };
    }
}