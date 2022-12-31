<template>
    <div class="profileForm">
        <div class="fs-3 text-center p-2 pt-4">
            پروفایل
        </div>
        <div class="profilePic p-4">
            <img src="../../asserts/images/p8.png" alt="">
            <label for="input">
                <p class="btn btn-outline-secondary mt-3">آپلود عکس</p>
                <input accept="image/*" id="input" type="file" >
            </label>
            <button class="btn btn-outline-secondary mx-2">
                حذف
            </button>
        </div>
        <div class="d-flex my-4 justify-content-around">
            <div >
                <label for="name">نام</label>
            <input class="form-control" type="text">
            </div>
            <div>
                <label for="name">نام خانوادگی</label>
            <input class="form-control" type="text">
            </div>
        </div>
        <div class="d-flex my-4 justify-content-around">
            <div >
                <label for="name">استان</label>
            <input class="form-control" type="text">
            </div>
            <div>
                <label for="name">شهر </label>
            <input class="form-control" type="text">
            </div>
        </div>
        <div class="d-flex my-4 justify-content-around">
            <div >
                <label for="name">کد پستی</label>
            <input class="form-control" type="text">
            </div>
            <div>
                <label for="name">شماره تلفن </label>
            <input class="form-control" type="number">
            </div>
        </div>
        <div>
            <button class="btn btn-primary mx-3">بروز رسانی</button>
        </div>

    </div>
</template>

<style scoped lang="scss">
.profileForm{
    width: 32rem;
    margin: 3rem auto;
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    height: 37rem;

    .profilePic{
        
        img{
            border-radius: 50%;
            width: 70px;
            margin-right: 19px;
            height: 70px;
        }
        #input{
            display: none;
        }
    }
}

</style>