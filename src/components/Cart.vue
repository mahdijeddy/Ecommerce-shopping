<template>
    <div class="cart">
        <div class="col-10 card">
            <div class="top">
            <div class="cnt1">
                <div class="left d-flex justify-content-between ">
                    <div>
                        <p class="text-muted">محصولات</p>
                        <div class="d-flex ">
                            <img style="width: 80px;" src="../asserts/images/p1.png" alt="">
                            <div class="mx-2">
                                <p>title</p>
                            <p class="text-muted">details 
                                brand
                            </p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <p class="text-muted">مقدار</p>
                        <div class="text-center mt-5">
                            <p>1</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-muted">قیمت </p>
                        <div class="mt-4">
                            <p>14000T </p>
                            <p class="pri">14000T هر واحد </p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <img src="../asserts/icons/wish.png" style="width: 40px; cursor: pointer;">
                        <button class="btn btn-light">حذف از سبد</button>
                    </div>
                </div>
                <div class="left d-flex justify-content-between ">
                    <div>
                        <p class="text-muted">محصولات</p>
                        <div class="d-flex ">
                            <img style="width: 80px;" src="../asserts/images/p1.png" alt="">
                            <div class="mx-2">
                                <p>title</p>
                            <p class="text-muted">details 
                                brand
                            </p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <p class="text-muted">مقدار</p>
                        <div class="text-center mt-5">
                            <p>1</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-muted">قیمت </p>
                        <div class="mt-4">
                            <p>14000T </p>
                            <p class="pri">14000T هر واحد </p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <img src="../asserts/icons/wish.png" style="width: 40px; cursor: pointer;">
                        <button class="btn btn-light">حذف از سبد</button>
                    </div>
                </div>
                <div class="left d-flex justify-content-between ">
                    <div>
                        <p class="text-muted">محصولات</p>
                        <div class="d-flex ">
                            <img style="width: 80px;" src="../asserts/images/p1.png" alt="">
                            <div class="mx-2">
                                <p>title</p>
                            <p class="text-muted">details 
                                brand
                            </p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <p class="text-muted">مقدار</p>
                        <div class="text-center mt-5">
                            <p>1</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-muted">قیمت </p>
                        <div class="mt-4">
                            <p>14000T </p>
                            <p class="pri">14000T هر واحد </p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <img src="../asserts/icons/wish.png" style="width: 40px; cursor: pointer;">
                        <button class="btn btn-light">حذف از سبد</button>
                    </div>
                </div>
                <div class="left d-flex justify-content-between ">
                    <div>
                        <p class="text-muted">محصولات</p>
                        <div class="d-flex ">
                            <img style="width: 80px;" src="../asserts/images/p1.png" alt="">
                            <div class="mx-2">
                                <p>title</p>
                            <p class="text-muted">details 
                                brand
                            </p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <p class="text-muted">مقدار</p>
                        <div class="text-center mt-5">
                            <p>1</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-muted">قیمت </p>
                        <div class="mt-4">
                            <p>14000T </p>
                            <p class="pri">14000T هر واحد </p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <img src="../asserts/icons/wish.png" style="width: 40px; cursor: pointer;">
                        <button class="btn btn-light">حذف از سبد</button>
                    </div>
                </div>
            </div>
            <div class="cnt2">
                <div class="right p-3 ">
                <div class="d-flex justify-content-around p-4">
                    <p class="text-muted">مجموع پرداختی :</p>
                    <p> 150000T</p>
                </div>
                <div class="d-flex justify-content-around p-4">
                    <p class="text-muted">تخفیف</p>
                    <p class="text-danger"> -1000T</p>
                </div>
                <hr>
                <div class="d-flex justify-content-around p-4">
                    <p >پرداختی نهایی</p>
                    <p class="text-success">50000T</p>
                </div>
                <div class="d-flex justify-content-around my-4">
                    <button class="btn btn-outline-primary w-75"> پرداخت </button>
                </div>
                </div>
            </div>
           
            </div>
            <div class="btm"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.cart{
    position: absolute;
    width: 1100px;
}
.top{
    width: 100%;
    display: flex;
}
.left{
    padding: 1rem;
    width: 100%;
    height: 150px;
    margin: 29px 5px 10px 5px;
    background-color: rgb(243, 243, 243);
    border-radius: 5px;
    img{
        border-radius: 20px;
        margin-right: 5px;
    }
}
.right{
    width: 100%;
    
    
}
.pri{
    font-size: 10px;
   
    color: rgb(190, 190, 190);
}
.cnt1{
    width: 70%;
    
}
.cnt2{
    width: 30%;
        

}
</style>