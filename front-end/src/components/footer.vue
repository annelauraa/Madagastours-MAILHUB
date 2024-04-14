<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="copyright-text">Copyright (c) 2024 Madagstours</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "LogFooter",
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  z-index: 9999;
  opacity: 0.5;
}

.footer-content {
  padding: 10px 0;
}

.copyright-text {
  font-size: 16px; /* Taille de la police de base */
}

/* Media queries pour ajuster la taille de la police en fonction de la taille de l'écran */
@media (max-width: 768px) {
  .copyright-text {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .copyright-text {
    font-size: 8px;
  }
}
</style>
