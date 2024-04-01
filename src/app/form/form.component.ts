import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formData: any = {};
  editMode = false;
  itemId: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mockApiService: MockApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get('id');
      if (this.itemId) {
        this.editMode = true;
        this.loadItemData(this.itemId);
      }
    });
  }

  loadItemData(id: string): void {
    this.mockApiService.getById(id).subscribe(
      (data) => {
        this.formData = data;
      },
      (error) => {
        console.error('Error loading item data:', error);
      }
    );
  }

  onSubmitForm(): void {
    if (this.editMode) {
      this.mockApiService.update(this.formData).subscribe(() => {
        this.router.navigate(['/table']);
      });
    } else {
      this.mockApiService.create(this.formData).subscribe(() => {
        this.router.navigate(['/table']);
      });
    }
  }
}
