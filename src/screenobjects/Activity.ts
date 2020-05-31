export default class Activity {

    open(activity: string) {
        return driver.startActivity("io.appium.android.apis", activity)
    }
}