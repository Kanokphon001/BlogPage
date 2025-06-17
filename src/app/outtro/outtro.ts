import { Component, OnInit, OnDestroy, Inject } from '@angular/core'; // เพิ่ม OnInit, OnDestroy
import { CommonModule, DOCUMENT } from '@angular/common'; // เพิ่ม DOCUMENT
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-outtro',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './outtro.html', // ตรวจสอบชื่อไฟล์ outtro.html ของคุณ
  styleUrl: './outtro.css', // ตรวจสอบชื่อไฟล์ outtro.css ของคุณ
})
export class Outtro implements OnInit, OnDestroy { // เปลี่ยนชื่อคลาสเป็น OuttroComponent และ implements interfaces

  isExpanded: boolean = false;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  // *** เมธอด ngOnInit(): แก้ไขการสะกด ***
  ngOnInit(): void {
    // ไม่มี Logic เริ่มต้นพิเศษในที่นี้
  }

  // ฟังก์ชันสำหรับจัดการการ Scroll ของหน้า Body
  private toggleBodyScroll(): void {
    if (this.isExpanded) {
      this.document.body.style.overflow = 'hidden'; // ป้องกัน Scroll
    } else {
      this.document.body.style.overflow = 'auto';    // อนุญาตให้ Scroll
    }
  }

  // *** เมธอด toggleExpand(): แก้ไขการเรียก setTimeout และ stopPropagation ***
  toggleExpand(event?: Event): void {
    if (event) {
      event.stopPropagation(); // <-- ต้องเรียกเป็นฟังก์ชัน event.stopPropagation()
    }

    // แก้ไข: นำ setTimeout เข้ามาไว้ในเมธอด toggleExpand()
    void setTimeout(() => { // void ใช้เพื่อบอก TypeScript ว่าเราไม่สนใจค่าที่ return
      this.isExpanded = !this.isExpanded;
      this.toggleBodyScroll(); // <-- ต้องเรียกเป็นฟังก์ชัน this.toggleBodyScroll()
    }, 0);
  }

  goToContactPage(event: Event): void {
    event.stopPropagation(); // หยุด Event Propagation
    console.log('Navigating to contact page...');
    this.router.navigate(['/contact']);
  }

  ngOnDestroy(): void {
    // คืนค่า overflow ของ body เมื่อ Component ถูกทำลาย เพื่อไม่ให้หน้าเว็บค้าง
    if (this.document.body.style.overflow === 'hidden') {
      this.document.body.style.overflow = 'auto';
    }
  }
}