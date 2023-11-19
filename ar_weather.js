var coodinates={}
$(document).ready(function(){
    get_Coordinates();
}) 
function get_Coordinates(){
    var searchParams=new URLSearchParams(window.location.search)
    if(searchParams.has("source") && searchParams.has("destination")){
        var source = searchParams.get("source")
        var destination = searchParams.get("destination")
        coodinates.source_lat=source.split(";")[0]
        coodinates.source_lon=source.split(";")[1]
        coodinates.destination_lat=source.split(";")[0]
        coodinates.destination_lon=source.split(";")[1]
    }else{
        alert("coodenadas no seleccionadas")
        window.history.back()
    }
}