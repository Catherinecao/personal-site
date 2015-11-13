var Templates = {};

Templates.imgs = [
	'<div class="img clearfix">',
        '{{#each images}}',
            '<img src="{{img-1}}" alt="{{caption}}">',
        '{{/each}}',
    '</div>'
].join('\n');

Templates.detail = [
	'<div class="detail">',
	    '<h3 class="title">{{title}}</h3>',
	    '<p>{{blur}}</p>',
	'</div>'
].join('\n');

Templates.image = [
	            '<img src="{{image}}" alt="{{title}}">',
	            '<figcaption>{{caption}}</figcaption>'
].join('\n');

function compileTemplates(){
	for(template in Templates){
		Templates[template] = Handlebars.compile(Templates[template]);
	}
}

compileTemplates();