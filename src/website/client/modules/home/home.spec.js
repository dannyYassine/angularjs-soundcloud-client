import chai from 'chai';
const assert = chai.assert;
import sinon from 'sinon';

import angular from 'angular';

import home from './index';

import HomeController from './home.controller';

xdescribe('Home Module', function () {

    let controller;

    function SoundCloudMOCK () {
        this.getFeaturedTracks = function () {
            return new Promise((resolve, reject) => {
                resolve()
            });
        }
    }

    beforeEach(() => {
        angular.mock.module(home);
    });

    it('should be defined', inject(function() {
        controller = new HomeController({});

        expect(controller.isLoading).toBeDefined();
    }));

    it('getFeaturedTracks called onInit', inject(function() {
        let mock = new SoundCloudMOCK();
        let getFeaturedTracksSpy = sinon.spy(mock, 'getFeaturedTracks');

        controller = new HomeController(mock);

        controller.$onInit();

        assert(getFeaturedTracksSpy.calledOnce)
    }));

    it('Received tracks', inject(function() {

        controller = new HomeController(new SoundCloudMOCK());

        controller.$onInit();

        assert(controller.tracks !== null);
    }));

    it('Verify isLoading boolean while loading tracks', function() {

        let mock = new SoundCloudMOCK();
        controller = new HomeController(mock);

        assert.isFalse(controller.isLoading, 'must be false');

        controller.$onInit();

        assert(controller.isLoading);

    });

});
