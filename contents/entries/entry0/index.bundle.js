$(document)
  .ready(function()
  {
    init();
  });

var init = function()
{

  $(document)
    .on('click', '#btn1', function()
    {
      var src = $('#input1')
        .text();
      alert(src);
      var src1 = M.parse(M.trim(src));
      var result = M.map(src1, [M.MEMORY]);
      $('#output1')
        .text(result);

    });


};