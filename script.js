const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    rating: 4.2,
    description:
      "A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.",
    image: "./books-images/the-great-gatsby.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    rating: 4.5,
    description:
      "Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.",
    image: "./books-images/to-kill-a-mockingbird.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
    rating: 4.4,
    description:
      "A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.",
    image: "./books-images/1984.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.",
    image: "./books-images/pride-and-prejudice.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    rating: 4,
    description:
      "Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    rating: 4.6,
    description:
      "A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.",
    image: "./books-images/the-hobbit.jpg",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    rating: 4.7,
    description:
      "The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.",
    image: "./books-images/harry-potter-and-the-sorcerer.jpg",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
    rating: 4.1,
    description:
      "An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.",
    image: "./books-images/moby-dick.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "Fantasy",
    rating: 4.55,
    description:
      "The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.",
    image: "./books-images/the-lord-of-the-rings.jpg",
  },
  {
    title: "The Shining",
    author: "Stephen King",
    year: 1977,
    genre: "Horror",
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    year: 1950,
    genre: "Fantasy",
    rating: 4.15,
    description:
      "The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.",
    image: "./books-images/the-chronicles-of-narnia.jpg",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    genre: "Mystery",
    rating: 3.8,
    description:
      "A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Science Fiction",
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
    genre: "Mystery",
    rating: 4.1,
    description:
      "A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Dystopian",
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
    genre: "Science Fiction",
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: "./books-images/unknown.jpg",
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    year: 1993,
    genre: "Dystopian",
    rating: 4.12,
    description:
      "A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.",
    image: "./books-images/unknown.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const allItems = books;
  let currentItems = allItems;

  function displayItems(items, container, cardClass) {
    container.innerHTML = "";
    items.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card", cardClass);

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.title;

        const itemName = document.createElement("h2");
        itemName.textContent = item.title;

        const itemDetails = document.createElement("div");
        itemDetails.classList.add("item-details");

        const author = document.createElement("p");
        author.textContent = `Author: ${item.author}`;

        const genre = document.createElement("p");
        genre.textContent = `Genre: ${item.genre}`;

        const year = document.createElement("p");
        year.textContent = `Year Published: ${item.year}`;

        const rating = document.createElement("p");
        rating.textContent = `Rating: ${item.rating}`;

        const description = document.createElement("p");
        description.textContent = item.description;

        itemDetails.appendChild(author);
        itemDetails.appendChild(genre);
        itemDetails.appendChild(year);
        itemDetails.appendChild(rating);

        card.appendChild(itemImage);
        card.appendChild(itemName);
        card.appendChild(itemDetails);
        card.appendChild(description);

        container.appendChild(card);
    });
}

  const bookListContainer = document.getElementById("book-list-container");
  const filterGenreSelect = document.getElementById("filterGenre");
  const searchBar = document.getElementById("searchBar");

  function populateFilters() {
      const allGenres = getAllGenres();
      filterGenreSelect.innerHTML = '<option value="">All</option>';
      allGenres.forEach((genre) => {
          const option = document.createElement("option");
          option.value = genre;
          option.textContent = genre;
          filterGenreSelect.appendChild(option);
      });
  }

  function getAllGenres() {
      const genres = new Set();
      books.forEach((book) => genres.add(book.genre));
      return Array.from(genres);
  }

  function filterBooksByGenre(genre) {
      if (genre === "") {
          displayItems(currentItems, bookListContainer, "book-card");
      } else {
          const filteredBooks = books.filter((book) => book.genre === genre);
          displayItems(filteredBooks, bookListContainer, "book-card");
      }
  }

  function showAllItems() {
      displayItems(allItems, bookListContainer, "book-card");
  }

  filterGenreSelect.addEventListener("change", function () {
      const selectedGenre = filterGenreSelect.value;
      filterBooksByGenre(selectedGenre);
  });

  searchBar.addEventListener("input", function () {
      const searchTerm = searchBar.value.toLowerCase();
      const filteredBooks = allItems.filter(
          (book) => book.title.toLowerCase().includes(searchTerm)
      );
      displayItems(filteredBooks, bookListContainer, "book-card");
  });

  const sortPropertySelect = document.getElementById("sortProperty");
  const sortOrderSelect = document.getElementById("sortOrder");

  sortPropertySelect.addEventListener("change", sortItems);
  sortOrderSelect.addEventListener("change", sortItems);

  function sortItems() {
      const selectedProperty = sortPropertySelect.value;
      const selectedOrder = sortOrderSelect.value;

      if (selectedProperty && selectedOrder) {
          currentItems.sort((a, b) => {
              if (selectedOrder === "asc") {
                  return a[selectedProperty] > b[selectedProperty] ? 1 : -1;
              } else {
                  return b[selectedProperty] > a[selectedProperty] ? 1 : -1;
              }
          });
      }

      displayItems(currentItems, bookListContainer, "book-card");
  }

  populateFilters();
  showAllItems();
});