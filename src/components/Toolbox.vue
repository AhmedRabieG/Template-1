<script setup>
import { ref, onMounted } from "vue";

// const panel1 = ref(null);
// const panel2 = ref(null);
// const panels = [panel1, panel2];

// const toggle = (event) => {
//     console.log("dddd");
//     const panel = event.target.nextElementSibling;
//     const accord = panel.previousElementSibling;
//     if (panel.style.height) {
//         panel.style.height = null;
//         accord.classList.remove('active');
//     } else {
//         panel.style.height = `${panel.scrollHeight}px`;
//         accord.classList.add('active');
//     }
// };

// function openAccordion() {
//     let accordionContainer = document.querySelectorAll(".accordion-container")
//     accordionContainer.forEach( (item,index) => {
//         let accordion = item.querySelector(".accordion")
//         accordion.addEventListener("click", ()=>{
//             let panel = item.querySelector(".panel")
//             if (panel.style.height) {
//                 panel.style.height = null;
//             }else {
//                 panel.style.height = `${panel.scrollHeight}px`
//             }
//             // closeOpenAccordion(index);
//         })

//     });
// };

// function closeOpenAccordion(index) {
//     let accordionContainer = document.querySelectorAll(".accordion-container")
//     accordionContainer.forEach((item2,index2)=>{
//         if(index != index2){
//             let panel = item2.querySelector(".panel")
//             panel.style.height = null;
//         }

//     })
// }closeOpenAccordion();


function openAccordion(event) {
 console.log(event)
  const panel = event.parentElement.querySelector(".panel");
  console.log(panel)
  const accord = event;
  const panels = document.querySelectorAll(".panel");
  panels.forEach((item) => {
    if (item != panel) {
      item.parentElement.querySelector(".accordion").classList.remove("active");
      item.style.height = null;
    }
  });
  if (accord.classList.contains("active")) {
    panel.style.height = null;
    accord.classList.remove("active");
  } else {
    panel.style.height = `${panel.scrollHeight + 21}px`;
    accord.classList.add("active");
  }
  //  setTimeout(() => {
  //     panel.style.height = 'unset' ;
  //   }, 1000);
}
// function openAccordion(event) {
//   const panel = event.target.parentElement.querySelector(".panel");
//   const accord = event.target;
//   const panels = document.querySelectorAll(".panel");
//   panels.forEach((item) => {
//     if (item != panel) {
//       item.parentElement.querySelector(".accordion").classList.remove("active");
//       item.style.height = null;
//     }
//   });
//   if (accord.classList.contains("active")) {
//     panel.style.height = null;
//     accord.classList.remove("active");
//   } else {
//     panel.style.height = `${panel.scrollHeight}px`;
//     accord.classList.add("active");
//   }
// }
onMounted(() => {
    let accordions = document.querySelectorAll(".accordion");
    console.log(accordions)
    accordions.forEach(item => item.addEventListener("click", () => openAccordion(item)))
})

</script>

