<template>
  <div class="col">
    <article class="card-item shadow_lg">
      <div class="card-item__img-wrapper">
        <h3 class="card-item__title h-reset h-position-t">{{i}}</h3>
        <img
          class="card-item__img"
          :src="img"
          alt="card image"
        >
      </div>
      <div class="card-item__content">
        <p
          class="card-item__text-item"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptas repudiandae hic velit qui, illum quaerat, earum est magni tenetur, enim dicta. Voluptatibus deserunt quos nisi ad perferendis eius quae!</p>
      </div>
      <div class="card-item__divider"></div>
      <div class="card-item__footer">
        <a class="card-item__link" href="#">read more...</a>
        <button
          class="card-item__add-button"
          data-item-id="096751226"
          data-item-img="https://images.unsplash.com/photo-1519687198309-ea5b4e52fc1c?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=cd8727fe58f7e6c3c5163d9c99354ddc"
          data-item-name="Some title"
          data-item-weight="52.00"
          data-item-price="11.56"
        >add</button>
      </div>
    </article>
  </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: ''
        },
        i: {
            type: Number
        }
    },
};
</script>

<style scoped>
.col {
  float: left;
  padding: 1em;
  box-sizing: border-box;
}
@media screen and (min-width: 1200px) {
  .col {
    width: calc(100% / 3);
  }
}
@media screen and (max-width: 1200px) {
  .col {
    width: calc(100% / 3);
  }
}
@media screen and (max-width: 800px) {
  .col {
    width: calc(100% / 2);
  }
}
@media screen and (max-width: 590px) {
  .col {
    width: calc(100%);
  }
}

.shadow_sm {
  box-shadow: 1px 1px 5px #aaa;
}

.shadow_md {
  box-shadow: 3px 3px 15px #aaa;
}

.shadow_lg {
  box-shadow: 6px 6px 30px #aaa;
}

.shadow_xl {
  box-shadow: 10px 10px 50px #aaa;
}

.card-item {
  max-width: 100%;
  position: relative;
  z-index: 1;
}
.card-item__divider {
  width: 100%;
  height: 1px;
  background-color: #ddd;
}
.card-item__title {
  font-size: 1.7em;
  position: absolute;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0.3em 0.4em;
  width: 100%;
  color: #222;
}
.card-item__img-wrapper {
  position: relative;
  max-width: 100%;
  height: 200px;
  overflow: hidden;
}
.card-item__img {
  max-width: 100%;
  min-height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card-item__content {
  padding: 1em 0.8em;
}
.card-item__text-item {
  padding: 0;
  margin: 0;
  color: #222;
  font-size: 0.9em;
}
.card-item__footer {
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
}
.card-item__link {
  color: #16f;
  text-decoration: none;
  display: inline-block;
  padding: 0.5em 0.4em 0.5em;
  transition: 0.3s ease;
}
.card-item__link:hover {
  color: #0c47b3;
  text-shadow: 1px 1px 1px #ddd;
}
.card-item__add-button {
  background-color: #16f;
  border: none;
  padding: 0.1em 3em;
  color: #fff;
  border-radius: 3px;
  text-transform: uppercase;
  box-shadow: 3px 3px 9px #aaa;
  cursor: pointer;
  transition: 0.3s ease;
}
.card-item__add-button:hover {
  background-color: #0e52cc;
}

.header {
  width: 100%;
  height: 60px;
  background-color: #16f;
}

.basket-toggle {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 0 0;
  padding-right: 1em;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
}
.basket-toggle:hover {
  color: #55ffff;
}
.basket-toggle:hover svg {
  fill: #55ffff;
}
.basket-toggle svg {
  fill: #fff;
}


</style>