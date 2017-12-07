/**
 * Created by dannyyassine on 2017-12-06.
 */

/**
 * SoundCloudConfigAPI
 * Class to encasulate all variables for SoundCloud keys
 * @type {Function}
 */
const SoundCloudConfigAPI = (function (client_id) {

    let clientIdentifier = client_id;

    /**
     * Client ID getter function
     * @returns {*}
     */
    const clientID = () => {
        return clientIdentifier;
    };

    return {
        clientID
    };
});

/**
 * SoundCloudConfigAPIProvider
 * @constructor
 */
function SoundCloudConfigAPIProvider() {
    let clientID = "";

    /**
     * Config method to set soundcloud clientID
     * @param id
     */
    this.setClientID = (id) => {
      clientID = id;
    };

    /**
     * Provider Protocol
     * @type {[*]}
     */
    this.$get = [function soundCloudConfigAPIFactory() {
        return new SoundCloudConfigAPI(clientID);
    }];
};

module.exports = SoundCloudConfigAPIProvider;