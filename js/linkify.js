var author = $('span.author').text();
var repo = $('span.repo').text();

var github = 'https://github.com';
var authorLink = github + '/' + author;
var repoLink = github + '/' + author + '/' + repo;

function makeHyperlink(link, text) {
	return '<a href="' + link + '" target="_blank">' + text + '</a>';
}

$('span.author').html(makeHyperlink(authorLink, author));

var repoHtml = makeHyperlink(repoLink, repo) + ' <span class="sub-header">(' +
	makeHyperlink(repoLink + '/issues', 'issues') + ', ' +
	makeHyperlink(repoLink + '/pulls', 'pulls') + ', ' +
	makeHyperlink(repoLink + '/wiki', 'wiki') + ')</span>';
$('span.repo').html(repoHtml);
