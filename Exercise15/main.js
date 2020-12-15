  $(document).ready(function () {

      ///// Code goes here
      $("#btnOne").click(function () {
          alert("Hello");
      });

      $("#btnTwo").click(function () {
          var html = $('.update-html').html("Hello World!");
      });

      $("#btnThree").click(function () {
          var value = $('#text-update').val("Hello World!");
      });

      $("#btnCopyHtml").click(function () {
          var copiedHtml = $('.copy-html');
          $('.paste-html').html(copiedHtml);
      });

      $("#btnCopyValues").click(function () {
          var copiedValue = $('#copy-text').val();
          $('#paste-text').val(copiedValue);

      });
  });