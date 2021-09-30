# Lead Manager

Simple full stack application using Django Rest Framework and React frontend.

# Backend Setup

## 1. Create a new virtual environment

```
cd backend
python -m venv env
```

## 2. Activate the virtual enviromnent

On Windows

```
env\Scripts\activate
```

On Linux

```
source env/bin/activate
```

## 3. Install python packages

```
pip install -r requirements.txt
```

## 4. Setup Django Database

```
cd LeadManager
python manage.py migrate
```

## 5. Start Django Restful API

```
python manage.py runserver
```

# Frontend Setup

```
cd frontend
npm install
npm start
```

# Resources

- https://www.django-rest-framework.org/
- https://www.youtube.com/watch?v=Uyei2iDA4Hs&amp;list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60
