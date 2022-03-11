<template>
  <v-row :style="{ width: `${cards * 100}%` }">
    <v-col
      lg="4"
      v-for="card in cards"
      :key="card.id"
      :style="{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }"
    >
      <card :card="card" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Card from "@/components/CameraLive/Card.vue";
export default {
  components: {
    Card,
  },

  computed: {
    ...mapState(["cards", "currentIndex", "selected"]),
  },
  methods: {
    ...mapMutations(["prevCard", "nextCard", "selectCard"]),
  },
  mounted() {
    let touch = {};
    this.$el.addEventListener("touchstart", (evt) => {
      touch.startX = evt.touches[0].clientX;
      touch.endX = 0;
    });
    this.$el.addEventListener("touchmove", (evt) => {
      touch.endX = evt.touches[0].clientX;
    });
    this.$el.addEventListener("touchend", () => {
      if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
        return;
      }
      if (touch.endX < touch.startX) {
        this.nextCard();
      } else {
        this.prevCard();
      }
    });
  },
};
</script>
