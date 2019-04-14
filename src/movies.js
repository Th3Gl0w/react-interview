    
const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      url : 'https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_.jpg',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      url : 'https://m.media-amazon.com/images/M/MV5BMjg0NjU1MjgyNF5BMl5BanBnXkFtZTgwNzc5NjYyNDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      url : 'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      url: 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      url: 'https://m.media-amazon.com/images/M/MV5BMTcxMjUwNjQ5N15BMl5BanBnXkFtZTgwNjk4MzI4NjM@._V1_.jpg',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      url: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      url : 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      url : 'https://m.media-amazon.com/images/M/MV5BZDQ2ODFhMjgtMjgxNC00NTllLThkMjctNzNjZGE0OWVhZDY4XkEyXkFqcGdeQXVyMzEyMjE2NzA@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      url: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      url : 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      likes: 22,
      dislikes: 12
    },
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))