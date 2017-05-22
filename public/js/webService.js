var webService = (function(){
    var twitterApiUrl = 'https://api.twitter.com/1.1';

    return webService = {
        auth: auth,
        getTwits: getTwits
    }

    function auth(){
        throw new Error('Not Implimented Yet');
    }

    function getTwits(query){
        return new Promise( ( resolve, reject ) =>
            {
                fetch(twitterApiUrl+'/search/tweets.json?q='+query)
                .then(function(data){
                    try {
                        resolve( JSON.parse(data).statuses );
                    } catch(ex){
                        console.log('getTweets: fail to parse responce.', ex);
                        reject( [] );
                    } 
                })
                .catch(function(err){
                    console.log('getTweets: request faild.', err);
                    reject( [] );
                });  
            }
        );
    }


})();