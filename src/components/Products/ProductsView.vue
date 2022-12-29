<template>
    <div class="col-9">
       <div class="d-flex justify-content-center align-items-center">
        <div class="card cardA">
                <div class="card-image">
                    <img src="../../asserts/images/p1.png" alt="" srcset="">
                </div>
                <div class="card-body BD">
                           <div class="ms-5 ps-3 fs-4">
                            <p>کاپشن</p>
                           </div>
                            <div class="ms-5 ps-3 my-3" >
                                
                                <img src="../../asserts/icons/Rating.png" alt="" srcset="">
                            </div>
                    
                            <div>
                                <p>قهوه ای</p>
                                <p>رنگ</p>
                            </div>
                            <div>
                                <p>کتان</p>
                                <p>جنس</p>
                            </div>
                            <div>
                                <p>41 43 40 45</p>
                                <p>اندازه های موجود</p>
                            </div>
                   
                </div>
               
        </div>
        <div class="card cardB">
            <div>
                
                <p>45000 T</p>
            </div>
            <div>
                <p class="text-success">
                    ارسال رایگان
                </p>
            </div>
            <div>
                <button class="btn btn-primary ">جزیات</button>
            </div>
            <div class="card-Wish" >
                <a href="#"><p>افزودن به خواسته ها</p>
                    <img src="../../asserts/icons/wish.png" alt="" srcset="">
                </a>
              
            </div>
        </div>
       </div>
    </div>
</template>
<style scoped lang="scss">
.BD{

    :nth-child(3){
        display: flex;
        color: rgb(148, 148, 148);
        justify-content: space-around;
    }
    :nth-child(4){
        display: flex;
        color: rgb(148, 148, 148);
        justify-content: space-around;
    }
    :nth-child(5){
        display: flex;
        color: rgb(148, 148, 148);
        justify-content: space-around;
    }
}
.cardA{
    width: 70%;
    height:  240px;
    border-top-right-radius: 0px;  
    border-bottom-right-radius:0px; 
    display: flex;
    flex-direction: row;
    
     
}
.card-Wish{
    background-color: rgb(255, 255, 255);
   
    margin-top: 5px;
    width: 80%;
    border: 1px solid rgb(197, 197, 197);
    border-radius: 5px;
    display: flex;
    a{
        display: flex;
        text-decoration: none;
        color: rgb(165, 165, 165);
        align-items: center;
        justify-content: space-around;
        width: 100%;
        P{
            margin-top: 15px;
        }
        
    }
}

.cardB{
    width: 30%;
    height: 240px;
    border-top-left-radius: 0px;  
    border-bottom-left-radius:0px; 
    display: flex;
    justify-content: center;
    align-items: center;
    :nth-child(3){
        width: 80%;
        button{
            width: 100%;
            padding: 10px;
        }
    }
    
   
}
</style>