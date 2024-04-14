<template>
  <div class="flex items-center">
    <form
      class="bg-custom-bg p-10 rounded-lg shadow-md w-full max-w-md"
      @submit.prevent="handleSubmit"
    >
      <!-- Email Field -->
      <div class="mb-4">
        <label
          for="Email"
          class="block text-sm sm:text-base md:text-lg font-medium text-gray-100"
        >
          Email address
        </label>
        <input
          type="text"
          id="Email"
          v-model="Email"
          :class="{ 'border-red-500': errors.Email }"
          class="mt-1 p-2 w-full border rounded-md text-base text-gray-700"
          placeholder="Enter your email"
        />
        <p v-if="errors.Email" class="text-red-500 text-sm mt-1">
          {{ errors.Email }}
        </p>
      </div>

      <!-- Password Field -->
      <!-- Password Field -->
      <div class="mb-4 relative">
        <label
          for="password"
          class="block text-sm sm:text-base md:text-lg font-medium text-gray-100"
        >
          Password
        </label>
        <input
          id="password"
          v-model="password"
          :class="{ 'border-red-500': errors.password }"
          class="mt-1 p-2 w-full border rounded-md text-base text-gray-700 pr-10"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Enter your password"
        />
        <!-- Option to Show/Hide Password -->
        <div class="absolute inset-y-1/2 right-0 pr-1">
          <font-awesome-icon
            icon="eye"
            @click="showPassword = !showPassword"
            class="cursor-pointer lg:h-8 md:h-7 w-4 text-orange-500"
          ></font-awesome-icon>
        </div>
        <p v-if="errors.password" class="text-red-500 text-sm mt-1">
          {{ errors.password }}
        </p>
      </div>

      <!-- Submit Button -->
      <div class="mb-4">
        <button
          type="submit"
          class="w-full p-2 text-base bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      Email: "",
      password: "",
      errors: {},
      submitted: false,
      showPassword: false, // Added showPassword data property
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};

      if (!this.Email.trim()) {
        this.errors.Email = "Email address is required.";
      } else if (!this.isValidEmail(this.Email)) {
        this.errors.Email = "Please enter a valid email address.";
      }

      if (!this.password.trim()) {
        this.errors.password = "Password is required.";
      }

      if (Object.keys(this.errors).length === 0) {
        console.log("Form submitted");
        this.submitted = true;
      }
    },
    isValidEmail(email) {
      // Regular expression for email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    },
  },
};
</script>

<!-- Le reste de votre code JavaScript et CSS reste inchangé -->
