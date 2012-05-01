

/**
 * Setup the plugins
 */
SkStItemWalker.setup([
	'MessageEffect',
	'MessageSystemDetector',
	'MessageDiffDetector',
	'MessageMysqlDetector',
	'MessageSyntaxHighlighter',
	'MessageMysqlResults',
	'MessageMultiQuotedText',
	'MessageQuotedText',
	'MessageBBCodeFormatter'/*,
	'MessageBookmarker'*/
]);


/**
 * Define custom emotes
 */
SkStEmote.
	defineCustom('(couchsurfing)', 'cs.png', 'Social network: CouchSurfing', 28, 19).
	defineCustom('(aim)', 'sn-aim.png', 'Social network: aim').
	defineCustom('(apple)', 'sn-apple.png', 'Social network: apple').
	defineCustom('(bebo)', 'sn-bebo.png', 'Social network: bebo').
	defineCustom('(blogger)', 'sn-blogger.png', 'Social network: blogger').
	defineCustom('(brightkite)', 'sn-brightkite.png', 'Social network: brightkite').
	defineCustom('(cargo)', 'sn-cargo.png', 'Social network: cargo').
	defineCustom('(delicious)', 'sn-delicious.png', 'Social network: delicious').
	defineCustom('(designfloat)', 'sn-designfloat.png', 'Social network: designfloat').
	defineCustom('(designmoo)', 'sn-designmoo.png', 'Social network: designmoo').
	defineCustom('(deviantart)', 'sn-deviantart.png', 'Social network: deviantart').
	defineCustom('(digg)', 'sn-digg.png', 'Social network: digg').
	defineCustom('(dopplr)', 'sn-dopplr.png', 'Social network: dopplr').
	defineCustom('(dribbble)', 'sn-dribbble.png', 'Social network: dribbble').
	defineCustom('(email)', 'sn-email.png', 'Social network: email').
	defineCustom('(ember)', 'sn-ember.png', 'Social network: ember').
	defineCustom('(evernote)', 'sn-evernote.png', 'Social network: evernote').
	defineCustom('(facebook)', 'sn-facebook.png', 'Social network: facebook').
	defineCustom('(flickr)', 'sn-flickr.png', 'Social network: flickr').
	defineCustom('(forrst)', 'sn-forrst.png', 'Social network: forrst').
	defineCustom('(friendfeed)', 'sn-friendfeed.png', 'Social network: friendfeed').
	defineCustom('(gamespot)', 'sn-gamespot.png', 'Social network: gamespot').
	defineCustom('(google)', 'sn-google.png', 'Social network: google').
	defineCustom('(google_plus)', 'sn-google_plus.png', 'Social network: google plus').
	defineCustom('(google_voice)', 'sn-google_voice.png', 'Social network: google voice').
	defineCustom('(google_wave)', 'sn-google_wave.png', 'Social network: google wave').
	defineCustom('(googletalk)', 'sn-googletalk.png', 'Social network: googletalk').
	defineCustom('(gowalla)', 'sn-gowalla.png', 'Social network: gowalla').
	defineCustom('(grooveshark)', 'sn-grooveshark.png', 'Social network: grooveshark').
	defineCustom('(ilike)', 'sn-ilike.png', 'Social network: ilike').
	defineCustom('(komodomedia_azure)', 'sn-komodomedia_azure.png', 'Social network: komodomedia azure').
	defineCustom('(komodomedia_wood)', 'sn-komodomedia_wood.png', 'Social network: komodomedia wood').
	defineCustom('(lastfm)', 'sn-lastfm.png', 'Social network: lastfm').
	defineCustom('(linkedin)', 'sn-linkedin.png', 'Social network: linkedin').
	defineCustom('(mixx)', 'sn-mixx.png', 'Social network: mixx').
	defineCustom('(mobileme)', 'sn-mobileme.png', 'Social network: mobileme').
	defineCustom('(mynameise)', 'sn-mynameise.png', 'Social network: mynameise').
	defineCustom('(myspace)', 'sn-myspace.png', 'Social network: myspace').
	defineCustom('(netvibes)', 'sn-netvibes.png', 'Social network: netvibes').
	defineCustom('(newsvine)', 'sn-newsvine.png', 'Social network: newsvine').
	defineCustom('(openid)', 'sn-openid.png', 'Social network: openid').
	defineCustom('(orkut)', 'sn-orkut.png', 'Social network: orkut').
	defineCustom('(pandora)', 'sn-pandora.png', 'Social network: pandora').
	defineCustom('(paypal)', 'sn-paypal.png', 'Social network: paypal').
	defineCustom('(picasa)', 'sn-picasa.png', 'Social network: picasa').
	defineCustom('(playstation)', 'sn-playstation.png', 'Social network: playstation').
	defineCustom('(plurk)', 'sn-plurk.png', 'Social network: plurk').
	defineCustom('(posterous)', 'sn-posterous.png', 'Social network: posterous').
	defineCustom('(qik)', 'sn-qik.png', 'Social network: qik').
	defineCustom('(rdio)', 'sn-rdio.png', 'Social network: rdio').
	defineCustom('(readernaut)', 'sn-readernaut.png', 'Social network: readernaut').
	defineCustom('(reddit)', 'sn-reddit.png', 'Social network: reddit').
	defineCustom('(roboto)', 'sn-roboto.png', 'Social network: roboto').
	defineCustom('(rss)', 'sn-rss.png', 'Social network: rss').
	defineCustom('(sharethis)', 'sn-sharethis.png', 'Social network: sharethis').
	defineCustom('(skype)', 'sn-skype.png', 'Social network: skype').
	defineCustom('(slashdot)', 'sn-slashdot.png', 'Social network: slashdot').
	defineCustom('(steam)', 'sn-steam.png', 'Social network: steam').
	defineCustom('(stumbleupon)', 'sn-stumbleupon.png', 'Social network: stumbleupon').
	defineCustom('(technorati)', 'sn-technorati.png', 'Social network: technorati').
	defineCustom('(tumblr)', 'sn-tumblr.png', 'Social network: tumblr').
	defineCustom('(twitter)', 'sn-twitter.png', 'Social network: twitter').
	defineCustom('(viddler)', 'sn-viddler.png', 'Social network: viddler').
	defineCustom('(vimeo)', 'sn-vimeo.png', 'Social network: vimeo').
	defineCustom('(virb)', 'sn-virb.png', 'Social network: virb').
	defineCustom('(windows)', 'sn-windows.png', 'Social network: windows').
	defineCustom('(wordpress)', 'sn-wordpress.png', 'Social network: wordpress').
	defineCustom('(xanga)', 'sn-xanga.png', 'Social network: xanga').
	defineCustom('(xanga_alt)', 'sn-xanga_alt.png', 'Social network: xanga alt').
	defineCustom('(xing)', 'sn-xing.png', 'Social network: xing').
	defineCustom('(yahoo)', 'sn-yahoo.png', 'Social network: yahoo').
	defineCustom('(yahoobuzz)', 'sn-yahoobuzz.png', 'Social network: yahoobuzz').
	defineCustom('(yelp)', 'sn-yelp.png', 'Social network: yelp').
	defineCustom('(youtube)', 'sn-youtube.png', 'Social network: youtube').
	defineCustom('(zootool)', 'sn-zootool.png', 'Social network: zootool').
	defineCustom('(boobs)', 'hidden-boobs.gif', 'Boobs!').
	defineCustom('(marijuana)', 'hidden-marijuana.gif', 'Marijuana!').
	defineCustom('(fuck)', 'hidden-fuck.gif', 'Fuck you!').
	defineCustom('(sucking)', 'hidden-sucking.gif', 'Suck my dick!');
