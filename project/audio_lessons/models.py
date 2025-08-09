from django.db import models


class AudioLessonLevel(models.Model):
    level = models.CharField(max_length=100, null=False, blank=False)
    
    def __str__(self):
        return self.level
    

class AudioLesson(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False)
    level = models.ForeignKey(AudioLessonLevel, on_delete=models.PROTECT)
    audio = models.FileField(upload_to="audio/", unique=True)
    audio_thumbnail = models.ImageField(upload_to="images/audio_images/",default="images/audio_images/default.png")
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    