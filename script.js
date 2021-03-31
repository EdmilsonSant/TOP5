
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
	
function busca(){
    
    

    $.ajax({
        async: true,
        url: "https://api-java-top.herokuapp.com/top",
        method: 'POST',
        success:function(response){
            console.log("testando");
            console.log(response);

        },
        error: function(){
            console.log("Deu ruim");
        },
    
    });


}
