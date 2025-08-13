# 🎲 Tenzies Game

A fun and interactive dice game built with React and Vite. Roll 10 dice, hold your favorites, and try to get them all showing the same number to win!

## 🎯 About

Tenzies is a fast-paced strategy game where you roll dice and selectively hold them to achieve matching numbers. Built with modern React for smooth gameplay and responsive design.

## 🎮 Game Rules

- Roll 10 dice by clicking the "Roll" button
- Click on individual dice to "hold" them (they'll turn green)
- Held dice won't change when you roll again
- Keep rolling until all 10 dice show the same number
- Try to win in as few rolls as possible!

## 🚀 Demo

[Live Demo](https://keshf-tenzies.netlify.app/) 

## ️ Built With

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling
- **nanoid** - Unique ID generation
- **react-confetti** - Celebration effects

## 🏗️ Project Structure

```
tenzies/
├── components/
│   ├── App.jsx          # Main game component
│   └── Die.jsx          # Individual die component
├── index.html           # HTML template
├── index.jsx           # React app entry point
├── index.css           # Global styles
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tayyab-dev-official/tenzies.git
   cd tenzies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to play the game!

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎯 Features

- ✅ Interactive dice rolling
- ✅ Hold/unhold dice functionality
- ✅ Visual feedback for held dice
- ✅ Win condition detection
- ✅ Celebration animation with confetti
- ✅ Responsive design
- ✅ Clean and intuitive UI

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 Development Notes

### Key Components

- **App.jsx**: Manages game state, dice generation, and game logic
- **Die.jsx**: Renders individual dice with click handlers

### State Management

The game uses React's `useState` hook to manage:
- Array of dice objects with `value`, `isHeld`, and `id` properties
- Game state and user interactions

## 🐛 Known Issues

- None at the moment! Report any bugs you find.

## 📈 Future Enhancements

- [ ] Add roll counter and best score tracking
- [ ] Add timer functionality
- [ ] Implement local storage for high scores
- [ ] Add sound effects
- [ ] Add different difficulty levels
- [ ] Add game statistics and analytics

## 📄 License

This project is open source and available under the MIT License. Feel free to use it for learning purposes.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Open source community for inspiration

## 📞 Contact

- GitHub: [@tayyab-dev-official](https://github.com/tayyab-dev-official)
- LinkedIn: [Mohammad Tayyab](https://www.linkedin.com/in/mohammad-tayyab-91ba5236b/)
- Email: tayyab.professional.official@gmail.com

---

**Enjoy playing Tenzies! 🎲**
