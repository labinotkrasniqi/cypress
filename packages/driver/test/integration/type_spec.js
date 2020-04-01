/* eslint-disable
    no-undef,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
describe('Type Integration Tests', () => {
  context('type', () => {
    enterCommandTestingMode('type')

    describe('card.js', () => {
      it('it correctly changes the caret position and value of card expiration', () => {
        return this.cy
        .window().then((win) => {
          return win.$('form').card({
            container: '#card-container',
          })
        }).get('[name=\'expiry\']')
        .type('0314')
        .should('have.value', '03 / 14')
      })
    })
  })
})
