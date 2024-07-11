---

# WYSIWYG Builder

This project is a web-based WYSIWYG (What You See Is What You Get) web page builder inspired by WordPress and Wix. The builder allows users to create a basic web page layout by dragging and dropping components, editing text, and previewing the final layout. This project is built with modern web technologies.

## Features

- **Drag and Drop Components:** Easily add and arrange components like text, images, buttons, and more.
- **Inline Text Editing:** Edit text directly within the components.
- **Preview Mode:** Preview the final layout of the web page.
- **Component Deletion:** Remove unwanted components with a simple click.

## Technologies Used

- **React with TypeScript:** For building the user interface.
- **MUI (Material-UI):** For styling and layout.
- **Froala Editor:** A powerful WYSIWYG editor for text editing.
- **jQuery:** For DOM manipulation and integrating jQuery UI.
- **jQuery UI:** For sortable functionality.
- **FontAwesome:** For icons used in the sidebar.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Noel-Fredrick-au19/WYSIWYG-BUILDER.git
   cd wysiwyg-builder
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```

## Project Structure

```
wysiwyg-builder/
├── frontend/                 # Frontend code
│   ├── public/               # Public assets
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # React pages
│   │   ├── App.tsx           # Main App component
│   │   ├── index.tsx         # Entry point
│   ├── package.json          # Frontend dependencies
│   ├── tsconfig.json         # TypeScript configuration
├── README.md                 # Project documentation
├── package.json              # Root dependencies
└── ...                       # Other files
```

## Usage

1. **Add Components:** Click on the components in the sidebar to add them to the editor area.
2. **Edit Content:** Click on the text components to edit the text directly.
3. **Rearrange Components:** Drag components to rearrange them within the editor area.
4. **Delete Components:** Click the delete button on a component to remove it.
5. **Preview Page:** Click the "Preview" button to see the final layout in a modal dialog.

## Froala Editor

Froala Editor is a lightweight WYSIWYG HTML Editor written in JavaScript. It's a highly customizable and flexible editor that provides a rich set of features for content creation.

### Key Features of Froala Editor

- **Inline Editing:** Edit content directly within the editor without any additional dialog boxes.
- **Customizable Toolbar:** The toolbar is fully customizable, allowing you to add or remove buttons as needed.
- **Plugins:** A wide range of plugins is available to extend the editor's functionality.
- **Responsive Design:** The editor is designed to be fully responsive and works on mobile devices.
- **Cross-browser Support:** Works across all modern browsers, ensuring a consistent experience.

## Dependencies

Here are the main dependencies used in this project:

- **React:** `^18.3.1`
- **TypeScript:** `^4.9.5`
- **MUI (Material-UI):** `^4.11.3`
- **Froala Editor:** `^4.0.10`
- **jQuery:** `^3.6.0`
- **jQuery UI:** `^1.12.1`
- **FontAwesome:** `^5.15.4`


## Contact

For any inquiries or issues, please contact me at [noel.frd123@gmail.com].

---

Feel free to customize the content as needed, especially the contact information and GitHub repository link. This README provides a comprehensive overview of the project, its features, technologies used, and installation instructions.
