// store/index.js
export const state = () => ({
    formData: []
  })
  
  export const mutations = {
    updateFormData(state, formData) {
      state.formData = formData;
    }
  }
  