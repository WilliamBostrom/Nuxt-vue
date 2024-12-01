<template>
  <div class="sm:mt-[40px] md:mt-[50px] mt-[60px] h-full">
    <div class="flex flex-col-reverse items-center gap-5">
      <div v-if="!success">
        <form
          @submit.prevent="handleLogin"
          class="card flex flex-col items-center justify-center w-full form-css p-3 min-w-[350px]"
        >
          <label for="email"
            >Email
            <input
              v-model="email"
              type="text"
              required
              placeholder="example@mail.com"
              name="email"
          /></label>

          <button :disable="pending" type="submit" class="btn w-[250px]">
            Sign-in
          </button>
        </form>
      </div>
      <div
        class="card max-w-[350px] flex items-center flex-col justify-center px-4"
        v-else
      >
        <h2 class="text-2xl mb-4">Email has been sent!</h2>
        <p class="text-center mb-5">
          We have sent an email to <strong>{{ email }}</strong> with a link to
          sign-in.
        </p>
        <p class="text-sm">
          <strong>IMPORTANT:</strong> The link will expire in 5 minutes.
        </p>
      </div>
      <div>
        <h1 class="text-4xl text-center">
          Sign-in to <strong>NuxtHome</strong>
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const success = ref(false);
const email = ref("");
const pending = ref(false);
const supabase = useSupabaseClient();
const redirectUrl = useRuntimeConfig().public.baseUrl;

useRedirectIfAuth();

const handleLogin = async () => {
  pending.value = true;

  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: `${redirectUrl}/confirm`,
      },
    });
    if (error) {
      alert("Error authenticating");
      console.log(error.message);
    } else {
      success.value = true;
    }
  } finally {
    pending.value = false;
  }
};
</script>

<style scoped>
form {
  padding: 20px;
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
