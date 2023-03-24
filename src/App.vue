<template>
    <Navbar></Navbar>
    <RouterView />
    <Footer></Footer>
</template>

<script setup lang="ts">
import { useRouter, RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar'
import Footer from './components/Footer'

const router = useRouter();
const handleRouteChange = () => {
    window.scrollTo(0, 0);
};
router.afterEach(() => {
    handleRouteChange();
});

</script>




<style>
#App {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>


