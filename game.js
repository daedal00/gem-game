class PriceGuessingGame {
  constructor() {
    this.currentItemIndex = 0;
    this.score = 0;
    this.totalItems = 30;
    this.margin = 10; // Fixed 10% margin for all items
    this.gameState = "welcome"; // welcome, playing, gameOver

    this.initializeEventListeners();
    this.loadGameData();
  }

  initializeEventListeners() {
    // Start game button
    document.getElementById("start-game").addEventListener("click", () => {
      this.startGame();
    });

    // Submit guess button
    document.getElementById("submit-guess").addEventListener("click", () => {
      this.submitGuess();
    });

    // Next item button
    document.getElementById("next-item").addEventListener("click", () => {
      this.nextItem();
    });

    // Play again buttons
    document.getElementById("play-again").addEventListener("click", () => {
      this.resetGame();
    });

    document.getElementById("try-again").addEventListener("click", () => {
      this.resetGame();
    });

    // Enter key on price input
    document.getElementById("price-guess").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.submitGuess();
      }
    });
  }

  async loadGameData() {
    try {
      const response = await fetch("data.json");
      this.items = await response.json();
      // Keep items in original order (no shuffling)
    } catch (error) {
      console.error("Error loading game data:", error);
      // Fallback to sample data if data.json fails to load
      this.loadSampleData();
    }
  }

  loadSampleData() {
    // Fallback sample data if external file fails to load
    this.items = [
      {
        id: 1,
        image: "items/coffee-machine.jpg",
        description: "Sample Item 1",
        price: 199.99,
      },
      {
        id: 2,
        image: "items/designer-shoes.jpg",
        description: "Sample Item 2",
        price: 149.5,
      },
      {
        id: 3,
        image: "items/gaming-headset.jpg",
        description: "Sample Item 3",
        price: 89.99,
      },
      {
        id: 4,
        image: "items/kitchen-appliance.jpg",
        description: "Sample Item 4",
        price: 599.0,
      },
      {
        id: 5,
        image: "items/fitness-equipment.jpg",
        description: "Sample Item 5",
        price: 199.99,
      },
      {
        id: 6,
        image: "items/tech-gadget.jpg",
        description: "Sample Item 6",
        price: 349.99,
      },
      {
        id: 7,
        image: "items/accessory.jpg",
        description: "Sample Item 7",
        price: 79.99,
      },
      {
        id: 8,
        image: "items/home-decor.jpg",
        description: "Sample Item 8",
        price: 129.99,
      },
      {
        id: 9,
        image: "items/hobby-supplies.jpg",
        description: "Sample Item 9",
        price: 449.99,
      },
      {
        id: 10,
        image: "items/clothing-item.jpg",
        description: "Sample Item 10",
        price: 99.99,
      },
      {
        id: 11,
        image: "items/beauty-product.jpg",
        description: "Sample Item 11",
        price: 279.99,
      },
      {
        id: 12,
        image: "items/entertainment-item.jpg",
        description: "Sample Item 12",
        price: 189.99,
      },
      {
        id: 13,
        image: "items/tool.jpg",
        description: "Sample Item 13",
        price: 399.99,
      },
      {
        id: 14,
        image: "items/outdoor-gear.jpg",
        description: "Sample Item 14",
        price: 159.99,
      },
      {
        id: 15,
        image: "items/collectible.jpg",
        description: "Sample Item 15",
        price: 329.99,
      },
      {
        id: 16,
        image: "items/smartphone.jpg",
        description: "Sample Item 16",
        price: 899.99,
      },
      {
        id: 17,
        image: "items/watch.jpg",
        description: "Sample Item 17",
        price: 249.99,
      },
      {
        id: 18,
        image: "items/camera.jpg",
        description: "Sample Item 18",
        price: 799.99,
      },
      {
        id: 19,
        image: "items/headphones.jpg",
        description: "Sample Item 19",
        price: 179.99,
      },
      {
        id: 20,
        image: "items/tablet.jpg",
        description: "Sample Item 20",
        price: 649.99,
      },
      {
        id: 21,
        image: "items/speaker.jpg",
        description: "Sample Item 21",
        price: 129.99,
      },
      {
        id: 22,
        image: "items/lamp.jpg",
        description: "Sample Item 22",
        price: 189.99,
      },
      {
        id: 23,
        image: "items/rug.jpg",
        description: "Sample Item 23",
        price: 299.99,
      },
      {
        id: 24,
        image: "items/painting.jpg",
        description: "Sample Item 24",
        price: 499.99,
      },
      {
        id: 25,
        image: "items/vase.jpg",
        description: "Sample Item 25",
        price: 89.99,
      },
      {
        id: 26,
        image: "items/mirror.jpg",
        description: "Sample Item 26",
        price: 159.99,
      },
      {
        id: 27,
        image: "items/plant.jpg",
        description: "Sample Item 27",
        price: 69.99,
      },
      {
        id: 28,
        image: "items/book.jpg",
        description: "Sample Item 28",
        price: 119.99,
      },
      {
        id: 29,
        image: "items/magazine.jpg",
        description: "Sample Item 29",
        price: 39.99,
      },
      {
        id: 30,
        image: "items/newspaper.jpg",
        description: "Sample Item 30",
        price: 29.99,
      },
    ];

    // Keep items in original order (no shuffling)
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  startGame() {
    this.gameState = "playing";
    this.showScreen("game-screen");
    this.displayCurrentItem();
    this.updateUI();
  }

  showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active");
    });

    // Show target screen
    document.getElementById(screenId).classList.add("active");
  }

  displayCurrentItem() {
    const currentItem = this.items[this.currentItemIndex];

    document.getElementById("item-image").src = currentItem.image;
    document.getElementById("item-description").textContent =
      currentItem.description;
    document.getElementById("current-item").textContent = `Item ${
      this.currentItemIndex + 1
    }`;

    // Clear previous feedback
    this.hideFeedback();

    // Clear input
    document.getElementById("price-guess").value = "";
    document.getElementById("price-guess").focus();
  }

  submitGuess() {
    const guessInput = document.getElementById("price-guess");
    const guess = parseFloat(guessInput.value);

    if (isNaN(guess) || guess < 0) {
      this.showError("Please enter a valid price");
      return;
    }

    const currentItem = this.items[this.currentItemIndex];
    const actualPrice = currentItem.price;

    // Calculate if guess is within 15% margin
    const marginAmount = (actualPrice * this.margin) / 100;
    const lowerBound = actualPrice - marginAmount;
    const upperBound = actualPrice + marginAmount;

    const isCorrect = guess >= lowerBound && guess <= upperBound;

    if (isCorrect) {
      this.score++;
    }

    // Show feedback with hot/cold indication
    this.showGuessFeedback(guess, actualPrice, isCorrect);
  }

  showGuessFeedback(guess, actualPrice, isCorrect) {
    const feedback = document.getElementById("feedback");
    const feedbackContent = document.getElementById("feedback-content");

    // Calculate how close the guess was (percentage)
    const difference = Math.abs(guess - actualPrice);
    const percentageOff = (difference / actualPrice) * 100;

    let message = "";
    let type = "";

    if (isCorrect) {
      message = `✅ Correct!`;
      type = "correct";
    } else {
      // Determine hot/cold based on percentage off (no exact percentages shown)
      let temperature = "";
      if (percentageOff <= 5) {
        temperature = "🔥 Very Hot!";
      } else if (percentageOff <= 10) {
        temperature = "🔥 Hot!";
      } else if (percentageOff <= 20) {
        temperature = "🌡️ Warm";
      } else if (percentageOff <= 30) {
        temperature = "❄️ Cold";
      } else {
        temperature = "🧊 Very Cold!";
      }

      message = `❌ Wrong! ${temperature}`;
      type = "incorrect";
    }

    feedbackContent.innerHTML = message;
    feedback.className = `feedback ${type}`;
    feedback.style.display = "block";

    // Show next item button
    document.getElementById("next-item").style.display = "block";
  }

  hideFeedback() {
    document.getElementById("feedback").style.display = "none";
    document.getElementById("next-item").style.display = "none";
    // Submit button stays visible for mobile users
  }

  nextItem() {
    this.currentItemIndex++;

    // Check if game is complete
    if (this.currentItemIndex >= this.totalItems) {
      this.gameComplete();
    } else {
      this.displayCurrentItem();
      this.updateUI();
    }
  }

  updateUI() {
    // Update progress
    document.getElementById("current-item").textContent = `Item ${
      this.currentItemIndex + 1
    }`;
    document.getElementById("total-items").textContent = this.totalItems;

    // Update progress needed
    const needed = Math.max(0, 15 - this.score);
    document.getElementById("correct-needed").textContent = needed;

    // Update margin info (fixed 10%)
    document.getElementById("current-margin").textContent = "10%";
  }

  gameComplete() {
    this.gameState = "gameOver";

    // Determine if they passed (15+ correct) or failed
    if (this.score >= 15) {
      this.showScreen("game-over-screen");
      document.getElementById("final-score").textContent = this.score;
      document.getElementById("final-correct").textContent = this.score;
    } else {
      this.showScreen("game-failed-screen");
      document.getElementById("failed-score").textContent = this.score;
      document.getElementById("failed-correct").textContent = this.score;
    }
  }

  resetGame() {
    this.currentItemIndex = 0;
    this.score = 0;
    this.gameState = "welcome";

    // Keep items in original order (no shuffling)

    this.showScreen("welcome-screen");
    this.updateUI();
  }

  showError(message) {
    // Simple error display - you could enhance this
    alert(message);
  }

  addAnimation(animationClass) {
    const feedback = document.getElementById("feedback");
    feedback.classList.add(animationClass);

    setTimeout(() => {
      feedback.classList.remove(animationClass);
    }, 1000);
  }
}

// Initialize game when page loads
document.addEventListener("DOMContentLoaded", () => {
  new PriceGuessingGame();
});

// Add some utility functions for debugging
window.gameUtils = {
  // Function to manually set items (for testing)
  setItems: function (items) {
    if (window.gameInstance) {
      window.gameInstance.items = items;
      window.gameInstance.loadGameData();
    }
  },

  // Function to get current game state
  getGameState: function () {
    if (window.gameInstance) {
      return {
        currentItemIndex: window.gameInstance.currentItemIndex,
        score: window.gameInstance.score,
        gameState: window.gameInstance.gameState,
      };
    }
    return null;
  },
};
