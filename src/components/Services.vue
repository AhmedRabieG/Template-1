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
            <div class="flex justify-between items-center font-Aeonik max-w-[1152px] mx-auto">
                
                <img class="rounded-[16px] w-[561px] aspect-[5.61/7.55] object-cover" src="../assets/images/services.svg" alt="services-img">
                
                <div class="ps-[40px] py-[24px] w-[511px]">
                    <h4 class="text-[20px] mb-6 tracking-[0.25px] font-HelveticaNeue">The Identity solution for every industry</h4>
                    <div class="flex flex-col items-start text-[#191919] !text-[38px] mb-6 leading-[1.05]">
                        <button @click="selectedItem(0)" :class="{'selcted': selectedIndex === 0}" class="opacity-50 mb-[20px]" type="button">Public Sector</button>
                        <button @click="selectedItem(1)" :class="{'selcted': selectedIndex === 1}" class="opacity-50 mb-[20px]" type="button">Retail</button>
                        <button @click="selectedItem(2)" :class="{'selcted': selectedIndex === 2}" class="opacity-50 mb-[20px]" type="button">Financial Services </button>
                        <button @click="selectedItem(3)" :class="{'selcted': selectedIndex === 3}" class="opacity-50 mb-[20px]" type="button">Healthcare </button>
                        <button @click="selectedItem(4)" :class="{'selcted': selectedIndex === 4}" class="opacity-50 mb-[20px]" type="button">Travel + Hospitality </button>
                        <button @click="selectedItem(5)" :class="{'selcted': selectedIndex === 5}" class="opacity-50 mb-[20px]" type="button">Technology </button>
                        <button @click="selectedItem(6)" :class="{'selcted': selectedIndex === 6}" class="opacity-50 mb-[20px]" type="button">Energy </button>
                        <button @click="selectedItem(7)" :class="{'selcted': selectedIndex === 7}" class="opacity-50" type="button">Nonprofit</button>
                    </div>
                    <div>
                        <div v-if="selectedIndex === 0" class="text-[#191919] text-[20px] tracking-[.1px] leading-[1.4]">
                            <p class="mb-[19px]">Public Sector := See how Okta delivers a secure Identity for central and local government and educational institutions.</p>
                            <a class="font-medium underline" href="#">Learn more</a>
                        </div>
                        <div v-if="selectedIndex === 1" class="text-[#191919] text-[20px] tracking-[.1px] leading-[1.4]">
                            <p class="mb-[19px]">Retail := See how Okta delivers a secure Identity for central and local government and educational institutions.</p>
                            <a class="font-medium underline" href="#">Learn more</a>
                        </div>
                        <div v-if="selectedIndex === 2" class="text-[#191919] text-[20px] tracking-[.1px] leading-[1.4]">
                            <p class="mb-[19px]">Financial Services := See how Okta delivers a secure Identity for central and local government and educational institutions.</p>
                            <a class="font-medium underline" href="#">Learn more</a>
                        </div>
                        <div v-if="selectedIndex === 3" class="text-[#191919] text-[20px] tracking-[.1px] leading-[1.4]">
                            <p class="mb-[19px]">Healthcare := See how Okta delivers a secure Identity for central and local government and educational institutions.</p>
                            <a class="font-medium underline" href="#">Learn more</a>
                        </div>
                        <div v-if="selectedIndex === 4" class="text-[#191919] text-[20px] tracking-[.1px] leading-[1.4]">
                            <p class="mb-[19px]">Travel + Hospitality := See how Okta delivers a secure Identity for central and local government and educational institutions.</p>
                            <a class="font-medium underline" href="#">Learn more</a>
                        </div>
                        <div v-if="selectedIndex === 5" class="text-[#191919] text-[20px] tracking-[.1px] leading-[1.4]">
                            <p class="mb-[19px]">Technology := See how Okta delivers a secure Identity for central and local government and educational institutions.</p>
                            <a class="font-medium underline" href="#">Learn more</a>
                        </div>
                        <div v-if="selectedIndex === 6" class="text-[#191919] text-[20px] tracking-[.1px] leading-[1.4]">
                            <p class="mb-[19px]">Energy := See how Okta delivers a secure Identity for central and local government and educational institutions.</p>
                            <a class="font-medium underline" href="#">Learn more</a>
                        </div>
                        <div v-if="selectedIndex === 7" class="text-[#191919] text-[20px] tracking-[.1px] leading-[1.4]">
                            <p class="mb-[19px]">Nonprofit := See how Okta delivers a secure Identity for central and local government and educational institutions.</p>
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