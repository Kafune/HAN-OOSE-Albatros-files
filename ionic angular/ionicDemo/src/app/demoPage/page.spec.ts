import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { page } from './page';

describe('page', () => {
  let component: page;
  let fixture: ComponentFixture<page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
