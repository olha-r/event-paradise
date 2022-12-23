package co.simplon.events.controllers;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.events.database.DataBase;
import co.simplon.events.dtos.ThemeView;
import co.simplon.events.entities.Theme;

@RestController
@RequestMapping("/themes")
@CrossOrigin
public class ThemeController {

    @GetMapping()
    public static Collection<ThemeView> getAll() {
	Collection<Theme> themes = DataBase.findAllThemes();
	Collection<ThemeView> views = new ArrayList<>();
	for (Theme theme : themes) {
	    ThemeView view = new ThemeView();
	    view.setId(theme.getId());
	    view.setName(theme.getName());
	    views.add(view);
	}
	return views;
    }
}
