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
    git clone https://github.com/yourusername/your-repo.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

## Testing

To test each function, run:
```bash
npm test
