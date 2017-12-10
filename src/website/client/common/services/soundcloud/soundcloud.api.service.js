/**
 * Created by dannyyassine on 2017-12-04.
 */

/**
 * SoundCloundAPI
 * @type {Function}
 */
const SoundCloundAPI = (function (restangular, soundcloudConfigAPI) {

    const defaultParams = {
        client_id: soundcloudConfigAPI.clientID(),
        limit: 60
    };

    /**
     * Returns a promise
     * @returns {*|{method, params, headers}}
     */
    const getFeaturedTracks = () => {
        const params = defaultParams;
        params.q = "chrono trigger";
        let tracks = restangular.all('/tracks');
        return tracks.getList(params);
    };

    /**
     * Returns a promise
     * @param searchText
     * @returns {*|{method, params, headers}}
     */
    const searchTracks = (searchText) => {
        const params = defaultParams;
        params.q = searchText;
        let tracks = restangular.all('/tracks');
        return tracks.getList(params);
    };

    /**
     * Return class
     */
    return {
        getFeaturedTracks,
        searchTracks
    }

});

module.exports = SoundCloundAPI;