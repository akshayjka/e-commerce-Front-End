import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagePreviews: string[] = [];  // Store previews of selected images
  selectedFiles: File[] = [];    // Store the selected files
  uploading: boolean = false;

  onFilesSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    this.imagePreviews = []; // Clear previous previews
    this.selectedFiles = [];

    if (files) {
      Array.from(files).forEach((file) => {
        this.selectedFiles.push(file);  // Add each file to selectedFiles array
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviews.push(reader.result as string); // Create preview for each image
        };
        reader.readAsDataURL(file);
      });
    }
  }

  uploadImages(): void {
    this.uploading = true;

    // Simulate image upload delay
    setTimeout(() => {
      this.uploading = false;
      alert('Images uploaded successfully!');
    }, 2000);
  }

  removeImage(index: number): void {
    this.imagePreviews.splice(index, 1);
    this.selectedFiles.splice(index, 1);
  }

  cancelImages() {
    this.selectedFiles.pop;
    this.imagePreviews = [];
  }
}
