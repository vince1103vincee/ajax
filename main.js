$(function(){
  /*  
  $('#btn1').click(function(){
        $('#msg').load('data.txt');
    });
   */
   $('#btn1').click(function(){
       $.get('data.txt', function(response, status, xhr){
           var ol = $('<ol></ol>');
           var arr = response.split('\n');
           for (var item in arr){
               ol.append('<li>' + arr[item] + '</li>');
           }
           $('#msg').append(ol);
       });
   });

   $('#btn2').click(function(){
    $.ajax({
        url:'https://ruienyuski.github.io/git_test/data.json',
        success:function(response){
            $.each(response, function(index, element){
                $('#info').append(
                    $('<li>', {text: [index+1]+ '.' + 'Name: ' + element.place}),
                    $('<li>', {text: [index+1]+ '.' + 'Address: ' + element.address}),
                    $('<p>')
                );
            });
            },
        error:function(xhr){alert("Error: " +xhr.status + " " +xhr.statusText);}
    });
   });

   $('#submitExample').click(function(){   
       $.ajax({
           type: "POST", //傳送方式
           url: "service.php", //傳送目的
           dataType: "json", //資料格式
           data:{
               nickname: $('#nickname').val(),
               gender: $('#gender').val()
           },
           success: function(data){
               if (data.nickname){
                   $('#demo')[0].reset();
                   $('#result').html(data.msg + '<br>' +
                       'Your nickname is [<font color="#0000ff">' + data.nickname + '</font>], ' +
                       'gender is : [<font color="#0000ff">'+  data.gender + '</font>].</font>');
               }else{
                   $('#demo')[0].reset();
                   $('#result').html('<font color="#ff0000>' + data.errorMsg + '</font>');
               }
           },
           error: function(jqXHR){
               $('#demo')[0].reset();
               $('#result').html('<font color="#ff0000">Error:' + jqXHR.status + '</font>'); 
           }

       })
   });

});
