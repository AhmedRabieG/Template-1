<template>
    <div class="header">
        <div class="container">
            <div class="flex justify-between items-center">
                <div class="flex gap-2 my-[19px]">
                    <img src="../assets/images/logo.svg" alt="logo">
                    <h3>Halal_Lab</h3>
                </div>
            
                <ul class="header__nav flex items-center gap-[40px] [&>li>a]:py-6">
                    <li class="relative">
                        <a class="" href="#">
                            <span>Cards</span>
                            <img class="w-[20px] h-[10px] -rotate-180 transition-all duration-300 ease-in-out" alt="card-arrow" src="../assets/images/card-arrow.svg">
                        </a>
                        <ul class="bg-[#eee] p-4 flex-wrap gap-4 min-w-[150px] absolute -bottom-[100px] header__ul-cards">
                            <li><a href="#">Card-1</a></li>
                            <li><a href="#">Card-2</a></li>
                            <li><a href="#">Card-2</a></li>
                            <li><a href="#">Card-2</a></li>
                            <li><a href="#">Card-2</a></li>
                        </ul>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">App</a></li>
                </ul>
            
                <div class="inline-flex gap-[5px]">
                    <button type="button" class="button button__primary">Login</button>
                    <button type="button" class="button button__primary button__black">
                        <span>Apply now</span>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.50004 11L6.5 6L1.5 1" stroke="black" stroke-width="1.5" stroke-miterlimit="16"/>
                        </svg>
                        <!-- <img src="../assets/images/right-arrow.svg" > -->
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>