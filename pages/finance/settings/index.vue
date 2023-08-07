<template>
  <div>
  <div class=" bg-gray-200 dark:bg-gray-900 ">
    <div class="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
      <div class="h-2/4 sm:h-64 overflow-hidden">
        <img class="w-full rounded-t"
          src="./../../../assets/logo.png"
          alt="Photo by aldi sigun on Unsplash" />
      </div>
      <div class="">
        <div v-if="user.length < 1">Loading...</div>
        <div v-else class="px-7 mb-8">
          <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">{{user.firstname + " " + user.lastname}}</h2>
          <p class="text-gray-400 mt-2 dark:text-gray-400">{{user.role}}</p>
          <p class="text-gray-400 text-sm uppercase dark:text-gray-400">{{user.regNumber}}</p>
        <table class="text-xs my-3">
                  <tbody><tr>
                      <td class=" py-2 text-gray-500 font-semibold pr-2">Date Of Birth:</td>
                      <td class=" py-2 ml-2">{{user.dateOfBirth}}</td>
                  </tr>
                  <tr>
                      <td class=" py-2 text-gray-500 font-semibold pr-2">Local:</td>
                      <td class=" py-2 ml-2">{{user.program}}</td>
                  </tr>
                  <tr>
                      <td class=" py-2 text-gray-500 font-semibold pr-2">Email:</td>
                      <td class=" py-2 ml-2">{{user.email}}</td>
                  </tr>
              </tbody></table>
          </div>
        </div>
    </div>
    </div>
    
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
            firstName: "Ruramai",
            lastName: "Botso",
            dateOfBirth: "10/08/01",
            gender: "Male",
            email: "ruramaibotso@gmail.com",
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
  // mounted(){
  // this.fetchUser()
// }
    }


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>