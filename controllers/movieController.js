const Movie = require("../models/movie");

const errHandler = (res) => {
  return (err) => {
    console.log(err);
    res.status(404).render("404", { title: "404" });
  };
};

const movieList = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.render("movies/movieList", { title: "List", movies });
  } catch {
    errHandler(res);
  }
};

const movieCreate = async (req, res) => {
  const movie = new Movie(req.body);
  const id = req.params.id;
  try {
    await movie.save();
    await Movie.findById(id);
    res.redirect("/movieList/" + movie._id);
  } catch {
    errHandler(res);
  }
};

const movieInfo = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await Movie.findById(id);
    res.render("movies/movieInfo", { title: "Info", movie });
  } catch {
    errHandler(res);
  }
};

const movieEdit = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await Movie.findById(id);
    res.render("movies/movieEdit", { title: "Edit", movie });
  } catch {
    errHandler(res);
  }
};

const movieUpdate = async (req, res) => {
  let movie;
  const id = req.params.id;
  try {
    movie = await Movie.findById(id);
    movie.title = req.body.title;
    movie.description = req.body.description;
    movie.director = req.body.director;
    movie.releaseDate = req.body.releaseDate;
    movie.genre = req.body.genre;
    movie.duration = req.body.duration;
    movie.score = req.body.score;
    movie.coverImage = req.body.coverImage;
    await movie.save();
    res.redirect("/movieList/" + movie._id);
  } catch {
    errHandler(res);
  }
};

const movieDelete = async (req, res) => {
  const id = req.params.id;
  try {
    await Movie.findByIdAndDelete(id);
    res.json({ redirect: "/movieList" });
  } catch {
    errHandler(res);
  }
};

const searchMovie = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let movies = await Movie.find({
      title: { $regex: searchTerm, $options: "i" },
    });
    res.render("movies/search", { title: "Search", movies });
  } catch {
    errHandler(res);
  }
};

const searchPage = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 }).limit(5);
    res.render("movies/search", { title: "Search", movies });
  } catch {
    errHandler(res);
  }
};

module.exports = {
  movieList,
  movieCreate,
  movieInfo,
  movieEdit,
  movieUpdate,
  movieDelete,
  searchMovie,
  searchPage,
};
