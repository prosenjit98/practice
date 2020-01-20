function myFunction() {
    var url
    var placeForSearch,defultURL, keyvalue,templist=[], currtemp,currtemp1,currtemp2,currtemp3,currtemp4, currdate, city,country;
    const KELVIN=273;
    
    var weekday=["SUN","MON","TUE","WED","THR","FRI","SAT"],day1,day2,day3,day4;
    
        defultURL="https://api.openweathermap.org/data/2.5/forecast?q=";
        keyvalue="&mode=json&appid=39cb3f7c08d202fc54dd5340fb90ef8f";
        placeForSearch=document.getElementById("search_box").value;
        url=defultURL+placeForSearch+keyvalue;
        fetch(url).then( function(response) {
            let data= response.json();
    
            return data;
        }).then( function(data) {
    
            var  j=0;
            currtemp=Math.floor(data.list[0].main.temp-KELVIN);
            currtemp1=Math.floor(data.list[7].main.temp-KELVIN);
            currtemp2=Math.floor(data.list[14].main.temp-KELVIN);
            currtemp3=Math.floor(data.list[22].main.temp-KELVIN);
            currtemp4=Math.floor(data.list[30].main.temp-KELVIN);
            /*for(i=6;i<50;i+7){
               templist[j] =Math.floor(data.list[i].main.temp-KELVIN);
               j++;
            }*/
            var date1=new Date();
            currdate=date1.toString().substr(0,16);
            city=data.city.name;
            country=data.city.country;
            document.getElementById("day1").innerHTML=weekday[date1.getDay()+1];
            document.getElementById("day2").innerHTML=weekday[date1.getDay()+2];
            document.getElementById("day3").innerHTML=weekday[date1.getDay()+3];
            document.getElementById("day4").innerHTML=weekday[date1.getDay()+4];
    
        }).then( function() {
            display();
    
        })
    
    
        /*display toadays temp*/
        function display(){
            document.getElementById("date_field1").innerHTML=currdate;
            document.getElementById("place_field").innerHTML=city+","+country;
    
            //var lenthOfArray=templist.length;
            document.getElementById("currtemp").innerHTML=currtemp;
            document.getElementById("temp1").innerHTML=currtemp1;
            document.getElementById("temp2").innerHTML=currtemp2;
            document.getElementById("temp3").innerHTML=currtemp3;
            document.getElementById("temp4").innerHTML=currtemp4;
    
    
      }
    
    
    }
    