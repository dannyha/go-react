package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"math/rand"
)

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Golang REST API Server!\n")
}

/** GET EXAMPLE
// faking the results here, just for testing rest endpoint 
**/
func GetWeather(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	celsius := rand.Intn(30) //getting random integer as weather in celsius
	fahrenheit := celsius * 9/5 + 32 //converting celsius to fahrenheit
	weather := Weather{City: "Toronto", Celsius: celsius, Fahrenheit: fahrenheit} //create json object
	if err := json.NewEncoder(w).Encode(weather); err != nil { //return json object
		panic(err)
	}
}

/** POST EXAMPLE
// faking the results here, just for testing rest endpoint 
**/
func FindWeather(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	decoder := json.NewDecoder(r.Body) //retrieve city input from form submit
	var city Weather //assign variable
	err := decoder.Decode(&city) //decode json
	if err != nil {
		panic(err) //throw error if found
	}
	celsius := rand.Intn(30) //getting random integer as weather in celsius
	fahrenheit := celsius * 9/5 + 32 //converting celsius to fahrenheit
	weather := Weather{City: city.City, Celsius: celsius, Fahrenheit: fahrenheit} //create json object
	if err := json.NewEncoder(w).Encode(weather); err != nil { //return json object
		panic(err)
	}
}
