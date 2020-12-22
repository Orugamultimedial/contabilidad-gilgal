import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicstithesandofferingsComponent } from './graphicstithesandofferings.component';

describe('GraphicstithesandofferingsComponent', () => {
  let component: GraphicstithesandofferingsComponent;
  let fixture: ComponentFixture<GraphicstithesandofferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicstithesandofferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicstithesandofferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
