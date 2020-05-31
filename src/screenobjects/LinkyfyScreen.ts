import Activity from "src/screenobjects/Activity";
import Element = WebdriverIO.Element;

class LinkyfyScreen extends Activity {

    public open(activity: string): void {
        super.open(activity);
    }

    public textBlockWith(byText: string): Element | undefined {
        return $$('android.widget.TextView')
            .filter(el => el.getText().startsWith("text") && el.getText().includes(byText))
            .shift()
    }
}

export default new LinkyfyScreen();