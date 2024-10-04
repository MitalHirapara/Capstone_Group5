@echo off

:: Navigate to the project directory (replace with your actual path)
@REM cd /d D:\Semester4\Capstone\backend
@REM cd /d D:\Conestoga\Sem4\capstone_project\Capstone_Group5\backend
cd /d D:\Conestoga\Sem4\capstone_project\Capstone_Group5\backend

:: Activate the virtual environment (replace with your actual env name)
call env\Scripts\activate

@REM cd /d D:\Semester4\Capstone\backend\career_trail_project
@REM cd /d D:\Conestoga\Sem4\capstone_project\Capstone_Group5\backend\career_trail_project
cd /d D:\Conestoga\Sem4\capstone_project\Capstone_Group5\backend\career_trail_project

:: Run the Django development server
python manage.py runserver

:: Optional: Pause the terminal window
pause
