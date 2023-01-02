package co.simplon.events.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.events.database.DataBase;
import co.simplon.events.dtos.LabelValue;
import co.simplon.events.entities.Theme;

@RestController
@RequestMapping("/themes")
@CrossOrigin
public class ThemeController {

    @GetMapping()
    public static Collection<LabelValue> getAll() {
	Collection<Theme> themes = DataBase.findAllThemes();
	Collection<LabelValue> themesList = new ArrayList<>();
	for (Theme theme : themes) {
	    LabelValue element = new LabelValue();
	    element.setId(theme.getId());
	    element.setName(theme.getName());
	    themesList.add(element);
	}
	return themesList;
    }
}
