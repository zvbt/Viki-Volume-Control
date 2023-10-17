function volume() {
	window.addEventListener('wheel', function (e) {  
		let videoController = document.querySelector("#vmplayer_id_html5_api")
		if (videoController) {
			let wheelStatus = Math.sign(e.deltaY);
			if (wheelStatus > 0) {
				if (videoController.volume > 0.1) videoController.volume = videoController.volume - 0.1;
			} else {
				if (videoController.volume <= 0.9 && videoController.volume > 0)
					videoController.volume = videoController.volume + 0.1;
			}
		}
	});
}
volume()