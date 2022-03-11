<template>
  <div>
    <div class="slides">
      <div
        v-bind:style="{
          width: innerWidth + 'px',
          marginLeft: '-' + slideinnerMarginLeft + 'px',
        }"
        class="slides--inner"
      >
        <div v-for="data in SlidesData" :key="data.id">
          <div v-bind:style="{ width: singleWidth + 'px' }" class="slide">
            <img :src="data.pic" />
          </div>
          <div class="info--user">
            <div class="p-name">{{ data.name }}</div>
            <div class="h-valid">{{ data.validity }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- span left annd right slide -->
    <div class="click--translate">
      <span @click="goToNext" class="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17.2928932,13 L7.5,13 C7.22385763,13 7,12.7761424 7,12.5 C7,12.2238576 7.22385763,12 7.5,12 L17.2928932,12 L14.1464466,8.85355339 C13.9511845,8.65829124 13.9511845,8.34170876 14.1464466,8.14644661 C14.3417088,7.95118446 14.6582912,7.95118446 14.8535534,8.14644661 L18.8535534,12.1464466 C19.0488155,12.3417088 19.0488155,12.6582912 18.8535534,12.8535534 L14.8535534,16.8535534 C14.6582912,17.0488155 14.3417088,17.0488155 14.1464466,16.8535534 C13.9511845,16.6582912 13.9511845,16.3417088 14.1464466,16.1464466 L17.2928932,13 Z"
          />
        </svg>
      </span>
      <span @click="goToPrev" class="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.70710678,12 L18.5,12 C18.7761424,12 19,12.2238576 19,12.5 C19,12.7761424 18.7761424,13 18.5,13 L8.70710678,13 L11.8535534,16.1464466 C12.0488155,16.3417088 12.0488155,16.6582912 11.8535534,16.8535534 C11.6582912,17.0488155 11.3417088,17.0488155 11.1464466,16.8535534 L7.14644661,12.8535534 C6.95118446,12.6582912 6.95118446,12.3417088 7.14644661,12.1464466 L11.1464466,8.14644661 C11.3417088,7.95118446 11.6582912,7.95118446 11.8535534,8.14644661 C12.0488155,8.34170876 12.0488155,8.65829124 11.8535534,8.85355339 L8.70710678,12 Z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SlidesData: [
        {
          id: 1,
          pic: require("@/assets/img/png1@2x.png"),
          name: "scarlett",
          validity: "Admin",
        },
        {
          id: 2,
          pic: require("@/assets/img/png2@2x.png"),
          name: "nariya",
          validity: "full access",
        },
        {
          id: 3,
          pic: require("@/assets/img/png3@2x.png"),
          name: "riya",
          validity: "full access",
        },
        {
          id: 4,
          pic: require("@/assets/img/png4@2x.png"),
          name: "dad",
          validity: "full access",
        },
        {
          id: 5,
          pic: require("@/assets/img/png5@2x.png"),
          name: "mom",
          validity: "full access",
        },
        {
          id: 6,
          pic: require("@/assets/img/png3@2x.png"),
          name: "nariya",
          validity: "full access",
        },
        {
          id: 7,
          pic: require("@/assets/img/png3@2x.png"),
          name: "dad",
          validity: "full access",
        },
      ],
      innerWidth: 0,
      singleWidth: 0,
      currentIndex: 0,
    };
  },
  props: {
    dataPerSlide: {
      type: null,
      default: 5.5,
    },
  },
  computed: {
    slideinnerMarginLeft() {
      // translate margin left when click btn
      return this.currentIndex * this.singleWidth;
    },
  },
  methods: {
    goToNext() {
      //to next index
      if (this.currentIndex === this.SlidesData.length - 1) {
        return;
      }
      this.currentIndex++;
    },
    goToPrev() {
      //to prev index
      if (this.currentIndex === 0) {
        return;
      }
      this.currentIndex--;
    },
  },
  mounted() {
    //width box slide
    this.$nextTick(() => {
      let singleWidth = this.$el.clientWidth / this.dataPerSlide;
      this.$set(this.$data, "singleWidth", singleWidth);
      this.$set(this.$data, "innerWidth", singleWidth * this.SlidesData.length);
    });
  },
};
</script>
