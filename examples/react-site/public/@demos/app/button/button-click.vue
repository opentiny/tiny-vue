<template>
  <button-click-demo></button-click-demo>
</template>

<script>
import ButtonClick from "@/webcomps/button/button-click-webcomp.js";
customElements.define("button-click-demo", ButtonClick);
export default {};
</script>
