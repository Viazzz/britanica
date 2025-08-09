from django.contrib import admin

from .models import AudioLessonLevel, AudioLesson


@admin.register(AudioLessonLevel)
class AudioLessonLevelAdmin(admin.ModelAdmin):
    list_display = ("level",)


@admin.register(AudioLesson)
class AudioLessonAdmin(admin.ModelAdmin):
    list_display = ["name", "level", "created",]
    list_filter = ["level",]
