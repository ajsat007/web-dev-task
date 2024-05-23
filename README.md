# web-dev-task

This README provides an overview and instructions for the Company Profile Webpage project. This webpage introduces a company's profile, including information about the leadership/management team, development team, and sales and marketing team.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Customization](#customization)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file containing the structure and content of the webpage.
- `style.css`: The CSS file for styling the webpage.

## Technologies Used

- HTML5: For structuring the content.
- CSS3: For styling the webpage.

## Setup Instructions

To set up and run this project locally, follow these steps:

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/your-username/company-profile-webpage.git
   ```
2. Navigate to the project directory:
   ```sh
   cd company-profile-webpage
   ```
3. Open the `index.html` file in your web browser to view the webpage:
   ```sh
   open index.html
   ```
   Alternatively, you can open the file by double-clicking it in your file explorer.

## Customization

To customize the content of the webpage, edit the `index.html` file. You can change the company name, team member names, titles, and descriptions as needed. Here are the sections you can customize:

- **Company Name:** Located within the first `<p>` tag with the skyblue background.
- **Welcome Message:** Located within the second `<p>` tag inside the central `<div>`.
- **Team Members:** Update the names, titles, and images for each team member in the corresponding `<div class="image-container">` sections.

For example, to update the company name and welcome message:
```html
<p style="width:20%; background-color: skyblue; border: none; text-align: center; margin-inline: auto; justify-items: center; color: white;padding-block: 10px;padding-inline: 30px;border-radius: 10px; font-size: 20px;">
  [Your Company Name]
</p>
<p style="font-size: 20px;  text-align: center; margin-inline: auto;"> 
  Welcome to [Your Company Name], where a dedicated team of professionals works together to bring innovations, creativity, and expertise to the software industry. Get to know the individuals who make our company thrive.
</p>
```

## Usage

To use the webpage, open the `index.html` file in your preferred web browser. The webpage will display information about the company's profile, including the leadership/management team, development team, and sales and marketing team.

## Contributing

Contributions are welcome! If you have suggestions for improving this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```sh
   git checkout -b feature-name
   ```
3. Make your changes and commit them with descriptive messages:
   ```sh
   git commit -m "Add feature: description of feature"
   ```
4. Push your changes to your forked repository:
   ```sh
   git push origin feature-name
   ```
5. Open a pull request on the main repository.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
