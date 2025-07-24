// load database
const supabaseUrl = 'https://hrwqesnazakudkvzbnkl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhyd3Flc25hemFrdWRrdnpibmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzODI5OTcsImV4cCI6MjA2ODk1ODk5N30.W6Uv7gTciuY2wSOLw3KFzC-dM8qVcYjqbg0I0vTyG0Y';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', loadGames);


// load games on page load
async function loadGames() {
  console.log("yeelllo?");
  let { data: games, error } = await supabase
  .from('games')
  .select()


  games.forEach(game => {
    console.log(game.title);
  });
}

//add new game
async function addGame() {
  const inputtedGame = document.getElementById('gameInput').value;

  const { data, error } = await supabase
  .from('games')
  .insert([
    { title: inputtedGame},
  ])
  .select()
}

