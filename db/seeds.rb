# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.destroy_all
Song.destroy_all
User.destroy_all

#users 
 
erik= User.create(

    name: "Erik",
    username: "erikg",
    email: "erikgonzalez.net",
    password: "123"
)

omar= User.create(

    name: "Omar",
    username: "omara",
    email: "omarapollo",
    password: "321"
)



#songs 
real_life= Song.create(
    name:"Real Life",
    lyrics:
    "Heaven only lets a few in 
    It's too late for me to choose it 
    Don't waste precious tears on me
    I'm not worth the misery
    I'm better off when I'm alone
    That's real life",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZ8t9dJps4fpJv6Gqjl5khcn3loYQjDF0oQ&usqp=CAU"
)

get_free= Song.create(

    name:"Get Free",
    lyrics:
    "Sometimes it feels like I've got a war in my mind
    I want to get off, but I keep riding the ride
    I never really noticed that I had to decide
    To play someone's game, or live my own life
    And now I do, I wanna move
    Out of the black ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIUGkJhBac84AyL02UnsqtngYzpcBCSQgzA&usqp=CAU"
)
   
rlndt= Song.create(

    name:"RLNDT",
    lyrics:
    "No sé lo que hago, no sé ni quién soy
    No sé dónde estoy ni pa' donde voy
    No sé si es ayer o si es hoy
    El miedo que tengo, yo mismo lo doy
    ¿Será como me crié o como crecí?
    ¿Algo que escuché o algo que vi?",
    image: "https://pbs.twimg.com/amplify_video_thumb/1077044652044214273/img/IlsD_9swNnpuPE44.jpg"
)

    
#artists 

Artist.create(

    name: "The Weeknd",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwL5pO76zqwWsIHzD5shVlJNHFGrLUI2TZPA&usqp=CAU",
    user: erik,
    song: real_life

)

Artist.create(

    name: "Lana Del Rey",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTteFWeK5CcQG5yZDL_T2eXrDlv-f-f-fOwGg&usqp=CAU",
    user: erik,
    song: get_free
)

Artist.create(
    name: "Bad Bunny",
    image: "https://i.pinimg.com/236x/14/ce/49/14ce49229a1f5b02f94ae6eaa08a0db1.jpg",    
    user: erik,
    song: rlndt
)

FavoriteSong.create(
    user: erik,
    song:real_life
)

puts "done"