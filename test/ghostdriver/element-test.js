/*global describe,before,it,after */
var desired, remoteWdConfig, test, _ref;

_ref = require('./config');
desired = _ref.desired;
remoteWdConfig = _ref.remoteWdConfig;

test = require('../common/element-test-base').test;

describe("wd", function() {
  describe("ghostdriver", function() {
    describe("element tests", function() {
      describe("using ghostdriver", function() {
        test(remoteWdConfig, desired);
      });
    });
  });
});
