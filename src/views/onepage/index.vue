<template>
  <div id="one-page">
    <carousel-map></carousel-map>
    <show-subject></show-subject>
    <show-teacher></show-teacher>
  </div>
</template>


<script>
import CarouselMap from "components/CarouselMap/index.vue";
import showSubject from "components/showsubject/index.vue";
import showTeacher from "components/showteacher/index.vue";
export default {
  name: "onepage",
  components: {
    CarouselMap,
    showSubject,
    showTeacher,
  },
};
</script>

<style lang="scss" scoped>
#one-page {
  position: relative;
  height: 1330px;
}
</style>