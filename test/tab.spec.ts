import {expect} from "chai"
import LinkyfyScreen from "src/screenobjects/LinkyfyScreen";

describe("Linkyfy activity", () => {

    beforeEach(() => {
        LinkyfyScreen.open(".text.Link")
    });

    it("should contain google.com link", () => {
        const googleLink = "www.google.com";
        const elementWithGoogle = LinkyfyScreen.textBlockWith(googleLink)
        expect(elementWithGoogle?.isDisplayed()).to.be.true
    });
});