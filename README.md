# House Points Program

## Overview
The **House Points Program** is a web-based application designed for an all-girls middle school to track house points. This app provides:

1. A **House Leaderboard** showcasing the total points for each house, dynamically ranked.
2. A **Student Leaderboard** displaying the top 25 students based on individual points.
3. A **House Roster Section**, where each house has its own card displaying student names and buttons for incrementing and decrementing individual points.
4. A **Data Export Tool** to save current scores to an Excel file for reporting purposes.
5. A **Reset Button** to reset all scores to zero, with additional functionality to reload data from the JSON file.

The application is styled to align with the school's brand colors:
- **Marian Blue**: `#20438d`
- **Light Blue**: `#4d9ad4`

The app is built using **HTML**, **CSS**, and **JavaScript**, with a responsive and interactive layout for ease of use.

---

## Features

### Current Functionality
1. **Dynamic Leaderboards**:
   - The House and Student Leaderboards are dynamically populated and ranked based on the given data.
2. **House Cards**:
   - Each house has its own section displaying:
     - House name.
     - List of students.
     - Buttons for adjusting points for each student.
3. **Data Export**:
   - Export the current house and student scores to an Excel file.
   - Separate tabs for house totals and individual student scores.
4. **Reset and Reload**:
   - A **Reset Button** clears all scores to zero.
   - A **Load from JSON Button** reloads the last saved data from the `houses.json` file.
5. **Styling**:
   - The app is styled with custom colors and fonts, using the school's branding.

### Recent Updates
- **House Points Totals**:
   - Each house dynamically updates its total points as student scores change.
- **Excel Save-Off**:
   - Added functionality to export house and student data into an Excel file with two tabs: one for house scores and another for student scores.
- **Reset Button**:
   - Added a reset button to clear all scores to zero.
- **JSON Data Integration**:
   - The app now fetches data from an external `houses.json` file to dynamically populate rosters and scores.

---

## Next Steps

The following features are planned for future development:

1. **Passcode Authorization**:
   - Require a passcode to access the site.
2. **Historical Tracking**:
   - Implement a history log to track changes to points for auditing purposes.
3. **Data Upload Tool**:
   - Allow administrators to upload updated rosters and scores via an Excel file.
4. **Authentication**:
   - Add login credentials to ensure only authorized users can modify points.
5. **Mobile Optimization**:
   - Refine the layout to better support smaller devices.

---

## How to Run

1. Ensure the `houses.json` file is located in the same directory as the `index.html` file.
2. Open the `index.html` file in a web browser.
3. Use the interface to:
   - Adjust points for students.
   - Export data to Excel.
   - Reset scores or reload the last saved state from `houses.json`.

---

## Future Considerations

- **Security**:
  - Add features like passcode protection and user authentication for better access control.
- **Reporting Enhancements**:
  - Include automated reports or graphs summarizing house performance.
- **Additional Features**:
  - Integrate a reward system or announcements feature for high-performing houses or students.

---

## Contact

For questions or contributions, please contact the project maintainer.
