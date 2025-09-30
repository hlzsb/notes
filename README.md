This is a minimal, fast-to-start 'create notes' that includes:

- Frontend: React (Vite + TypeScript)
- Backend: Laravel-style PHP project 
- Database: PostgreSQL (via Docker)
- Docker Compose and Dockerfiles for frontend & backend
- Basic API 

Frontend will be available at http://localhost:5173
Backend (Laravel) will be available at http://localhost:8000

To run use docker:

docker-compose build --no-cache
docker-compose up -d

To stop:

docker-compose down

To check if the components are running:

docker ps