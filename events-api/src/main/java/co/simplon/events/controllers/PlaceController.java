package co.simplon.events.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.events.database.DataBase;
import co.simplon.events.dtos.PlaceView;
import co.simplon.events.entities.Place;

@RestController
@RequestMapping("/places")
@CrossOrigin
public class PlaceController {

    @GetMapping()
    public static Collection<PlaceView> getAll() {
	Collection<Place> places = DataBase.findAllPlaces();
	Collection<PlaceView> views = new ArrayList<>();
	for (Place place : places) {
	    PlaceView view = new PlaceView();
	    view.setId(place.getId());
	    view.setName(place.getName());
	    views.add(view);
	}
	return views;
    }

}
