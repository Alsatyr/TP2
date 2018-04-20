
$(document).ready(function() {
    $('#a').on('click', function () {
      $.ajax({
        // we take all the games
          url: "https://api.magicthegathering.io/v1/cards",
          type: "GET",
          success: function(data) {
            
              let Cardlist = data.cards
              
              let magic = document.createElement('ul');
              

                      for (let i = 0; i < Cardlist.length; i++) {
                         

                   let listDeck = document.createElement('h1')
                  
                    listDeck.innerHTML = Cardlist[i].name
                  
                   magic.append(Cardlist);
                };
                document.querySelector('#resultList').appendChild(magic)
            
          }
      })
    })
})

