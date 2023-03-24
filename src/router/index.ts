
import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../components/Inicio';
import Catalogo from '../views/Catalogo';
import TematicaCrud from '../views/Cruds/Tematicas/TematicaCrud'
import ConsultarTematica from '../views/Cruds/Tematicas/ConsultarTematica'
import ProductoCrud from '../views/Cruds/Productos/ProductoCrud';
import ConsultarProducto from '../views/Cruds/Productos/ConsultarProducto'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', //URL
            name: 'Inicio',
            component: Inicio
        },
        {
            path: '/views/Catalogo', //URL
            name: 'Catalogo',
            component: Catalogo
        },
        {
          path: '/views/Cruds/Tematicas/TematicaCrud', //URL
          name: 'TematicaCrud',
          component: TematicaCrud
      },
      {
        path: '/views/Cruds/Tematicas/CosultarTematica', //URL
        name: 'ConsultarTematica',
        component: ConsultarTematica
    },
    {
        path: '/views/Cruds/Productos/ProductoCrud', //URL
        name: 'ProductoCrud',
        component: ProductoCrud
    },
    {
        path: '/views/Cruds/Productos/ConsultarProducto', //URL
        name: 'ConsultarProducto',
        component: ConsultarProducto
    },
    ]
})

export default router;