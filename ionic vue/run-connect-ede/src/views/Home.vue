<template>
  <ion-page>
    <ion-header class="header" :translucent="true">
      <ion-toolbar class="toolbar">
        <ion-title class="has-text-white"
          ><i class="fas fa-arrow-left"></i> &nbsp;{{ activityType }}</ion-title
        >
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <cardHeader
        v-bind:user="{
          firstname: 'Hugo',
          lastname: 'de Jonge',
          picture:
            'https://dgalywyr863hv.cloudfront.net/pictures/athletes/9398701/2973446/7/large.jpg',
        }"
        date="April 11, 2021 at 7:06 PM"
        location="Rotterdam, South Holland"
      >
      </cardHeader>
      <routeInfo
        v-bind:routeInfo="{
          activityName: 'Avondje na het Catshuis',
          distance: '40.16km',
          heightGain: '79 m',
          movingTime: '1:26:00',
          pace: '5:05 min/km',
          speed: '11.9 km/h',
          calories: '753 Kcal',
          longitude: longitude,
          latitude: latitude,
          with: [
            {
              firstname: 'Reinald',
              lastname: 'Roos',
              picture:
                'https://dgalywyr863hv.cloudfront.net/pictures/athletes/25607833/7386476/2/medium.jpg',
            },
          ],
        }"
      >
      </routeInfo>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import cardHeader from "./cardHeader.vue";
import routeInfo from "./routeInfo.vue";

import { Geolocation } from "@ionic-native/geolocation";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    cardHeader,
    routeInfo,
  },
  created: function () {
    this.getGPS();
  },
  data() {
    return {
      activityType: "run",
      longitude: 1,
      latitude: 1,
    };
  },
  methods: {
    getGPS: function () {
      Geolocation.getCurrentPosition()
        .then((resp) => {
          this.latitude = resp.coords.latitude;
          this.longitude = resp.coords.longitude;
          console.log(resp)
          console.log(JSON.stringify(resp));
          return resp.coords;
        })
        .catch((error) => {
          console.log("Error getting location", error);
        });
    },
  },
});
</script>

<style scoped>
.has-text-white {
  color: white;
}
</style>