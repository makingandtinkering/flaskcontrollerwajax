  $(function() {
    $('a.command').on('click', function() {
      $.getJSON($SCRIPT_ROOT + '/_command', {
        command: $(this).attr('id')
      }, function(data) {
        $("#received-command").text(data.command);
      });
      return false;
    });
  });
