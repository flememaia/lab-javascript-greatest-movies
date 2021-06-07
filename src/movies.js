// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*function getAllDirectors(movies) {
  
  const moviesDirector = [];
        
  movies.map(function(movie) {
    moviesDirector.push(movie.director)
              })
   return moviesDirector;
 }
*/
//REMOVING DUPLICATES = However, it will not return a array with same length as the original one. 
function getAllDirectors(movies) {
 const moviesDirector = []
       
 movies.map(function(movie) {
   if (moviesDirector.indexOf(movie.director) === -1){
     moviesDirector.push(movie.director)
   }
             })
  return moviesDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (!movies){
    return 0;
  }
  let count = 0;

  movies.map(function(movie, index){
    if (movie.director !== "Steven Spielberg"){
      return 0;
    }
    if(movie.director === "Steven Spielberg"){
      movie.genre.map(function(genreType){
      if(genreType == "Drama"){
        count++;
      }
    })
    }
  })
  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies){
    return 0;
  }

  const avg = movies.reduce(function(accumulator, currentNumber, index) {
    if (index === movies.length - 1) {
      accumulator += currentNumber.score;
      
      return accumulator/movies.length
    }
    
    return accumulator + currentNumber.score;
  },0)
  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (!movies){
    return 0;
  }
  let dramaOnly = [];
  for (let i = 0; i<movies.length; i++){
      for(let j = 0; j<movies[i].genre.length; j++){
          if (movies[i].genre[j] === "Drama")
            dramaOnly.push(movies[i])
      }
  }

  const avgDramaOnly = dramaOnly.reduce(function(accumulator, currentNumber, index) {
      if (index === dramaOnly.length - 1) {
        accumulator += currentNumber.score;
        
        return accumulator/dramaOnly.length
      }
      
      return accumulator + currentNumber.score;
    },0)
    return parseFloat(avgDramaOnly.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (!movies){
    return 0;
  }
  
  let movies2 = [] 
  movies.map(function(movie){
    return movies2.push(movie)
  })

  let moviesOrder = movies2.sort(function(a, b){
    return a.title.localeCompare(b.title)
  })

  let moviesByYear = moviesOrder.sort(function(a, b){
    return a.year - b.year
  })
  return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let movies2 = [] 
  movies.map(function(movie){
    return movies2.push(movie)
  })

  let moviesOrder = movies2.sort(function(a, b){
    return a.title.localeCompare(b.title)
  })
  
  let moviesOrd20 = []
  moviesOrder.map(function(movie, index) {
    if(index < 20){
      return moviesOrd20.push(movie.title)
    }
  })
  return moviesOrd20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let movies2 = [];
  let totalDuration = 0;

  for(let j = 0; j < movies.length; j++){
    movies2.push(movies[j])
  }

  for (let i = 0; i < movies2.length; i++){//movies with total duration hours + > 10minutes
    if(movies2[i].duration.length === 8){
      totalDuration = (movies2[i].duration[0] * 60) + (movies2[i].duration[3] * 10) + (movies2[i].duration[4] * 1)
      movies2[i].duration = totalDuration //=> para atualizar a propriedade duration
    }
    if(movies2[i].duration.length === 7){//movies with total duration hours + < 10minutes
      totalDuration = (movies2[i].duration[0] * 60) + (movies2[i].duration[3] * 1)
      movies2[i].duration = totalDuration //=> para atualizar a propriedade duration
    }
    if(movies2[i].duration.length === 2){// movies with total duration only in hours - no minutes Ex: 2h
      totalDuration = (movies2[i].duration[0] * 60)
      movies2[i].duration = totalDuration //=> para atualizar a propriedade duration
    }
    if(movies2[i].duration.length === 5){// movies with less than an hour duration and >10minutes
      totalDuration = (movies2[i].duration[0] * 10) + (movies2[i].duration[1] * 1)
      movies2[i].duration = totalDuration //=> para atualizar a propriedade duration
    }
    if(movies2[i].duration.length === 5){// movies with less than an hour duration and <10minutes
      totalDuration = (movies2[i].duration[0] * 1)
      movies2[i].duration = totalDuration //=> para atualizar a propriedade duration
    }
  }
  return movies2
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
