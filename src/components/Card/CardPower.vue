<template>
  <!-- Card progress circle devices used  -->
  <v-row>
    <v-col
      lg="3"
      md="3"
      sm="4"
      cols="12"
      xs="4"
      v-for="data in dataCardPower"
      :key="data.id"
    >
      <div class="Card--PowerDevices">
        <v-row>
          <v-col lg="6" class="Text--Left">
            <div class="name--devices">{{ data.nameDevices }}</div>
          </v-col>
        </v-row>
        <v-row class="row-process">
          <v-col lg="4" class="Text--Left">
            <div class="Amount--consumption devices">
              {{ data.number }}
              <span>Kwh</span>
            </div>
          </v-col>
          <v-col lg="8" class="Text--Right">
            <!-- bar process devices  -->
            <div class="circle-process">
              <svg>
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  v-bind:style="{
                    stroke: `${strokeOpacty(data)}`,
                  }"
                ></circle>
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  v-bind:style="{
                    stroke: `${strokeOpacty(data)}`,
                  }"
                ></circle>
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  v-bind:style="{
                    stroke: `${stroke(data)}`,
                    strokeDashoffset: `${strokeDashoffset(data)}`,
                  }"
                ></circle>
              </svg>
              <div class="number--percent">
                {{ data.percent }}<span>%</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dataCardPower: [
        {
          id: 1,
          percent: 10,
          nameDevices: "LivingRoom",
          number: "400",
        },
        {
          id: 2,
          percent: 50,
          nameDevices: "Room",
          number: "300",
        },
        {
          id: 3,
          percent: 5,
          nameDevices: "Kitchen",
          number: "600",
        },
        {
          id: 4,
          percent: 100,
          nameDevices: "Beedroom",
          number: "400",
        },
      ],
    };
  },
  methods: {
    // svg process circle math
    stroke(data) {
      if (data.percent >= 50) {
        return "rgb(135,96,177)";
      }
      if (data.percent >= 0 && data.percent < 10) {
        return "#2397AD";
      } else {
        return "rgb(215,176,96)";
      }
    },
    strokeOpacty(data) {
      if (data.percent >= 50) {
        return "rgb(228,206,246,.7)";
      }
      if (data.percent >= 0 && data.percent < 10) {
        return "rgb(113,182,186,0.7)";
      } else {
        return "rgb(238,233,205,.7)";
      }
    },
    strokeDashoffset(data) {
      if (data.percent === 100) {
        return 0;
      } else {
        return 220 - (data.percent * 220) / 100;
      }
    },
  },
};
</script>
