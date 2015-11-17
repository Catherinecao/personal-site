var Templates = {};

Templates.thumbnail = [

		'<div class="img-s">',
			'<img class="s" src="img/DR-m.png" alt="">',
			'<img class="m" src="img/DR.png" alt="">',
			'<div class="info">{{caption1}}</div>',
		'</div>'

].join('\n');

Templates.imgs = [
	'<div class="img clearfix">',
        
            '<img src="{{img-1}}" alt="{{caption}}">',
        
    '</div>'
].join('\n');

Templates.detail = [
	
	    '<h3 class="title">{{title}}</h3>',
	    '<p>{{blur}}</p>'
	
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