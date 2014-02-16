$(function() {
    $("#age").change(function() {
        var age = $(this).val();
        $("#kid").css("opacity", age);
        $("#now").css("opacity", age - 1);
        
    });
    
    $('#beardies').bind('DOMMouseScroll mousewheel', function(e){
        var prev = parseFloat($("#age").val());
        var dir = (e.originalEvent.wheelDelta / 120) || (e.originalEvent.detail / -3);
        $("#age").val(prev + (dir/10));
        $("#age").change();
    });
    
    $("#age").change();
    
});