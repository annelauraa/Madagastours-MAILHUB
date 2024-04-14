<template>
  <div>
    <!-- Afficher le contenu si la taille de l'écran est grande -->
    <div v-if="isLargeScreen" class="flex text-white overflow-hidden">
      <div class="flex-1 flex justify-center items-center h-screen ml-20">
        <img
          src="../assets/img/Logo_with_text.png"
          alt="Logo MailHUB"
          class="max-w-full h-auto"
        />
      </div>
      <div class="flex-1 flex items-center justify-center h-screen pl-10">
        <LoginForm class="w-full" />
      </div>
    </div>

    <!-- Afficher le contenu si la taille de l'écran est petite -->
    <div
      v-else
      class="flex flex-col items-center justify-center h-screen overflow-hidden"
    >
      <!-- Image au-dessus du formulaire LoginForm -->
      <img
        src="../assets/img/Logo_with_text.png"
        alt="Petite Image"
        class="max-w-full h-20 mb-4"
        style="height: 100px"
      />

      <LoginForm />
    </div>
  </div>
  <LogFooter></LogFooter>
</template>

<!-- Le reste de votre code reste inchangé -->

<!-- Le reste de votre code reste inchangé -->

<script>
import LoginForm from "@/components/form.vue";

import LogFooter from "@/components/footer.vue";

export default {
  name: "authentification_page",
  components: {
    LoginForm,
    LogFooter,
  },
  data() {
    return {
      isLargeScreen: window.innerWidth >= 768, // Définir la condition en fonction de la taille de l'écran
    };
  },
  mounted() {
    // Mettre à jour la condition lorsque la taille de l'écran change
    window.addEventListener("resize", this.updateScreenSize);
  },
  methods: {
    updateScreenSize() {
      this.isLargeScreen = window.innerWidth >= 768;
    },
  },
};
</script>

<style>
body {
  background-color: #505050;
  background-image: url("@/assets/img/Background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
/* Media query pour écran de 768px ou moins */
@media (max-width: 768px) {
  body {
    background-image: url("@/assets/img/BackgroundSP.png");
  }
}
</style>
