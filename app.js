document.addEventListener("DOMContentLoaded",function(event){


   const urlApi  = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/';

   function getData(){
    $.ajax({
         url: urlApi
     })
     .done(response => {
      console.log(response);
      loadCountry(response);


     })
     .fail(error => {
         console.log(error);
     })

    }

     getData();



    let cs = [];
    let cdnt = [];
    let cdn = [];
    let ctt =[];
    let result = [];
    let vue;
    let ie;
    function loadCountry(res){

            for(let i = 0; i < res.airports.length; i++){

            cs[i] = res.airports[i].name;

            ctt[i] = $('<option>'+ cs[i] +'</option>');
            result =  $('.port').append(ctt);
          }
            $('.btn0').on("click", function(e){
                e.preventDefault();


                let j, v, g , h, ros;
                let tle = [];
                let rock = [];
                let arr1 = [];
                let arr2 = [];
                let arr3 = [];
                let arr4 = [];
                std = $( "select.port option:selected" ).val();
                //  console.log(std);
                for(let i = 0; i < res.airports.length; i++){


                  $.each(res.airports, function(j, v) {
                     //console.log(v.name);


                      ie = res.airports[i].iataCode;
                          if (v.name == std) {
                                //  console.log(std);

                                  tle = res.routes[v.iataCode];
                                    //console.log(tle[i]);
                                    //console.log(tle);
                                      //value = 'stn' type - string
                                      arr1.push(tle);
                                      arr2.push(res.airports[i].name);
                                      arr3.push(res.airports[i].iataCode);

                                      for(let x = 0; x < res.airports.length; x++){

                                      if(arr1[i][x] == arr3[i]){
                                      rock[x] = arr2[i];
                                      //console.log(rock[x]);
                                      }
                                    }
                                    //  console.log(rock + "<-------------------------------------------------");

                                    return;
                                    }

                                  });

                                }

                                  $('.resul').autocomplete({
                                source: rock,
                                focus: function( event, ui ) {
                                    $('.resul').val( ui.item.label );
                                    return false;
                                  }
                                });

                                    cdnt = $('<option>' + rock + '<option>');
                                    let resp = $('.city').prepend(cdnt);

                              });


                         }

                           loadCountry();


                      });
