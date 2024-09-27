@echo off

:: Navigate to the project directory (replace with your actual path)
cd /d D:\Semester4\Capstone\backend

:: Activate the virtual environment (replace with your actual env name)
call env\Scripts\activate

cd /d D:\Semester4\Capstone\backend\career_trail_project

:: Run the Django development server
python manage.py runserver

:: Optional: Pause the terminal window
pause
