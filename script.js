$(document).ready(function(){
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript';

    $.getJSON(url, function(data){
        var currentQuotes = '';
        var quotes = data.hits;

        $('.read').on('click', function(){
            currentQuotes = quotes[Math.floor(Math.random() * quotes.length)];
            console.log(currentQuotes); 
            //show me buttton
            $('.quoteBody').html(currentQuotes.title);
            $('.quoteAuthor').html(currentQuotes.author);

            //tweet button
            $('.tweetQuote').attr(
            'href', 
            'https://twitter.com/intent/tweet?text= ' + currentQuotes.title + ' - ' + currentQuotes.author)
            .attr('target', '_blank')
            .attr('disabled', false);
        $('.read').html('Give me more');

        });
    });
});