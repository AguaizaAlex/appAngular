import { Component } from '@angular/core';
import { TareaServicioService } from '../tarea-servicio.service';
import { Tarea } from '../modelos/Tarea';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  constructor(public tareaServicio: TareaServicioService,private toastr: ToastrService) {

  }
  ngOnInit(): void {

  }

  eliminarTarea(id: number): void {
    this.tareaServicio.eliminarTarea(id).subscribe(
      () => {
        console.log('Tarea eliminada con éxito');
        this.tareaServicio.cargarTareas()
        this.toastr.success('Tarea eliminada con éxito', 'Éxito');
      },
      (error) => {
        this.toastr.error('No se pudo eliminar la tarea', 'Error');
      }
    );
  }

}
