package co.simplon.events.database;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import co.simplon.events.entities.Event;
import co.simplon.events.entities.Place;
import co.simplon.events.entities.Theme;

public class DataBase {

    private static Long placeId = 0L;

    private static Long themeId = 0L;

    private static Long eventId = 0L;

    private static final Map<Long, Place> PLACES = new HashMap<>();

    private static final Map<Long, Theme> THEMES = new HashMap<>();

    private static final Map<Long, Event> EVENTS = new HashMap<>();

    static {

	Place place1 = new Place();
	placeId++;
	place1.setId(placeId);
	place1.setName("Paris");
	PLACES.put(placeId, place1);

	Place place2 = new Place();
	placeId++;
	place2.setId(placeId);
	place2.setName("Rennes");
	PLACES.put(placeId, place2);

	Place place3 = new Place();
	placeId++;
	place3.setId(placeId);
	place3.setName("Marseille");
	PLACES.put(placeId, place3);

    }

    static {
	Theme theme1 = new Theme();
	themeId++;
	theme1.setId(placeId);
	theme1.setName("Écologie");
	THEMES.put(themeId, theme1);

	Theme theme2 = new Theme();
	themeId++;
	theme2.setId(placeId);
	theme2.setName("Ressources Humaines");
	THEMES.put(themeId, theme2);

	Theme theme3 = new Theme();
	themeId++;
	theme3.setId(placeId);
	theme3.setName("Tech");
	THEMES.put(themeId, theme3);
    }

    public static Collection<Place> findAllPlaces() {

	return PLACES.values();
    }

    public static Collection<Theme> findAllThemes() {
	return THEMES.values();
    }

    public static Theme findThemeById(Long id) {
	return THEMES.get(id);
    }

    public static Place findPlaceById(Long place) {
	return PLACES.get(place);
    }

    public static void saveEvents(Event event) {
	eventId++;
	event.setId(eventId);
	EVENTS.put(eventId, event);
    }

}
