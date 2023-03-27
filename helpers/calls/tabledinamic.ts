import DataTable from 'datatables.net-dt'
import jQuery from "jquery";
import 'datatables.net-autofill-dt';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-keytable-dt';
import 'datatables.net-select-dt';


export class tabledinamic {
    dtatable(id: HTMLElement){

        //let ta = document.getElementById("miTabla") as HTMLElement;
         let table = new DataTable(id, {
           searching: true,
           paging: true,
           pageLength: 3,
           ordering:  true,
           order: [[ 3, 'desc' ], [ 0, 'asc' ]],
       });
       
   
   
       }
   
}