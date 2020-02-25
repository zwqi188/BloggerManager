/**
 * 播放amr格式音频
 */

module.exports = function () {
	var amrPlayer = {
		play: loadAndPlay
	};
	
	/**
	 * @method loadAndPlay
	 * @param url| String  播放音频的url
	 * @param audioId| String  播放音频的audio标签的id
	 * @describe 下载blob文件解码，并调用播放函数playPcm
	 */
	function loadAndPlay(url, audioId) {
		if(!url || !audioId) return;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'blob';
		xhr.onload = function(e) {
			if (this.status == 200) {
				var blob = this.response;

				try{
					readBlob(blob, function(data) {
						var samples = AMR.decode(data);
						playPcm(samples, audioId);
					});
				} catch(e){
					console.log("amr格式编解码出错");
				}

			}
		};
		xhr.send();
	}

	/**
	 * @method readBlob
	 * @describe 定义如何读取blob格式文件
	 */
	function readBlob(blob, callback) {
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = new Uint8Array(e.target.result);
			callback(data);
		};
		reader.readAsArrayBuffer(blob);
	}

	/**
	 * @method playPcm
	 * @describe 为audio添加source，播放语音
	 */
	function playPcm(pcmStream, audioId) {
		var pcm = PCMData.encode({sampleRate: 8000, channelCount: 1, bytesPerSample: 2, data: pcmStream});

		var audioPlayer = $("#" + audioId)[0];
		audioPlayer.src = "data:audio/mpeg;base64," + btoa(pcm);
		audioPlayer.play();
	}

	return amrPlayer;
};