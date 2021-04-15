<template>
  <div class="routeInfo">
    <h2>{{ routeInfo.activityName }}</h2>
    <div class="map">
      <iframe
        :src="`https://maps.google.com/maps?q=${routeInfo.latitude},${routeInfo.longitude}&hl=en&z=14&amp;output=embed`"
        width="100%"
        height="250"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="boxes">
      <div class="box is5 hasTextCentered">
        <p class="infoText">Distance</p>
        <p class="infoData">{{ routeInfo.distance }}</p>
      </div>
      <div class="box is5 hasTextCentered">
        <p class="infoText">Elevation gain</p>
        <p>{{ routeInfo.heightGain }}</p>
      </div>
      <div class="box is5 hasTextCentered">
        <p class="infoText">MovingTime</p>
        <p>{{ routeInfo.movingTime }}</p>
      </div>
      <div class="box is5 hasTextCentered">
        <p class="infoText">Pace</p>
        <p>{{ routeInfo.pace }}</p>
      </div>
      <div class="box is5 hasTextCentered">
        <p class="infoText">Avg speed</p>
        <p>{{ routeInfo.speed }}</p>
      </div>
      <div class="box is5 hasTextCentered">
        <p class="infoText">Calories</p>
        <p>{{ routeInfo.calories }}</p>
      </div>
    </div>
    <button class="analyticsButton">view analytics</button>
    <br />
    <hr />
    <div class="boxes">
      <div class="box is1">
        <img class="isRound" :src="routeInfo.with[0].picture" />
      </div>
      <div class="box is7">
        <p>
          {{ routeInfo.with[0].firstname }} {{ routeInfo.with[0].lastname }}
        </p>
      </div>
      <div class="box is2">
        <button class="viewMore">View group</button>
      </div>
    </div>
    <hr />
    <div class="boxes">
      <div class="box is1">
        <i class="far fa-clock fa-2x"></i>
      </div>
      <div class="box is4">
        <p>Apple watch 2gen</p>
      </div>
      <div class="box is5"></div>
    </div>
    <hr />
    <div class="boxes">
      <div class="box is1">
        &nbsp;
        <i class="fas fa-smog fa-2x"></i>
      </div>
      <div class="box is9">
        <p>
          Halfbewolkt Temperatuur 6 ℃ Vochtigheid 54% Gevoelstemperatuur 3 ℃
          Windsnelheid 18,5 km/u Windrichting NNW
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "routeInfo",
  props: {
    routeInfo: Object,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.routeInfo {
  height: 80%;
  padding: 0.75rem;
}

h2 {
  margin: 0;
  padding-bottom: 0.5em;
  font-weight: bold;
}

.infoText {
  font-size: 0.7em;
  text-decoration-color: lightslategray;
}

button {
  padding: 0.5em;
  border-radius: 5px;
}

button.analyticsButton {
  padding: 1em;
  width: 100%;
  color: white;
  background-color: var(--strava-orange);
}

hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
p {
  padding-left: 5px;
}

img.isRound {
  border-radius: 50%;
}
button.viewMore {
  color: var(--strava-orange);
  background: white;
  border: 1px solid var(--strava-orange);
}

.boxes {
  display: flex;
  flex-wrap: wrap;
}
.box {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
  padding: 0;
}

.box.is1 {
  min-width: 10%;
  max-width: 10%;
}
.box.is2 {
  min-width: 20%;
}
.box.is3 {
  min-width: 30%;
}
.box.is4 {
  min-width: 40%;
}
.box.is5 {
  min-width: 50%;
}
.box.is6 {
  min-width: 60%;
}
.box.is7 {
  min-width: 70%;
}

.hasTextCentered {
  text-align: center;
}
</style>