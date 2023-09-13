from django import forms
from .models import Task

class CreateTaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['title', 'description', 'important']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control mb-4', 'placeholder': 'Type a title', 'required': False}),
            'description': forms.Textarea(attrs={'class': 'form-control mb-4', 'rows': 5, 'placeholder': 'Type a description'}),
            'important': forms.CheckboxInput(attrs={'class': 'form-check-input mb-4'}),
        }