import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
  selector: 'app-card-expanded',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatDialogTitle,MatDialogContent,MatDialogActions],
  templateUrl: './card-expanded.html',
  styleUrl: './card-expanded.css',
  animations: [
    trigger('zoomIn', [
      state('void', style({ // 'void' state คือสถานะก่อนเข้า/หลังออก
        transform: 'scale(0.5)', // เริ่มต้นที่ขนาด 50%
        opacity: 0 // เริ่มต้นที่โปร่งใส
      })),
      transition('void => *', [ // เมื่อเข้าสู่ DOM
        animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({
          transform: 'scale(1)', // ขยายเป็น 100%
          opacity: 1 // ปรากฏขึ้น
        }))
      ]),
      transition('* => void', [ // เมื่อออกจาก DOM
        animate('200ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({
          transform: 'scale(0.5)', // หดกลับ
          opacity: 0 // จางหายไป
        }))
      ])
    ])
  ]
})
export class CardExpanded {
  
  constructor(
    public dialogRef:MatDialogRef<CardExpanded>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){}

  Onclose(): void {
    this.dialogRef.close();
  }
}
