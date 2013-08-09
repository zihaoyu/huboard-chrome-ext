var author = $('span.author').text();
var repo = $('span.repo').text();

var github = 'https://github.com';
var authorLink = github + '/' + author;
var repoLink = github + '/' + author + '/' + repo;

$('span.author').html('<a href="' + authorLink + '" target="_blank">' + author + '</a>');
$('span.repo').html('<a href="' + repoLink + '" target="_blank">' + repo + '</a>');
