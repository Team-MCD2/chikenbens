import re

with open('src/data/site.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Map product name -> local image path for all items that had broken unsplash URLs
replacements = {
    "Salade Tenders": "/images/products/salade_tenders.png",
    "Hot Wings épicées": "/images/products/hot_wings.png",
    "Fish Tenders": "/images/products/fish_tenders.png",
    "Beignets de crevettes": "/images/products/beignets_crevettes.png",
    "Bouchées camembert": "/images/products/bouchees_camembert.png",
    "Nems": "/images/products/nems.png",
}

for item_name, new_img in replacements.items():
    pattern = r'("name":\s*"' + re.escape(item_name) + r'".*?"image":\s*")[^"]+(")'
    content = re.sub(pattern, r'\g<1>' + new_img + r'\g<2>', content, flags=re.DOTALL)

with open('src/data/site.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done - replaced broken images with local generated ones")
