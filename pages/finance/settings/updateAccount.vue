<template>
  <div class="flex-auto">
    <!-- <div class="flex flex-col bg-gray-50">
      <div>
          <h4 class="font-bold text-black text-2xl pt-5 pl-5 pb-5">Appearances</h4>
          <p class="text-gray-700 pl-5 pb-5">Customize your theme here. </p>
      </div>    
  </div>
  <hr> -->
  <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
    <div class="w-full">
        <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
            Update your account.
        </h1>

        <form class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
            <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                <input type="text" placeholder="First Name" v-model="user.firstname" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                <input type="text" placeholder="Doe" v-model="user.lastname" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Gender</label>
                <select v-model="user.gender" class="select select-borderedblock w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                    <option disabled selected>Select your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
            </div>

            <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Date Of Birth</label>
                <input type="date" v-model="user.dateOfBirth" placeholder="${user.dateOfBirth}" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Registration Number</label>
                <input type="text" v-model="user.regNumber" placeholder="${user.regNumber}" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
              <input type="email" v-model="user.email" placeholder="johndoe@hit.ac.zw" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
        </form>
        
        <div class="mt-6">
          <button type="button" @click="updateStudentHandler" class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Update Profile
          </button>
      </div>  
    </div>
  </div>
      <hr>
  </div>
</template>


<script>
import axios from 'axios';
  export default {
    data(){
        return{
            user:[]
        }
    },
    name: 'updateStudent',
    student(){
        return{
            firstName: null,
            lastName: null,
            dateOfBirth: null,
            gender: null,
            studentNumber: null,
            email: null,
        }
    },
    methods:{
        async updateStudentHandler(){
            const student = {
                'firstName': this.firstName,
                'lastName': this.lastName,
                'dateOfBirth': this.dateOfBirth,
                'gender': this.gender,
                'studentNumber': this.studentNumber,
                'email':this.email,
            }
           
            console.log(student);
            try{
                if(this.firstName != null && this.lastName != null && this.dateOfBirth != null && this.gender != null && this.studentNumber != null && this.email != null){
                    const res = await this.$axios.put('http://localhost:8083/students/updateStudent',student)
                    alert("You account has updated successfully.")
            }
            else{
                alert("You account has updated successfully.")
            }
                    
                
            }
            catch(e){
                console.log(e.message)
            }
        },
        async fetchUser(){
      
      this.loading = true;
      const URL = "http://localhost:8080/api/v1/auth/" + localStorage.email;
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            // Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.user = res.data;
        console.log(this.user);
        console.log(typeof(this.user))
        console.log("Fetching  user Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
  },
  mounted(){
  this.fetchUser()
}
    }


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>