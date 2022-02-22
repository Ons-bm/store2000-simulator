$("#files").change(function() {
    filename = this.files[0].name
    // console.log(filename);
});

function UploadFile() {
    var reader = new FileReader();
    var file = document.getElementById('attach').files[0];
    reader.onload = function() {
        document.getElementById('fileContent').value = reader.result;
        document.getElementById('filename').value = file.name;
        document.getElementById('wizard').submit();
    }
    reader.readAsDataURL(file);
}

$(document).ready(function() {
    $('.conditional').conditionize();
});