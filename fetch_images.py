import urllib.request
import re

url = "https://www.chickenbens.fr/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'})

try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    images = re.findall(r'<img[^>]+src="([^">]+)"', html)
    print("Found images:")
    for img in images:
        print(img)
except Exception as e:
    print("Error:", e)
