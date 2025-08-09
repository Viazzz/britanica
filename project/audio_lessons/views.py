from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import F


from .models import AudioLesson

def level_selection(request):
    return render(request, "audio_lessons/level_selection.html")

def audio_list(request):
    audio_files = AudioLesson.objects.all()
    context = {
        "audio_files": audio_files
    }
    #  <header name="Accept-Ranges" value="bytes"> добавь к nginx
    return render(request, "audio_lessons/audio_list.html", context)

def get_play_list(request):
    audio_files = list(AudioLesson.objects.values(title=F("name"), file=F("audio"),))
    for i, item in enumerate(audio_files):
        item.update({"howl": ""})
    return JsonResponse(audio_files, safe=False)
