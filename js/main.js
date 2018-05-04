        
        function subNav(){//子导航悬浮
            var timer = null;//定义一个延时器
            window.onscroll =  function(){
                if(!timer){//函数节流
                    timer = setTimeout(function(){
                        console.log(1);
                        timer = null;
                    },2000)
                }//函数节流

                //子导航悬浮
                var scrollTop = document.documentElement.scrollTop;
                if(scrollTop>=616){
                    if(sub_nav.className == ""){
                        sub_nav.className = "active";
                        gifPic.style.display = "none";//隐藏子导航GIF图
                        backTopBox.style.display = "block";//显示回到顶部按钮
                    }
                }else{
                    if(sub_nav.className == "active"){
                        sub_nav.className = "";
                        gifPic.style.display = "block";//显示子导航gif图
                        backTopBox.style.display = "none";//隐藏回到顶部按钮
                    }               
                }          
            }
        }
        subNav();


        //回到顶部
        function timeTop(){
            var timer1 = null;
            backTop.onclick = function(){
                clearInterval(timer1)
                var timer1 = setInterval(function(){
                    if(document.documentElement.scrollTop <= 0){
                        document.documentElement.scrollTop = 0;
                        clearInterval(timer1);
                    }else{
                        document.documentElement.scrollTop = document.documentElement.scrollTop - 100;
                    }
                },1)
            }
        }
        timeTop();

        
























