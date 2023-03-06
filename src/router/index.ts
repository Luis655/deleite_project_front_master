import HomeView from '@/views/HomeView'
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
      path: '/catálogo',
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
    //CRUD PRODUCTOS
    {
      path: '/crearproducto/:id/:trueorfalse?',
      name: 'crearproducto',

      component: () => import('@/views/Cruds/Productos/ProductoCrud')
    },
    
    {
      path: '/consultartematica',
      name: 'consultartematica',

      component: () => import('@/views/Cruds/Tematicas/ConsultarTematica')
    },
    //CRUD PRODUCTOS
    {
      path: '/crearproducto',
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
      path: '/detalleproducto',
      name: 'detalleproducto',

      component: () => import('@/views/Cruds/Productos/DetalleProducto')
    },
  ]
})

export default router
