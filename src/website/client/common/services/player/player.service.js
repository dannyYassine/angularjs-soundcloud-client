/**
 * Created by dannyyassine on 2017-12-06.
 */

/**
 * PlayerService
 * Class to handle audio actions for the current song
 * @type {Function}
 */
const PlayerService = (function (soundCloudConfigAPI) {

    /**
     * Player Object
     */
    let player = {
        audio: null,
        text: 'PAUSE',
        track: null,
        currentTime: 0,
        isPaused
    };

    let events = {
        'sdn.notifications.player.update': [],
        'sdn.notifications.player.play': [],
        'sdn.notifications.player.error': []
    };

    return {
        player,
        getCurrentTime,
        play : playSong,
        resume: resume,
        pause: pauseSong,
        stop : stopSong,
        seek : seekToPosition,
        on: on
    };

    function _canPlaySong (song) {
        return true;
    }

    /**
     * Resets current audio song to default settings
     */
    function _resetPlayerIfNeeded() {
        if (player.audio) {
            player.audio.pause();
            player.audio = null;
        }
    };

    /**
     *
     * @param song
     * @private
     */
    function _initAudio(song) {
        player.audio = new Audio(`${song.stream_url}?client_id=${soundCloudConfigAPI.clientID()}`);
        player.audio.addEventListener('timeupdate', () => {
            updateProgress();
        });
    }

    function updateProgress() {
        player.text = isPaused() ? "PAUSE" : "PLAY";
        player.currentTime = player.audio.currentTime;
        trigger('sdn.notifications.player.update', player);
    }

    function getCurrentTime() {
        return player.audio ? player.audio.currentTime : 1;
    }

    function on (event, callback) {
        events[event].push(callback);
    }
    
    function trigger(event, data) {
        events[event].forEach((callback) => {
            callback(data);
        });
    }

    /**
     * Play song and set it as new current song
     * @param song
     */
    function playSong(song) {
        if (!_canPlaySong(song)) {
            $rootScope.$broadcast('sdn.notifications.player.error', song);
            return;
        }
        _resetPlayerIfNeeded();
        player.track = song;
        _initAudio(song);
        player.audio.play();
        trigger('sdn.notifications.player.play', song);
    }

    /**
     * Resumes the current song
     */
    function resume() {
        if (!player.audio) {
            return;
        }
        player.audio.play();
    }

    /**
     * Pause current song
     */
    function pauseSong() {
        if (!player.audio) {
            return;
        }
        player.audio.pause();
    }

    /**
     * Stop current song
     */
    function stopSong() {
        if (!player.audio) {
            return;
        }
        player.audio.pause();
        player.audio = null;
    }

    /**
     * Seek to a certain position in the current song
     * @param position: In terms of percentage of the song; Value between 0.00 and 1.00
     */
    function seekToPosition(position) {
        player.audio.currentTime = position * player.audio.duration;
    }

    function isPaused() {
        return player.audio
            ? !player.audio.paused
            : true;
    }

});

module.exports = PlayerService;