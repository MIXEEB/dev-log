import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3LibraryCheckComponent } from './web3-library-check.component';

describe('Web3LibraryCheckComponent', () => {
  let component: Web3LibraryCheckComponent;
  let fixture: ComponentFixture<Web3LibraryCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Web3LibraryCheckComponent]
    });
    fixture = TestBed.createComponent(Web3LibraryCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
