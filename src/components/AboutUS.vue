<script setup>
import { Swiper, SwiperSlide  } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
//  import 'swiper/css/pagination';

const modules = [Navigation];

</script>

<template>
  <div class="about-us py-[80px]">
    <div class="container">
      <div class="about-us__content">
        <h2 class="text-[42px] -tracking-[1.5px]">About Us</h2>

        <!-- <div class="swiper-button-dsd">
          <button class="" type="button" >
            <img
              class=""
              src="../assets/images/circle-arrow-left.svg"
              alt="arrow-left"
            />
          </button>
        </div>
        <div class="swiper-button-negfhxt">
          <button class="">
            <img
              class=""
              src="../assets/images/circle-arrow-right.svg"
              alt="arrow-right"
            />
          </button>
        </div> -->
        <swiper
          class="mySwiper pt-[47px]"
          :slides-per-view="3"
          :space-between="24"
          :pagination="{ clickable: true }"
          :loop="true"
          :modules="modules"
          ref="slider"
        >
          <swiper-slide>
            <div class="p-4 bg-[#F7F8FA] rounded-[12px]">
              <img
                class="w-[100%] aspect-[9/7] mb-6 rounded-[12px] object-cover"
                src="../assets/images/about-us-img-1.svg"
                alt="about-us-img"
              />
              <div class="ps-1 pe-[45px] mb-4">
                <h4 class="mb-2 line-clamp-1">Sales</h4>
                <p
                  class="opacity-60 text-[#2E2E38] text-[15px] leading-6 line-clamp-2"
                >
                  Boost your sales performance with Superchat. Automate
                  processes, qualify your leads and
                </p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="p-4 bg-[#F7F8FA] rounded-[12px]">
              <img
                class="w-[100%] aspect-[9/7] mb-6 rounded-[12px] object-cover"
                src="../assets/images/about-us-img-2.svg"
                alt="about-us-img"
              />
              <div class="ps-1 pe-[45px] mb-4">
                <h4 class="mb-2 line-clamp-1">Marketing</h4>
                <p
                  class="opacity-60 text-[#2E2E38] text-[15px] leading-6 line-clamp-2"
                >
                  Boost your sales performance with Superchat. Automate
                  processes, qualify your leads and
                </p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="p-4 bg-[#F7F8FA] rounded-[12px]">
              <img
                class="w-[100%] aspect-[9/7] mb-[24px] rounded-[12px] object-cover"
                src="../assets/images/about-us-img-3.svg"
                alt="about-us-img"
              />
              <div class="ps-1 pe-[45px] mb-4">
                <h4 class="mb-2 line-clamp-1">Support</h4>
                <p
                  class="opacity-60 text-[#2E2E38] text-[15px] leading-6 line-clamp-2"
                >
                  Boost your sales performance with Superchat. Automate
                  processes, qualify your leads and
                </p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="p-[16px] bg-[#F7F8FA] rounded-[12px]">
              <img
                class="w-[100%] aspect-[9/7] mb-[24px] rounded-[12px] object-cover"
                src="../assets/images/about-us-img-3.svg"
                alt="about-us-img"
              />
              <div class="ps-1 pe-[45px] mb-4">
                <h4 class="mb-2 line-clamp-1">Support</h4>
                <p
                  class="opacity-60 text-[#2E2E38] text-[15px] leading-6 line-clamp-2"
                >
                  Boost your sales performance with Superchat. Automate
                  processes, qualify your leads and
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- <div class="swiper-button-dsd">
                        <button class="" type="button"><img class="" src="../assets/images/circle-arrow-left.svg" alt="arrow-left"></button>
                    </div>
                    <div class="swiper-button-negfhxt">
                        <button class=""><img class="" src="../assets/images/circle-arrow-right.svg" alt="arrow-right"></button>
                    </div> -->
    </div>
  </div>
</template>

<style lang="scss">
.swiper {
  padding-top: 47px;

  .swiper-button-next {
    top: 4%;
    right: 4%;
    &::after {
      content: url("../assets/images/circle-arrow-left.svg");
    }
  }
  .swiper-button-prev {
    top: 4%;
    left: 97%;
    &::after {
      content: url("../assets/images/circle-arrow-right.svg");
    }
  }
}
</style>
