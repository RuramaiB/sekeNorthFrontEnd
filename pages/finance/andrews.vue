<template>
  <div>
    <div class="flex px-10 py-1 bg-blue-900">    
      <div class="flex flex-rows w-full justify-between">
        <div class="pl-1 py-2">
          <h1 class="text-xl font-semibold text-white">St Andrews Finance Dashboard</h1>
        </div>
        <div class="flex rounded-full hover:bg-white hover:text-black flex-col flex-wrap text-white md:flex-row">
          <div class="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-3 pt-2 pb-3 5 text-md font-semibold  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent">
            <NuxtLink  class="font-medium  cursor-pointer hover:text-blue-800" to="/finance/andrews/">Local Finance records</NuxtLink>
          </div>
          <div class="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-3 pt-2 pb-3 5 text-md font-semibold  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent">
              <NuxtLink  class="font-medium cursor-pointer hover:text-blue-800" to="/finance/andrews/organisations">Organisations Records</NuxtLink>
          </div>
          <div class="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-3 pt-2 pb-3 5 text-md font-semibold  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent">
              <NuxtLink  class="font-medium cursor-pointer hover:text-blue-800" to="/finance/andrews/sections">Sections</NuxtLink>
          </div>
        </div>
        <!-- Right content -->
        <div class="relative my-1 z-10">
        <button
          @click="isOpen = !isOpen"
          class="inline-flex items-center justify-center  font-bold text-md  text-white border-none"
          aria-expanded="false"
        >
          {{ account.username }}
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M6 8l4 4 4-4H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          v-if="isOpen"
          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="py-1 px-2" role="none">
            <!-- Dropdown options -->
            <NuxtLink class=" text-black flex flex-cols text-md font-lg cursor-pointer my-3 gap-2" to=".././settings">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"/> </g> </svg>
              Logout
            </NuxtLink>
          </div>
        </div>
      </div>
        
      </div>
  </div>       
      <div class="flex-grow">
          <nuxt-child></nuxt-child>
      </div>
</div> 
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      account:[],
      isOpen: false,
    }
    
  },
  methods: {
    async getAccount(){
    const mb = localStorage.membershipNumber.replace(' ', '%20');
    this.loading = true;
    // const URL = `http://localhost:8080/api/v1/auth/getUserByMembershipNumber/${mb}`;
    const URL = "http://localhost:8080/api/v1/auth/getUserByMembershipNumber/{membershipNumber}?membershipNumber=admin@20000";
    await axios.get(URL,{
      headers: { "Content-Type": "application/json",
              Authorization : 'Bearer ' + localStorage.token,
            // 'Access-Control-Allow-Origin':'*'
           },
    }).then((res) =>
     {
      this.account = res.data;
      console.log(this.user);

      console.log("info received")
      console.log("Fetching  user Data Completed...");
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
  },
  },
  mounted(){
    // this.getAccount()
  }
}
</script>

<style>

</style>