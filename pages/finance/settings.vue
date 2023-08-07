<template>
  <div>
    <div class="mx-5 mt-5">
      <h1 class="text-gray-800 font-3xl text-3xl">Settings</h1>
    </div>
  <div class="flex">
    <div class="flex flex-col justify-between w-50 py-20  px-4 min-h-full">
        <div class="flex flex-col flex-auto py-10">
            <div class="p-2 hover:cursor-pointer">
                <div class="flex flex-row space-x-3 py-2 ">
                    <NuxtLink  class="font-medium text-gray-600 cursor-pointer hover:text-black" to="/finance/settings/">My Profile</NuxtLink>
                </div>
                
            </div>
            <div class="p-2 hover:cursor-pointer">
              <div class="flex flex-row space-x-3 py-2 ">
                  <NuxtLink  class="font-medium text-gray-600 cursor-pointer hover:text-black" to="/finance/settings/notifications">Notifications</NuxtLink>
              </div>
              
          </div>
        <div class="p-2 hover:cursor-pointer">
          <div class="flex flex-row space-x-3 py-2 ">
              <NuxtLink  class="font-medium text-gray-600 cursor-pointer hover:text-black" to="/finance/settings/updateAccount">Update Account</NuxtLink>
          </div>
          
      </div>
      <div class="p-2 hover:cursor-pointer">
        <div class="flex flex-row space-x-3 py-2 ">
            <NuxtLink  class="font-medium text-gray-600 cursor-pointer hover:text-black" to="/finance/settings/language">Languages</NuxtLink>
        </div>
        
    </div>
        </div>
    </div>
    <div class="flex-grow relative min-w-screen ">
        <nuxt-child></nuxt-child>
    </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>