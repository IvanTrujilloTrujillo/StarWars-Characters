import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCharacterComponent } from './favourite-character.component';

describe('FavouriteCharacterComponent', () => {
  let component: FavouriteCharacterComponent;
  let fixture: ComponentFixture<FavouriteCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
