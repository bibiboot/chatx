  var socket = io.connect('http://localhost:8080');
  var first ;
  var second ;

  // on connection to server, ask for user's name with an anonymous callback
  socket.on('connect', function(){
    // call the server-side function 'adduser' and send one parameter (value of prompt)
    socket.emit('adduser', prompt("What's your name?"));
  });

  // listener, whenever the server emits 'updatechat', this updates the chat body
  socket.on('updatechat', function (username, data) {
    $('#data').focus();
    var t = $("<div class='content'><p id='w1'>"+data+"</p></div>");
    $("#w1").remove();
    $('body').append(t);

    $('#conversation').append('<b>'+username + ':</b> ' + data + '<br>');
    $('#conversation').scrollTop($('#conversation')[0].scrollHeight);
  });

  // listener, whenever the server emits 'updateusers', this updates the username list
  socket.on('updateusers', function(data) {
    //$('#users').empty();
    $.each(data, function(key, value) {
      //$('#users').append('<div>' + key + '</div>');
      if(first==undefined)
          first = key;
      else
          second = key;
    });
  });

  // on load of page
  $(function(){
    // when the client clicks SEND
    $('#datasend').click( function() {
      var message = $('#data').val();
      $('#data').val('');
      $('#data').focus();
      // tell server to execute 'sendchat' and send along one parameter
      socket.emit('sendchat', message);
    });

    // when the client hits ENTER on their keyboard
    $('#data').keypress(function(e) {
      if(e.which == 13) {
        $(this).blur();
        $('#datasend').focus().click();
      }
    });
  });

