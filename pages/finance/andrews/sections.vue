<template>
  <div class="mt-5 flex3 p-4 gap-3">
      <div class=" p-4 bg-white rounded shadow-sm">
              <div class="flex justify-between">
                  <b class=" m-2">Sections Finance Records</b>
                  <!-- Floating Download Button -->
                  <div class="fixed bottom-8 right-8">
                    <button class="bg-blue-900 hover:bg-blue-600 rounded-full p-4 shadow-lg text-white flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/> </svg>
                    </button>
                  </div>
                  <!-- End of Floating button -->
                  <div>
                    <!-- Add Button -->
                    <svg style="color: black; height:36px; width:36px; margin: 12px;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" @click="openAddModal"><path fill="black" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"></path></svg>
                
                    <!-- Modal -->
                    <div v-if="showAddModal" class="z-10 ml-40 pt-72 absolute inset-0 flex items-center justify-center">
                      <div class="bg-white rounded-lg shadow-md p-5 overflow-y-auto">
                        <!-- Modal Content -->
                        <div class="flex justify-between">
                          <h2 class="text-2xl font-bold mb-4">{{ addModalHeading }}</h2>
                          <button class="bg-red-500 text-white text-xl font-xl px-3 py-1 mt-4 rounded-md" @click="closeAddModal">X</button>
                        </div>
                        <p v-if="loading">Processing the payment request</p>
                        <form v-else @submit.prevent="addSectionFinanceSubmit()" class=" grid grid-cols-3 gap-12 bg-white shadow-md rounded px-8 py-6 mb-4">
                          <!-- Membership Number -->
                          <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="membershipNumber">Membership Number:</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              id="membershipNumber" type="text" v-model="payments.membershipNumber">
                              <p v-if="this.errors.membershipNumber" class="text-sm text-red-600 text-left mb-2">*{{this.errors.membershipNumber}}</p>
                          </div>
                        <!-- Description -->
                        <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description:</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                  id="description" type="text" v-model="payments.description">
                                  <p v-if="this.errors.description" class="text-sm text-red-600 text-left mb-2">*{{this.errors.description}}</p>
                          </div>
                          
                          <!-- Payment Method -->
                          <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="paymentMethod">Payment Method:</label>
                            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              id="paymentMethod" v-model="payments.paymentMethod" required>
                              <option value="" disabled>Select payment method</option>
                              <option value="cash">Cash</option>
                              <option value="Ecocash">Ecocash</option>
                              <option value="Onemoney">OneMoney</option>
                            </select>
                            <p v-if="this.errors.paymentMethod" class="text-sm text-red-600 text-left mb-2">*{{this.errors.paymentMethod}}</p>
                          </div>      
                       <!-- Phone Number -->
                          <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Phone Number:</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              id="phoneNumber" type="text" v-model="payments.phoneNumber">
                              <p v-if="this.errors.phoneNumber" class="text-sm text-red-600 text-left mb-2">*{{this.errors.phoneNumber}}</p>
                            </div>
                          <!-- Currency -->
                          <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="currency">Currency:</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              id="currency" type="text" v-model="payments.currency">
                              <p v-if="this.errors.currency" class="text-sm text-red-600 text-left mb-2">*{{this.errors.currency}}</p>
                          </div>  
                          <!-- Amount -->
                          <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">Amount:</label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                              id="amount" type="text" v-model="payments.amount">
                              <p v-if="this.errors.amount" class="text-sm text-red-600 text-left mb-2">*{{this.errors.amount}}</p>
                          </div>  
                          <!-- Submit Button -->
                          <div class="ml-2">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                              type="submit">Submit</button>
                          </div>
                        </form>   
                      </div>
                    </div>
                  </div>
              </div>  
              <div class="flex justify-between">
                <div class="mb-4">
                  <label for="sectionFilter" class="block font-medium mb-1">Filter by Section:</label>
                  <select v-model="sectionFilter" id="sectionFilter" class="border border-gray-300 rounded-md px-4 py-2 w-full">
                    <option value="">All</option>
                    <option v-for="section in sections" :value="section">{{ section }}</option>
                  </select>
                </div>
            
                <div class="mb-4">
                  <label for="surnameFilter" class="block font-medium mb-1">Filter by Surname:</label>
                  <input
                    v-model="surnameFilter"
                    id="surnameFilter"
                    type="text"
                    class="border border-gray-300 rounded-md px-4 py-2 w-full"
                    placeholder="Search section..."
                  />
                </div>
              </div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-white uppercase bg-blue-900 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" class="px-4 py-3">
                                Finance ID
                              </th>
                              <th scope="col" class="px-4 py-3">
                                  Date Of Payment
                              </th>
                              <th scope="col" class="px-4 py-3">
                                  Section
                              </th>
                              <th scope="col" class="px-4 py-3">
                                Membership Number
                            </th>
                              <th scope="col" class="px-4 py-3">
                                  Name
                              </th>
                              <th scope="col" class="px-4 py-3">
                                  Surname
                              </th>
                              <th scope="col" class="px-4 py-3">
                               Phone Number
                              </th>
                              <th scope="col" class="px-4 py-3">
                                Payment Method
                              </th>
                              <th scope="col" class="px-4 py-3">
                                Description
                              </th>
                              <th scope="col" class="px-4 py-3">
                                Amount
                              </th>
                              <th scope="col" class="px-4 py-3">
                                
                              </th>
                               <th scope="col" class="px-4 py-3">
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="item in filteredItems" :key="item.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td class="px-6 py-4">{{ item.financeID}}</td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {{ item.dateOfPayment }}
                          </th>
                            <td class="px-4 py-4">{{ item.section.name}}</td>
                            <td class="px-4 py-4">{{ item.membershipNumber}}</td>
                            <td class="px-4 py-4">{{ item.user.firstname }}</td>
                            <td class="px-4 py-4">{{ item.user.lastname }}</td>
                            <td class="px-4 py-4">{{ item.phoneNumber}}</td>
                            <td class="px-4 py-4">{{ item.paymentMethod }}</td>
                            <td class="px-4 py-4">{{ item.description }}</td>
                            <td class="px-4 py-4">{{ item.amount }}</td>
                            <td class="px-3 py-4">
                                <a href="#" class="font-medium text-green-500 dark:text-blue-500 hover:underline">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  @click="fetchSectionFinanceByID(item.financeID)"  class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
                                </a >
                            </td>
                          <td class="pl-3 pr-4 py-4">
                            <a href="#" class="font-medium text-yellow-500 dark:text-blue-500 hover:underline" >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  @click="openDeleteModal(item.financeID)" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                            </a >
                          </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div v-if="editModal" class="z-10 ml-40 pt-72 absolute inset-0 flex items-center justify-center">
                <div class="bg-white rounded-lg shadow-md p-5 overflow-y-auto">
                  <!-- Modal Content -->
                  <div class="flex justify-between">
                    <h2 class="text-2xl font-bold mb-4">{{ editModalHeading }}</h2>
                    <button class="bg-red-500 text-white text-xl font-xl px-3 py-1 mt-4 rounded-md" @click="closeEditModal">X</button>
                  </div>
                  <p v-if="loading">Processing the payment request</p>
                  
                  <form v-else @submit.prevent="updateSectionFinanceSubmit(finance.financeID)" class=" grid grid-cols-3 gap-12 bg-white shadow-md rounded px-8 py-6 mb-4">
                    <!-- Membership Number -->
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="membershipNumber">Membership Number:</label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="membershipNumber" type="text" v-model="finance.membershipNumber">
                        <p v-if="this.errors.membershipNumber" class="text-sm text-red-600 text-left mb-2">*{{this.errors.membershipNumber}}</p>
                    </div>
                    <!-- Section -->
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="section">Section:</label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="section" type="text" v-model="finance.section.name">
                        <p v-if="this.errors.section" class="text-sm text-red-600 text-left mb-2">*{{this.errors.section}}</p>
                    </div>
                  <!-- Description -->
                  <div class="mb-4">
                          <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description:</label>
                          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="description" type="text" v-model="finance.description">
                            <p v-if="this.errors.description" class="text-sm text-red-600 text-left mb-2">*{{this.errors.description}}</p>
                    </div>
                    
                    <!-- Payment Method -->
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="paymentMethod">Payment Method:</label>
                      <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="paymentMethod" v-model="finance.paymentMethod" required>
                        <option value="" disabled>Select payment method</option>
                        <option value="cash">Cash</option>
                        <option value="Ecocash">Ecocash</option>
                        <option value="Onemoney">OneMoney</option>
                      </select>
                      <p v-if="this.errors.paymentMethod" class="text-sm text-red-600 text-left mb-2">*{{this.errors.paymentMethod}}</p>
                    </div>      
                 <!-- Phone Number -->
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Phone Number:</label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="phoneNumber" type="text" v-model="finance.phoneNumber">
                        <p v-if="this.errors.phoneNumber" class="text-sm text-red-600 text-left mb-2">*{{this.errors.phoneNumber}}</p>
                      </div>
                    <!-- Currency -->
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="currency">Currency:</label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="currency" type="text" v-model="finance.currency">
                        <p v-if="this.errors.currency" class="text-sm text-red-600 text-left mb-2">*{{this.errors.currency}}</p>
                    </div>  
                    <!-- Amount -->
                    <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">Amount:</label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="amount" type="text" v-model="finance.amount">
                        <p v-if="this.errors.amount" class="text-sm text-red-600 text-left mb-2">*{{this.errors.amount}}</p>
                    </div>  
                    <!-- Submit Button -->
                    <div class="ml-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit">Submit</button>
                    </div>
                  </form>     
                </div>
              </div>
              <div v-if="deleteModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <div class="bg-white p-6 rounded-lg">
                  <p class="mb-4">Are you sure you want to delete?</p>
                  <div class="flex justify-end">
                    <button class="mr-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded" @click="handleOption('yes')">Yes</button>
                    <button
                      class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded" @click="handleOption('no')">No</button>
                  </div>
                </div>
              </div>
      </div>     
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      sectionFilter: '',
      surnameFilter: '',
      items: [],
      showAddModal: false,
      editModal: false,
      deleteModal: false,
      FID: '',
      addModalHeading: 'Add new record',
      editModalHeading: 'Edit record',
      loading:false,
      finance:[],
      payments: {
          description: '',
          amount: '',
          phoneNumber: '',
          paymentMethod: '',
          membershipNumber: '',
          currency: '',
          section:'',
          locals:'St Andrews',
          
        },
        errors:[]
    };
  },
  computed: {
    filteredItems() {
      let filteredItems = this.items;

      if (this.sectionFilter) {
        filteredItems = filteredItems.filter((item) => item.section.name === this.sectionFilter);
      }

      if (this.surnameFilter) {
        filteredItems = filteredItems.filter(
          (item) => item.user.lastname.toLowerCase().includes(this.surnameFilter.toLowerCase())
        );
      }

      return filteredItems;
    },
    sections() {
      return [...new Set(this.items.map((item) => item.section.name))];
    },
  },
  methods:{
    async fetchAndSecFinance(){
    this.loading = true;
    const URL = "http://localhost:8080/sectionFinance/getSectionFinanceByLocal/st%20andrews";
    const token = localStorage.token;
    await axios.get(URL,{
      headers: {'Content-Type': 'application/json',
          // Authorization : 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*'}
    }).then((res) =>
     {
      this.items = res.data;
      console.warn(this.items);
      console.log(typeof(this.items))
      console.log("Fetching Data Completed...");
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
    },
    async fetchSectionFinanceByID(id){
          this.loading = true;
    const URL = `http://localhost:8080/sectionFinance/getSectionFinanceByFinanceID/${id}`;
    // const token = localStorage.token;
    await axios.get(URL,{
      headers: {'Content-Type': 'application/json',
          // Authorization : 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*'}
    }).then((res) =>
     {
      this.finance = res.data
      console.log(this.finance);
      console.log("Information tatora baba.");
      this.editModal = true;
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
    },
    async addSectionFinanceSubmit(){
            this.errors = {};
            if(!this.payments.membershipNumber){
                this.errors.membershipNumber = "Membership number is required";
            }
            if(!this.payments.amount){
                this.errors.amount = "Amount is required";
            }
            if(!this.payments.paymentMethod){
                this.errors.paymentMethod = "Payment method is required";
            }
            if(!this.payments.currency){
                this.errors.currency = "Currency is required";
            }   
            if(!this.payments.phoneNumber){
                this.errors.phoneNumber = "Phone number is required";
            } 
            if(!this.payments.description){
                this.errors.description = "Description is required";
            }         
            // if(!this.payments.section){
            //     this.errors.section = "Section is required";
            // }
            if (Object.keys(this.errors).length === 0) {
        // make API call or submit form data here
        try{
        await axios.post('http://localhost:8080/sectionFinance/addSectionFinance',{
          'amount': this.payments.amount,  
          'phoneNumber': this.payments.phoneNumber,
          'paymentMethod': this.payments.paymentMethod,
          'membershipNumber': this.payments.membershipNumber,
          'currency': this.payments.currency,
          'local': this.payments.locals,
          'description': this.payments.description,
          // 'section': this.payments.section
        },{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Section Finance Record added successfully.")
          this.response = data;
          console.log(response);
        })
        }catch(err){
        console.log("Error:",err)
        this.errors.failed = "Sorry, an error occured!";
        this.errors.ERR = err;
        }
        console.log("Form submitted successfully");
      }
    },
    async handleOption (_option) {
      if(_option = 'yes'){
        try{
        await axios.delete('http://localhost:8080/sectionFinance/deleteSectionFinanceByFinanceID/' + this.FID,{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Section Finance Record deleted successfully.")
          this.closeDeleteModal()
          this.response = data;
          console.log(response);
        })
        }catch(err){
        console.log("Error:",err)
        this.errors.failed = "Sorry, an error occured!";
        this.errors.ERR = err;
        }
        console.log("Form submitted successfully");
    }
    else if(_option = 'no'){
      this.FID = ''
      this.closeDeleteModal();
    } 
    },
    async updateSectionFinanceSubmit(id){
            this.errors = {};
            if(!this.finance.membershipNumber){
                this.errors.membershipNumber = "Membership number is required";
            }
            if(!this.finance.amount){
                this.errors.amount = "Amount is required";
            }
            if(!this.finance.paymentMethod){
                this.errors.paymentMethod = "Payment method is required";
            }
            if(!this.finance.currency){
                this.errors.currency = "Currency is required";
            }   
            if(!this.finance.phoneNumber){
                this.errors.phoneNumber = "Phone number is required";
            } 
            if(!this.finance.description){
                this.errors.description = "Description is required";
            }         
            if(!this.finance.section){
                this.errors.section = "Section is required";
            }       
           
            if (Object.keys(this.errors).length === 0) {
        // make API call or submit form data here
        try{
        await axios.put(`http://localhost:8080/sectionFinance/updateSectionFinanceByFinanceID/${id}`,{
          'amount': this.finance.amount,  
          'phoneNumber': this.finance.phoneNumber,
          'paymentMethod': this.finance.paymentMethod,
          'membershipNumber': this.finance.membershipNumber,
          'currency': this.finance.currency,
          'local': 'St andrews',
          'description': this.finance.description,
          'section': this.finance.section.name
        },{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert("Local Finance Record updated successfully.")
          this.response = data;
          console.log(response);
        })
        }catch(err){
        console.log("Error:",err)
        this.errors.failed = "Sorry, an error occured!";
        this.errors.ERR = err;
        }
        console.log("Form submitted successfully");
      }
    },
    openAddModal() {
        this.showAddModal = true;
      },
      closeAddModal() {
        this.showAddModal = false;
      },
      openEditModal() {
        this.editModal = true;
  },
  closeEditModal() {
        this.editModal = false;
  },
  openDeleteModal(id) {
        this.deleteModal = true;
        this.FID = id;
  },
  closeDeleteModal() {
        this.deleteModal = false;
  },
  }, mounted(){
    this.fetchAndSecFinance()
  }
};
</script>

<style>

</style>

