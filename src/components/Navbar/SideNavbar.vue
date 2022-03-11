<template>
  <!-- Start navbar Left slide -->
  <nav class="navbar--left">
    <div class="menu-slide" @click="toggleNav">
      <div id="burger" :class="{ active: isBurgerActive }">
        <burger-menu></burger-menu>
      </div>
    </div>
    <nav class="navbar-block" ref="nav">
      <ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          class="filter--svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="6.8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
            <filter id="goo-no-comp">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="6.8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
            </filter>
          </defs>
        </svg>
        <!-- start shape nave tab and active  -->
        <div class="tab--nav" id="TabNav">
          <!--<div class="tab--nav_left"></div>
          <div class="tab--nav_right"></div>-->
        </div>
        <!-- svg home -->
        <router-link
          to="/"
          tag="li"
          id="item"
          class="actvtion activeSvg"
          exact
          onclick="hoverEnter(0)"
        >
          <!-- svg home -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M20,10.7359622 L20,18.5 C20,19.8807119 18.8807119,21 17.5,21 L14.5,21 C14.2238576,21 14,20.7761424 14,20.5 L14,14.5 C14,14.2238576 13.7761424,14 13.5,14 L10.5,14 C10.2238576,14 10,14.2238576 10,14.5 L10,20.5 C10,20.7761424 9.77614237,21 9.5,21 L6.5,21 C5.11928813,21 4,19.8807119 4,18.5 L4,10.7359622 L3.81785363,10.8859651 C3.60469098,11.0615108 3.28958059,11.0310163 3.11403488,10.8178536 C2.93848917,10.604691 2.96898373,10.2895806 3.18214637,10.1140349 L11.6821464,3.11403488 C11.8667743,2.96198837 12.1332257,2.96198837 12.3178536,3.11403488 L20.8178536,10.1140349 C21.0310163,10.2895806 21.0615108,10.604691 20.8859651,10.8178536 C20.7104194,11.0310163 20.395309,11.0615108 20.1821464,10.8859651 L20,10.7359622 Z M19.0066996,9.91795013 L12,4.14772693 L4.9933004,9.91795013 C4.99770753,9.94464611 5,9.97205534 5,10 L5,18.5 C5,19.3284271 5.67157288,20 6.5,20 L9,20 L9,14.5 C9,13.6715729 9.67157288,13 10.5,13 L13.5,13 C14.3284271,13 15,13.6715729 15,14.5 L15,20 L17.5,20 C18.3284271,20 19,19.3284271 19,18.5 L19,10 C19,9.97205534 19.0022925,9.94464611 19.0066996,9.91795013 L19.0066996,9.91795013 Z"
            />
          </svg>
        </router-link>

        <!-- svg grid -->
        <router-link
          to="/tables"
          tag="li"
          id="item"
          class=" item-link--Mtop activeSvg"
          onclick="hoverEnter(90)"
        >
          <!-- svg  -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L8.5,3 C9.88071187,3 11,4.11928813 11,5.5 L11,8.5 C11,9.88071187 9.88071187,11 8.5,11 L5.5,11 C4.11928813,11 3,9.88071187 3,8.5 L3,5.5 Z M4,5.5 L4,8.5 C4,9.32842712 4.67157288,10 5.5,10 L8.5,10 C9.32842712,10 10,9.32842712 10,8.5 L10,5.5 C10,4.67157288 9.32842712,4 8.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 Z M13,5.5 C13,4.11928813 14.1192881,3 15.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,8.5 C21,9.88071187 19.8807119,11 18.5,11 L15.5,11 C14.1192881,11 13,9.88071187 13,8.5 L13,5.5 Z M14,5.5 L14,8.5 C14,9.32842712 14.6715729,10 15.5,10 L18.5,10 C19.3284271,10 20,9.32842712 20,8.5 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L15.5,4 C14.6715729,4 14,4.67157288 14,5.5 Z M3,15.5 C3,14.1192881 4.11928813,13 5.5,13 L8.5,13 C9.88071187,13 11,14.1192881 11,15.5 L11,18.5 C11,19.8807119 9.88071187,21 8.5,21 L5.5,21 C4.11928813,21 3,19.8807119 3,18.5 L3,15.5 Z M4,15.5 L4,18.5 C4,19.3284271 4.67157288,20 5.5,20 L8.5,20 C9.32842712,20 10,19.3284271 10,18.5 L10,15.5 C10,14.6715729 9.32842712,14 8.5,14 L5.5,14 C4.67157288,14 4,14.6715729 4,15.5 Z M13,15.5 C13,14.1192881 14.1192881,13 15.5,13 L18.5,13 C19.8807119,13 21,14.1192881 21,15.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L15.5,21 C14.1192881,21 13,19.8807119 13,18.5 L13,15.5 Z M14,15.5 L14,18.5 C14,19.3284271 14.6715729,20 15.5,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,15.5 C20,14.6715729 19.3284271,14 18.5,14 L15.5,14 C14.6715729,14 14,14.6715729 14,15.5 Z"
            />
          </svg>
        </router-link>
        <!-- svg Rainy weather -->
        <router-link
          to="/weather"
          tag="li"
          id="item"
          class=" item-link--Mtop activeSvg "
          onclick="hoverEnter(180)"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xml:space="preserve"
            preserveAspectRatio="xMinYMin meet"
            style="left: 0px; top: 0px;"
          >
            <g class="lievo-setrotation">
              <g
                class="lievo-setsharp"
                data-svg-origin="30.625 30"
                transform="matrix(1,0,0,1,-0.625,-0.625)"
                style="transform-origin: 0px 0px 0px;"
              >
                <g class="lievo-setflip">
                  <g class="lievo-main">
                    <g
                      class="lievo-filledicon lievo-lineicon"
                      data-svg-origin="30 7.095000267028809"
                      transform="matrix(1,0,0,1,0,0)"
                      style="opacity: 1;"
                    >
                      <path
                        fill="none"
                        stroke-width="3.25px"
                        stroke-linecap="square"
                        stroke-miterlimit="10"
                        d="M30,53c-8.28,0-15-6.72-15-15c0-9,13-23,14.68-30.5c0.12-0.54,0.51-0.54,0.63,0C32,15,45,29,45,38C45,46.28,38.28,53,30,53z"
                        style=""
                      ></path>
                      <path
                        class="lievo-altstroke lievo-savelinecap"
                        stroke-width="3.25px"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M27.68,47.04c-3.33-0.76-5.96-3.37-6.75-6.69"
                        style=""
                      ></path>
                    </g>

                    <rect
                      x="-19"
                      y="-19"
                      width="4"
                      height="4"
                      style="stroke-width: 2; stroke-linecap: butt; stroke-linejoin: round; opacity: 0;"
                      class="lievo-checkshift lievo-donotdraw lievo-nohoverstroke lievo-nohovercolor"
                      stroke-width="3.25px"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>

            <defs></defs>
          </svg>
        </router-link>

        <!-- start shape nave tab -->
      </ul>
    </nav>
  </nav>
  <!-- End navbar Left slide -->
</template>
<script>
import BurgerMenu from "@/components/Navbar/BurgerMenu.vue";
import $ from "jquery";
export default {
  data: function() {
    return {
      isBurgerActive: false,
      index: 1,
      currentIndex: 1,
    };
  },
  components: {
    BurgerMenu,
  },
  mounted() {
    //active li on click hover
    $(document).ready(function() {
      $("nav ul #item").on("click", function() {
        $("nav ul #item").removeClass("actvtion");
        $(this).addClass("actvtion");
      });
    });
  },
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("ActiveSlide")
        ? nav.remove("ActiveSlide")
        : nav.add("ActiveSlide");
      /** this is for burger active **/
      this.isBurgerActive = !this.isBurgerActive;
    },
  },
};
</script>
