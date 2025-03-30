# Star Wars Web Application

A React-based web application showcasing Star Wars films, characters, and more using the Star Wars API.

## Features

### Episodes Page

- Sort films by:
  - Release date
  - Episode number
  - Name
- View detailed film information
- Dynamic list updates based on sorting

### Characters Page

- Character list with pagination (5 items per page)
- Detailed character information
- Breadcrumb navigation

### Additional Pages

- Planets
- Species
- Vehicles
- Starships

## Tech Stack

- React
- Redux (Redux Toolkit)
- React Router
- Axios
- Vite
- JSON Server

## Getting Started

1. Install dependencies:

```bash
yarn install
```

2. Start the development server:

```bash
yarn run dev
```

3. Start the JSON server (for mock data):

```bash
yarn run devServer
```

## API Endpoints

| Endpoint           | Description    |
| ------------------ | -------------- |
| `/characters/{id}` | Character data |
| `/films/{id}`      | Film data      |
| `/planets/{id}`    | Planet data    |
| `/species/{id}`    | Species data   |
| `/vehicles/{id}`   | Vehicle data   |
| `/starships/{id}`  | Starship data  |

## Key Features

- State management with Redux
- Dynamic routing
- Sorting functionality
- Pagination
- Image processing
- Error handling
- Reusable components
- Custom hooks
