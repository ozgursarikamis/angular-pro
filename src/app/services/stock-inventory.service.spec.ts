import { TestBed } from '@angular/core/testing';
import { StockInventoryService } from "./stock-inventory.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

fdescribe('StockInventoryService', () => {

  let service: StockInventoryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockInventoryService],
      imports: [HttpClientTestingModule]
    });

    // we inject our service (which imports the HttpClient)
    // and the Test Controller
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StockInventoryService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
