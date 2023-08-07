<template>
  <div class="body flex justify-center">
    <div class="bg-white opacity-16 py-2 px-24 flex flex-col rounded-lg">
      <label for="" class="text-xl font-semibold mb-4">Create a new account</label>
        <form action="#" class="flex flex-col" @submit.prevent="submitForm()">
          <label for="" class="text-sm font-semibold">Please select circuit</label>
          <select class="mt-2 px-14 py-3 border-2 border-red-600  hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black" 
              id="circuit"  v-model="circuit" required>
              <option class="text-lg font-lg text-black" disabled>Select Circuit</option>
              <option value="Seke North">Seke North</option>
          </select>
          <label for="" class="text-sm font-semibold">Please select local</label>
          <select class="mt-2 px-14 py-3 border-2 border-red-600  hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black" 
            id="local" v-model="local" required>
            <option class="text-lg font-lg text-black" disabled>Select Local</option>
            <option value="St Andrews">St Andrews</option>
            <option value="Sunnyside">Sunnyside</option>
            <option value="Ebenezer">Ebenezer</option>
          </select>
          <label for="" class="text-sm font-semibold">Enter your section</label>
          <input type="text" v-model="section" class="my-2 px-14 py-3 border-2 border-red-600 hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black">
          <label for="" class="text-sm font-semibold">Select your organisation</label>
          <select class="mt-2 px-14 py-3 border-2 border-red-600  hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black" 
            id="organisation" v-model="organisation" required>
            <option class="text-lg font-lg text-black" selected disabled >Select Organisation</option>
            <option value="UMYF">UMYF</option>
            <option value="MUMC">MUMC</option>
            <option value="RRW">RRW</option>
            <option value="JSS">JSS</option>
          </select>
          <label for="" class="text-sm font-semibold">Select your Membership Status</label>
          <select class="mt-2 px-14 py-3 border-2 border-red-600  hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black" 
          id="membershipStatus" v-model="membershipStatus" required>
          <option class="text-lg font-lg text-black" disabled>Select Membership Status</option>
          <option value="Full">Full</option>
          <option value="Probational">Probational</option>
        </select>
            <button class="text-white bg-blue-800 hover:bg-red-600 text-center font-lg rounded-md mt-6 py-3">Next</button>
            <p class="text-center italics text-gray-900 text-sm font-sm my-8">Already have an account <NuxtLink class="text-blue-800 cursor-pointer" to="/login">Login</NuxtLink></p>
            
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
    circuit: "",
    local:"",
    section: "",
    organisation:"",
    membershipStatus: ""
  }
},
methods:{
  submitForm() {
      const formData = {
        circuit: this.circuit,
        local: this.local,
        section: this.section,
        organisation: this.organisation,
        membershipStatus: this.membershipStatus
        // Other form fields
      };
      this.$store.commit('updateFormData', formData);
      console.log(formData)
      this.$router.push('/register')
    }
}
}
</script>

<style>
.body {
    background: url("../assets/banner.jpg");
    background-size: cover;
    background-repeat: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
  
  }
</style>