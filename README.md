# Updating Users' Details

A simple web application for managing user details with CRUD operations. Users can add, view, edit, and delete user information through an intuitive form interface.

## Features

- ✅ **Add Users**: Submit user details (username, email, phone) via form
- ✅ **View Users**: Display all users fetched from the API
- ✅ **Edit Users**: Edit existing user details
- ✅ **Delete Users**: Remove users from the list
- ✅ **Persistent Storage**: Data is stored and retrieved from a REST API

## Technologies Used

- **HTML5**: Structure and form elements
- **JavaScript (Vanilla)**: DOM manipulation and event handling
- **Axios**: HTTP client for API requests
- **CRUD Crud API**: Backend service for data persistence

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A local web server (optional, for development)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
   - You can either:
     - Double-click the file to open it directly
     - Use a local server (recommended):
       ```bash
       # Using Python
       python -m http.server 8000
       
       # Using Node.js (http-server)
       npx http-server
       
       # Using PHP
       php -S localhost:8000
       ```
3. Navigate to `http://localhost:8000` (if using a server) or open the file directly

## Usage

1. **Adding a User**:
   - Fill in the form fields (Username, Email, Phone No)
   - Click the "Submit" button
   - The user will be added to the list below

2. **Editing a User**:
   - Click the "Edit" button next to the user you want to edit
   - The form will be pre-filled with the user's details
   - Modify the fields and click "Submit" to save changes

3. **Deleting a User**:
   - Click the "Delete" button next to the user you want to remove
   - The user will be removed from the list

## API Configuration

The application uses [CRUD Crud](https://crudcrud.com/) as the backend API. The base URL is configured in `index.js`:

```javascript
const BASE_URL = "https://crudcrud.com/api/fd245f9d44cd4ff99c0ea4eb8dfb5e1f/appointmentData";
```

**Note**: The API endpoint has a limited lifespan. If the API stops working, you'll need to:
1. Visit [crudcrud.com](https://crudcrud.com/)
2. Create a new API endpoint
3. Update the `BASE_URL` constant in `index.js`

## Project Structure

```
Fetching Users' Details/
│
├── index.html          # Main HTML file with form structure
├── index.js            # JavaScript logic for CRUD operations
└── README.md           # Project documentation
```

## Code Overview

### Main Functions

- `handleFormSubmit(event)`: Handles form submission and creates new users
- `displayUserOnScreen(userDetails)`: Renders user details in the list with edit/delete buttons

### API Endpoints Used

- `GET /appointmentData`: Fetches all users
- `POST /appointmentData`: Creates a new user

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## Future Improvements

- [ ] Implement PUT/PATCH requests for proper edit functionality
- [ ] Add form validation
- [ ] Improve error handling and user feedback
- [ ] Add loading states
- [ ] Implement proper styling with CSS
- [ ] Add confirmation dialogs for delete operations
- [ ] Support for updating users via API

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

