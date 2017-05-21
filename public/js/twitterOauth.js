document.addEventListener("DOMContentLoaded", function(event) {    

    var unauthView = document.getElementById('unauth-view-id');
    var authButton = document.getElementById('auth-button-id');

    var authView = document.getElementById('auth-view-id');

    var userNameElem = document.getElementById('user-name-id');
    var twitsContainer = document.getElementById('twits-container-id');

    isAuth().then( result =>{
        if ( result.isAuth ){

            unauthView.style.display = 'none';
            authView.style.display = 'block';

            getData()
            .then( data =>
                {
                    userNameElem.innerText = data.userName;
                    twitsContainer.innerHtml = data.twits;
                }
            ).catch( error => console.log(error.error));
        } else {
            unauthView.style.display = 'block';
            authView.style.display = 'none';
        }
    });

    function isAuth(){
        return new Promise( ( resolve, reject ) => resolve( { isAuth: false } ) )
    };
    
    function getata(){
        return new Promise( ( resolve, reject ) => reject( { error: 'Not Implimented Yet' } ) )
    }

     function auth(){
        throw new Error('Not Implimented Yet');
    }

    window.twitterOauth = {
        auth
    };

});