<template>
  <div
    class="card"
    :class="{
      card__active: card.active,
    }"
  >
    <card-front :card="card" @click.native="toggleCard({ card })" />
    <card-back :card="card" @click.native="handleClick" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import CardFront from "@/components/CameraLive/CardFront.vue";
import CardBack from "@/components/CameraLive/CardBack.vue";
export default {
  components: {
    CardFront,
    CardBack,
  },
  props: {
    card: {
      type: Object,
    },
    selected: {
      type: Boolean,
    },
  },
  methods: {
    ...mapMutations(["toggleCard"]),
    handleClick() {
      const appRect = document.querySelector("#app").getBoundingClientRect();
      const elRect = this.$el.getBoundingClientRect();
      const card = this.card;
      const rect = {};
      rect.top = elRect.top - appRect.top;
      rect.left = elRect.left - appRect.left;
      rect.width = elRect.width;
      rect.height = elRect.height;
      rect.appWidth = appRect.width;
      rect.appHeight = appRect.height;
      this.$emit("select", { rect, card });
    },
  },
};
</script>