<template>
  <div class="toolbox bg-[#F7F8FA] py-[80px]">
    <div class="container">
      <div>
        <div
          class="text-center mb-[56px] w-[576px] m-auto"
        >
          <h2 class="text-[42px] mb-[12px] -tracking-[1.5px]">
            Intuitive toolbox for automations
          </h2>
          <p class="text-[18px]">
            Create intuitive automations and authentic chatbots to deliver
            outstanding customer experiences via chat.
          </p>
        </div>

        <div class="toolbox__content flex gap-[104px]">
          <div class="w-[50%]">
            <div class="flex mb-4 bg-[#fff] rounded-[12px] border-[1px] border-solid">
              
              <div class="text-[#7D7D8A] accordion-container ">
                <button
                  type="button"
                  class="flex gap-5 accordion Aeonik-font font-medium w-full text-start ps-6 pe-8 pt-6 pb-[21px]"
                > 
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22.2207C17.5228 22.2207 22 17.7436 22 12.2207C22 6.69786 17.5228 2.2207 12 2.2207C6.47715 2.2207 2 6.69786 2 12.2207C2 17.7436 6.47715 22.2207 12 22.2207Z" stroke="#7D7D8A" stroke-width="1.5"/>
                    <path d="M9 9.2207L13.5 13.7207M16.5 7.7207L10.5 13.7207" stroke="#7D7D8A" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <span>Sales support around the clock.</span>
                </button>
                <div class="panel ms-[68px] me-[32px] ">
                  <p class="mb-7 leading-[1.6]">
                    Automate your sales process by requesting important
                    information in advance and automatically assigning leads to
                    the appropriate contacts.
                  </p>
                  <a
                    class="toolbox-link"
                    href="#"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div
              class="mb-4 bg-[#fff] rounded-[12px] border-[1px] border-solid"
            >
              <div class="text-[#7D7D8A] accordion-container">
                <button
                  type="button"
                  class="flex gap-5 accordion Aeonik-font font-medium  w-full text-start ps-6 pe-8 pt-6 pb-[21px]"
                >
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#7D7D8A" stroke-width="1.5"/>
                    <path d="M5 20L19 5" stroke="#7D7D8A" stroke-width="1.5" stroke-linejoin="round"/>
                    <path d="M16 9L22 13.8528M12.4128 12.4059L19.3601 18.3634M8 15.6672L15 21.5" stroke="#7D7D8A" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <span>Easily segment your WhatsApp newsletter subscribers.</span>
                </button>
                <div class="panel ms-[68px] me-[32px] me-[32px]" >
                  <p class="mb-7">
                    Automate your sales process by requesting important
                    information in advance and automatically assigning leads to
                    the appropriate contacts.
                  </p>
                  <a
                    class="toolbox-link"
                    href="#"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div
              class="mb-5 bg-[#fff] rounded-[12px] border-[1px] border-solid"
            >
              <div class="text-[#7D7D8A] accordion-container">
                <button
                  type="button"
                  class="flex gap-5 accordion Aeonik-font font-medium w-full text-start ps-6 pe-8 pt-6 pb-[21px]"
                >
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 2.01228C12.3344 2.00413 12.1677 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.1368 21.8906 10.299 21.685 9.5" stroke="#7D7D8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="#7D7D8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10 9.5H8.70711C8.25435 9.5 7.82014 9.67986 7.5 10M14 9.5H15.2929C15.7456 9.5 16.1799 9.67986 16.5 10" stroke="#7D7D8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.8881 2.33113C16.8267 1.78283 17.6459 2.00379 18.138 2.35575C18.3398 2.50007 18.4406 2.57223 18.5 2.57223C18.5594 2.57223 18.6602 2.50007 18.862 2.35575C19.3541 2.00379 20.1733 1.78283 21.1119 2.33113C22.3437 3.05073 22.6224 5.4247 19.7812 7.42753C19.24 7.80901 18.9694 7.99975 18.5 7.99975C18.0306 7.99975 17.76 7.80901 17.2188 7.42753C14.3776 5.4247 14.6563 3.05073 15.8881 2.33113Z" stroke="#7D7D8A" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>

                  <span>Automations that support your customer service.</span>
                </button>
                <div class="panel panel ms-[68px] me-[32px]">
                  <p class="mb-7">
                    Automate your sales process by requesting important
                    information in advance and automatically assigning leads to
                    the appropriate contacts.
                  </p>
                  <a
                    class="toolbox-link"
                    href="#"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div
              class=" bg-[#fff] rounded-[12px] border-[1px] border-solid"
            >
              <div class="text-[#7D7D8A] accordion-container">
                <button
                  type="button"
                  class="flex gap-5 accordion Aeonik-font font-medium w-full text-start ps-6 pe-8 pt-6 pb-[21px]"
                >
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 9C19.2048 5.01455 15.5128 2 11.0793 2C6.06549 2 2 5.85521 2 10.61C2 12.8946 2.93819 
                    14.9704 4.46855 16.5108C4.80549 16.85 5.03045 17.3134 4.93966 17.7903C4.78982 18.5701 4.45026 19.2975 
                    3.95305 19.9037C5.26123 20.1449 6.62147 19.9277 7.78801 19.3127C8.20039 19.0954 8.40657 18.9867 8.55207 18.9646C8.65392 18.9492 8.78659 18.9636 9 19.0002" stroke="#7D7D8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 16.2617C11 19.1674 13.4628 21.5234 16.5 21.5234C16.8571 21.5238 17.2132 21.4908 17.564 
                    21.425C17.8165 21.3775 17.9428 21.3538 18.0309 21.3673C18.119 21.3807 18.244 21.4472 18.4938 21.58C19
                    .2004 21.9558 20.0244 22.0885 20.8169 21.9411C20.5157 21.5707 20.31 21.1262 20.2192 20.6496C20.1642 20.3582 
                    20.3005 20.075 20.5046 19.8677C21.4317 18.9263 22 17.6578 22 16.2617C22 13.356 19.5372 11 16.5 11C13.4628 11 11 13.356 11 16.2617Z" stroke="#7D7D8A" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  <span>Automated recruitment processes via WhatsApp.</span>
                </button>
                <div class="panel panel ms-[68px] me-[32px]" >
                  <p class="mb-7">
                    Automate your sales process by requesting important
                    information in advance and automatically assigning leads to
                    the appropriate contacts.
                  </p>
                  <a
                    class="toolbox-link"
                    href="#"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="w-[50%]">
            <img
              class="w-[100%]  object-cover rounded-[12px] aspect-[9/8]"
              src="../assets/images/toolboximage.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.panel {
  //margin-top: 8px;
  overflow: hidden;
  height: 0;

  transition: height 0.3s ease-out;
  
}

.active {
  @apply text-[#020210] ;

  span {
    @apply text-[18px] transition-all ease-in-out duration-300
  } 
}

.active  svg {
  path {
    stroke: #020210;
  }
}
</style>
