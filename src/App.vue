<template>
  <div id="app">
    <!-- Start navbar Top -->
    <side-navbar></side-navbar>
    <!-- Start navbar Left slide -->
    <header-navbar></header-navbar>
    <box-slide></box-slide>
    <main>
      <div class="main-area">
        <transition name="slide-fade">
          <router-view />
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import SideNavbar from "@/components/Navbar/SideNavbar.vue";
import HeaderNavbar from "@/components/Navbar/HeaderNavbar.vue";
import BoxSlide from "@/components/Navbar/BoxSlide.vue";

export default {
  components: {
    SideNavbar,
    HeaderNavbar,
    BoxSlide,
  },
};
</script>
