<template>
  <div class="sm:mt-[40px] md:mt-[50px] mt-[60px] h-full">
    <div class="flex flex-col-reverse items-center gap-5">
      <div class="">
        <form
          class="card flex flex-col items-center justify-center w-full form-css p-3 min-w-[350px]"
          action=""
        >
          <label v-if="isRegistration" for="name"
            >Username <input type="text" placeholder="Your name" name="name"
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
          <label v-if="isRegistration" for="password"
            >Confirm password
            <input
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
        <h1 class="text-6xl underline">
          {{ isRegistration ? "Register" : "Login" }}
        </h1>
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
}

input {
  outline: none;
}
input:focus {
  @apply focus:outline-none
  focus:ring-2
  focus:ring-[#12b488];
}

.form-css input:last-of-type {
  margin-bottom: 15px;
}

label {
  display: flex;
  flex-direction: column;
}
</style>
