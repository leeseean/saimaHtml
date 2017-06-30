function changeFontSizeRe(num){
    switch (+num) {
        case 0:
            $('#fontSizeContainer>div>a').removeClass('active');
            $('#fontSizeContainer>div>a.small').addClass('active');
            $('.member-content-container,.corporate-content-container,.charities-content-container,.home-content-container').css('font-size','90%');
            break;
        case 1:
            $('#fontSizeContainer>div>a').removeClass('active');
            $('#fontSizeContainer>div>a.medium').addClass('active');
            $('.member-content-container,.corporate-content-container,.charities-content-container,.home-content-container').css('font-size','100%');
            break;
        case 2:
            $('#fontSizeContainer>div>a').removeClass('active');
            $('#fontSizeContainer>div>a.large').addClass('active');
            $('.member-content-container,.corporate-content-container,.charities-content-container,.home-content-container').css('font-size','120%');
            break;
    }
}

//分页
function noop(){}
function getPageData(num){
    //获取页面数据函数
}
function Paging(defaultNums=5,totalPage,getPageData){
    let tml = '';
    if(defaultNums>totalPage){
        defaultNums = totalPage;
    }
    for(let i= 0,i<defaultNums;i++){
        if(i == 0) {
            tml += `<span class="num on" onclick="selectThis(this)">${i+1}</span>`;
        }
        tml += `<span class="num" onclick="selectThis(this)">${i+1}</span>`;
    }
    document.querySelector('.page').innerHTML(
        `<span class="prevNum" onclick="upDownNum(-1)">上一頁</span>
         <span class="prevNum" onclick="prevNextNum(-1)"><</span>
         ${tml}
         <span class="nextNum" onclick="prevNextNum(1)">></span>
         <span class="nextNum" onclick="upDownNum(1)">下一頁</span>`
    );
    function selectThis(elem){
        let pageNum = +elem.innerText;
        if(!$(elem).hasClass('on')){
            $(elem).addClass('on');
            $(elem).siblings('.num').removeClass('on');
        }else{
            return;
        }
        getPageData(pageNum);
    }
    function prevNextNum(flag){
        if(+$('.page>.num').eq(0).text()==1||+$('.page>.num').last().text()==totalPage){
            return;
        }
        $('.page>.num').each(function(index,item){
            if(flag == 1){
                item.text(--(+item.text()));
            }else if(flag==-1){
                item.text(+(+item.text()));
            }
        });
        $('.page>.num.on').trigger('click');
    }
    function upDownNum(flag){
        if(flag == 1){
            if($('.page>.num.on').index()==defaultNums-1){
                prevNextNum(flag);
                return;
            }
            $('.page>.num.on').removeClass('on').next('.num').addClass('on');
            $('.page>.num.on').trigger('click');
        }else if(flag == -1){
            if($('.page>.num.on').index()==0){
                prevNextNum(flag);
                return;
            }
            $('.page>.num.on').removeClass('on').prev('.num').addClass('on');
            $('.page>.num.on').trigger('click');
        }


    }
}
