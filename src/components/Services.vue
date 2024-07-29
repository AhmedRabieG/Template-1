<script setup>
import { ref } from "vue";

    const selectedIndex = ref(null);

    function selectedItem(index) {
        selectedIndex.value = index;
        console.log(selectedIndex.value)
    };
 
</script>

<template>
    <div class="services py-[80px] ">
        <div class="container ">
            <div class="flex  gap-[80px]">
                <div class="ml-[44px] w-[55%]">
                    <img class="rounded-[16px] aspect-[3/4] object-cover" src="../assets/images/services.svg" alt="services-img">
                </div>
                <div class="mr-[44px] ml-[40px] w-[45%] py-[24px]">
                    <h4 class="text-[20px] mb-6 tracking-[0.25px]">The Identity solution for every industry</h4>
                    <div class="flex flex-col items-start text-[#191919] !text-[33px] mb-4">
                        <button @click="selectedItem(0)" :class="{'selcted': selectedIndex === 0}" class="opacity-50 mb-2.5" type="button">Public Sector</button>
                        <button @click="selectedItem(1)" :class="{'selcted': selectedIndex === 1}" class="opacity-50 mb-2.5" type="button">Retail</button>
                        <button @click="selectedItem(2)" :class="{'selcted': selectedIndex === 2}" class="opacity-50 mb-2.5" type="button">Financial Services </button>
                        <button @click="selectedItem(3)" :class="{'selcted': selectedIndex === 3}" class="opacity-50 mb-2.5" type="button">Healthcare </button>
                        <button @click="selectedItem(4)" :class="{'selcted': selectedIndex === 4}" class="opacity-50 mb-2.5" type="button">Travel + Hospitality </button>
                        <button @click="selectedItem(5)" :class="{'selcted': selectedIndex === 5}" class="opacity-50 mb-2.5" type="button">Technology </button>
                        <button @click="selectedItem(6)" :class="{'selcted': selectedIndex === 6}" class="opacity-50 mb-2.5" type="button">Energy </button>
                        <button @click="selectedItem(7)" :class="{'selcted': selectedIndex === 7}" class="opacity-50 mb-2.5" type="button">Nonprofit</button>
                    </div>
                    <div>
                        <div v-if="selectedIndex === 0" class="text-[#191919] text-[20px]">
                            <p class="mb-2.5">See how Okta delivers a secure Identity for central and local government and educational institutions.</p>
                            <a class="font-medium underline" href="#">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.selcted {
    opacity: 1;
    font-weight: 500;
} 
</style>