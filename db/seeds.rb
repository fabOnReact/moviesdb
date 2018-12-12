host = "https://s3.eu-central-1.amazonaws.com/moviedatabase1/"

names = %w(Jupiter INCEPTION Avengers WonderWoman INTERSTELLAR ARRIVAL Rouge\ ONE The\ Martian Passengers John\ Wick2 The\ Wolf\ of\ Wall\ Street Django)
images = %w(jupiter.jpg inception.jpeg avengers.jpeg wonderwoman.jpeg interstellar.jpeg arrival.jpeg rougueone.png themartian.jpeg passengers.jpeg johnwick2.jpeg thewolf.jpg django.jpeg)

names.size.times {|i| Movie.create(image: "#{host}#{images[i]}", name: names[i]) } 
