/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UploadimgComponent } from './uploadimg.component';

describe('UploadimgComponent', () => {
  let component: UploadimgComponent;
  let fixture: ComponentFixture<UploadimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
