from django.urls import path



from . import views


app_name = "audio_lessons"

urlpatterns = [
    path("", views.level_selection, name="level_selection"),
    path("audio-list", views.audio_list, name="audio_list"),
    path("play-list", views.get_play_list, name="play_list"),
]