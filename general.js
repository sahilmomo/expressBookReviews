const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

/**
 * Get all books
 */
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching all books:', error.message);
  }
}

/**
 * Get book details by ISBN
 * @param {string} isbn
 */
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
  }
}

/**
 * Get books by author
 * @param {string} author
 */
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${author}`);
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching books by author ${author}:`, error.message);
  }
}

/**
 * Get books by title
 * @param {string} title
 */
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/title/${title}`);
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching books with title ${title}:`, error.message);
  }
}

/* Example function calls */
getAllBooks();
getBookByISBN('1');
getBooksByAuthor('Chinua Achebe');
getBooksByTitle('Things Fall Apart');
