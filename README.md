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

------
steps to make the application work:

first go to backend then from command line run:
cp .env.example .env

following copy the text below to you new .env file:
DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=app
DB_USERNAME=app
DB_PASSWORD=secret

then go to docker:
docker-compose build --no-cache
docker-compose up -d

following:

docker exec -it notes-backend-1 bash
composer install
php artisan key:generate
php artisan migrate 

----
important information:
currently the fetching of information from db is slow 
I have to work on that 
