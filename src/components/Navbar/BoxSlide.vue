<template>
  <div>
    <!-- burger slide box left  -->
    <div class="menu-slide" @click="toggleBox">
      <burger-boxslide></burger-boxslide>
    </div>
    <nav class="box--slide" ref="nav">
      <v-container fluid>
        <v-row>
          <v-col lg="4" md="4" sm="12" cols="12">
            <div class="p-content Text--Capitalize">my devices</div>
          </v-col>
          <v-col lg="8" md="8" sm="12" cols="12">
            <div class="btn--linkGo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.8414611,12 L10.1203717,8.82539569 C9.94066062,8.61573277 9.96494139,8.30008277 10.1746043,8.1203717 C10.3842672,7.94066062 10.6999172,7.96494139 10.8796283,8.17460431 L13.8796283,11.6746043 C14.0401239,11.8618492 14.0401239,12.1381508 13.8796283,12.3253957 L10.8796283,15.8253957 C10.6999172,16.0350586 10.3842672,16.0593394 10.1746043,15.8796283 C9.96494139,15.6999172 9.94066062,15.3842672 10.1203717,15.1746043 L12.8414611,12 Z"
                />
              </svg>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            xl="6"
            lg="6"
            md="6"
            sm="12"
            cols="12"
            v-for="(data, index) in dataCard"
            :key="index"
          >
            <div
              class="card--devices Router"
              :style="{ backgroundImage: data.mode }"
              v-bind:class="{ DifferentbgColor: data.DifferentbgColor }"
            >
              <v-row>
                <v-col lg="5" class="Text--Left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    v-bind:class="{ fillColor: data.fillColor }"
                  >
                    <path
                      :d="data.path"
                      stroke="#fff"
                      stroke-miterlimit="10"
                      stroke-width="0.2"
                    />
                    <path
                      data-name="layer2"
                      :d="data.layer2"
                      stroke="rgba(152, 151, 173, 0.712)"
                      stroke-miterlimit="10"
                      stroke-width="0.695"
                      transform="translate(-4 1.624)"
                    ></path>
                    <path
                      data-name="layer1"
                      :d="data.layer1"
                      stroke="rgba(152, 151, 173, 0.712)"
                    ></path></svg
                ></v-col>
                <v-col lg="7" class="Text--Right">
                  <div class="switch_card">
                    <div
                      class="ChangeSwitch"
                      v-bind:class="{ fillColor: data.fillColor }"
                    >
                      <!-- {{ checkedItems }}-->
                    </div>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="Switch round" @click="changeClass(index)">
                        <span
                          class="circle"
                          :style="{ backgroundImage: data.mode }"
                          v-bind:class="{ circleColor: data.circleColor }"
                        >
                        </span>
                      </span>
                    </label>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="8" lg="8" xs="12" class="Text--Left">
                  <div
                    class="name--devices"
                    v-bind:class="{ fillColor: data.fillColor }"
                  >
                    {{ data.name }}
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>

        <!--- start slide user info  -->
        <v-row>
          <v-col lg="2" md="2" sm="12" cols="12">
            <div class="p-content  Text--Capitalize">Members</div>
          </v-col>
          <v-col lg="10" md="10" sm="12" cols="12">
            <div class="btn--linkGo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.8414611,12 L10.1203717,8.82539569 C9.94066062,8.61573277 9.96494139,8.30008277 10.1746043,8.1203717 C10.3842672,7.94066062 10.6999172,7.96494139 10.8796283,8.17460431 L13.8796283,11.6746043 C14.0401239,11.8618492 14.0401239,12.1381508 13.8796283,12.3253957 L10.8796283,15.8253957 C10.6999172,16.0350586 10.3842672,16.0593394 10.1746043,15.8796283 C9.96494139,15.6999172 9.94066062,15.3842672 10.1203717,15.1746043 L12.8414611,12 Z"
                />
              </svg>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="12" xlg="12" md="12" cols="12">
            <div class="slide--width">
              <slide-user></slide-user>
            </div>
          </v-col>
        </v-row>
        <!-- /end slide user info -->
        <!-- start chart devicess --
        <v-row>
          <v-col lg="12"><vue-chart></vue-chart></v-col>
        </v-row>
        -- /end chart devicess -->
      </v-container>
    </nav>
  </div>
