<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";


//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Otb pinos cobros
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Bienvenidos a la pagina de los pinos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">



    <div class="container">
      <div class="row">
        <div class="d-flex flex-column w-100 text-center p-5 mb-8">
          <h3>Tecnologias utilizadas</h3>
          <div class="d-flex justify-content-center mt-3 flex-wrap">
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Bootstrap 5 - Most popular front-end component library"
            >
              <img
                :src="logoBootstrap"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="opacity-5 ms-3"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Coming Soon"
            >
              <img
                :src="logoTailwind"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href="https://www.creative-tim.com/product/vue-material-kit-pro"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Vue.js - Is a Progressive JavaScript Framework"
            >
              <img
                :src="logoVue"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="opacity-5"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Coming Soon"
            >
              <img
                :src="logoAngular"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href="https://www.creative-tim.com/product/material-kit-react-pro"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="React – A JavaScript library for building user interfaces"
            >
              <img
                :src="logoReact"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="opacity-5"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Coming Soon"
            >
              <img
                :src="logoSketch"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
