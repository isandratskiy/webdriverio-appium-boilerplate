import Activity from 'src/screenobjects/Activity';
import allure from '@wdio/allure-reporter'
import Element = WebdriverIO.Element;

class LinkyfyScreen extends Activity {
    public open(activity: string): void {
        super.open(activity);
    }

    public textBlockWith(byText: string): Element {
        allure.addStep(`Get widget with text: ${byText}`)
        return $$('android.widget.TextView')
            .filter(el => el.getText().startsWith('text') && el.getText().includes(byText))
            .shift()!
    }
}

export default new LinkyfyScreen();