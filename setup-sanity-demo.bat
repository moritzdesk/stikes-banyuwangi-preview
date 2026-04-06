@echo off
echo ========================================
echo Setup Sanity Studio untuk Demo Unidsoe
echo ========================================
echo.

echo [1/4] Installing Sanity CLI...
call npm install -g @sanity/cli
if %errorlevel% neq 0 (
    echo ERROR: Failed to install Sanity CLI
    pause
    exit /b 1
)
echo ✓ Sanity CLI installed
echo.

echo [2/4] Checking Sanity login...
echo NOTE: You need to login to Sanity first
echo Run: sanity login
echo.

echo [3/4] Creating Sanity project...
echo This will create a new Sanity project in 'sanity-studio' folder
echo.
call sanity init --template blog --project-id unidsoe-demo --dataset production --output-path sanity-studio --yes
if %errorlevel% neq 0 (
    echo ERROR: Failed to create Sanity project
    echo You may need to run 'sanity login' first
    pause
    exit /b 1
)
echo ✓ Sanity project created
echo.

echo [4/4] Installing dependencies...
cd sanity-studio
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo ✓ Dependencies installed
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start Sanity Studio, run:
echo   cd sanity-studio
echo   npm run dev
echo.
echo Studio will be available at: http://localhost:3333
echo.
pause

