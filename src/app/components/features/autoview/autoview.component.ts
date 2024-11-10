import { Component, EventEmitter, Output } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-autoview',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './autoview.component.html',
  styleUrl: './autoview.component.scss'
})
export class AutoviewComponent {
  fileName: string;
  fileError: string;
  @Output() fileUploaded = new EventEmitter<File>();
  showSpinner = false;
  showStep2 = false;
  videoSubmited = false;

  constructor() {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;


    if (input.files && input.files[0]) {
      this.showSpinner = true;
      const file = input.files[0];

      this.fileName = file.name;
      this.fileError = null;
      this.fileUploaded.emit(file); // Emit the file to parent component
      setTimeout(() => {
        this.showSpinner = false;
        this.showStep2 = true;
      }, 1300);
    }
  }

  clearFile() {
    this.fileName = null;
    this.fileError = null;
    this.fileUploaded.emit(null as any); // Clear file selection in parent component
  }

  videoFile: File | null = null;
  videoUrl: string | null = null;
  videoFileError: string | null = null;

  onVideoFile(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Check if the file is a video
      if (!file.type.startsWith('video/')) {
        this.fileError = 'Only video files are allowed';
        this.videoFile = null;
        this.videoUrl = null;
        return;
      }

      // Clear any previous errors and set the selected file
      this.fileError = null;
      this.videoFile = file;
      this.videoUrl = URL.createObjectURL(file); // Generate a URL to play the video
    }
  }

  clearVideo() {
    this.videoFile = null;
    this.videoUrl = null;
    this.fileError = null;
  }

  sendVideo() {
    this.videoSubmited = true;
  }
}
