package co.simplon.events.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.events.database.DataBase;
import co.simplon.events.dtos.LabelValue;
import co.simplon.events.entities.Place;

@RestController
@RequestMapping("/places")
@CrossOrigin
public class PlaceController {

    @GetMapping()
    public static Collection<LabelValue> getAll() {
	Collection<Place> places = DataBase.findAllPlaces();
	Collection<LabelValue> placesList = new ArrayList<>();
	for (Place place : places) {
	    LabelValue element = new LabelValue();
	    element.setId(place.getId());
	    element.setName(place.getName());
	    placesList.add(element);
	}
	return placesList;
    }

}
