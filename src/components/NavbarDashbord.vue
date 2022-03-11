<template>
  <div class="wrapper">
    <!-- Start navbar Top -->
    <side-navbar></side-navbar>
    <!-- Start navbar Left slide -->
    <header-navbar></header-navbar>
  </div>
</template>
<script>
import SideNavbar from "@/components/Navbar/SideNavbar.vue";
import HeaderNavbar from "@/components/Navbar/HeaderNavbar.vue";
export default {
  components: {
    SideNavbar,
    HeaderNavbar,
  },
};
</script>
