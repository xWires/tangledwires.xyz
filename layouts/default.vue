<script setup lang="ts">
useSeoMeta({
  title: 'TangledWires',
  description: '',
  ogTitle: 'TangledWires',
  ogDescription: '',
  ogImage: 'https://tangledwires.xyz/xwires.png',
  ogUrl: 'https://tangledwires.xyz/',
  twitterTitle: 'TangledWires',
  twitterDescription: '',
  twitterImage: 'https://tangledwires.xyz/xwires.png',
  twitterCard: 'summary',
});
</script>

<template>
  <div class="flex justify-center">
    <div style="padding: 25px; max-width: 1500px">
      <AppHeader style="margin-bottom: 20px" />
      <div style="padding: 10px">
        <slot />
      </div>
      <br>
      <AppFooter />
    </div>
  </div>
</template>