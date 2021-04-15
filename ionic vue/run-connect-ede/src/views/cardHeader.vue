<template>
  <div id="header">
    <div class="box is3">
      <img class="isRound" :src="user.picture" />
    </div>
    <div class="box">
      <h3>{{ user.firstname }} {{ user.lastname }}</h3>
      <p class="date"> <i class="fas fa-walking"></i> {{ date }} {{ location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardHeader",
  props: {
    user: Object,
    title: String,
    date: String,
    location: String,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
#header {
  display: flex;
  flex-wrap: wrap;
}
img.isRound{
 border-radius: 50%;
}
h3{
  font-size: 1.5em;
  font-weight: bold;
}

p.date{
  font-size:0.7em;
}

.box {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}

.box.is1 {
  max-width: 10%;
}
.box.is2 {
  max-width: 20%;
}
.box.is3 {
  max-width: 30%;
}
</style>