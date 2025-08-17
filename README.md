# 💰 Price Guessing Game

A simple, mobile-friendly static website for hosting a price-guessing game where teams guess the prices of items based on images. Perfect for team-building activities and can be hosted for free on GitHub Pages.

## 🎯 Game Overview

Teams scan a QR code to access the game on their phones. They must guess the price of items within a fixed margin of error:

- **Fixed Margin**: 10% for all items
- **Goal**: Correctly guess 15 out of 30 items within the margin
- **Challenge**: Get feedback on each answer with hot/cold indicators
- **Game Flow**: Submit answer → See feedback → Next question → Continue until done
- **Question Order**: Fixed order (same sequence each time)

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Add your images** to the repository (see Customization section)
3. **Update the game data** with your items and prices
4. **Deploy to GitHub Pages** or any static hosting service

## 📁 File Structure

```
gem-game/
├── index.html          # Main game page
├── styles.css          # Game styling
├── game.js            # Game logic
├── README.md          # This file
├── items/             # Create this folder for your images
│   ├── item1.jpg
│   ├── item2.jpg
│   └── ... (30 total images)
└── data.json          # Create this for your item data (optional)
```

## 🎨 Customization

### Adding Your Items

#### Option 1: Edit the JavaScript file directly

Open `game.js` and modify the `items` array in the `loadGameData()` method:

```javascript
this.items = [
  {
    id: 1,
    image: "items/your-item1.jpg", // Path to your image
    description: "Your Item Description",
    price: 299.99,
  },
  // ... add more items
];
```

#### Option 2: Use a separate data file (Recommended)

Create a `data.json` file:

```json
[
  {
    "id": 1,
    "image": "items/embarrassing-purchase1.jpg",
    "description": "That expensive coffee machine I never use",
    "price": 299.99
  },
  {
    "id": 2,
    "image": "items/embarrassing-purchase2.jpg",
    "description": "Designer shoes that hurt my feet",
    "price": 149.5
  }
]
```

Then modify `game.js` to load from this file:

```javascript
async loadGameData() {
    try {
        const response = await fetch('data.json');
        this.items = await response.json();
        this.shuffleArray(this.items);
    } catch (error) {
        console.error('Error loading game data:', error);
        // Fallback to sample data
        this.loadSampleData();
    }
}
```

### Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600px or similar aspect ratio
- **File size**: Keep under 500KB for fast loading
- **Naming**: Use descriptive names (e.g., `coffee-machine.jpg`)

### Customizing Game Rules

Edit these values in `game.js`:

```javascript
this.maxWrongGuesses = 5; // Maximum wrong guesses allowed
this.totalItems = 15; // Total items to complete
this.marginProgression = [2, 5, 8, 11, 13, 15]; // Margin percentages
```

## 🌐 Deployment

### GitHub Pages (Free)

1. **Push your code** to a GitHub repository
2. **Go to Settings** → Pages
3. **Select source**: Deploy from a branch
4. **Choose branch**: `main` or `master`
5. **Save** - your site will be available at `https://username.github.io/repository-name`

### Other Static Hosting

- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **Any web server**: Upload files to your hosting provider

## 📱 Mobile Optimization

The game is designed mobile-first and includes:

- Responsive design for all screen sizes
- Touch-friendly buttons and inputs
- Optimized for portrait orientation
- Fast loading on mobile networks

## 🔧 Technical Features

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **Progressive margin system** - Gets easier after wrong guesses
- **Local storage** - Game state persists between sessions
- **Responsive design** - Works on all devices
- **Accessibility** - Keyboard navigation and screen reader friendly

## 🎮 How to Play

1. **Scan QR Code** - Teams scan the QR code with their phones
2. **View Item** - See the image and description of the item
3. **Guess Price** - Enter your price estimate
4. **Get Feedback** - See if you're correct (without revealing the actual price)
5. **Progress** - Continue until you complete all 15 items or fail

## 🚨 Important Notes

- **Never reveal correct prices** - This maintains the game's challenge
- **Images must be accessible** - Ensure proper file paths and permissions
- **Test thoroughly** - Verify all items load correctly before deployment
- **Backup your data** - Keep a copy of your item data and images

## 🐛 Troubleshooting

### Images not loading?

- Check file paths in your data
- Ensure images are in the correct folder
- Verify image file names match exactly

### Game not working?

- Open browser console (F12) for error messages
- Check that all files are in the same directory
- Verify JavaScript is enabled

### Mobile issues?

- Test on different devices
- Check viewport meta tag
- Ensure touch events are working

## 📞 Support

For issues or questions:

1. Check the browser console for errors
2. Verify all files are properly uploaded
3. Test with the sample data first
4. Ensure your hosting service supports static files

## 🎉 Enjoy Your Game!

This simple setup provides everything you need for an engaging team activity. The game automatically handles scoring, margin progression, and provides a smooth user experience across all devices.

Happy guessing! 🎯
