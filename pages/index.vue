<template>
  <div>
    <nav
      class="fixed top-0 z-10 w-full flex flex-wrap items-center justify-between py-3 bg-transparent text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div class="flex flex-grow items-center">
          <div class="w-14 h-14">
            <img src="./../assets/logo.png" alt="UMC logo">
          </div>
          <a class="text-2xl text-white pr-2 font-semibold ml-4" href="#">Seke North </a>   
        </div>
        <!-- Right elements -->
        <div class="flex items-center relative">
          <NuxtLink to="/login" class="text-white mx-2 hover:underline">Login</NuxtLink>
          <NuxtLink to="/register" class="text-white mx-2 hover:underline">Register</NuxtLink>
        </div>
        <!-- Right elements -->
      </div>
    </nav>
    <div class="">
      <img src="./../assets/banner.jpg" alt="UMC" class=" z-0 w-full h-screen">
      <div class=" z-0 absolute top-0 left-0 w-full h-screen bg-black opacity-25">
        
      </div>
      <p class="z-20 top-44 left-20 absolute text-white font-bold text-5xl">Welcome to <br> Seke North <br> Finance System</p>  
      <!-- <p class="z-20 top-80 w-96 left-20 absolute text-white font-bold text-xl">As its name suggests the Zion Christian Church equally holds to the teachings of the Old Testament (Zion),
        the New Testament (Christian) and the Acts of the Apostles (Church).</p>   -->
      <div class="mt-5 z-20 top-44 right-40 absolute bg-white w-96 py-5 px-4 flex flex-col rounded-lg">
        <p class="text-black font-semibold text-lg">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work."</p>
        <p class="mt-5 ml-40 text-black font-bold text-xl">2 Corinthians 9:6-8</p>
    </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'IndexPage'
  }
  </script>
  <style>
  #navbar {
    position: sticky;
  }
  </style>
  