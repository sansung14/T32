$(document).ready(function () {
    $("form").submit(function (event) {
        if($(this).attr('id')=="all"){
            loadDoc('all')
        }else if($(this).attr('id')=="name"){
            loadDoc('name')
        }else if($(this).attr('id')=="code"){
            loadDoc('code')
        }else if($(this).attr('id')=="codes"){
            loadDoc('codes')
        }else if($(this).attr('id')=="currency"){
            loadDoc('currency')
        }else if($(this).attr('id')=="lang"){
            loadDoc('lang')
        }else if($(this).attr('id')=="capital"){
            loadDoc('capital')
        }else if($(this).attr('id')=="callingcode"){
            loadDoc('callingcode')
        }else if($(this).attr('id')=="region"){
            loadDoc('region')
        }else if($(this).attr('id')=="regionalbloc"){
            loadDoc('regionalbloc')
        }else if($(this).attr('id')=="services"){
            loadDoc('services')
        }
    

    function loadDoc(tabla) {
        noarray=0;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                json = jQuery.parseJSON(this.responseText);
                if(noarray==0){
                    count=json.length;
                    html="";
                    for(i=0;i<count;i++){
                        html+="<tr><td>"+json[i].name+"</td>"+
                                "<td>"+json[i].region+"</td>"+
                                "<td>"+json[i].capital+"</td>"+
                                "<td>"+json[i].alpha2Code+"</td>";
                                if(valor1=="currencies" || valor2=="currencies" || valor3=="currencies"){
                                    html+="<td>"+json[i].currencies[0].code+"</td>";
                                }else{
                                    html+="<td>undefined</td>";
                                }

                                if(valor1=="languages" || valor2=="languages" || valor3=="languages"){
                                    html+="<td>"+json[i].languages[0].name+"</td>";
                                }else{
                                    html+="<td>undefined</td>";
                                }
                                html+="<td>"+json[i].callingCodes+"</td>"+
                                "<td>"+json[i].population+"</td></tr>";
                    }
                }else{
                    html="<tr><td>"+json.name+"</td>"+
                                "<td>"+json.region+"</td>"+
                                "<td>"+json.capital+"</td>"+
                                "<td>"+json.alpha2Code+"</td>"+
                                "<td>"+json.currencies[0].code+"</td>"+
                                "<td>"+json.languages[0].name+"</td>"+
                                "<td>"+json.callingCodes+"</td>"+
                                "<td>"+json.population+"</td></tr>";
                    
                }
                
                document.getElementById("tbody").innerHTML=html;
            }
        };
        valor1="currencies";
        valor2="languages";
        if(tabla=="all"){
            xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
        }else if(tabla=="name"){
            nombre=$("#nombre").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/name/"+nombre, true);
        }else if(tabla=="code"){
            codigo=$("#codigo").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/alpha/"+codigo, true);
            noarray=1;
        }else if(tabla=="codes"){
            codigo1=$("#codigo1").val();
            codigo2=$("#codigo2").val();
            codigo3=$("#codigo3").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/alpha?codes="+codigo1+";"+codigo2+";"+codigo3, true);
        }else if(tabla=="currency"){
            currency=$("#moneda").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/currency/"+currency, true);
        }else if(tabla=="lang"){
            lang=$("#idioma").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/lang/"+lang, true);
        }else if(tabla=="capital"){
            capital=$("#cap").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/capital/"+capital, true);
        }else if(tabla=="callingcode"){
            callingcode=$("#calcode").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/callingcode/"+callingcode, true);
        }else if(tabla=="region"){
            region=$("#regional").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/region/"+region, true);
        }else if(tabla=="regionalbloc"){
            regionalbloc=$("#regionbloc").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/regionalbloc/"+regionalbloc, true);
        }else if(tabla=="services"){
            valor1=$("#valor1").val();
            valor2=$("#valor2").val();
            valor3=$("#valor3").val();
            xhttp.open("GET", "https://restcountries.eu/rest/v2/all?fields="+valor1+";"+valor2+";"+valor3, true);
        }
        xhttp.send();
    }


    event.preventDefault();
  });
});