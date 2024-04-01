import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudDemoComponent implements OnInit {
  items: any[] = [];
  newItem: any = {};

  selectedItem: any = {};

  constructor(private mockApiService: MockApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.mockApiService.read().subscribe(
      (data: any[]) => {
        this.items = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createItem() {
    this.mockApiService.create(this.newItem).subscribe(
      (data: any) => {
        console.log('Item created:', data);
        this.fetchData();
        this.newItem = {}; // Reset newItem
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateItem() {
    this.mockApiService.update(this.selectedItem).subscribe(
      (data: any) => {
        console.log('Item updated:', data);
        this.fetchData();
        this.selectedItem = {}; // Reset selectedItem
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteItem(id: number) {
    this.mockApiService.delete(id).subscribe(
      () => {
        console.log('Item deleted');
        this.fetchData();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
