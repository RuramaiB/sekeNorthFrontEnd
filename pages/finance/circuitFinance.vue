<template>
  <div >
    <div class="flex px-10 py-1 bg-blue-900">    
      <div class="flex flex-rows w-full justify-between">
        <div class="pl-1 py-2">
          <h1 class="text-xl font-semibold text-white">Circuit Finance Dashboard</h1>
        </div>
        
        <!-- Right content -->
        <div class="flex">
          <div class="flex my-2">
            <svg width="32" height="32" class="text-white" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg>
          <p class="text-white font-bold text-md ml-2 mr-0.5 my-1">Hi,</p>
          <dropdown/>
          </div>
        </div>
        
      </div>
  </div> 
    <div class="flex flex-col-2 gap-4">
      <div class="py-6">
        <div class="bg-white w-64 h-32 border rounded-lg">
          <div class="flex flex-col-2 p-4">
            <div class="w-14 h-14 -mt-9 borderd rounded-lg bg-indigo-600 p-3">
              <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 576 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M251.1 207.1C251.1 196.1 260.1 187.1 271.1 187.1H287.1C299 187.1 308 196.1 308 207.1V275.1H312C323 275.1 332 284.1 332 295.1C332 307 323 315.1 312 315.1H263.1C252.1 315.1 243.1 307 243.1 295.1C243.1 284.1 252.1 275.1 263.1 275.1H267.1V227.6C258.9 225.7 251.1 217.7 251.1 207.1zM48.66 79.13C128.4 100.9 208.2 80.59 288 60.25C375 38.08 462 15.9 549 48.38C565.9 54.69 576 71.62 576 89.66V399.5C576 423.4 550.4 439.2 527.3 432.9C447.6 411.1 367.8 431.4 288 451.7C200.1 473.9 113.1 496.1 26.97 463.6C10.06 457.3 0 440.4 0 422.3V112.5C0 88.59 25.61 72.83 48.66 79.13L48.66 79.13zM127.1 416C127.1 380.7 99.35 352 63.1 352V416H127.1zM63.1 223.1C99.35 223.1 127.1 195.3 127.1 159.1H63.1V223.1zM512 352V287.1C476.7 287.1 448 316.7 448 352H512zM512 95.1H448C448 131.3 476.7 159.1 512 159.1V95.1zM287.1 143.1C234.1 143.1 191.1 194.1 191.1 255.1C191.1 317.9 234.1 368 287.1 368C341 368 384 317.9 384 255.1C384 194.1 341 143.1 287.1 143.1z" fill="white"></path></svg>
            </div>
            <div class="grid px-5">
              <p class="text-gray-400 text-sm ">USD Balance</p>
              <p class="text-black font-bold text-lg">$52k</p>
            </div>
          </div>
          <hr class="bg-gray-50 w-full ">
          <div class="py-1 flex">
            <p class="text-green-300 font-bold text-md mx-1">+55%</p>
            <p class="text-gray-600 text-md  font-bold mx-1"> than last week</p>
          </div>          
        </div>
      
      </div>
      <div class="py-6">
        <div class="bg-white w-64 h-32 border rounded-lg">
          <div class="flex flex-cols-2 p-4">
            <div class="w-14 h-14 -mt-9 borderd rounded-lg bg-pink-600 p-3">
              <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 576 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M251.1 207.1C251.1 196.1 260.1 187.1 271.1 187.1H287.1C299 187.1 308 196.1 308 207.1V275.1H312C323 275.1 332 284.1 332 295.1C332 307 323 315.1 312 315.1H263.1C252.1 315.1 243.1 307 243.1 295.1C243.1 284.1 252.1 275.1 263.1 275.1H267.1V227.6C258.9 225.7 251.1 217.7 251.1 207.1zM48.66 79.13C128.4 100.9 208.2 80.59 288 60.25C375 38.08 462 15.9 549 48.38C565.9 54.69 576 71.62 576 89.66V399.5C576 423.4 550.4 439.2 527.3 432.9C447.6 411.1 367.8 431.4 288 451.7C200.1 473.9 113.1 496.1 26.97 463.6C10.06 457.3 0 440.4 0 422.3V112.5C0 88.59 25.61 72.83 48.66 79.13L48.66 79.13zM127.1 416C127.1 380.7 99.35 352 63.1 352V416H127.1zM63.1 223.1C99.35 223.1 127.1 195.3 127.1 159.1H63.1V223.1zM512 352V287.1C476.7 287.1 448 316.7 448 352H512zM512 95.1H448C448 131.3 476.7 159.1 512 159.1V95.1zM287.1 143.1C234.1 143.1 191.1 194.1 191.1 255.1C191.1 317.9 234.1 368 287.1 368C341 368 384 317.9 384 255.1C384 194.1 341 143.1 287.1 143.1z" fill="white"></path></svg>
          </div>
          <div class="grid px-5">
            <p class="text-gray-400 text-sm">ZWL Balance</p>
          <p class="text-black font-bold text-lg">2,300</p>
          </div>
          </div>
          <hr class="bg-gray-50 w-full ">
          <div class="py-1 flex">
            <p class="text-green-300 font-bold text-md mx-1">+3%</p>
            <p class="text-gray-600 text-md  font-bold mx-1"> than last month</p>
          </div>          
        </div>
      
      </div>
      <div class="py-6">
        <div class="bg-white w-64 h-32 border rounded-lg">
          <div class="flex flex-cols-2 p-4">
            <div class="w-14 h-14 -mt-9 borderd rounded-lg bg-green-600 p-3">
              <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 576 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M251.1 207.1C251.1 196.1 260.1 187.1 271.1 187.1H287.1C299 187.1 308 196.1 308 207.1V275.1H312C323 275.1 332 284.1 332 295.1C332 307 323 315.1 312 315.1H263.1C252.1 315.1 243.1 307 243.1 295.1C243.1 284.1 252.1 275.1 263.1 275.1H267.1V227.6C258.9 225.7 251.1 217.7 251.1 207.1zM48.66 79.13C128.4 100.9 208.2 80.59 288 60.25C375 38.08 462 15.9 549 48.38C565.9 54.69 576 71.62 576 89.66V399.5C576 423.4 550.4 439.2 527.3 432.9C447.6 411.1 367.8 431.4 288 451.7C200.1 473.9 113.1 496.1 26.97 463.6C10.06 457.3 0 440.4 0 422.3V112.5C0 88.59 25.61 72.83 48.66 79.13L48.66 79.13zM127.1 416C127.1 380.7 99.35 352 63.1 352V416H127.1zM63.1 223.1C99.35 223.1 127.1 195.3 127.1 159.1H63.1V223.1zM512 352V287.1C476.7 287.1 448 316.7 448 352H512zM512 95.1H448C448 131.3 476.7 159.1 512 159.1V95.1zM287.1 143.1C234.1 143.1 191.1 194.1 191.1 255.1C191.1 317.9 234.1 368 287.1 368C341 368 384 317.9 384 255.1C384 194.1 341 143.1 287.1 143.1z" fill="white"></path></svg>
          </div>
          <div class="grid px-5">
            <p class="text-gray-400 text-sm">Rands Balance</p>
          <p class="text-black font-bold text-lg">3,462</p>
          </div>
          </div>
          <hr class="bg-gray-50 w-full ">
          <div class="py-1 flex">
            <p class="text-red-500 font-bold text-md mx-1">-3%</p>
            <p class="text-gray-600 text-md  font-bold mx-1"> than yesterady</p>
          </div>          
        </div>
      
      </div>
      <div class="py-6">
        <div class="bg-white w-64 h-32 border rounded-lg">
          <div class="flex flex-cols-2 p-4">
            <div class="w-14 h-14 -mt-9 borderd rounded-lg bg-gray-400 p-3">
              <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 576 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M251.1 207.1C251.1 196.1 260.1 187.1 271.1 187.1H287.1C299 187.1 308 196.1 308 207.1V275.1H312C323 275.1 332 284.1 332 295.1C332 307 323 315.1 312 315.1H263.1C252.1 315.1 243.1 307 243.1 295.1C243.1 284.1 252.1 275.1 263.1 275.1H267.1V227.6C258.9 225.7 251.1 217.7 251.1 207.1zM48.66 79.13C128.4 100.9 208.2 80.59 288 60.25C375 38.08 462 15.9 549 48.38C565.9 54.69 576 71.62 576 89.66V399.5C576 423.4 550.4 439.2 527.3 432.9C447.6 411.1 367.8 431.4 288 451.7C200.1 473.9 113.1 496.1 26.97 463.6C10.06 457.3 0 440.4 0 422.3V112.5C0 88.59 25.61 72.83 48.66 79.13L48.66 79.13zM127.1 416C127.1 380.7 99.35 352 63.1 352V416H127.1zM63.1 223.1C99.35 223.1 127.1 195.3 127.1 159.1H63.1V223.1zM512 352V287.1C476.7 287.1 448 316.7 448 352H512zM512 95.1H448C448 131.3 476.7 159.1 512 159.1V95.1zM287.1 143.1C234.1 143.1 191.1 194.1 191.1 255.1C191.1 317.9 234.1 368 287.1 368C341 368 384 317.9 384 255.1C384 194.1 341 143.1 287.1 143.1z" fill="white"></path></svg>
          </div>
          <div class="grid px-5">
            <p class="text-gray-400 text-sm">Other currencies</p>
          <p class="text-black font-bold text-lg">2,898</p>
          </div>
          </div>
          <hr class="bg-gray-50 w-full ">
          <div class="py-1 flex">
            <p class="text-green-300 font-bold text-md mx-1">+5%</p>
            <p class="text-gray-600 text-md  font-bold mx-1"> than yesterday</p>
          </div>          
        </div>
      
      </div>
    </div>
    <div class="p-4 bg-white rounded shadow-sm">
                             
    <div class="flex justify-between">
      <div class="mb-4">
        <label for="descriptionFilter" class="block font-medium mb-1">Filter by Description:</label>
        <select v-model="descriptionFilter" id="descriptionFilter" class="border border-gray-300 rounded-md px-4 py-2 w-full">
          <option value="">All</option>
          <option v-for="description in descriptions" :value="description">{{ description }}</option>
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
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" class="px-6 py-3">
                                      Date Of Payment
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      Section
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Organisation
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      Name
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      Surname
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Payment Method
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Description
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                    Amount
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      Action
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="item in filteredItems" :key="item.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {{ item.dateOfPayment }}
                              </th>
                                <td class="px-6 py-4">{{ item.Section}}</td>
                                <td class="px-6 py-4">{{ item.Organisation}}</td>
                                <td class="px-6 py-4">{{ item.Name }}</td>
                                <td class="px-6 py-4">{{ item.Surname }}</td>
                                <td class="px-6 py-4">{{ item.paymentMethod }}</td>
                                <td class="px-6 py-4">{{ item.Description }}</td>
                                <td class="px-6 py-4">{{ item.Amount }}</td>
                                <td class="px-6 py-4">
                                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                              </td>
                              </tr>
                          </tbody>
                      </table>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      descriptionFilter: '',
      surnameFilter: '',
      items: [
        { id: 1, dateOfPayment: '10/03/2023', Section: 'P2', Organisation: 'UMYF', Name: 'Ruramai',   Surname: 'Botso',           paymentMethod: 'Cash', Description: 'Rupawo', Amount: '20' },
        { id: 2, dateOfPayment: '10/03/2023', Section: 'P2', Organisation: 'UMYF', Name: 'Rufaro',    Surname: 'Botso',           paymentMethod: 'Cash', Description: 'Rupawo', Amount: '20' },
        { id: 3, dateOfPayment: '10/03/2023', Section: 'P2', Organisation: 'UMYF', Name: 'Christian', Surname: 'Chikengezha',     paymentMethod: 'Cash', Description: 'Rupawo', Amount: '20' },
        { id: 4, dateOfPayment: '10/03/2023', Section: 'G2', Organisation: 'JSS',  Name: 'Thamia',    Surname: 'Mushamba',        paymentMethod: 'Cash', Description: 'Rupawo', Amount: '20' },
        { id: 5, dateOfPayment: '10/03/2023', Section: 'B2', Organisation: 'MUMC', Name: 'Desmond',   Surname: 'Mhindirira',      paymentMethod: 'Cash', Description: 'Rupawo', Amount: '20' },
      ],
    };
  },
  computed: {
    filteredItems() {
      let filteredItems = this.items;

      if (this.descriptionFilter) {
        filteredItems = filteredItems.filter((item) => item.Description === this.descriptionFilter);
      }

      if (this.surnameFilter) {
        filteredItems = filteredItems.filter(
          (item) => item.Surname.toLowerCase().includes(this.surnameFilter.toLowerCase())
        );
      }

      return filteredItems;
    },
    descriptions() {
      return [...new Set(this.items.map((item) => item.Description))];
    },
  },
};
</script>

<style>

</style>

    