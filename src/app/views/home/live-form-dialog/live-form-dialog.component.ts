import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { format } from 'date-fns';

import { LiveService } from '../../../shared/services/live.service';
import { Live } from '../../../shared/models/live.model';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css'],
})
export class LiveFormDialogComponent implements OnInit {
  public liveForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private fb: FormBuilder,
    private liveService: LiveService
  ) {}

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      name: ['', [Validators.required]],
      channel: ['', [Validators.required]],
      url: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      disponible: ['', [Validators.required]],
    });

    this.liveForm.valueChanges.subscribe((data) => {
      if (data.date && data.time) {
        const selectedDate = new Date(data.date);
        const [hours, minutes] = data.time.split(':');

        selectedDate.setHours(hours, minutes);
        data.date = format(selectedDate, "yyyy-MM-dd'T'HH':'mm':'ssxxxxx");
      }

      if (data.disponible) {
        data.disponible = data.disponible === 'true' ? true : false;
      }
    });
  }

  public handleSaveLive(): void {
    const { name, channel, url, date, disponible } = this.liveForm.value;

    const newLive: Live = {
      id: Math.floor(Math.random() * 1001),
      name,
      channel,
      url,
      date,
      disponible,
    };

    this.liveService.createLive(newLive).subscribe((data) => {});

    this.dialogRef.close();
    this.liveForm.reset();
    window.location.reload();
  }

  public handleCloseDialog(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }
}
