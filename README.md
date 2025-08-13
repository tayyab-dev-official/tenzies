# 🎲 Tenzies Game

**Tenzies** is an exciting and addictive dice game that challenges players to think strategically while having fun! Built with modern React and powered by Vite, this interactive web application brings the classic Tenzies experience to your browser.

## 📖 About the Project

This project showcases my expertise in **React development** and modern web development practices. Tenzies represents a perfect blend of game logic, state management, and user interface design.

### 🎯 What is Tenzies?

Tenzies is a fast-paced dice game where strategy meets luck! The objective is simple yet engaging: roll 10 dice and try to get them all to show the same number. Players can strategically "hold" dice they want to keep, creating an element of decision-making that makes each game unique and exciting.

### 🌟 Why This Project?

- **Learning React State Management**: Demonstrates complex state handling with multiple dice objects
- **Component Architecture**: Showcases proper React component structure and prop passing
- **Interactive UI/UX**: Features responsive design with visual feedback
- **Modern Development**: Built with Vite for lightning-fast development experience
- **Clean Code Practices**: Implements best practices for maintainable and scalable code

Roll the dice, hold your favorites, and try to get all dice showing the same number to win!

## 🎮 Game Rules

- Roll 10 dice by clicking the "Roll" button
- Click on individual dice to "hold" them (they'll turn green)
- Held dice won't change when you roll again
- Keep rolling until all 10 dice show the same number
- Try to win in as few rolls as possible!

## 🚀 Demo

[Live Demo](https://your-tenzies-game.netlify.app) *(Add your deployed link here)*

## 📸 Screenshots

![Tenzies Game Screenshot](./screenshots/tenzies-game.png) *(Add screenshots of your game)*

## 🛠️ Built With

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
   git clone https://github.com/yourusername/tenzies.git
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
- ✅ Responsive design
- ✅ Clean and intuitive UI
- 🔄 Win condition detection *(if implemented)*
- 🎉 Celebration animation *(if implemented)*
- 📊 Score tracking *(if implemented)*

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

- [ ] Add win condition detection
- [ ] Implement confetti celebration on win
- [ ] Add roll counter and best score tracking
- [ ] Add timer functionality
- [ ] Implement local storage for high scores
- [ ] Add sound effects
- [ ] Add different difficulty levels

## 📄 License

This project is open source and available under the MIT License. Feel free to use it for learning purposes.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Open source community for inspiration

## 📞 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

**Enjoy playing Tenzies! 🎲**
