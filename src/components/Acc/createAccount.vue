<template>
<div class="createForm " >
  <div class="fs-4 text-center">
      ایجاد حساب  
</div>
  <div class="justify-content-between align-items-center  d-flex " dir="rtl">
   <div>
    <label for="exampleInputEmail1" class="form-label  "> نام</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp">
   </div>
  <div>
    <label for="exampleInputEmail1" class="form-label  "> نام خانوادگی</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  </div>
  <div class="mb-3" dir="rtl">
    <label for="exampleInputPassword1" class="form-label ">ایمیل</label>
    <input type="email" class="form-control" id="exampleInputPassword1">
  </div>
  <div>
    <label for="male">male</label>
    <input class="mx-2" type="radio" id="male" name="gendre" >
    <label for="female">female</label>
    <input class="mx-2" type="radio" id="female" name="gendre" >
  </div>
  <div>
    <button class="btn btn-primary w-100 fs-5 my-4"> ورود </button>
  </div>
  <hr>
  <div class="w-100 d-flex flex-column justify-content-center align-items-end px-1 my-1">
    <a class="text-decoration-none " href="#"> قوانین و مقررات</a>
    <a class="text-decoration-none " href="#"> ورود</a>
  </div>
  
</div>
</template>
<style scoped>
.createForm{
    
  width: 30rem;
  height: 40rem;
  margin: 3rem auto;
  

}
</style>