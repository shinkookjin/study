$(function() {
    //증가 버튼 클릭하면 1씩 증가, 해당상품 합계계산, 전체 합계계산
    $('.btnUp').on('click',function(){
        var cnt = parseInt($(this).parents('tr').find('.cnt').val());
        
        if(cnt >= 10){
            cnt = 10;
        }else{
            cnt++;
        }
        
        $(this).parents('tr').find('.cnt').val(cnt);
        
        reCalc($(this));
    });
    
    //감소 버튼 클릭하면 1씩 감소, 해당상품 합계계산, 전체 합계계산
    $('.btnDown').on('click',function(){
        var cnt = parseInt($(this).parents('tr').find('.cnt').val());
        
        cnt--;
        
        if(cnt <= 1){
            cnt = 1;
        }else{
            cnt--;
        }
        
        $(this).parents('tr').find('.cnt').val(cnt);
        
        reCalc($(this));
        
    });
    //삭제 버튼 클릭하면 해당 상품 삭제, 전체 합계계산
    $('.btnDel').on('click',function(){
        $(this).parents('tr').remove();
        reCalc($(this));
    });
    //위치 버튼 클릭하면 관심 목록에 추가되었다고 알림.
    $('.btnWish').on('click',function(){
        var a = $(this).parents('tr');
        var b = a.find('td').eq(0).text();
        
        alert(b.trim() +'를 보관하였습니다.');
    });
    
    
    
    //다시 계산하는 함수
    function reCalc(a){
//        해당 상품만 계산
        var cnt = parseInt(a.parents('tr').find('.cnt').val());
        var oriP = parseInt(a.parents('tr').find('.oriPrice').text());
        
//        console.log(cnt);
//        console.log(oriP);
//        console.log(cnt * oriP);
        
        a.parents('tr').find('.sumPrice').text(comma(cnt * oriP) + '원');
        
        
//        전체 상품 계산
        var sumCnt = $('.sumPrice').length;
        var totPrice = 0; 
//        console.log(sumCnt);
        for(var i=0; i < sumCnt; i++){
            totPrice += parseInt($('.sumPrice').eq(i).text());
        }
        
//        console.log(totPrice);
        $('.totPrice').text(comma(totPrice) +'원');
    }
    
    //콤마 찍는 함수
    function comma(x){
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
});