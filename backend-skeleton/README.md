# Backend (Laravel skeleton)

This folder contains a minimal Laravel-style skeleton with the most important files:
- `app/Models/User.php`
- `app/Http/Controllers/Api/UserController.php`
- `routes/api.php`
- `database/migrations/...` (SQL file provided)

To make it a working Laravel app:
1. Install PHP & Composer
2. Run `composer install`
3. Copy `.env.example` to `.env` and configure DB credentials
4. Run `php artisan key:generate`
5. Run migrations (`php artisan migrate`) or apply provided SQL to the database
