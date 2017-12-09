/**
 * Created by dannyyassine on 2017-12-06.
 */

/**
 * PlayerService
 * Class to handle audio actions for the current song
 * @type {Function}
 */
const PlayerService = (function ($rootScope, soundCloudConfigAPI) {

    /**
     * Audio Object
     */
    let player = {
        audio: null,
        track: null
    };

    const _canPlaySong = (song) => {
        return true;
    };

    /**
     * Resets current audio song to default settings
     */
    const _resetPlayerIfNeeded = () => {
        if (player.audio) {
            player.audio.pause();
            player.audio = null;
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
        player.track = song;
        player.audio = new Audio(`${song.stream_url}?client_id=${soundCloudConfigAPI.clientID()}`);
        player.audio.play();
    };

    /**
     * Pause current song
     * @param song
     */
    const pauseSong = () => {
        if (!player.audio) {
            return;
        }
        player.audio.pause();
    };

    /**
     * Stop current song
     * @param song
     */
    const stopSong = () => {
        if (!player.audio) {
            return;
        }
        player.audio.pause();
        player.audio = null;
    };

    /**
     * Seek to a certain position in the current song
     * @param position: In terms of percentage of the song; Value between 0.00 and 1.00
     */
    const seekToPosition = (position) => {
        player.audio.currentTime = position * player.audio.duration;
    };

    return {
        player,
        play : playSong,
        pause: pauseSong,
        stop : stopSong,
        seek : seekToPosition
    }

});

module.exports = PlayerService;