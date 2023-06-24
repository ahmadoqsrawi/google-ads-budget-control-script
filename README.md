#  Google Ads Budget Control Script
## License
This script is licensed under the MIT License.
Copyright (c) 2023 Ahmad Ismail

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# The Script

## Google Ads Budget Control Script
**This script can help prevent Google Ads budget overspending by pausing campaigns once a certain budget threshold is reached**

### Prerequisites
**Before using this script, you need to set up the following:**

- Google Ads Account: You should have an active Google Ads account with campaigns and budgets set up.
- Valid email address: Provide a valid email address in the **recipientEmail** variable. This is where     you'll receive email notifications when campaigns are paused due to budget overspending.

### Usage
1. Access your Google Ads account and navigate to the "Tools & Settings" section.
2. Click on "Scripts" to open the Google Ads Scripts interface.
3. Click on the plus icon or the "New script" button to create a new script.
4. Give your script a name, such as "Budget Overspending Prevention .
5. Set the budgetThreshold variable to the desired budget limit in your account's currency.
6. Set the campaignStatus variable to the campaign status you want to monitor (e.g., 'ENABLED').
7. Set the recipientEmail variable to the email address where you want to receive notifications.
8. Save the script and run.
9. You can set the frequency to "Hourly" to allow the script every hour to check the budget. Adjust the frequency as desired for your reporting needs.
10. Save the trigger settings, and the script will run automatically according to the defined frequency.
11. Check the specified recipientEmail inbox for email notifications whenever a campaign is paused due to budget overspending.
