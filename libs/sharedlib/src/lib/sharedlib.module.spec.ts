import { async, TestBed } from '@angular/core/testing';
import { SharedlibModule } from './sharedlib.module';

describe('SharedlibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedlibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedlibModule).toBeDefined();
  });
});
