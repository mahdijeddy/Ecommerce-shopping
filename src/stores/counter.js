import { defineStore } from 'pinia'
// ___________firebase________
import {collection , getDocs ,addDoc, setDoc ,doc } from 'firebase/firestore'
import { getStorage , ref ,uploadBytes ,getDownloadURL ,deleteObject  } from "firebase/storage";
import {db } from '../firebase/firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
} from 'firebase/auth'

const auth = getAuth()
const storage = getStorage();  
    
   

// ?????????????????????

export const useStore = defineStore('store', {
  state: () => ({

    signUpEmail:'',
    signUpPassword:'',
    data:[],
    CartShow:false , 
    ProfileTab:false,
    singleProduct:{},
    addedToCart:[],
    totalCartPrice:0,
    isLgged:false,
    isAuthenticated:false,
    hasAccount:true,
    isSignedUp:false,
    profileInfo :{},
    profileImage:'',
    file:'',
    loading:false,
    urlImage:'/src/asserts/images/11.jpg',
    
    state : false,
    Products:{
      Drops:{
        Price1:false,
        Size1:false,
      },
      mostSale:{
      state:false,
      products:{
        p1:{
          title:'product1 it isnt loaded',
          price:'240000T',
          img:"https://i.postimg.cc/pdyC3SsP/7.jpg",
          detail:"lorem ipsum"
        }
      }
    },
    new:{
      state:false , 
      products:{
        p1:{
          title:'product1 it isnt loaded',
          price:'240000T',
          img:"https://i.postimg.cc/pdyC3SsP/7.jpg",
          detail:"lorem ipsum"
        },
        p2:{
          title:'product1 it isnt loaded',
          price:'240000T',
          img:"https://i.postimg.cc/MTV7SJVJ/p1.png",
          detail:"lorem ipsum"
        },
      }
    }
    }}),
 
  actions: {
    
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
    }, 2000);
 
  },
      getData(){
        this.loading = true
    const colRef = collection(db , "products")
        // ---------------------fetching data from firebase 
      getDocs(colRef)
          .then( snapshot => {
              
            snapshot.docs.forEach(e => {
              console.log(e.data());
              this.data.push({...e.data() })
                       
              this.loading = false
          });

          })
          .catch(err => {
              this.alert(err.message , 'alert-danger')
              this.loading = false
          })
    },

  // ----------------create account on firebase-----------

 signUp(){
   this.loading = true ; 
      createUserWithEmailAndPassword(auth, this.signUpEmail, this.signUpPassword)
    .then(e => {
      console.log('user created:', e.user)
      this.alert(' ایجاد حساب موفقیت امیز ' , 'alert-success')
      this.isSignedUp = true
      this.loading = false
    })
    .catch(err => {
      this.loading = false
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
  this.loading = true
  signOut(auth)
    .then(() => {
      console.log('user signed out')
      this.alert(' خروج موفقیت امیز ' , 'alert-success')
      this.isSignedUp = false
     
      this.loading = false
    })
    .catch(err => {
      this.loading = false

      this.alert('خطایی رخ داده است' , 'alert-danger')
    })
},// --------------------------signIn 
signIn(){
  this.loading = true

  signInWithEmailAndPassword(auth, this.signUpEmail, this.signUpPassword)
.then(e => {
  this.alert(' ورود موفقیت امیز ' , 'alert-success')
  this.isSignedUp = true
  this.UserInfoDownload()


  getDownloadURL(ref(storage, 'images/'+this.profileInfo.img))
  .then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
    this.urlImage = url
    this.loading = false
  })
  .catch((error) => {
   console.log(error.message);
   this.loading = false
  });
})
.catch(err => {
  this.alert(err.message , 'alert-danger')
  this.loading = false
})
},

// ------------------------------storage 

downloadImage(){
  this.loading = true
  getDownloadURL(ref(storage, 'images/'+this.file.name))
  .then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
    this.urlImage = url
    this.loading = false
  })
  .catch((error) => {
   console.log(error.message);
   this.loading = false
  });
},
UploadImage(){
  
  const storageRef = ref(storage , 'images/'+this.file.name);
  uploadBytes(storageRef,this.file ).then((e) => {
    console.log('Uploaded a blob or file!');
    this.downloadImage()
  });

},
deletImage(){
  deleteObject(ref(storage , 'images/'+this.file.name)).then(() => {
   console.log('deleted');
   this.urlImage = ''
  }).catch((error) => {
    console.log(error.message);
  });
},
// --------------------------------------userInfo -----------
UserInfoDownload(){
  
  const colRefUser = collection(db, "users")
  

  this.loading = true
  getDocs(colRefUser)
.then(e => {
  let ee;
 
    e.docs.forEach(doc=>{
     
      ee = doc.data()
    })
    console.log(ee);
    if (ee.id == this.signUpEmail) {
    this.profileInfo = ee
      
    }
     this.urlImage = this.profileInfo.img
    this.alert('updated' )
    this.loading = false
})
.catch(err => {
    console.log(err.massage)
    this.alert('Error','alert-danger' )
    this.loading = false
})
},

UserInfoUpload(){
  this.loading = true
  this.profileInfo.img = this.profileImage
  const colRefUser = collection(db, 'user')
  addDoc(colRefUser, this.profileInfo)
  .then(() => {
    this.alert('updated' , 'alert-success')
    this.UserInfoDownload()
    this.loading = false
  })
},


UserInfoDelet(){
  const colRefUser = collection(db, 'user')
  deleteDoc(colRefUser)
    .then(() => {
     this.alert('deleted' , 'alert-danger')
    })

},
UserInfoSet(){
   setDoc(doc(db, "users", this.signUpEmail),this.profileInfo)
   .then(() => {
    this.alert('updated' , 'alert-success')
    this.UserInfoDownload()
    this.loading = false
  })
},


///////////////////////////////////////
//////////////////////////////////////
// ---------------end actions 
/////////////////////////////////
///////////////////////////////////
  }

  
})
