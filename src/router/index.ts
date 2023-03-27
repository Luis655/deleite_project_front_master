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
import Contacto from '../views/Contacto';

import TematicaCrud from '../views/Cruds/Tematicas/TematicaCrud'
import ConsultarTematica from '../views/Cruds/Tematicas/ConsultarTematica'
import CrearProducto from '../views/Cruds/Productos/ProductoCrud'
import ActualizarProductos from '../views/Cruds/Productos/ProductoCrud'
import VerProductos from '../views/Cruds/Productos/ProductosList'
import detalleproducto from '../views/Cruds/Productos/DetalleProducto'
import ConsultarProducto from '../views/Cruds/Productos/ConsultarProducto'
import CrearCategoria from '../views/Cruds/CategoriaCrud'



import Error404 from '../Error404'
import Testimonios from '@/views/Testimonios';
import login from '@/views/Login/Login';
import registrarse from '@/views/Login/Registrarse';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Crud productos
    {
<<<<<<< HEAD
      path: '/Crearproducto', //URL
=======
      path: '/Crearproducto/:id/:trueorfalse', //URL
>>>>>>> 428a3d65da0c9dc667aaf9d92a5b0313dc13b8f5
      name: 'ProductoCrud',
      component: CrearProducto
    },

    {
      path: '/CrearCategoria', //URL
      name: 'CrearCategoria',
      component: CrearCategoria
    },

    {
<<<<<<< HEAD
      path: '/Actualizarproducto', //URL
=======
      path: '/Actualizarproducto/:id/:trueorfalse', //URL
>>>>>>> 428a3d65da0c9dc667aaf9d92a5b0313dc13b8f5
      name: 'ProductoCrudActualizar',
      component: ActualizarProductos
    },

    {
      path: '/VistaDeProductos_Tabla', //URL
      name: 'Productos_tabla',
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

    {
      path: '/Login', //URL
      name: 'Login',
      component: login
    },

    {
      path: '/Registro', //URL
      name: 'Registro',
      component: registrarse
    },

    {
      path: '/Contacto', //URL
      name: 'Contacto',
      component: Contacto
    },

    {
      path: '/Testimonios', //URL
      name: 'Testimonios',
      component: Testimonios
    },

    {
      path: '/Error404', //URL
      name: 'Error404',
      component: Error404
    },

    {
      path: '/Catalogo', //URL
      name: 'Catalogo',
      component: Catalogo
    },

    {
      path: '/CrearTematica', //URL
      name: 'TematicaCrud',
      component: TematicaCrud
    },

    {
      path: '/Tematicas', //URL
      name: 'ConsultarTematicas',
      component: ConsultarTematica
    },

    {
      path: '/ConsultarProducto', //URL
      name: 'ConsultarProducto',
      component: ConsultarProducto
    },

  ]
})

export default router;
