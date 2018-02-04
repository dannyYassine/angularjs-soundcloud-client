
import SoundCloudConfigAPIProvider from './soundcloudAPI';

describe('SoundCloudConfigAPI Provider', function () {

    it('methods should be defined', function () {
        let provider = new SoundCloudConfigAPIProvider();
        expect(provider.setClientID).toBeDefined();
        expect(provider.$get).toBeDefined();
    });

    it('should change clientId', function () {
        let provider = new SoundCloudConfigAPIProvider();
        provider.setClientID('123');

        let soundCloudService = provider.$get[0]();
        expect(soundCloudService.clientID()).toBe('123');
    });

    it('should have clientID in generated service ', function () {
        let provider = new SoundCloudConfigAPIProvider();
        provider.setClientID('123');

        let soundCloudService = provider.$get[0]();
        expect(soundCloudService.clientID).toBeDefined();
    });

});