# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Danish-language interactive web application for "Nervesystemsterapi" (Nervous System Therapy) by Annemarie Clement. The application is a single-page educational tool that visualizes therapeutic concepts through an interactive SVG diagram with six interconnected circles representing different therapeutic perspectives.

## Architecture

### File Structure
- `index.html` - Single-page HTML with embedded SVG visualization
- `script.js` - Vanilla JavaScript application logic (~1900 lines)
- `styles.css` - CSS styling with mobile-responsive design
- `hero.PNG` - Header image
- No build process or dependencies - runs directly in browser

### Core Architecture Patterns

**Data-Driven Content System**: The application uses a comprehensive JavaScript object structure (`themes` object) to store all content. Each theme (e.g., "general", "angst", "tilknytning", etc.) contains:
- `circles`: Content for each of the 7 circles (nervesystem, polyvagal, tilknytning, kropsterapi, psykobiologi, traumer, relation)
- Each circle has content for two audiences: `klient` (client) and `fagfolk` (professional)
- `connections`: Describes relationships between circles (e.g., 'nervesystem-polyvagal')

**Education System**: Separate from themes, there's an `educations` object with similar structure for different educational programs (nervesystemsterapeut, teachertraining, tilknytningsspeciale).

**View States**: The application manages state through global variables:
- `currentMode`: Either 'klient' or 'fagfolk'
- `currentTheme`: Active theme (e.g., 'general', 'angst')
- `currentEducation`: Active education track or null
- `currentView`: Current display state ('welcome', 'circle', 'exercises')
- `currentCircle`: Which circle is being viewed

**SVG Interaction**: The central visualization is an SVG with:
- Center circle: "Nervesystemsregulering" (Nervous System Regulation)
- 6 outer circles arranged in a hexagon
- Lines connecting all circles to show relationships
- Click handlers on circles and connections to display content

### Key Functionality

1. **Mode Switching**: Toggle between client-friendly and professional/technical explanations
2. **Theme Selection**: Filter content by specific topics (anxiety, attachment, stress, trauma, sleep)
3. **Education Tracks**: Switch to educational program content for therapists-in-training
4. **Interactive Visualization**: Click circles to view content, click connections to see relationship descriptions
5. **Exercises Section**: Standalone section with practical nervous system regulation exercises

## Development Commands

This is a static website with no build process.

**Local Development**:
```bash
# Serve locally with Python (from project root)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Or with PHP
php -S localhost:8000

# Or with Node.js (if http-server is installed)
npx http-server -p 8000
```

**Deployment**:
Simply upload all files to a web server. All assets are self-contained.

## Code Conventions

### Language
- All user-facing content is in Danish
- Code comments and variable names are in English or Danish
- Content structure uses Danish keys (klient/fagfolk, not client/professional)

### Content Structure
When adding new content to `script.js`:
- Each theme must have both `klient` and `fagfolk` versions for all circles
- Connection descriptions follow the pattern: `'circle1-circle2'` as the key
- Circle IDs are: nervesystem, polyvagal, tilknytning, kropsterapi, psykobiologi, traumer, relation

### Styling
- Mobile-first responsive design with portrait/landscape media queries
- Uses CSS custom properties via inline values (no CSS variables defined)
- Color scheme: Primary green `#5a7a68` (sage green), backgrounds in `#f0f1f1` to `#e8f0ec`
- Font: Georgia serif for all text

## Important Technical Details

### SVG Coordinates
The SVG is 700x700 viewBox with circles positioned at specific coordinates:
- Center (nervesystem): 350, 350
- Top (polyvagal): 350, 100
- Top-right (tilknytning): 580, 200
- Bottom-right (kropsterapi): 580, 500
- Bottom (psykobiologi): 350, 600
- Bottom-left (traumer): 120, 500
- Top-left (relation): 120, 200

When modifying the diagram, maintain these positions for visual consistency.

### State Management
State changes trigger view updates through functions like:
- `showCircleView(circleId)` - Display content for a specific circle
- `updateCenterCircle()` - Update the center circle text based on education/theme
- `clearAllActive()` - Reset visual states

Always ensure state variables are updated before calling view update functions.

### Content Access Pattern
```javascript
// Access content for current context
const sourceData = currentEducation ? educations[currentEducation] : themes[currentTheme];
const circleData = sourceData.circles[circleId];
const content = circleData[currentMode]; // 'klient' or 'fagfolk'
```

## Mobile Considerations

- Uses viewport-fit=cover for notched devices
- Safe area insets applied with env(safe-area-inset-top)
- Touch-optimized circle sizes (75px)
- Horizontal scrolling disabled with careful viewport settings
- Background gradient changes in portrait mode to accommodate top bar

## Common Modifications

**Adding a new theme**:
1. Add theme data to `themes` object in script.js
2. Add option to theme dropdown in index.html
3. Ensure all 7 circles have both klient and fagfolk content
4. Define connections between circles

**Adding exercises**:
Add to the `exercises` array in script.js with structure:
```javascript
{
    title: "Exercise Title",
    intro: "Introduction text",
    steps: ["Step 1", "Step 2", ...]
}
```

**Modifying visual appearance**:
- Circle styling: `.circle` class in styles.css
- Connection lines: `.connection` class in styles.css
- Active states use `.active` class with color changes to white text on colored backgrounds
