import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  tableData: any;

  constructor(private router: Router, private mockApiService: MockApiService) {}

  ngOnInit(): void {
    this.loadData(); // Load data when component initializes
  }

  loadData() {
    this.mockApiService.read().subscribe(
      (data) => {
        this.tableData = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  editItem(id: number) {
    // Load item data from the API service and then navigate to the edit route
    this.mockApiService.getById(id.toString()).subscribe(
      (item) => {
        // Navigate to edit route with item data
        this.router.navigate(['/edit', id], { state: { item } });
      },
      (error) => {
        console.error('Error fetching item:', error);
      }
    );
  }
  deleteItem(id: number) {
    this.mockApiService.delete(id).subscribe(() => {
      // Reload data after deletion
      this.loadData();
    });
  }
}
