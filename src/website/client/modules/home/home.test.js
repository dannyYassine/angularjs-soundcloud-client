import chai from 'chai';
const assert = chai.assert;
import sinon from 'sinon';

import angular from 'angular';

import home from './index';

import HomeController from './home.controller';

describe('Home Module', function () {

    let controller;
    let soundCloudService;

    beforeEach(() => {
        angular.mock.module(home);
    });

    beforeEach(() => {
        soundCloudService = {
            delay: false,
            runResolve: null,
            getFeaturedTracks: function () {
                return new Promise(function (resolve, reject) {
                    this.runResolve = resolve;

                    if (delay) {
                        return;
                    }
                    resolve({})
                });
            }
        };

    });

    it('should be defined', inject(function() {
        controller = new HomeController({});

        expect(controller.isLoading).toBeDefined();
    }));

    it('getFeaturedTracks called onInit', inject(function() {
        let getFeaturedTracksSpy = sinon.spy(soundCloudService, 'getFeaturedTracks');

        controller = new HomeController(soundCloudService);

        controller.$onInit();

        assert(getFeaturedTracksSpy.calledOnce)
    }));

    it('Received tracks', inject(function() {

        controller = new HomeController(soundCloudService);

        controller.$onInit();

        assert(controller.tracks !== null);
    }));

    it('Verify isLoading boolean while loading tracks', inject(function() {
        soundCloudService.delay = true;

        controller = new HomeController(soundCloudService);

        assert(!controller.isLoading);

        controller.$onInit();

        soundCloudService.runResolve({});

        assert(!controller.isLoading);

    }));

});