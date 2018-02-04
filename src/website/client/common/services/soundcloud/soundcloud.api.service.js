/**
 * Created by dannyyassine on 2017-12-04.
 */

/**
 * SoundCloundAPI
 * @type {Function}
 */
const SoundCloundAPI = (function (restangular, soundcloudConfigAPI) {

    const defaultParams = {
        client_id: soundcloudConfigAPI.clientID()
    };

    /**
     * Returns a promise
     * @returns {*|{method, params, headers}}
     */
    const getFeaturedTracks = () => {
        const params = defaultParams;
        params.q = "chrono trigger";
        params.limit = 30;
        let tracks = restangular.all('/tracks');
        return tracks.getList(params);
    };

    /**
     * Returns a promise
     * @param userId
     */
    const getUser = (userId) => {
        const params = defaultParams;
        let users = restangular.one('users', userId);
        return users.get(params);
    };

    /**
     * Returns a promise
     * @param userId
     */
    const getUserTracks = (userId) => {
        const params = defaultParams;
        params.limit = 8;
        let users = restangular
            .one('users', userId)
            .all('tracks');
        return users.getList(params);
    };

    /**
     * Returns a promise
     * @param searchText
     * @returns {*|{method, params, headers}}
     */
    const searchTracks = (searchText) => {
        const params = defaultParams;
        params.q = searchText;
        params.limit = 30;
        let tracks = restangular.all('/tracks');
        return tracks.getList(params);
    };

    /**
     * Return class
     */
    return {
        getFeaturedTracks,
        searchTracks,
        getUser,
        getUserTracks
    }

});

module.exports = SoundCloundAPI;