var playerParam = {
	onCreate: player => { },
	pcode: 'w5YXkxOoscIo8LfVGlQiBS7b8PCF',
	playerBrandingId: '9b46cefe5c614f219e5827e97702d108',
	debug: true,
	aspectRatio: '16:9',
	ve_playlistsPlugin: {
		data: ['2e464269d1fe4d8a92b47c3f05f5bc78'],
		elementId: 'playlist',
		highlightActive: true,
		onLoad: function () { hideSpinner(); },
		onItemClick: function (item, index) {
			function scrollTo(element, to, duration) {
				if (duration < 0) return;
				var difference = to - element.scrollTop;
				var perTick = difference / duration * 2;

				setTimeout(() => {
					element.scrollTop = element.scrollTop + perTick;
					scrollTo(element, to, duration - 2);
				}, 10);
			};
			scrollTo(document.body, 0, 50);
		},
		customCssClasses: {
			'container': 'Playlist-assets',
			'item': 'Playlist-asset animated fadeInUp',
			'image': 'Playlist-asset-image',
			'info': 'Playlist-asset-info',
			'title': 'Playlist-header'
		},
		color: '#0094BD'
	},
	//force MAX_BITRATE
	"initialBitrate": { "level": 1, "duration": 1000 },
	carousel: true,
	loop: true,
	useFirstVideoFromPlaylist: true,
	autoplay: true,
	skin: {
		config: '//player.ooyala.com/static/v4/stable/latest/skin-plugin/skin.json'
	},
};

OO.ready(() => {
	window.pp = OO.Player.create('ooyala_player', 'FhM2g5eTrGcjlT2zNw5K7TBd1yTY0LOj', playerParam);
});
// Hide spinner once we get assets

function hideSpinner() {
	let spinner = document.getElementById('spinner');
	spinner.className = "spinner animated fadeOutUp";
	setTimeout(() => {
		spinner.className = "spinner hide";
	}, 1000);
}
