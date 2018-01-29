
// import AppController from './app.controller';

import chai from 'chai';
const assert = chai.assert;
import sinon from 'sinon';
import angular from 'angular';

import app from './index';

import AppController from './app.controller';

describe('App Module', function() {

    let controller;
    beforeEach(() => {
        angular.mock.module(app);
    });

    it('should run', function (done) {
        done()
    });
    describe('AppController', function(){

        it('should be defined', inject(function($rootScope, $timeout) {
            controller = new AppController($rootScope.$new(), $timeout);

            expect(controller.launched).toBeDefined();
        }));

        it('should be launched', inject(function ($rootScope, $timeout) {
            controller = new AppController($rootScope.$new(), $timeout);

            assert.equal(controller.launched, false);


            controller.$onInit();

            $timeout.flush();

            assert.equal(controller.launched, true);
        }));

        it('should scroll to top when change state provider', inject(function ($rootScope, $timeout) {
            controller = new AppController($rootScope.$new(), $timeout);

            const sandbox = sinon.sandbox.create();
            sandbox.stub(controller, 'scrollToTop');

            controller.$onInit();

            $rootScope.$broadcast('$locationChangeSuccess');

            sinon.assert.calledOnce(controller.scrollToTop);

        }));

    });
});