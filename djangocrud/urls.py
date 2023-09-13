"""
URL configuration for djangocrud project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from tasks import views
from django.conf.urls import handler404

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('nosotros/', views.about, name='about'),
    path('registrarse/', views.signup, name='signup'),
    path('tareas/', views.tasks, name='tasks'),
    path('tareas-terminadas/', views.tasks_completed, name='tasks_completed'),
    path('tareas/crear/', views.create_task, name='create_task'),
    path('tareas/<int:task_id>', views.task_detail, name='task_detail'),
    path('tareas/<int:task_id>/complete', views.complete_task, name='complete_task'),
    path('tareas/<int:task_id>/delete', views.delete_task, name='delete_task'),
    path('cerrar-sesion/', views.signout, name='signout'),
    path('ingresar/', views.signin, name='signin'),
]

handler404 = views.Error404View.as_view()