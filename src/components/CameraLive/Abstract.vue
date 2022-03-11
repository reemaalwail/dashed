<template>
  <div class="abstract">
    <div class="abstract_face">
      <div v-for="post in posts" :key="post.id">
        <v-container fluid>
          <v-row>
            <v-col lg="6" class="Text--Left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.1"
                height="23.1"
                viewBox="0 0 12.1 23.1"
              >
                <path
                  id="Path"
                  d="M11.3,14.39a.678.678,0,0,0-.906-.271.647.647,0,0,0-.277.886,4.477,4.477,0,0,1-.863,5.39,4.69,4.69,0,0,1-3.369,1.294A4.63,4.63,0,0,1,1.34,17.13a4.524,4.524,0,0,1,2.578-4.068.653.653,0,0,0,.37-.586V2.644A1.352,1.352,0,0,1,5.654,1.31h.692A1.352,1.352,0,0,1,7.711,2.644v9.424a.67.67,0,0,0,1.34,0v-.784h1.613a.655.655,0,1,0,0-1.31H9.051V8.955h.634a.655.655,0,1,0,0-1.31H9.051V6.626h1.613a.655.655,0,1,0,0-1.31H9.051V4.3h.634a.655.655,0,1,0,0-1.31H9.051V2.644A2.678,2.678,0,0,0,6.346,0H5.654A2.678,2.678,0,0,0,2.949,2.644v9.444A5.808,5.808,0,0,0,0,17.128,5.961,5.961,0,0,0,5.855,23L6,23a6.027,6.027,0,0,0,4.19-1.668A5.763,5.763,0,0,0,11.3,14.39Z"
                  transform="translate(0.05 0.05)"
                  fill="#242424"
                  stroke="#242424"
                  stroke-miterlimit="10"
                  stroke-width="0.1"
                />
              </svg>
              <span>{{ post.temp }}</span>
            </v-col>
            <v-col lg="6" class="Text--Right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.6"
                height="17.6"
                viewBox="0 0 22.6 17.6"
              >
                <path
                  id="Path"
                  d="M17.391,8h-.082V6.318c0-3.484-2.557-6.318-5.7-6.318s-5.7,2.835-5.7,6.318v.591H4.1A4.341,4.341,0,0,0,0,11.455,4.341,4.341,0,0,0,4.1,16H17.391A3.82,3.82,0,0,0,21,12,3.82,3.82,0,0,0,17.391,8Z"
                  transform="translate(0.8 0.8)"
                  fill="none"
                  stroke="#242424"
                  stroke-miterlimit="10"
                  stroke-width="1.6"
                />
              </svg>
              <span>{{ post.humidity }}</span>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>
