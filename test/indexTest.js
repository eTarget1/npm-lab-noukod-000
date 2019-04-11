const expect = chai.expect;
// const moment=require("moment")
describe('index.js', function () {
  describe('displayTime()', function () {
    it('can successful access moment() from the momentjs node module', function () {
      expect(moment()).to.exist
    });
  });
});
