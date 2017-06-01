from PIL import Image
from django.conf import settings
from resizeimage import resizeimage


def resize_file(in_file):
    in_file = settings.BASE_DIR + in_file
    with open(in_file, 'r+b') as f:
        with Image.open(f) as image:
            cover = resizeimage.resize_cover(image, [200, 100])
            cover.save(in_file, image.format)

