import zipfile, re, json
from pathlib import Path
from xml.etree import ElementTree as ET

files = [
    r'C:\Users\LUCIENDZOU\Downloads\Document stratégique revisé Aout 2024 B.docx',
    r'C:\Users\LUCIENDZOU\Downloads\REGLEMENT INTERIEUR ADOPTE LE 30 JUILLET 2023.docx',
    r"C:\Users\LUCIENDZOU\Downloads\Reglement Interieur de l'ECODIM- . AGE du 22 juillet 2023.docx",
    r'C:\Users\LUCIENDZOU\Downloads\REGLEMENT INTERIEUR JEUNESSE POUR CHRIST.docx',
    r'C:\Users\LUCIENDZOU\Downloads\REGLEMENT INTERIEUR DU GROUPE NATIONAL DES FEMMES CHRETIENNES ACTIVES DE L.docx',
]
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

def text_of(el):
    parts=[]
    for node in el.iter():
        if node.tag == '{%s}t' % ns['w']:
            parts.append(node.text or '')
        elif node.tag == '{%s}tab' % ns['w']:
            parts.append('\t')
        elif node.tag == '{%s}br' % ns['w']:
            parts.append('\n')
    return ''.join(parts).strip()

def extract(path):
    with zipfile.ZipFile(path) as z:
        xml = z.read('word/document.xml')
    root = ET.fromstring(xml)
    body = root.find('w:body', ns)
    blocks=[]
    for child in list(body):
        if child.tag == '{%s}p' % ns['w']:
            t=text_of(child)
            if t:
                blocks.append({'type':'p','text': re.sub(r'\s+', ' ', t).strip()})
        elif child.tag == '{%s}tbl' % ns['w']:
            rows=[]
            for tr in child.findall('w:tr', ns):
                cells=[]
                for tc in tr.findall('w:tc', ns):
                    cells.append(re.sub(r'\s+', ' ', text_of(tc)).strip())
                if any(cells): rows.append(cells)
            if rows:
                blocks.append({'type':'table','rows': rows})
    return blocks

out={}
for f in files:
    blocks=extract(f)
    plain=[]
    for b in blocks:
        if b['type']=='p': plain.append(b['text'])
        else:
            for row in b['rows']:
                plain.append(' | '.join(row))
    text='\n'.join(plain)
    important=[]
    for line in plain:
        if re.search(r'(?i)(article|titre|chapitre|section|vision|mission|objectif|organe|bureau|assembl[eé]e|histor|valeur|axe|orientation|programme|strat[eé]g|ecodim|jeunesse|femmes|christ|emec|d[oé]partement|projet|plan|r[eè]glement|statut)', line):
            important.append(line)
    out[Path(f).name] = {
        'paragraph_or_rows_count': len(plain),
        'char_count': len(text),
        'first_30': plain[:30],
        'important_first_220': important[:220],
        'all_text': text,
    }
Path('tmp_docx_extracts.json').write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps({k:{'blocks':v['paragraph_or_rows_count'],'chars':v['char_count'],'important_kept':len(v['important_first_220'])} for k,v in out.items()}, ensure_ascii=False, indent=2))
