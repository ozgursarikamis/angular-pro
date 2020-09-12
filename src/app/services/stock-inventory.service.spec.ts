import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StockInventoryService } from "./stock-inventory.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Product } from '../models/product';

fdescribe('StockInventoryService', () => {

  let service: StockInventoryService;
  let httpMock: HttpTestingController;
  const mockProductList = [{ "id": "1", "price": "16.00", "name": "Goody" }, { "id": "2", "price": "742.00", "name": "Ergonomic Plastic Chair" }, { "id": "3", "price": "294.00", "name": "Fantastic Granite Shoes" }, { "id": "4", "price": "260.00", "name": "Small Rubber Chair" }, { "id": "5", "price": "740.00", "name": "Ergonomic Cotton Hat" }, { "id": "6", "price": "203.00", "name": "Unbranded Wooden Chair" }, { "id": "7", "price": "673.00", "name": "Generic Wooden Soap" }, { "id": "8", "price": "376.00", "name": "Intelligent Frozen Mouse" }, { "id": "9", "price": "425.00", "name": "Practical Fresh Salad" }, { "id": "10", "price": "70.00", "name": "Practical Plastic Car" }, { "id": "11", "price": "846.00", "name": "Fantastic Cotton Car" }, { "id": "12", "price": "747.00", "name": "Rustic Soft Sausages" }, { "id": "13", "price": "15.00", "name": "Gorgeous Metal Soap" }, { "id": "14", "price": "64.00", "name": "Rustic Steel Mouse" }, { "id": "15", "price": "495.00", "name": "Licensed Concrete Salad" }, { "id": "16", "price": "800.00", "name": "Incredible Metal Car" }, { "id": "17", "price": "826.00", "name": "Refined Fresh Bacon" }, { "id": "18", "price": "925.00", "name": "Gorgeous Rubber Sausages" }, { "id": "19", "price": "966.00", "name": "Fantastic Rubber Chips" }, { "id": "20", "price": "198.00", "name": "Incredible Cotton Fish" }];
  const url = 'https://5f51071d5e98480016123523.mockapi.io';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockInventoryService],
      imports: [HttpClientTestingModule]
    });

    // we inject our service (which imports the HttpClient)
    // and the Test Controller
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StockInventoryService);
  });

  it('should list products data', () => {
    service.getProducts().subscribe(list => {
      expect(list).not.toBe(null);
      expect(list).toEqual(mockProductList);
    });

    const req = httpMock.expectOne(`${url}/products`);
    expect(req.request.method).toBe('GET');
    // Note That we are flushing dummy "http" response
    req.flush(mockProductList);
  });

  it('should fetch single product', () => {
    const dummyProduct: Product = { "id": "1", "price": "16.00", "name": "Goody" };
    service.getProduct(1).subscribe(product => {
      expect(dummyProduct).toBeTruthy();
      expect(dummyProduct.name).toBe(product.name);
      expect(dummyProduct.id).toBe(product.id);
      expect(dummyProduct.price).toBe(product.price);
    });

    const req = httpMock.expectOne(`${url}/products/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProduct);
  });

  afterEach(() => {
    // we add afterEach(), a method in which we run http.verify() and test our
    // assertion mock like http, basically it ensures that no request is outstanding.
    httpMock.verify();
  });
});
