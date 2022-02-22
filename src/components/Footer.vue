<template>
  <footer class="footer">
    <section class="footer__social-media-group">
      <a
        class="footer__social-media footer__social-media--facebook"
        target="_blank"
        href="https://pt-br.facebook.com"
      >
        <i class="mdi mdi-facebook"></i>
      </a>
      <a
        class="footer__social-media footer__social-media--whatsapp"
        target="_blank"
        href="https://web.whatsapp.com"
      >
        <i class="mdi mdi-whatsapp"></i>
      </a>
      <a
        class="footer__social-media footer__social-media--twitter"
        target="_blank"
        href="https://twitter.com/"
      >
        <i class="mdi mdi-twitter"></i>
      </a>
      <a
        class="footer__social-media footer__social-media--instagram"
        target="_blank"
        href="https://www.instagram.com/"
      >
        <i class="mdi mdi-instagram"></i>
      </a>
    </section>

    <p class="footer__copyright-text">
      Copyright © 2022 Tests. All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  height: 120px;
  width: 100%;
}

.footer__social-media-group {
  padding-bottom: 15px;
}

.footer__social-media {
  font-size: 25pt;
  text-decoration: none;
  margin-left: 10px;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  transition-property: filter;
}

.footer__social-media:hover {
  filter: grayscale(1);
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
  transition-property: filter;
}

.footer__social-media--facebook {
  color: #1877f2;
}

.footer__social-media--whatsapp {
  color: #26cc64;
}

.footer__social-media--twitter {
  color: #1c96e8;
}

.footer__social-media--instagram {
  background-image: linear-gradient(to bottom, #c92e82, #ef7a2a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer__copyright-text {
  font-size: 10pt;
  margin: 0;
  color: #d4d4d4;
}
</style>
