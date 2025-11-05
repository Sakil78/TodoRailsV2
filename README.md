# TodoRails Elitev2

A full-featured Spring Boot web application for managing tasks and users, with MySQL integration, authentication, and dark mode UI.

## Features
- User registration and login (with password hashing)
- Task CRUD (create, read, update, delete)
- Profile management
- Responsive UI with sidebar navigation
- Dark mode toggle
- MySQL database integration
- Secure authentication with Spring Security

## Frontend Details
The frontend is built using [Thymeleaf](https://www.thymeleaf.org/) templating engine, providing dynamic HTML rendering and seamless integration with Spring Boot. Key highlights:
- **Responsive Design:** Custom CSS ensures the app works well on desktop and mobile devices.
- **Sidebar Navigation:** Modular sidebar fragment for easy navigation between dashboard, tasks, and profile.
- **Dark Mode:** Toggle switch in the sidebar instantly switches between light and dark themes using CSS variables and JavaScript.
- **Interactive UI:** JavaScript enhances user experience with sidebar toggling, search, and dark mode.
- **Form Validation:** Registration and login forms include client-side validation for better usability.
- **Asset Management:** Static resources (CSS, JS, images) are organized for maintainability and performance.

## Backend Details
The backend is powered by [Spring Boot](https://spring.io/projects/spring-boot), following best practices for scalable and secure web applications:
- **RESTful Controllers:** Separate controllers for authentication, user, task, and page management.
- **Service Layer:** Business logic is encapsulated in service classes for clean separation of concerns.
- **Repository Layer:** Uses Spring Data JPA repositories for easy database access and query methods.
- **Security:** Implements Spring Security for authentication, password hashing (BCrypt), and role-based access control.
- **Exception Handling:** Global exception handler provides meaningful error responses and improves robustness.
- **Database Integration:** Connects to MySQL using JPA/Hibernate, with automatic schema updates and entity mapping.
- **Unit & Integration Tests:** Includes JUnit tests for services and controllers to ensure reliability.

## Getting Started

### Prerequisites
- Java 21+
- Maven
- MySQL (Workbench or server)

### Database Setup
1. Create a MySQL database named `todorails`.
2. Update `src/main/resources/application.properties` if needed:
   ```ini
   spring.datasource.url=jdbc:mysql://localhost:3306/todorails?useSSL=false&allowPublicKeyRetrieval=true&createDatabaseIfNotExist=true
   spring.datasource.username=root
   spring.datasource.password=user
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   ```

### Build & Run
1. Open a terminal in the project directory.
2. Run:
   ```sh
   .\mvnw.cmd spring-boot:run
   ```
3. Visit [http://localhost:8080](http://localhost:8080) in your browser.

### Usage
- Register a new user at `/register`.
- Log in at `/login`.
- Manage tasks and profile from the dashboard.
- Toggle dark mode using the sidebar switch.

## Project Structure
- `src/main/java/com/todo/rails/elite/solution/` - Java source code
- `src/main/resources/templates/` - Thymeleaf HTML templates
- `src/main/resources/static/` - Static assets (CSS, JS, images)
- `src/main/resources/application.properties` - Configuration

## Troubleshooting
- If you can't log in, make sure your database is running and credentials are correct.
- For dark mode issues, ensure JS and CSS files are loaded and sidebar fragment is present.
- For any errors, check the terminal output and fix import/package issues as described above.

## License
MIT
