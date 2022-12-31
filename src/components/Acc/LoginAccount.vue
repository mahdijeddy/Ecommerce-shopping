<template>

<div class="loginForm " >
  <div class="fs-4 text-center">
      ورود   
</div>
  <div dir="rtl">
    <label for="exampleInputEmail1" class="form-label  ">آدرس ایمیل</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3" dir="rtl">
    <label for="exampleInputPassword1" class="form-label ">پسورد</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div>
    <button class="btn btn-primary w-100 fs-5 my-4"> ورود </button>
  </div>
  <hr>
  <div class="w-100 d-flex flex-column justify-content-center align-items-end px-1 my-1">
    <a class="text-decoration-none " href="#"> فراموشی رمز عبور</a>
    <a class="text-decoration-none " href="#">ایجاد حساب</a>
  </div>
  
</div>
    
</template>
<style scoped lang="scss">
.loginForm{
  width: 22rem;
  height: 30rem;
  margin: 3rem auto;
  div{
    margin-top: 2rem;
  }
}
</style>