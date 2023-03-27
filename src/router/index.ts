/*import HomeView from '@/views/HomeView'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HomeView
    },

    {
      path: '/inicio',
      name: 'inicio',

      component: () => import('@/views/HomeView')
    },

    {
      path: '/catalogo',
      name: 'catalogo',

      component: () => import('@/views/Catalogo')
    },
    {
      path: '/contacto',
      name: 'contacto',

      component: () => import('@/views/Contacto')
    },
    {
      path: '/testimonios',
      name: 'testimonios',

      component: () => import('@/views/Testimonios')
    },

    {
      path: '/login',
      name: 'login',

      component: () => import('@/views/Login/Login')
    },

    {
      path: '/registro',
      name: 'registro',

      component: () => import('@/views/Login/Registrarse')
    },

    {
      path: '/micuenta',
      name: 'micuenta',

      component: () => import('@/views/Login/Micuenta')
    },

    //CRUD CATEGORIAS
    {
      path: '/crearcategoria',
      name: 'crearcategoria',

      component: () => import('@/views/Cruds/CategoriaCrud')
    },

    {
      path: '/creartematica',
      name: 'creartematica',

      component: () => import('@/views/Cruds/TematicaCrud')
    },
    
    {
      path: '/consultartematica',
      name: 'consultartematica',

      component: () => import('@/views/Cruds/Tematicas/ConsultarTematica')
    },
    //CRUD PRODUCTOS

    {
      path: '/crearproducto/:id/:trueorfalse?',
      name: 'crearproducto',

      component: () => import('@/views/Cruds/Productos/ProductoCrud')
    },
    {
      path: '/ActualizarProducto/:id/:trueorfalse',
      name: 'actualizarproducto',

      component: () => import('@/views/Cruds/Productos/ProductoCrud')
    },
    
    {
      path: '/products/view',
      name: 'productsview',
      component: () => import('@/views/Cruds/Productos/ProductosList')
    },

    {
      path: '/consultarproducto',
      name: 'consultarproducto',

      component: () => import('@/views/Cruds/Productos/ConsultarProducto')
    },

    {
      path: '/detalleproducto/:id',
      name: 'detalleproducto',

      component: () => import('@/views/Cruds/Productos/DetalleProducto')
    },
  ]
})

export default router
*/
import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/HomeView';
import Catalogo from '../views/Catalogo';
import TematicaCrud from '../views/Cruds/Tematicas/TematicaCrud'
import ConsultarTematica from '../views/Cruds/Tematicas/ConsultarTematica'
import ProductoCrud from '../views/Cruds/Productos/ProductoCrud';
import CrearProducto from '../views/Cruds/Productos/ProductoCrud'
import ActualizarProductos from '../views/Cruds/Productos/ProductoCrud'
import VerProductos from '../views/Cruds/Productos/ProductosList'
import detalleproducto from '../views/Cruds/Productos/DetalleProducto'
import ConsultarProducto from '../views/Cruds/Productos/ConsultarProducto'
import login from '@/views/Login/Login';
import registrarse from '@/views/Login/Registrarse';


//import Error404 from '../Error404'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      //Crud productos
        {
        path: '/Crearproducto/:id/:trueorfalse', //URL
        name: 'ProductoCrud',
        component: CrearProducto
        },
        {
          path: '/Actualizarproducto/:id/:trueorfalse', //URL
          name: 'ProductoCrudActualizar',
          component: ActualizarProductos
          },
          {
            path: '/products/view', //URL
            name: 'productsview',
            component: VerProductos
            },
            {
              path: '/detalleproducto/:id', //URL
              name: 'detalleproducto',
              component: detalleproducto
              },
        //End productos
        {
            path: '/', //URL
            name: 'Inicio',
            component: Inicio
        },
       /* {
          path: '/Error404', //URL
          name: 'Error404',
          component: Error404
        }*/
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
        name: 'ProductoCrudAntu¿as',
        component: ProductoCrud
    },
    {
        path: '/views/Cruds/Productos/ConsultarProducto', //URL
        name: 'ConsultarProducto',
        component: ConsultarProducto
    },
    {
      path: '/views/Login/Login', //URL
      name: 'login',
      component: login
  },
  {
    path: '/views/Login/Registrarse', //URL
    name: 'registrarse',
    component: registrarse
},
    ]
})

export default router;
