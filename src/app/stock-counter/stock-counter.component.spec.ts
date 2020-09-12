/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockCounterComponent } from './stock-counter.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

fdescribe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockCounterComponent
      ]
    });
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;

    component.value = 0;
  });


  it('should increment correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
  });

  it('should decrement correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not increment below the minimum value', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not increment above the maximum value', () => {
    for (let i = 0; i < 200; i++) {
      component.increment();
    }

    expect(component.value).toBe(100);
  });

  it('should not increment above the maximum value', () => {
    component.step = 20;
    component.max = 20;
    component.increment();
    component.increment();

    expect(component.value).toBe(20);
  });

});
