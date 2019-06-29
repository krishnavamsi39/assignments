person={
    Firstname:"",
    Lastname:"",
    carsWishlist:       [{color:"red",speed:"200",model:"ferrari"},
                                 {color:"black",speed:"300",model:"bugati"}],
    carsOwned:          [{color:"white",speed:"150",model:"rangerover"},
                                {color:"black",speed:"200",model:"audi"}],
    buyCar(showroom,carname){
        ind=-1
       
        for(i=0;i<showroom.cars.length;i++){
            if(carname==showroom.cars[i].model){
               ind=i
            }
        }
        if(ind==-1){
            console.log("Car not found")
        }
        else{
        person.carsOwned.push(showroom.cars[ind])
        showroom.cars.splice(ind,1)
        }
       console.log("Owned cars list")
       console.log(person.carsOwned)
    },
    addtoWish (l){
        var ind=carnamelist.indexOf(l.model)
        if(ind !=-1){
            console.log("Car already exist")
        }
        else{
        person.carsWishlist.push(l)
        carnamelist.push(l.model)
        }
        console.log("This is wishlist")
        console.log(person.carsWishlist)
    }
}
showRoom={
    name:"abc",
    cars:[{color:"white",speed:"200",model:"benz"},
    {color:"red",speed:"150",model:"swift"},
    {color:"yellow",speed:"250",model:"jeep"},
    {color:"red",speed:"350",model:"rollsroyce"}],
    addtoShowroom (l){
        showRoom.cars.push(l)
       console.log("This is showroom list")
       console.log(showRoom.cars)
    }
}
carnamelist=[]
person.buyCar(showRoom,"benz")
person.addtoWish({color:"white",speed:"250",model:"volkeswagen"})
person.addtoWish({color:"white",speed:"250",model:"volkeswagen"})
showRoom.addtoShowroom({color:"white",speed:"200",model:"verna"})


