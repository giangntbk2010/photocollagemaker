$(":file").css("opacity", 0);
function collage(element){
    element.load("index.html");
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            input.nextElementSibling.setAttribute("src", e.target.result);
            input.nextElementSibling.onload = function() {
                if (this.height < this.width || this.height == this.width){
                    $(this).css('height', '100%');
                } else {
                    $(this).css('width', '100%');
                }
            }
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$('.x').click(function(event) {
    if (!$(event.target).is('.collage')) {
        $(this).find(".collage").trigger('click');
    }
});

$(":file").change(function() {
    readURL(this);
    $(this).parent().css('background-color', 'transparent');
    $(this).next().css('display', 'block');
});

var element = $("#img"); 
var getCanvas;

$("#btn-Preview-Image").on('click', function () {
    $("#pic").remove();
    $("#downloadBtn").remove();
    html2canvas(element, {
        onrendered: function (canvas) {
            canvas.id = "can";
            $("#previewImage").append(canvas);
            getCanvas = canvas;
            var image = new Image();
            image.id = "pic";
            image.src = document.getElementById('can').toDataURL();
            $('body').append(image);
            canvas.remove();
        }
    });

});