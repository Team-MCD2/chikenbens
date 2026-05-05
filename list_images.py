import re

with open('src/data/site.ts', 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.findall(r'"name":\s*"([^"]+)".*?"image":\s*"([^"]+)"', content, re.DOTALL)
for name, img in matches:
    short = img[:80] + '...' if len(img) > 80 else img
    print(f'{name} => {short}')
