const connect = "http://localhost:3010/search/";
    
    function getajax()
    {   
      console.log("GET");
      $.ajax({
        type: "GET",
        url: connect,
        success: function(msg){
          $('#Here').empty();
          console.log(msg);
          for(let i =0; i < msg.data[0].length; i++){
            $('#Here').prepend('<img src="' + msg.data[0][i].image +'" />');
            $('#Here').prepend('<p>' + msg.data[0][i].name +'</p>');
            $('#Here').prepend('<br><hr>');
          }
        }
      });
    }
    
    function postajax()
    {
      var id = parseInt(document.getElementById('idPOST').value);
      $.ajax({
        type: "POST",
        url: connect,
        
        data: "id="+ id +"&name=" + document.getElementById('namePOST').value + "&image=" + document.getElementById('imagePOST').value,
        success: function(msg){
          console.log(msg);
          if(msg == "id already exists")
          {
            alert("Id уже занято. Введите другое");
          }
          else
          {
            getajax();
        }
        }
      });
    }