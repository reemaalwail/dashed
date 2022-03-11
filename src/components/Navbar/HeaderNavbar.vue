<template>
  <!-- Start navbar header slide -->
  <div class="main---header">
    <div class="navbar--header">
      <!-- column right -->
      <div class="flex-line">
        <v-text-field
          class="mx-4"
          flat
          hide-details
          label="Search"
          prepend-inner-icon="search"
          solo-inverted
        ></v-text-field>
        <div class="slidebuttom" @click="toggleSlide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M11.5,5 C11.2238576,5 11,5.22385763 11,5.5 L11,6.5 C11,6.77614237 11.2238576,7 11.5,7 L12.5,7 C12.7761424,7 13,6.77614237 13,6.5 L13,5.5 C13,5.22385763 12.7761424,5 12.5,5 L11.5,5 Z M11.5,4 L12.5,4 C13.3284271,4 14,4.67157288 14,5.5 L14,6.5 C14,7.32842712 13.3284271,8 12.5,8 L11.5,8 C10.6715729,8 10,7.32842712 10,6.5 L10,5.5 C10,4.67157288 10.6715729,4 11.5,4 Z M11.5,11 C11.2238576,11 11,11.2238576 11,11.5 L11,12.5 C11,12.7761424 11.2238576,13 11.5,13 L12.5,13 C12.7761424,13 13,12.7761424 13,12.5 L13,11.5 C13,11.2238576 12.7761424,11 12.5,11 L11.5,11 Z M11.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 L14,12.5 C14,13.3284271 13.3284271,14 12.5,14 L11.5,14 C10.6715729,14 10,13.3284271 10,12.5 L10,11.5 C10,10.6715729 10.6715729,10 11.5,10 Z M11.5,17 C11.2238576,17 11,17.2238576 11,17.5 L11,18.5 C11,18.7761424 11.2238576,19 11.5,19 L12.5,19 C12.7761424,19 13,18.7761424 13,18.5 L13,17.5 C13,17.2238576 12.7761424,17 12.5,17 L11.5,17 Z M11.5,16 L12.5,16 C13.3284271,16 14,16.6715729 14,17.5 L14,18.5 C14,19.3284271 13.3284271,20 12.5,20 L11.5,20 C10.6715729,20 10,19.3284271 10,18.5 L10,17.5 C10,16.6715729 10.6715729,16 11.5,16 Z"
            />
          </svg>
        </div>
        
        <nav class="navbar-setting" ref="nav">
          <ul>
            <!-- column left -->
            <li>
              <svg
                class="svg-cog"
                id="i-settings"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24"
                height="24"
                fill="none"
                stroke="currentcolor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path
                  d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z"
                />
                <circle cx="16" cy="16" r="4" />
              </svg>
            </li>
            <li><Notfaction></Notfaction></li>

            <li><upload-image></upload-image></li>
            <li @click="SlideDown(slidedown)">
              <p class="p-title">Scarlett</p>
              <svg
                class="svg-top"
                :class="{ rotate: rotate }"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  fill="currentColor"
                  d="M15.1746043,10.1203717 C15.3842672,9.94066062 15.6999172,9.96494139 15.8796283,10.1746043 C16.0593394,10.3842672 16.0350586,10.6999172 15.8253957,10.8796283 L12.3253957,13.8796283 C12.1381508,14.0401239 11.8618492,14.0401239 11.6746043,13.8796283 L8.17460431,10.8796283 C7.96494139,10.6999172 7.94066062,10.3842672 8.1203717,10.1746043 C8.30008277,9.96494139 8.61573277,9.94066062 8.82539569,10.1203717 L12,12.8414611 L15.1746043,10.1203717 Z"
                />
              </svg>
            </li>
            <div class="dropdown-slide" :class="{ slidedown: slidedown }">
              <ul v-for="item in items" :key="item.id">
                <span @click="SlideDown(slidedown)">{{ item.Devices }}</span>
              </ul>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import UploadImage from "@/components/UplodImage/UploadImage.vue";
import Notfaction from "@/components/Notfaction/Notfaction.vue";

export default {
  data() {
    return {
      items: [
        { Devices: "LivingRoom" },
        { Devices: "Room" },
        { Devices: "Kitchen" },
        { Devices: "HouseTemperature" },
      ],
      slidedown: 0,
      rotate: false,
    };
  },
  components: {
    UploadImage,
    Notfaction,
  },
  methods: {
    toggleSlide() {
      const nav = this.$refs.nav.classList;
      nav.contains("SlideTop") ? nav.remove("SlideTop") : nav.add("SlideTop");
    },
    SlideDown() {
      if (this.slidedown === 0) {
        this.$set(this.$data, "slidedown", 1);
        this.$set(this.$data, "rotate", true);
      } else {
        this.$set(this.$data, "slidedown", 0);
        this.$set(this.$data, "rotate", false);
      }
    },
  },
};
</script>