</template>
<script>
import BurgerBoxslide from "@/components/Navbar/BurgerBoxslide.vue";
import SlideUser from "@/components/SlidesUser/SlideUser.vue";
//import VueChart from "@/components/Chart/VueChart.vue";
export default {
  props: ["mode"],
  data() {
    return {
      checkedItemsOn: "on",
      checkedItemsOff: "off",
      dataCard: [
        {
          id: 0,
          mode:
            "linear-gradient(135deg,rgba(102, 126, 234, 0.73)  0%, #320de2 100%)",
          name: "Refridgerator",
          path:
            "M48 2H16a4 4 0 0 0-4 4v52a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z",
          layer2:
            "M20 19a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zm0 26.036a1 1 0 0 1-1-1v-10a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z",
          layer1: "M12 25h40v1.938H12z",
        },
        {
          id: 1,
          mode:
            "linear-gradient(320deg, rgb(250, 184, 51) 0%, rgba(250, 202, 101, 0.6) 99%)",
          name: "Router",
          path:
            "M2.267,23A2.4,2.4,0,0,1,0,20.5V17.677a2.387,2.387,0,0,1,2.267-2.489H12.7V9.958a.656.656,0,0,1-.293-.553.6.6,0,1,1,1.191,0,.656.656,0,0,1-.293.553v5.229H23.733A2.387,2.387,0,0,1,26,17.677V20.5A2.4,2.4,0,0,1,23.733,23ZM16.694,8.7a4.905,4.905,0,0,0-7.388,0,.284.284,0,0,1-.292.091A.322.322,0,0,1,8.8,8.554a.361.361,0,0,1,.076-.324,5.482,5.482,0,0,1,8.258,0,.361.361,0,0,1,.076.324.322.322,0,0,1-.218.235.278.278,0,0,1-.076.011A.288.288,0,0,1,16.694,8.7Zm2.758-2.01a8.576,8.576,0,0,0-12.905,0,.285.285,0,0,1-.3.083.322.322,0,0,1-.212-.239.36.36,0,0,1,.082-.323,9.152,9.152,0,0,1,13.756,0,.36.36,0,0,1,.082.323.321.321,0,0,1-.213.239.277.277,0,0,1-.082.013A.289.289,0,0,1,19.453,6.688Zm2.645-1.9a12.092,12.092,0,0,0-18.2,0,.286.286,0,0,1-.294.084.323.323,0,0,1-.212-.24.358.358,0,0,1,.082-.322A12.853,12.853,0,0,1,13,0a12.854,12.854,0,0,1,9.524,4.313.358.358,0,0,1,.082.322.323.323,0,0,1-.212.24.283.283,0,0,1-.081.012A.292.292,0,0,1,22.1,4.792Z",
        },
        {
          id: 2,
          mode:
            "linear-gradient(320deg, rgb(252, 123, 128) 0%, rgb(246, 205, 194) 99%)",
          name: "Music System",
          path:
            "M3.684,21.485a12.6,12.6,0,1,1,8.905,3.684A12.6,12.6,0,0,1,3.684,21.485Z",
        },
        {
          id: 3,
          mode:
            "linear-gradient(135deg, rgb(230, 233, 247) 0%, rgb(149, 150, 211) 100%)",
          name: "Lamps",
          path:
            "M6.244,25a.833.833,0,1,1,0-1.667H10.7v-10H2.12a2.1,2.1,0,0,1-1.8-1.018,2.161,2.161,0,0,1-.1-2.091L4.33,1.817A3.189,3.189,0,0,1,7.211,0H15.79a3.189,3.189,0,0,1,2.876,1.809l4.108,8.408a2.163,2.163,0,0,1-.079,2.079,2.1,2.1,0,0,1-1.778,1.038H12.34v10h4.453a.833.833,0,1,1,0,1.667ZM5.833,2.559,1.66,10.967a.491.491,0,0,0,.021.472.477.477,0,0,0,.4.229H20.917a.477.477,0,0,0,.406-.229.486.486,0,0,0,.022-.472L17.236,2.559a1.564,1.564,0,0,0-1.415-.893H7.248A1.568,1.568,0,0,0,5.833,2.559Z",
        },
      ],
    };
  },
  components: {
    BurgerBoxslide,
    SlideUser,
    //VueChart,
  },
  methods: {
    toggleBox() {
      //toggle nav box
      const nav = this.$refs.nav.classList;
      nav.contains("ActiveBox")
        ? nav.remove("ActiveBox")
        : nav.add("ActiveBox");
    },
    changeClass(index) {
      // change background color card
      let Cardbg = this.dataCard[index];
      Cardbg.DifferentbgColor = !Cardbg.DifferentbgColor;
      Cardbg.circleColor = !Cardbg.circleColor;
      Cardbg.fillColor = !Cardbg.fillColor;
      this.$set(this.dataCard, index, Cardbg);
    },
  },
};
</script>
