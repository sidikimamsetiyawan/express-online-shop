# Express Online Shop
# Game Consign Assessment - Backend Developer

This project implements solutions for tasks from the Game Consign Backend Developer assessment, including a task scheduler with dependencies, product data querying, and anagram grouping.

## Features

### 1. Task Scheduler with Dependencies
- **Objective**: Complete tasks in minimal time while respecting dependencies.
- **Method**: Implements a directed graph and priority queue to manage dependencies and optimize scheduling using topological sorting.

### 2. Product Data Query
- **Criteria**:
  - Products created in the last 6 months.
  - Average review rating of 4 or higher.
  - Belong to categories with over 10 products.
  - Sorted by total quantity sold in descending order.

### 3. Anagram Grouping
- **Objective**: Group words by anagram sets and sort groups by size, then alphabetically.
- **Example Output**:
    ```javascript
    [
      ["atik", "kita", "tika"],   // total 3
      ["aku", "kua"],             // total 2
      ["kaus", "suka"],           // total 2
      ["kia"],                    // total 1
      ["makan"]                   // total 1
    ]
    ```

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/sidikimamsetiyawan/express-online-shop.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

## Database Setup (MySQL)

This project requires a MySQL database. You can download the initial database file from this link: [MySQL Database File](https://drive.google.com/file/d/1F5AvJBU_wA1YPcZsLUq_Nm8QVpQJJMnM/view?usp=sharing).

### Steps to Set Up

1. **Create Database**: 
   - Create a MySQL database named `express_online_shop`:
   ```sql
   CREATE DATABASE express_online_shop;

## Testing with Postman

You can access the Postman collection for testing the API endpoints here: [Postman Collection](https://orange-trinity-586014.postman.co/workspace/ba2fd21e-faab-475c-ba96-402a4b6ca449/folder/9072736-c9c8d5df-ae0b-4d8f-8112-f1742058a7f9).

Alternatively, you can download the collection file and import it into Postman using the "Import" feature. [Download the Postman collection](https://drive.google.com/file/d/1xtSbEKyLTYlTULRE1VxPeiIc-PaMiaO9/view?usp=sharing).

## Documentation
### 1. Task Scheduler with Dependencies
![image](https://github.com/user-attachments/assets/04a9839f-fd42-4448-b298-f2472acdf5a9)


### 2. Product Data Query
- **Criteria**:
  - Products created in the last 6 months.
    ![image](https://github.com/user-attachments/assets/1a3d21a2-1cf8-4698-a412-2f9690aa76c8)
  - Average review rating of 4 or higher.
    ![image](https://github.com/user-attachments/assets/bf1e2419-44ba-40a1-8710-6c23190d6847)
  - Belong to categories with over 10 products.
    ![image](https://github.com/user-attachments/assets/f5b86e48-9f9c-404b-8568-4f89536f2afe)
  - Sorted by total quantity sold in descending order.
    ![image](https://github.com/user-attachments/assets/641bb4e0-c810-4d3a-9de0-b4e24ba38e63)

### 3. Anagram Grouping
![image](https://github.com/user-attachments/assets/f401aefa-f6e7-497c-a9c4-5f265530b90c)
