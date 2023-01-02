import { ref, computed ,reactive} from 'vue'
import { defineStore } from 'pinia'
// ___________firebase________
import {collection , getDocs } from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getStorage } from "firebase/storage";

import db from '../firebase/firebase'
const auth = getAuth()
 
    
    
   

// ?????????????????????

export const useStore = defineStore('store', {
  state: () => ({

    signUpEmail:'',
    signUpPassword:'',
    CartShow:false , 
    ProfileTab:false,
    data:[],
    singleProduct:{},
    addedToCart:[],
    totalCartPrice:0,
    isLgged:false,
    isAuthenticated:false,
    hasAccount:true,
    isSignedUp:false,
     profileInfo :{},

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
      getData(){
      
    const colRef = collection(db , "products")
        // ---------------------fetching data from firebase 
      getDocs(colRef)
          .then( snapshot => {
              
            snapshot.docs.forEach(e => {
              console.log(e.data());
              
                        this.data.push({...e.data() })
                       
                        
                       
             
            });
              

          })
          .catch(err => {
              console.log(err.massage)
          })
    },

    // -----------------alert function on website 
   alert(msg , cls){
    const div = document.createElement('div')
    div.innerText=msg
    div.className = `alert ${cls}`
    div.style.position='absolute'
    div.style.top='4rem'
    div.style.right='4rem'
    document.body.appendChild(div)
    setTimeout(() => {
      div.remove()
    }, 1000);
 
  },
  // ----------------create account on firebase-----------

 signUp(){
  
  createUserWithEmailAndPassword(auth, this.signUpEmail, this.signUpPassword)
    .then(e => {
      console.log('user created:', e.user)
      this.alert(' ایجاد حساب موفقیت امیز ' , 'alert-success')
      this.isSignedUp = true
    })
    .catch(err => {
      console.log(err.message)
      if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
        this.alert(' ایمیل از قبل وجود دارد ' , 'alert-danger')

      }else{

        this.alert('ایمیل نا معتبر' , 'alert-danger')
      }
    })

},

// -------------------------signOut 
signOut(){
  signOut(auth)
    .then(() => {
      console.log('user signed out')
      this.alert(' خروج موفقیت امیز ' , 'alert-success')
      this.isSignedUp = false
    })
    .catch(err => {
      this.alert('خطایی رخ داده است' , 'alert-danger')
    })
},
// --------------------------signIn 
signIn(){
  signInWithEmailAndPassword(auth, this.signUpEmail, this.signUpPassword)
.then(e => {
  this.alert(' ورود موفقیت امیز ' , 'alert-success')
  this.isSignedUp = true
})
.catch(err => {
  this.alert('خطایی رخ داده است' , 'alert-danger')
})
},
// ------------------------------storage 

Storage(){
  const storage = getStorage(firebaseApp, "gs://my-custom-bucket");
}

///////////////////////////////////////
//////////////////////////////////////
// ---------------end actions 
/////////////////////////////////
///////////////////////////////////
  }

  
})
