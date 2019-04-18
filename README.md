# Issues Viewer for Github
This is a basic web application to view issues for repositories on Github.
## Features
- Search for any publicly accessible repository.
- View the issues for the repository.
- Filter and sort the issues.
- Click on an issue to view its details and comments.
## Installation
1. **Clone the repository.** Instructions for cloning can be found [here](https://help.github.com/en/articles/cloning-a-repository). Navigate to the repository using `cd <folder_name>`.
2. **Obtain a personal access token.** You can create a token in the Github settings page [here](https://github.com/settings/tokens), and it doesn’t need any permissions.
3. **Add the token.** The app needs to know what the token is. To do this, navigate to the top-level `settings.js` file. Paste your token in between the quotes. Make sure to save!
4. **Run the app.** The final step is to run the app. Use `npm start` in the terminal to do so.
## Usage
Using the app is very simple. Use the following to view the issues for a repository:
1. Search for a repository in the search bar. You will get a list of repositories that match your query.
2. Select a repository. Click on a repository and click the “Select” button at the bottom to select it.
3. You will now see a list of issues. You can click on an issue on its title for more details.
Demo:
![](#)(demo.gif)