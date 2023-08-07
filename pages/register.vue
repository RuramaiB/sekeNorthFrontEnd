<template>
  <div class="body flex justify-center">
    <div class="bg-white opacity-16 py-2 px-24 flex flex-col rounded-lg">
        <div class="w-24 h-24 mb-2 mx-24">
            <img class="" src="../assets/logo.png" alt="">
        </div>   
        <form action="#" class="flex flex-col" @submit.prevent="handleSubmit()">
          <input type="text" v-model="firstname" placeholder="Enter your name" class="mt-2 px-14 py-3 border-2 border-red-600 hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black">
          <p v-if="this.errors.firstname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.firstname}}</p>
          <input type="text" v-model="lastname" placeholder="Enter your surname" class="mt-2 px-14 py-3 border-2 border-red-600 hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black">
          <p v-if="this.errors.lastname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.lastname}}</p>
            <select class="mt-2 px-24 py-3 border-2 border-red-600  hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black" 
              id="gender" v-model="gender" required>
              <option disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p v-if="this.errors.gender" class="text-sm text-red-600 text-left mb-2">*{{this.errors.gender}}</p>
            <input type="date" v-model="dateOfBirth" placeholder="Select date of birth" class="mt-2 px-14 py-3 border-2 border-red-600 hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black">
            <p v-if="this.errors.dateOfBirth" class="text-sm text-red-600 text-left mb-2">*{{this.errors.dateOfBirth}}</p>
          <input type="password" v-model="password" placeholder="Enter your password" class="mt-2 px-14 py-3 border-2 border-red-600 hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black">
          <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p>
          <input type="password" v-model="cpassword" placeholder="Confirm your password" class="mt-2 px-14 py-3 border-2 border-red-600 hover:border-2 hover:border-blue-800 text-black rounded-md placeholder-black">          
          <p v-if="this.errors.cpassword" class="text-sm text-red-600 text-left mb-2">*{{this.errors.cpassword}}</p>
          <Button class="text-white bg-blue-800 hover:bg-red-600 text-center font-lg rounded-md mt-6 py-3" >Finish</Button>
          <p class="text-center italics text-gray-900 text-sm font-sm my-6">Already have an account <NuxtLink class="text-blue-800 cursor-pointer" to="/login">Login</NuxtLink></p>
            
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
         return{
           firstname: "",
           lastname: "",
           dateOfBirth: "",
           gender: "",
           password: "",
           cpassword: "",
           errors: {}
         }
     },
     computed: {
    formData() {
      return this.$store.state.formData;
    }
  },
     methods:{
         async handleSubmit(){
             this.errors = {};
             if(!this.firstname){
                 this.errors.firstname = "First name is required";
             }
             if(!this.lastname){
                 this.errors.lastname = "Last name is required";
             }
             if(!this.dateOfBirth){
                 this.errors.dateOfBirth = "Date Of Birth is required";
             }
             if(!this.gender){
                 this.errors.gender = "Gender is required";
             }
             if(!this.password){
                 this.errors.password = "Enter password";
             } 
             if(!(this.password === this.cpassword)){
                 this.errors.cpassword = "Passwords do not match";
             }
             if(!this.cpassword){
                 this.errors.cpassword = "Re-enter password";
             }
            
            
             if (Object.keys(this.errors).length === 0) {
         // make API call or submit form data here
         try{
         await axios.post('http://localhost:8080/api/v1/auth/register',{
            'circuit': this.formData.circuit,
            'local': this.formData.local,
            'section': this.formData.section,
            'organisation': this.formData.organisation,
            'membershipStatus': this.formData.membershipStatus,
            'firstname': this.firstname,
            'lastname': this.lastname,
            'dateOfBirth': this.dateOfBirth,
            'gender': this.gender,
            'email':this.email,
            'password': this.password
         },{
             headers: {'Content-Type': 'application/json'},
             credentials: 'include'
           }).then((response) =>{
           const data = response.data;
           alert("Account created successfully.")
           this.response = data;
           console.log(response);
           this.$router.push('./Login')
           // if(this.response === "User Not Found"){
           //   this.errors.failed = "Wrong Login details.";
           // }else{
             
           // }
         })
 
 }catch(err){
 console.log("Error:",err)
 this.errors.failed = "Sorry, an error occured!";
 this.errors.ERR = err;
 }
         console.log("Form submitted successfully");
       }
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