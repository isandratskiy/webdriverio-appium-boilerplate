import {expect} from 'chai'
import LinkyfyScreen from 'src/screenobjects/LinkyfyScreen';

describe('Linkyfy activity', () => {
    it('should contain google.com link', () => {
        LinkyfyScreen.open('.text.Link');
        const elementWithGoogle = LinkyfyScreen.textBlockWith('www.google.com');
        expect(elementWithGoogle.isDisplayed()).to.be.true;
    });
});