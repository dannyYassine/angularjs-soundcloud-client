/**
 * Created by dannyyassine on 2017-12-06.
 */

/**
 * PlayerService
 * Class to handle audio actions for the current song
 * @type {Function}
 */
const PlayerService = (function ($rootScope, soundcloudConfigAPI) {

    /**
     * Audio Object
     */
    let audio;

    /**
     * Current song
     */
    let currentTrack;

    const _canPlaySong = (song) => {
        return true;
    };

    /**
     * Resets current audio song to default settings
     */
    const _resetPlayerIfNeeded = () => {
        if (this.audio) {
            this.audio.pause();
            this.audio = null;
        }
    };

    /**
     * Play song and set it as new current song
     * @param song
     */
    const playSong = (song) => {
        if (!_canPlaySong(song)) {
            $rootScope.$emit('sdn.notifications.player.error', song);
            return;
        }
        _resetPlayerIfNeeded();
        this.currentTrack = song;
        this.audio = new Audio(`${song.stream_url}?client_id=${soundcloudConfigAPI.clientID()}`);
        this.audio.play();
        $rootScope.$broadcast('sdn.notifications.player.play', song);
    };

    /**
     * Pause current song
     * @param song
     */
    const pauseSong = () => {
        if (!this.audio) {
            return;
        }
        this.audio.pause();
        $rootScope.$broadcast('sdn.notifications.player.pause', this.currentTrack);
    };

    /**
     * Stop current song
     * @param song
     */
    const stopSong = () => {
        if (!this.audio) {
            return;
        }
        this.audio.pause();
        $rootScope.$broadcast('sdn.notifications.player.stop', this.currentTrack);
    };

    /**
     * Seek to a certain position in the current song
     * @param position: In terms of percentage of the song; Value between 0.00 and 1.00
     */
    const seekToPosition = (position) => {
        this.audio.currentTime = position * this.audio.duration;
    };

    return {
        audio: audio,
        track: currentTrack,
        play : playSong,
        pause: pauseSong,
        stop : stopSong,
        seek : seekToPosition
    }

});

module.exports = PlayerService;