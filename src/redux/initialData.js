import { v4 as uuidv4 } from 'uuid';

export default {
  books: [
    {
      id: uuidv4(),
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
    },
    {
      id: uuidv4(),
      title: 'And Then There Were None',
      author: 'Agatha Christie',
    },
    {
      id: uuidv4(),
      title: 'The Hobbit',
      author: 'J.R.R Tolkien',
    },
  ],
};
