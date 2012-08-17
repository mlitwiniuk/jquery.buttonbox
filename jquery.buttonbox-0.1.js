(function($){
  $.fn.buttonbox = function(options) {
    var defaults = {
    };
    var options = $.extend(defaults, options);

    var transform_input = function(obj){
      var label = obj.attr('title');
      if(!label){
        var lbl = $('label[for="'+obj.attr('id')+'"]');
        label = lbl.text();
        lbl.hide();
      }
      var toggled = obj.is(':checked') ? 'active' : '';
      if(obj.attr('type') == 'checkbox'){
        var btn = $('<button class="btn '+(obj.attr('class')||'')+' '+toggled+'" id="btn_'+obj.attr('id')+'" data-toggle="button" type="button" data-input="'+obj.attr('id')+'">'+label+'</button>');
        btn.insertAfter(obj);
        obj.hide();
        btn.button();
        btn.click(function(){
          var $this = $(this);
          var $obj = $('#'+$this.data('input'));
          // toggled button on click button still has class 'active'
          if(!$this.hasClass('active')){
            $obj.attr('checked', 'checked');
          }else{
            $obj.attr('checked', null);
          }
        });
      }
    }
    return this.each(function() {
      obj = $(this);
      if(obj.attr('type') == 'checkbox' || obj.attr('type') == 'radio'){
        transform_input(obj);
      }
    });
  };
})(jQuery);
