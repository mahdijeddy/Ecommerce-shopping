<template>
    
         
    <div class="loading">
       
        <div>
            <div>.</div><div>.</div><div>.</div>
            <div class="tx">
                درحال بارگذاری

            </div>       
         </div>
    </div>
    
</template>
<style scoped lang="scss" >
.loading{
    z-index: 10;
    width: 80rem;
    height:30rem;
    background-color: rgba(13, 89, 126, 0.678);
    position: fixed;
    top: 20%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 50%;
    transform: translate(50% , 0%);
    .tx{
        animation: ts 2s ease 0s infinite 
    }
    
    div{
        color: rgb(250, 250, 250);
        font-size: 4rem;
        font-weight: 800;
        display: flex;
        :nth-child(1){ margin-right: 0.5rem;animation: loading 0.5s ease 0s infinite }
        :nth-child(2){ margin-right: 0.5rem;animation: loading 0.5s ease 0.3s infinite }
        :nth-child(3){ margin-right: 0.5rem;animation: loading 0.5s ease .66s infinite }
        
    }
    }
    @keyframes loading {
        0%{ transform: translateY(0px) ; color: rgb(255, 0, 0); opacity: 0.2;};
        25%{ transform: translateY(-5px) ; color: rgb(234, 255, 0); ; opacity: 0.4;};
        50%{ transform: translateY(0px) ; color: rgb(128, 255, 1); ; opacity: 0.6;};
        75%{ transform: translateY(5px) ; color: rgb(0, 255, 81); ; opacity: 0.8;};
        100%{ transform: translateY(0px) ; color: rgb(4, 255, 251); opacity: 1;};
    }
    @keyframes ts{
        0%{  scale:1 };
        50%{  scale:0.98 };
        100%{  scale:1 ;};
        
    }
</style>
