<template>
  <div class="default-margin mt-[80px]">
    <div class="flex flex-row">
      <div class="bg-gray-50 mr-7">
        <form
          class="flex flex-col items-start border-r border-gray-300 w-full form-css"
          action=""
        >
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <input
            type="password"
            placeholder="Confirm password"
            name="password"
          />
        </form>
      </div>
      <div>
        <h1 class="text-6xl">{{ isRegistration ? "Register" : "Login" }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isRegistration: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
form {
  padding: 10px;
}

.form-css input {
  width: 250px;
  margin-bottom: 16px;
  padding: 6px;
}

.form-css input:last-of-type {
  margin-bottom: 30px;
}
</style>
