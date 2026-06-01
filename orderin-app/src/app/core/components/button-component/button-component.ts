import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export enum ColorTypeEnum {
  DEFAULT = 'default',
  ORANGE = 'orange',
  BLACK = 'black'
};

@Component({
  selector: 'app-button-component',
  imports: [
    MatButtonModule,
    MatIconModule,
    NgClass
  ],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss',
})
export class ButtonComponent {
  readonly text = input.required<string>();
  readonly icon = input<string>();
  readonly colorType = input<ColorTypeEnum>(ColorTypeEnum.DEFAULT);
  readonly isActive = input<boolean>(false);

  readonly clicked = output<void>();

  handleClick(): void {
    return this.clicked.emit();
  }
}
