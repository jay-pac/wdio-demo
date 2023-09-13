import {$} from '@wdio/globals'
import Page from '../pages/page.js'

class HomePage extends Page{
    // may not need this getter.  It doesn't seem to collect a list of products
    get itemList(){
        return $$('.features_items div:nth-child(2) ul:nth-child(1)')
    }

    viewProduct(index){
        return $(`div.features_items div:nth-child(${index}) > div > div.choose > ul > li > a`)
    }

    async clickProductLink(index){
        (await this.viewProduct(index)).scrollIntoView();
        (await this.viewProduct(index)).waitForClickable();
        (await this.viewProduct(index)).click();
    }

    async clickProductLinkWithWorkaround(index) {
        await this.clickProductLink(index);
        await browser.pause(2000); // Give some time for the ad to appear if it's going to
        await browser.refresh();
        await browser.pause(2000); // Give some time for the page to load after refresh
        await this.clickProductLink(index);
    }

}

export default new HomePage();