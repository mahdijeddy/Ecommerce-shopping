import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({

    CartShow:false , 


    // -------------------asjdh?
    Header:{
      CatState:false,
    },
    state : false,
    Products:{
      Drops:{
        Price1:false,
        Size1:false,
      },
     mostPopuler:{
      P1:{
        imgSrc:"src/asserts/images/p1.png",
        title: "کاپشن درجه یک باگستون",
        price: "2,150,000, T",

      },
      P2:{
        imgSrc:"src/asserts/images/p2.png",
        title: "کیف لبتاپ مدل 234",
        price: "3,400,000 T",

      },
      P3:{
        imgSrc:"src/asserts/images/p3.png",
        title: "پیراهن ساده مردانه",
        price: "260,000 T",

      },
      P4:{
        imgSrc:"src/asserts/images/p4.png",
        title: "yt23 nike شلوارک  ",
        price: "800,000 T",

      },
     },
      newArrived:{
        P5:{
          imgSrc:"src/asserts/images/p5.png",
          title: "mini SD 256Gb",
          price: "400,000 T",
  
        },
        P6:{
          imgSrc:"src/asserts/images/p6.png",
          title: "تک مبل راحتی",
          price: "1,9500,000 T",
  
        },
        P7:{
          imgSrc:"src/asserts/images/p7.png",
          title: "هدست ",
          price: "900,000 T",
  
        },
        P8:{
          imgSrc:"src/asserts/images/p8.png",
          title: "ساعت هوشمند",
          price: "8,000,000 T",
  
        }
      }
    },
   }),
 
  actions: {
    
  },
})
