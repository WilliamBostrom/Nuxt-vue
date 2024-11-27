<template>
  <div class="default-margin mt-[80px]">
    <div class="flex flex-row">
      <div class="bg-gray-50 mr-7">
        <form
          class="card flex flex-col items-start justify-center border-r border-gray-300 w-full form-css p-3"
          action=""
        >
          <label for="name"
            >Username
            <input
              v-if="isRegistration"
              type="text"
              placeholder="Your name"
              name="name"
          /></label>
          <label for="email"
            >Email
            <input
              type="text"
              required
              placeholder="example@mail.com"
              name="email"
          /></label>
          <label for="password"
            >Password
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
            />
          </label>
          <label for="password"
            >Confirm password
            <input
              v-if="isRegistration"
              type="password"
              placeholder="Confirm password"
              name="password"
          /></label>
          <button class="btn w-[250px]">
            {{ isRegistration ? "Sign up" : "Submit" }}
          </button>
          <p class="mt-3" v-if="isRegistration">
            Already have an account?
            <a class="underline" href="/login">Login</a>
          </p>
          <p class="mt-3" v-if="!isRegistration">
            Do not have an account yet?
            <a class="underline" href="/register">Register</a>
          </p>
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
  padding: 20px;
  height: 400px;
  padding-top: 20px;
}

.form-css input {
  width: 250px;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 6px;
  border: 1px solid black;
}

.form-css input:last-of-type {
  margin-bottom: 15px;
}

label {
  display: flex;
  flex-direction: column;
}
</style>
