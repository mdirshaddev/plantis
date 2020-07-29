import os

from django.core.wsgi import get_wsgi_application
# heroku setup
from dj_static import Cling

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# default settings
# application = get_wsgi_application()

# Settings for heroku
application = Cling(get_wsgi_application())

if os.getcwd() == '/app':
    from whitenoise.django import DjangoWhiteNoise
    application = DjangoWhiteNoise(application)

