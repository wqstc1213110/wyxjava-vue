<template>
    <div class="news">
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>

</style>
