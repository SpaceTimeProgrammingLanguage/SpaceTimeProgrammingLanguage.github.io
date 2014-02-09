$(document)
  .ready(function()
  {
    init();
  });

var init = function()
{
  $('#btn1')
    .on('click', function()
    {
      console.log('btn clicked');
      M.$W('btn clicked');
      var src = $('#input1')
        .text();
      alert(src);
      var src1 = M.parse(M.trim(src));
      var result = M.map(src1, [M.MEMORY]);
      $('#output1')
        .text(result);

    });
};