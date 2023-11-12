import { defineStore } from 'pinia'

export const useExemploStore = defineStore('exemplo', {
  state: () => ({
    contador: 0,
  }),
  actions: {
    increment() {
      this.contador++
    },
  },
})