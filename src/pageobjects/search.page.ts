
import Page from '../pageobjects/page.ts';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Search extends Page {
    /**
     * define selectors using getter methods
     */
    public get searchTextBox () {
        return $("[name='q']");
    }

    public get googleSearchBtn () {
        return $("[name='btnK']");
    }

    public get imFeelingLukyBtn () {
        return $("[name='btnI']");
    }

    public searchFor(text){
        if (this.searchTextBox.isDisplayed()) {
            this.searchTextBox.setValue(text);
        }
    }
}

export default new Search();
