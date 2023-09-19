from .models import Task

def search(request):
    if request.user.is_authenticated:

        search = Task.objects.filter(user=request.user).order_by('-created')
        return {
            'search': search
        }
    else:
        return {}