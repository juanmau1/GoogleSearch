import Page from '../pageobjects/page.ts';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get results () {
        return $$('[data-sokoban-container] .yuRUbf');
    }
}

export default new ResultPage();
