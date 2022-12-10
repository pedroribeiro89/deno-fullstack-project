# Deno fullstack project

A kanban project for trying deno. 
The backend is a rest api for task crud, and the frontend using fresh.

## Backend

Rest API for CRUD of tasks, organized in layers:
- url handler: map route to controllers
- controllers: map requests and http methods to services
- services: uses repositorys to implement business logic
- repository: interface between services and database
- database: connects with database

```console
  deno run --allow-net src/index.ts
```

## Frontend
TODO