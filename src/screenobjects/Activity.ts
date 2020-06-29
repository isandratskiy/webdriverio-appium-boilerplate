import allure from '@wdio/allure-reporter'

export default class Activity {
    protected open(activity: string) {
        allure.addStep(`Open activity: ${activity}`)
        return driver.startActivity('io.appium.android.apis', activity)
    }
}