<template>
  <div class="card_back">
    <div class="card_head">
      <p class="card_address">{{ card.content }}</p>
    </div>
    <div class="card_body">
      <abstract :posts="card.posts" />
    </div>
  </div>
</template>

<script>
import Abstract from "@/components/CameraLive/Abstract.vue";
export default {
  components: {
    Abstract,
  },
  props: {
    card: {
      type: Object,
    },
  },
};
</script>
