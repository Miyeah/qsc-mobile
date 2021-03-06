function loadXiaoli() {
    if(typeof(xiaoliData) == "undefined") {
        (function() {

            // $('#xiaoli_notice').on('click', 'ul > li', function() {
            //     var id = $(this).attr('id').replace("notice_id_", "");
            //     $(this).find('.content').toggle();
            //     loadNoticeDetail(id);
            // });

            getData('share/shijian', function(data){
                window.xiaoliData = data;
                loadShijian();
            });
        })()
    }
}

function loadShijian() {
    var htmlNow = '', htmlFuture = '', htmlPast = '';
    var now = (new Date()).getTime();
    // 汇总
    for(var i=0; i<xiaoliData.length; i++) {
        var item = xiaoliData[i];
        var content = item['事件内容'];
        var type = item['事件类型'];
        var begin = item['起始时间'];
        var end = item['终止时间'];

        var delta = (new Date(end)).getTime() - now;

        if(delta < -24*3600*1000) {
            // 已过去
            htmlPast += '<li><div class="content">'+content+'</div><div>'+begin+' - '+end+'</div></li>';
        } else if (delta > 2*30*24*3600*1000){
            // 60天以后
            htmlFuture += '<li><div class="content">'+content+'</div><div>'+begin+' - '+end+'</div></li>';
        } else {
            // 一个月内
            htmlNow += '<li><div class="content">'+content+'</div><div>'+begin+' - '+end+'</div></li>';
        }
    }


    $('#xiaoli_now ul').html(htmlNow);
    $('#xiaoli_future ul').html(htmlFuture);
    $('#xiaoli_past ul').html(htmlPast);
}

// function loadNotice() {
//     var htmlNotice = '';
//     for(var j=0, len=noticeData.length; j<len; j++) {
//         var item = noticeData[j];


//         var timeEnd = new Date(item.time_end);
//         var now = new Date();
//         timeEnd.setHours(23, 59, 59);

//         if(now.getTime() > timeEnd.getTime())
//           continue;

//         htmlNotice += '<li id="notice_id_'+item.id+'"><div class="title">'+item.title+ '</div><div class="location">'+item.location+'</div><div class="time_start">开始：'+item.time_start+'</div><div class="time_end">结束：'+item.time_end+'</div><div class="content" style="display:none"></div></li>';
//     }
//     htmlNotice = htmlNotice ? htmlNotice : "<li>好的嘛，目前木有活动了……</li>";
//     $('#xiaoli_notice ul').html(htmlNotice);
// }

// function loadNoticeDetail(id) {
//     if(sessionStorage["notice_id_"+id]){
//         var data = sessionStorage["notice_id_"+id];
//         data = JSON.parse(data);
//         $("#notice_id_"+id+" .content").html("<hr><br>"+data.content);
//     } else {
//         fetchData('share/notice?id='+id, true, function(data) {
//             if(!data) return;

//             // 去掉图片
//             data.content = data.content.replace(/<img.*>/g, '');

//             $("#notice_id_"+id+" .content").html("<hr><br>"+data.content);
//             sessionStorage["notice_id_"+id] = JSON.stringify(data);
//         });
//     }
// }
