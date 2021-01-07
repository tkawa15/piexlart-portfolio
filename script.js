$(function() {
    $.getJSON('info_imgs.json', function (data) {
        for(let i=(data["imgs_list"].length-1); i>=0; i--){
            let data_id = data["imgs_list"][i]["id"];
            let data_filename = data["imgs_list"][i]["filename"];
            $("#dots").append('<img id="item_no'+data_id+'" class="dot frame" src="imgs/'+data_filename+'" alt="'+data_filename+'">');
        }

        for(let i=(data["imgs_list"].length-1); i>=0; i--){
            let data_id = data["imgs_list"][i]["id"];
            let data_title = data["imgs_list"][i]["title"];
            let data_date = data["imgs_list"][i]["date"];
            let data_description = data["imgs_list"][i]["description"];
            let data_filename = data["imgs_list"][i]["filename"];
            $('#item_no'+data_id).hover(
              function() {
                $('#item_no'+data_id).css( { transform: "scale(1.1)", zIndex: 999 } );
              },
              function() {
                $('#item_no'+data_id).css( { transform: "scale(1)", zIndex: 10 } );
            }
          );
          $('#item_no'+data_id).click(function() {
              let detail_div = $('<div class="detail"><img class="dot frame" src="imgs/'+data_filename+'" /><h2><span>'+data_title+'</span></h2><p>'+data_date+'</p><p>'+data_description+'</p></div>');
              $('#popup').append(detail_div);
              $('#popup').animate( { opacity: 'toggle',}, { duration: 400, easing: 'swing', } );
          });
        }
        $('#popup').click(function() {
            $('#popup').animate( { opacity: 'toggle',}, { duration: 400, easing: 'swing', complete: function() {
              $('.detail').remove();
            }});
          });
    });
});
