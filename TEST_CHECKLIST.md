# Test & Verification Checklist — Arnav Pundir Portfolio

Empirical verification steps required before completing any code changes.

---

## 1. Local Build & Syntax Verification
```bash
# Must build with 0 errors
npm run build
```

## 2. Sitemap & XML Validation
```bash
# Validate sitemap is well-formed XML
python3 -c "import xml.etree.ElementTree as ET; ET.parse('public/sitemap.xml'); print('Sitemap XML is valid')"
```

## 3. Dead Code & Import Audit
```bash
# Ensure no dead components exist
! git status --porcelain | grep -E "LoadingScreen"
```

## 4. Live Endpoint Reachability (Post-Deploy)
```bash
# Verify HTTP 200 responses on production domain
curl -s -o /dev/null -w "%{http_code}\n" https://arnavpundir22.github.io/
curl -s -o /dev/null -w "%{http_code}\n" https://arnavpundir22.github.io/sitemap.xml
curl -s -o /dev/null -w "%{http_code}\n" https://arnavpundir22.github.io/robots.txt
```
