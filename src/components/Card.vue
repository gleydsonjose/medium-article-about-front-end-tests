<template>
  <section class="card">
    <div class="card-inner">
      <div class="card__user-image">
        <i class="mdi mdi-account card__user-image-inner"></i>
      </div>

      <h1 class="card__user-name">Nome do usuário</h1>
      <p class="card__user-biography">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat
        numquam maxime praesentium inventore commodi rem excepturi earum labore,
        est officiis dolore cum facere illo nobis exercitationem asperiores
        eaque. Reiciendis?
      </p>
      <p class="card__user-country">
        <i class="mdi mdi-map-marker-outline"></i>
        Hamilton, Ontario - Canadá
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card {
  background-color: #faf9f9;
  width: 100%;
  border: 1px solid #e9e8e8;
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
}

.card-inner {
  padding: 12px;
}

.card__user-image {
  background-color: #222222;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.card__user-image-inner {
  font-size: 50pt;
  color: #fff;
}

.card__user-name {
  margin: 16px 0 10px 0;
  font-size: 14pt;
  color: #2c3e50;
}

.card__user-biography {
  margin: 0;
  font-size: 11pt;
  color: #59636d;
}

.card__user-country {
  margin: 12px 0 0 0;
  font-size: 11pt;
  color: #606a74;
}
</style>
