# Electric Locusts — Image Requirements & Upload Workflow

## Directory Structure

Each art series has its own `images/` directory:

```
content/art-series/
├── 01-deconstructing-masculinity/
│   ├── images/
│   ├── overview.md
│   ├── process.md
│   └── artwork.json
├── 02-mixed/
│   ├── images/
│   ├── overview.md
│   ├── process.md
│   └── artwork.json
├── 03-exposure/
│   ├── images/
│   ├── overview.md
│   ├── process.md
│   └── artwork.json
├── 04-people-who-saved-my-life/
│   ├── images/
│   ├── overview.md
│   ├── process.md
│   └── artwork.json
├── 05-self-annihilation/
│   ├── images/
│   ├── overview.md
│   ├── process.md
│   └── artwork.json
└── 06-what-we-were-left-with/
    ├── images/
    ├── overview.md
    ├── process.md
    └── artwork.json
```

---

## Image Format Requirements

### File Formats
- **Primary:** `.jpg` or `.jpeg` (for photographs)
- **Alternative:** `.png` (for images requiring transparency)
- **Avoid:** `.gif`, `.bmp`, `.tiff` (not web-optimized)

### Image Dimensions

**Full-Size Display Images:**
- **Width:** 2400px (maximum)
- **Height:** Variable (maintain aspect ratio)
- **Aspect Ratio:** Flexible, but common ratios:
  - 3:2 (landscape photography standard)
  - 4:5 (portrait orientation)
  - 1:1 (square)
  - 16:9 (cinematic/video stills)

**Thumbnail Images:**
- **Width:** 800px
- **Height:** Variable (maintain aspect ratio)
- Use for grid displays and previews

### File Size
- **Full-size:** Maximum 500KB per image (compressed)
- **Thumbnail:** Maximum 150KB per image
- Use tools like ImageOptim, TinyPNG, or Squoosh for compression

### Quality Settings
- **JPEG Quality:** 80-85% (balances quality and file size)
- **Color Space:** sRGB (for web display)
- **Resolution:** 72 DPI (web standard)

---

## Naming Conventions

### Format
```
[series-slug]_[number]_[optional-descriptor].jpg
```

### Examples

**Deconstructing Masculinity:**
```
deconstructing-masculinity_01.jpg
deconstructing-masculinity_02_portrait-a.jpg
deconstructing-masculinity_03_portrait-b.jpg
```

**Mixed:**
```
mixed_01.jpg
mixed_02_chaos.jpg
mixed_03_overlap.jpg
```

**Exposure:**
```
exposure_01.jpg
exposure_02_weight.jpg
exposure_03_isolation.jpg
```

**People Who Saved My Life:**
```
people-saved_01_cyanotype-a.jpg
people-saved_02_cyanotype-b.jpg
people-saved_03_cyanotype-c.jpg
```

**Self-Annihilation:**
```
self-annihilation_01_scratched.jpg
self-annihilation_02_burned.jpg
self-annihilation_03_book-spread.jpg
```

**What We Were Left With:**
```
what-we-were-left-with_01.jpg
what-we-were-left-with_02_aftermath.jpg
what-we-were-left-with_03_archive.jpg
```

### Rules
- Use lowercase
- Use hyphens for spaces in series names
- Use underscores to separate parts
- Number sequentially (01, 02, 03...)
- Optional descriptors should be brief and meaningful
- No special characters except hyphens and underscores

---

## Metadata Structure (artwork.json)

Each series should have an `artwork.json` file that describes all images:

```json
{
  "series": "Deconstructing Masculinity",
  "slug": "deconstructing-masculinity",
  "artworks": [
    {
      "id": 1,
      "filename": "deconstructing-masculinity_01.jpg",
      "title": "Portrait A",
      "description": "A subject challenging traditional masculine archetypes through vulnerability and authentic expression.",
      "medium": "Portrait Photography",
      "year": 2023,
      "dimensions": "24 x 36 inches (print)",
      "featured": true,
      "order": 1,
      "alt": "Black and white portrait of a person with soft expression challenging masculine stereotypes"
    },
    {
      "id": 2,
      "filename": "deconstructing-masculinity_02_portrait-b.jpg",
      "title": "Portrait B",
      "description": "Exploring emotional availability and the rejection of stoic masculine performance.",
      "medium": "Portrait Photography",
      "year": 2023,
      "dimensions": "24 x 36 inches (print)",
      "featured": false,
      "order": 2,
      "alt": "Portrait showing emotional openness and rejection of traditional masculine expectations"
    }
  ]
}
```

### Metadata Fields

- **id:** Unique identifier (integer)
- **filename:** Exact filename in the images/ directory
- **title:** Display title for the artwork
- **description:** Brief description (1-2 sentences)
- **medium:** Medium used (e.g., "Portrait Photography", "Mixed Media", "Cyanotype Print")
- **year:** Year created
- **dimensions:** Physical dimensions if applicable
- **featured:** Boolean - should this be featured/highlighted?
- **order:** Display order in the series
- **alt:** Accessibility text for screen readers (descriptive, specific)

---

## Upload Workflow

### Step 1: Prepare Images
1. Export images at correct dimensions (2400px width max)
2. Compress to appropriate file size (under 500KB)
3. Rename according to naming conventions
4. Verify color space is sRGB

### Step 2: Organize Files
1. Place images in the appropriate series `images/` directory
2. Verify filenames match the naming convention
3. Check that all images are web-optimized

### Step 3: Create Metadata
1. Create or update `artwork.json` in the series directory
2. Add entry for each image with all required fields
3. Set display order
4. Mark featured images
5. Write descriptive alt text for accessibility

### Step 4: Verify
1. Check that all filenames in `artwork.json` match actual files
2. Verify image quality and compression
3. Test that images load properly
4. Confirm alt text is descriptive and helpful

---

## Image Optimization Tools

### Recommended Tools
- **ImageOptim** (Mac) - Lossless compression
- **TinyPNG** (Web) - Smart lossy compression
- **Squoosh** (Web) - Google's image optimizer
- **Sharp** (CLI/Node) - Automated batch processing

### Batch Processing Script
For automated optimization, you can use a script like:

```bash
# Example using ImageMagick
for img in *.jpg; do
  convert "$img" -resize 2400x -quality 85 -colorspace sRGB "optimized_$img"
done
```

---

## Accessibility Guidelines

### Alt Text Best Practices
- Be specific and descriptive
- Mention key visual elements
- Include emotional tone if relevant
- Keep under 125 characters when possible
- Don't start with "Image of..." or "Picture of..."

### Examples

**Good:**
```
"Black and white portrait showing vulnerability through soft expression and open body language"
```

**Bad:**
```
"Image of a person"
```

---

## Series-Specific Notes

### Deconstructing Masculinity
- Focus on portrait clarity
- Emphasize facial expressions and body language
- High contrast black and white preferred

### Mixed
- Visual chaos and contradiction are intentional
- May include overlays, distortion, fragmentation
- Color and texture variety expected

### Exposure
- Raw, unpolished aesthetic
- Natural light emphasis
- Emotional weight through composition

### People Who Saved My Life
- Cyanotype blue tones are signature
- Include both portrait and letter images if available
- Sacred, reverent quality

### Self-Annihilation
- Include scratched/burned negative effects
- Show physical destruction of image
- May include book spreads and video stills

### What We Were Left With
- Documentary/archival quality
- Various formats and qualities acceptable
- Authenticity over polish

---

## Questions or Issues?

If you encounter any issues during the upload process or have questions about image requirements, document them and we can adjust the workflow as needed.
