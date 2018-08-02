import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','This is a description!','https://www.redrobin.com/content/dam/web/menu/tavern-menu/tavern-double-burger-1100.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
