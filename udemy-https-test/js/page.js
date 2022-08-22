
//The code will be cleaned later do not worr

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data(){
        return{
            /*moviesList : [{
                "Title": "Star Wars: Episode IV - A New Hope",
                "Year": "1977",
                "imdbID": "tt0076759",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode V - The Empire Strikes Back",
                "Year": "1980",
                "imdbID": "tt0080684",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode VI - Return of the Jedi",
                "Year": "1983",
                "imdbID": "tt0086190",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
                    ],*/
            movieResponse : [],
            movieSearchInput : '',
            movieFocusData : [],
            FocusDataVisible : false,
        }
    },
    methods:{
        loadMovies: function (searchTerm) {
           axios.get('https://www.omdbapi.com/?&s='+searchTerm+'&apikey=2f334181')
            .then(response => { if(response.data.Response == "True"){
                this.movieResponse = response.data.Search;
                    console.log(this.movieResponse);}

                    else{this.movieResponse = [];}
                })
            //.then((response)=> {console.log(response.data.Response);})
            .catch(error => this.movieResponse = [{Title: 'Error on calling API'}]);
            
        },

        cardClick: function (index)
        {
            console.log(index);
            console.log(this.movieResponse[index].Title);

            Focus = this.movieResponse[index].Title;
            axios.get('https://www.omdbapi.com/?&t='+Focus+'&apikey=2f334181&plot=full')
            .then(response => { if(response.data.Response == "True"){
                this.movieFocusData = response.data;
                    console.log(this.movieFocusData);
                    this.FocusDataVisible = true;
                    }

                    else{this.movieFocusData = [];
                        this.FocusDataVisible = false;
                    }
                })
            //.then((response)=> {console.log(response.data.Response);})
            .catch(error => this.movieFocusData = [{Title: 'Error on calling API'}]);
        }


    },  

})
