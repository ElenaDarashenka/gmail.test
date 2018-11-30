import BasePage from '../basePage';

class findFlightPage extends BasePage {
  constructor() {
    super();
    this.fromDropdown = element(by.xpath(`//div[@id='ibe']//i[@class='icon-down-open']`));
    this.fromDropdownList = element(by.xpath(`//ul[@id='ui-id-2']//li[${this.randomValue(1, 200)}]`));
    this.toDropdown = element(by.xpath(`//*[@id="ibe"]/form/div[1]/div[2]/div/a/i`));
    this.toDropdownList = element(by.xpath(`//ul[@id='ui-id-3']//li[1]`));
    this.OneWayCheckbox = element(by.css(`label[for='JourneySpan_Ow']`));
    this.calendar = element(by.className(`icon-calendar`));
    this.departureDate = element(by.xpath(`//*[@id='calendar']/div/div[2]/table/tbody/tr[${this.randomValue(2, 4)}]//td[${this.randomValue(1, 7)}]`));
    this.searchButton = element(by.css(`#step-2 div:nth-child(4) div button`));
  }

  async clickOnFromDropdown() {
    await browser.wait(this.isClickable(this.fromDropdown), this.timeout.xxl, "'From' dropdown is not clickable");
    return this.fromDropdown.click();
  }

  async selectValueInFromDropdown() {
    return this.fromDropdownList.click();
  }

  async clickOnToDropdown() {
    return this.toDropdown.click();
  }

  async selectValueInToDropdown() {
    return this.toDropdownList.click();
  }

  async selectOneWayCheckbox() {
    return this.OneWayCheckbox.click();
  }

  async openCalendar() {
    return this.calendar.click();
  }

  async chooseDepartureDate() {
    return this.departureDate.click();
  }

  async clickOnSearchButton() {
    return this.searchButton.click();
  }
}

export default new findFlightPage();