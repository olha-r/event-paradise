package co.simplon.events.controllers;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.events.database.DataBase;
import co.simplon.events.dtos.EventCreateDto;
import co.simplon.events.entities.Event;
import co.simplon.events.entities.Place;
import co.simplon.events.entities.Theme;

@RestController
@RequestMapping("/events")
@CrossOrigin
public class EventController {

    @PostMapping()
    public void create(
	    @Valid @RequestBody EventCreateDto inputs) {
	Event event = new Event();
	Place place = DataBase
		.findPlaceById(inputs.getPlaceId());
	Theme theme = DataBase
		.findThemeById(inputs.getThemeId());
	event.setName(inputs.getName());
	event.setDate(inputs.getDate());
	event.setPlace(place);
	event.setTheme(theme);
	event.setRate(inputs.getRate());
	event.setDescription(inputs.getDescription());
	DataBase.saveEvents(event);
	System.out.println(event);
    }
}
