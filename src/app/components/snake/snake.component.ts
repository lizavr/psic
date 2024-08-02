import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-snake',
  standalone: true,
  imports: [],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss',
})
export class SnakeComponent {
  // snakePosition = { x: 0, y: 0 };
  // fillColor = 'rgb(0, 0, 0)';

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   this.snakePosition.x = event.clientX;
  //   this.snakePosition.y = event.clientY;
  //   this.changeColor();
  // }

  // changeColor() {
  //   const r = Math.floor(Math.random() * 256);
  //   const g = Math.floor(Math.random() * 256);
  //   const b = Math.floor(Math.random() * 256);
  //   this.fillColor = `rgb(${r}, ${g}, ${b})`;
  // }
  // ...........................................................
  // snakePosition = { x: 0, y: 0 };
  // fillColor = 'rgba(255, 0, 0, 0.5)';

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   this.snakePosition.x = event.clientX;
  //   this.snakePosition.y = event.clientY;
  // }
  // .........................................................
  //   constructor(private renderer: Renderer2) {}

  //   @HostListener('document:mousemove', ['$event'])
  //   onMouseMove(event: MouseEvent) {
  //     this.createTrail(event.clientX, event.clientY);
  //   }

  //   createTrail(x: number, y: number) {
  //     const trailElement = this.renderer.createElement('div');
  //     this.renderer.setStyle(trailElement, 'position', 'absolute');
  //     this.renderer.setStyle(trailElement, 'top', `${y}px`);
  //     this.renderer.setStyle(trailElement, 'left', `${x}px`);
  //     this.renderer.setStyle(trailElement, 'width', '10px');
  //     this.renderer.setStyle(trailElement, 'height', '10px');
  //     this.renderer.setStyle(trailElement, 'border-radius', '50%');
  //     this.renderer.setStyle(
  //       trailElement,
  //       'background-color',
  //       this.getRandomColor()
  //     );
  //     this.renderer.setStyle(trailElement, 'pointer-events', 'none');
  //     this.renderer.setStyle(trailElement, 'animation', 'fadeOut 1s forwards');

  //     document.body.appendChild(trailElement);

  //     setTimeout(() => {
  //       this.renderer.removeChild(document.body, trailElement);
  //     }, 1000);
  //   }

  //   getRandomColor(): string {
  //     const r = Math.floor(Math.random() * 256);
  //     const g = Math.floor(Math.random() * 256);
  //     const b = Math.floor(Math.random() * 256);
  //     return `rgb(${r}, ${g}, ${b})`;
  //   }
  // .............................................................
  constructor(private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.createTrail(event.clientX, event.clientY);
  }

  createTrail(x: number, y: number) {
    const trailElement = this.renderer.createElement('div');
    this.renderer.setStyle(trailElement, 'position', 'absolute');
    this.renderer.setStyle(trailElement, 'top', `${y}px`);
    this.renderer.setStyle(trailElement, 'left', `${x}px`);
    this.renderer.setStyle(trailElement, 'width', '50px');
    this.renderer.setStyle(trailElement, 'height', '10px');
    this.renderer.setStyle(
      trailElement,
      'background-color',
      this.getRandomColor()
    );
    this.renderer.setStyle(trailElement, 'border-radius', '20px');
    this.renderer.setStyle(trailElement, 'pointer-events', 'none');
    this.renderer.setStyle(trailElement, 'animation', 'fadeOut 5s forwards');

    document.body.appendChild(trailElement);

    setTimeout(() => {
      this.renderer.removeChild(document.body, trailElement);
    }, 2000);
  }

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  // .............................
  // lastX: number = 0;
  // lastY: number = 0;

  // constructor(private renderer: Renderer2, private el: ElementRef) {}

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   const lineElement = this.el.nativeElement.querySelector('.line');

  //   if (this.lastX && this.lastY) {
  //     const deltaX = event.clientX - this.lastX;
  //     const deltaY = event.clientY - this.lastY;
  //     const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  //     // Устанавливаем длину и угол поворота полосы
  //     this.renderer.setStyle(lineElement, 'width', `${distance}px`);
  //     const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  //     this.renderer.setStyle(lineElement, 'transform', `rotate(${angle}deg)`);

  //     // Обновляем позицию
  //     this.renderer.setStyle(lineElement, 'top', `${this.lastY}px`);
  //     this.renderer.setStyle(lineElement, 'left', `${this.lastX}px`);
  //   }

  //   // Обновляем последние координаты
  //   this.lastX = event.clientX;
  //   this.lastY = event.clientY;
  // }
}
